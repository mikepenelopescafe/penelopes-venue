import { getCollection, getEntry } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

// Cache for content collections to avoid repeated fetches
const contentCache = new Map<string, any>();

// Cache TTL in milliseconds (5 minutes)
const CACHE_TTL = 5 * 60 * 1000;

/**
 * Optimized content querying utilities with caching
 */
export class ContentUtils {
  /**
   * Get cached collection with automatic invalidation
   */
  static async getCachedCollection<T extends keyof typeof import('astro:content').collections>(
    collection: T,
    options?: { bypassCache?: boolean; sortBy?: keyof CollectionEntry<T>['data']; sortOrder?: 'asc' | 'desc' }
  ): Promise<CollectionEntry<T>[]> {
    const cacheKey = `collection-${collection}`;
    const cached = contentCache.get(cacheKey);

    // Return cached data if valid and not bypassing cache
    if (!options?.bypassCache && cached && (Date.now() - cached.timestamp) < CACHE_TTL) {
      return cached.data;
    }

    try {
      const data = await getCollection(collection);

      // Sort if requested
      let sortedData = data;
      if (options?.sortBy) {
        sortedData = [...data].sort((a, b) => {
          const aVal = a.data[options.sortBy as keyof typeof a.data];
          const bVal = b.data[options.sortBy as keyof typeof b.data];

          if (aVal < bVal) return options.sortOrder === 'desc' ? 1 : -1;
          if (aVal > bVal) return options.sortOrder === 'desc' ? -1 : 1;
          return 0;
        });
      }

      // Cache the result
      contentCache.set(cacheKey, {
        data: sortedData,
        timestamp: Date.now()
      });

      return sortedData;
    } catch (error) {
      console.error(`Error fetching collection ${collection}:`, error);
      throw new Error(`Failed to fetch ${collection} collection`);
    }
  }

  /**
   * Get featured items from a collection
   */
  static async getFeaturedItems<T extends keyof typeof import('astro:content').collections>(
    collection: T,
    limit?: number
  ): Promise<CollectionEntry<T>[]> {
    const items = await this.getCachedCollection(collection);
    const featured = items.filter(item => item.data.featured);

    return limit ? featured.slice(0, limit) : featured;
  }

  /**
   * Get items by category/tag
   */
  static async getItemsByCategory<T extends keyof typeof import('astro:content').collections>(
    collection: T,
    category: string,
    options?: { limit?: number; sortBy?: keyof CollectionEntry<T>['data'] }
  ): Promise<CollectionEntry<T>[]> {
    const items = await this.getCachedCollection(collection);
    let filtered = items.filter(item => {
      const itemData = item.data as any;
      return itemData.category === category ||
             (itemData.categories && itemData.categories.includes(category)) ||
             (itemData.tags && itemData.tags.includes(category));
    });

    // Sort if requested
    if (options?.sortBy) {
      filtered = filtered.sort((a, b) => {
        const aVal = a.data[options.sortBy as keyof typeof a.data];
        const bVal = b.data[options.sortBy as keyof typeof b.data];

        if (aVal < bVal) return -1;
        if (aVal > bVal) return 1;
        return 0;
      });
    }

    return options?.limit ? filtered.slice(0, options.limit) : filtered;
  }

  /**
   * Get paginated collection
   */
  static async getPaginatedCollection<T extends keyof typeof import('astro:content').collections>(
    collection: T,
    options: {
      page: number;
      limit: number;
      sortBy?: keyof CollectionEntry<T>['data'];
      sortOrder?: 'asc' | 'desc';
      filter?: (item: CollectionEntry<T>) => boolean;
    }
  ): Promise<{
    items: CollectionEntry<T>[];
    total: number;
    page: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  }> {
    let items = await this.getCachedCollection(collection, {
      sortBy: options.sortBy,
      sortOrder: options.sortOrder
    });

    // Apply filter if provided
    if (options.filter) {
      items = items.filter(options.filter);
    }

    const total = items.length;
    const totalPages = Math.ceil(total / options.limit);
    const startIndex = (options.page - 1) * options.limit;
    const endIndex = startIndex + options.limit;

    return {
      items: items.slice(startIndex, endIndex),
      total,
      page: options.page,
      totalPages,
      hasNext: options.page < totalPages,
      hasPrev: options.page > 1
    };
  }

  /**
   * Search collection by text
   */
  static async searchCollection<T extends keyof typeof import('astro:content').collections>(
    collection: T,
    query: string,
    fields: (keyof CollectionEntry<T>['data'])[] = ['title' as keyof CollectionEntry<T>['data']]
  ): Promise<CollectionEntry<T>[]> {
    const items = await this.getCachedCollection(collection);
    const searchTerm = query.toLowerCase().trim();

    if (!searchTerm) return items;

    return items.filter(item => {
      return fields.some(field => {
        const value = item.data[field];
        return typeof value === 'string' &&
               value.toLowerCase().includes(searchTerm);
      });
    });
  }

  /**
   * Get related items based on tags/categories
   */
  static async getRelatedItems<T extends keyof typeof import('astro:content').collections>(
    collection: T,
    currentItem: CollectionEntry<T>,
    limit: number = 3
  ): Promise<CollectionEntry<T>[]> {
    const items = await this.getCachedCollection(collection);
    const currentData = currentItem.data as any;

    // Get tags/categories from current item
    const tags = currentData.tags || currentData.categories || [];
    const category = currentData.category;

    const related = items
      .filter(item => item.id !== currentItem.id) // Exclude current item
      .map(item => {
        const itemData = item.data as any;
        let score = 0;

        // Category match gets highest score
        if (itemData.category === category) score += 10;

        // Tag matches get points
        if (itemData.tags && tags.length > 0) {
          const matchingTags = itemData.tags.filter((tag: string) => tags.includes(tag));
          score += matchingTags.length * 2;
        }

        return { item, score };
      })
      .filter(({ score }) => score > 0) // Only include items with some relation
      .sort((a, b) => b.score - a.score) // Sort by relevance
      .slice(0, limit)
      .map(({ item }) => item);

    return related;
  }

  /**
   * Clear content cache (useful for development or forced refresh)
   */
  static clearCache(): void {
    contentCache.clear();
  }

  /**
   * Get cache statistics
   */
  static getCacheStats(): { size: number; keys: string[] } {
    return {
      size: contentCache.size,
      keys: Array.from(contentCache.keys())
    };
  }
}

/**
 * Preload commonly used collections for better performance
 */
export async function preloadCommonCollections(): Promise<void> {
  const collections = ['blog', 'service-areas', 'pages'] as const;

  await Promise.all(
    collections.map(collection =>
      ContentUtils.getCachedCollection(collection).catch(error => {
        console.warn(`Failed to preload ${collection}:`, error);
      })
    )
  );
}

/**
 * Comprehensive error handling utilities for content collections
 */
export class ContentError extends Error {
  constructor(
    message: string,
    public collection: string,
    public operation: string,
    public originalError?: unknown
  ) {
    super(message);
    this.name = 'ContentError';
  }
}

export class ContentValidationError extends ContentError {
  constructor(
    message: string,
    collection: string,
    public invalidFields: string[],
    originalError?: unknown
  ) {
    super(message, collection, 'validation', originalError);
    this.name = 'ContentValidationError';
  }
}

export class ContentNotFoundError extends ContentError {
  constructor(collection: string, id: string) {
    super(`Entry not found: ${collection}/${id}`, collection, 'fetch');
    this.name = 'ContentNotFoundError';
  }
}

/**
 * Enhanced error handling wrapper for content operations
 */
export class ContentErrorHandler {
  static wrapOperation<T>(
    operation: () => Promise<T>,
    context: { collection: string; operation: string; id?: string }
  ): Promise<T> {
    return operation().catch(error => {
      if (error instanceof ContentError) {
        throw error;
      }

      // Handle Zod validation errors
      if (error.name === 'ZodError') {
        const invalidFields = error.errors?.map((e: any) => e.path?.join('.')) || [];
        throw new ContentValidationError(
          `Validation failed for ${context.collection}: ${error.message}`,
          context.collection,
          invalidFields,
          error
        );
      }

      // Handle collection not found errors
      if (error.message?.includes('not found') || error.message?.includes('does not exist')) {
        throw new ContentNotFoundError(context.collection, context.id || 'unknown');
      }

      // Generic content error
      throw new ContentError(
        `Failed to ${context.operation} ${context.collection}${context.id ? `/${context.id}` : ''}`,
        context.collection,
        context.operation,
        error
      );
    });
  }

  static logError(error: ContentError): void {
    const logLevel = this.getLogLevel(error);
    const logData = {
      name: error.name,
      message: error.message,
      collection: error.collection,
      operation: error.operation,
      timestamp: new Date().toISOString(),
      ...(error instanceof ContentValidationError && {
        invalidFields: error.invalidFields
      }),
      ...(error.originalError && {
        originalError: error.originalError instanceof Error
          ? error.originalError.message
          : String(error.originalError)
      })
    };

    console[logLevel](`[${error.name}]`, logData);
  }

  private static getLogLevel(error: ContentError): 'error' | 'warn' | 'info' {
    if (error instanceof ContentNotFoundError) return 'warn';
    if (error instanceof ContentValidationError) return 'info';
    return 'error';
  }
}

/**
 * Utility for safe content fetching with comprehensive error handling
 */
export async function safeGetEntry<T extends keyof typeof import('astro:content').collections>(
  collection: T,
  id: string
): Promise<{ entry: CollectionEntry<T> | null; error: ContentError | null }> {
  return ContentErrorHandler.wrapOperation(
    async () => {
      const entry = await getEntry(collection, id);
      return { entry, error: null };
    },
    { collection, operation: 'getEntry', id }
  ).catch(error => {
    ContentErrorHandler.logError(error);
    return { entry: null, error };
  });
}

/**
 * Safe collection fetching with error handling
 */
export async function safeGetCollection<T extends keyof typeof import('astro:content').collections>(
  collection: T
): Promise<{ data: CollectionEntry<T>[] | null; error: ContentError | null }> {
  return ContentErrorHandler.wrapOperation(
    async () => {
      const data = await getCollection(collection);
      return { data, error: null };
    },
    { collection, operation: 'getCollection' }
  ).catch(error => {
    ContentErrorHandler.logError(error);
    return { data: null, error };
  });
}

/**
 * Retry utility for content operations
 */
export async function retryContentOperation<T>(
  operation: () => Promise<T>,
  options: {
    maxRetries?: number;
    delay?: number;
    backoff?: number;
    retryCondition?: (error: any) => boolean;
  } = {}
): Promise<T> {
  const {
    maxRetries = 3,
    delay = 1000,
    backoff = 2,
    retryCondition = (error) => error.name === 'ContentError' || error.message?.includes('timeout')
  } = options;

  let lastError: any;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await operation();
    } catch (error) {
      lastError = error;

      if (attempt === maxRetries || !retryCondition(error)) {
        throw error;
      }

      const waitTime = delay * Math.pow(backoff, attempt);
      console.warn(`Content operation failed, retrying in ${waitTime}ms... (attempt ${attempt + 1}/${maxRetries + 1})`);
      await new Promise(resolve => setTimeout(resolve, waitTime));
    }
  }

  throw lastError;
}

/**
 * Content operation with fallback
 */
export async function withFallback<T>(
  primary: () => Promise<T>,
  fallback: () => Promise<T>,
  context: { collection: string; operation: string }
): Promise<T> {
  try {
    return await primary();
  } catch (error) {
    console.warn(`Primary ${context.operation} failed for ${context.collection}, using fallback:`, error);
    try {
      return await fallback();
    } catch (fallbackError) {
      throw new ContentError(
        `Both primary and fallback operations failed for ${context.collection}`,
        context.collection,
        context.operation,
        { primary: error, fallback: fallbackError }
      );
    }
  }
}

/**
 * Content health check utility
 */
export async function checkContentHealth(): Promise<{
  status: 'healthy' | 'degraded' | 'unhealthy';
  collections: Record<string, { status: 'ok' | 'error'; error?: string }>;
  cacheStats: { size: number; keys: string[] };
}> {
  const collections = ['blog', 'service-areas', 'pages', 'services', 'testimonialsFile', 'venueStats'] as const;
  const results: Record<string, { status: 'ok' | 'error'; error?: string }> = {};

  let errorCount = 0;

  for (const collection of collections) {
    try {
      await getCollection(collection);
      results[collection] = { status: 'ok' };
    } catch (error) {
      results[collection] = {
        status: 'error',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
      errorCount++;
    }
  }

  const status = errorCount === 0 ? 'healthy' :
                 errorCount < collections.length / 2 ? 'degraded' : 'unhealthy';

  return {
    status,
    collections: results,
    cacheStats: ContentUtils.getCacheStats()
  };
}
