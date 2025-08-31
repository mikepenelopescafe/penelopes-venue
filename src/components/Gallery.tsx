import React, { useState, useEffect, useCallback } from 'react';
import { Badge } from '@/components/ui/badge';

export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
  title: string;
  description: string;
}

export interface Props {
  images: GalleryImage[];
}

const Gallery: React.FC<Props> = ({ images }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Filter images based on active filter
  const filteredImages = activeFilter === 'all'
    ? images
    : images.filter(image => image.category === activeFilter);

  // Get current image for lightbox
  const currentImage = filteredImages[currentImageIndex];

  // Handle filter change
  const handleFilterChange = useCallback((filter: string) => {
    setActiveFilter(filter);
    setCurrentImageIndex(0); // Reset to first image when filter changes
  }, []);

  // Handle image click to open lightbox
  const handleImageClick = useCallback((index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  }, []);

  // Close lightbox
  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  // Navigate lightbox
  const navigateLightbox = useCallback((direction: number) => {
    const newIndex = (currentImageIndex + direction + filteredImages.length) % filteredImages.length;
    setCurrentImageIndex(newIndex);
  }, [currentImageIndex, filteredImages.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;

      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          navigateLightbox(-1);
          break;
        case 'ArrowRight':
          navigateLightbox(1);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, closeLightbox, navigateLightbox]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxOpen]);

  return (
    <>
      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Photo Gallery</Badge>
            <h2 className="text-4xl font-display text-foreground mb-4">
              Explore Our Beautiful Venue
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From our charming Spanish-inspired exterior to our elegantly appointed reception spaces,
              discover what makes Penelope's Venue the perfect setting for your special celebration.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              className={`filter-btn px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeFilter === 'all' ? 'active btn-primary' : 'btn-outline'
              }`}
              onClick={() => handleFilterChange('all')}
            >
              All Photos
            </button>
            <button
              className={`filter-btn px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeFilter === 'Exterior' ? 'active btn-primary' : 'btn-outline'
              }`}
              onClick={() => handleFilterChange('Exterior')}
            >
              Exterior
            </button>
            <button
              className={`filter-btn px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeFilter === 'Reception Area' ? 'active btn-primary' : 'btn-outline'
              }`}
              onClick={() => handleFilterChange('Reception Area')}
            >
              Reception Area
            </button>
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid">
            {filteredImages.map((image, index) => (
              <div
                key={`${image.src}-${index}`}
                className={`gallery-item animate-in group relative overflow-hidden rounded-xl bg-card hover-lift transition-all duration-500 cursor-pointer ${
                  image.category === 'Exterior' ? 'exterior' : 'reception-area'
                }`}
                onClick={() => handleImageClick(index)}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Gallery Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading={index < 6 ? "eager" : "lazy"}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold">{image.title}</h3>
                      <Badge className="bg-primary/20 text-primary border-primary/30 text-xs">
                        {image.category}
                      </Badge>
                    </div>
                    <p className="text-sm text-white/90 leading-relaxed">
                      {image.description}
                    </p>
                  </div>
                </div>

                {/* Click Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-card/50 rounded-2xl p-8 border border-primary/10 max-w-2xl mx-auto">
              <h3 className="text-2xl font-display text-foreground mb-4">
                Ready to Create Your Perfect Event?
              </h3>
              <p className="text-muted-foreground mb-6">
                Experience the magic of Penelope's Venue firsthand. Contact us today to discuss your special occasion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="btn-primary">
                  Plan Your Event
                </a>
                <a href="/services" className="btn-outline">
                  View Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && currentImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-all duration-300 hover:scale-110"
            onClick={closeLightbox}
            aria-label="Close gallery"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          {/* Navigation Buttons */}
          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-all duration-300 hover:scale-110"
            onClick={() => navigateLightbox(-1)}
            aria-label="Previous image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>

          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-all duration-300 hover:scale-110"
            onClick={() => navigateLightbox(1)}
            aria-label="Next image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>

          {/* Main Image Container */}
          <div className="relative max-w-5xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm rounded-b-lg p-6 text-white">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold">{currentImage.title}</h3>
                <Badge className="bg-primary/20 text-primary border-primary/30">
                  {currentImage.category}
                </Badge>
              </div>
              <p className="text-white/90">{currentImage.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Add CSS styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .gallery-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 1.5rem;
            margin-bottom: 2rem;
          }

          .filter-btn {
            position: relative;
            overflow: hidden;
          }

          .filter-btn::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            transition: width 0.6s, height 0.6s;
          }

          .filter-btn:hover::before {
            width: 300px;
            height: 300px;
          }

          .gallery-item {
            transform: translateY(0);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .gallery-item:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          }

          @media (max-width: 768px) {
            .gallery-grid {
              grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
              gap: 1rem;
            }
          }

          @media (max-width: 480px) {
            .gallery-grid {
              grid-template-columns: 1fr;
            }
          }

          .animate-in {
            animation: fadeInUp 0.6s ease-out forwards;
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `
      }} />
    </>
  );
};

export default Gallery;
