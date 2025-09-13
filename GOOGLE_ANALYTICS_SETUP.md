# Google Analytics Setup

## Overview
Google Analytics has been configured to ONLY track production deployments. Development and preview environments will NOT send data to Google Analytics.

## How It Works

### Environment Detection
The system automatically detects the environment using:
- `import.meta.env.PROD` - Astro's built-in production flag
- `import.meta.env.VERCEL_ENV` - Vercel's environment variable (when deployed)

### Current Configuration
- **Google Analytics ID**: `G-FJ5ECQE84Q`
- **Location**: `/src/layouts/Layout.astro`
- **Production URL**: https://penelopesboutiquevenue.com

## Environment Behavior

| Environment | Google Analytics | Console Message |
|------------|-----------------|-----------------|
| Local Development (`npm run dev`) | ❌ Disabled | "🔍 Google Analytics: DISABLED (Development Mode)" |
| Local Build (`npm run build && npm run preview`) | ✅ Enabled | "📊 Google Analytics: ENABLED (Production Mode)" |
| Vercel Preview Deployments | ❌ Disabled | "🔍 Google Analytics: DISABLED (Development Mode)" |
| Vercel Production | ✅ Enabled | "📊 Google Analytics: ENABLED (Production Mode)" |

## Testing

### To verify GA is disabled in development:
1. Run `npm run dev`
2. Open browser DevTools Console
3. You should see: "🔍 Google Analytics: DISABLED (Development Mode)"
4. Check Network tab - no requests to googletagmanager.com

### To verify GA is enabled in production:
1. Visit the production site: https://penelopesboutiquevenue.com
2. Open browser DevTools Console  
3. You should see: "📊 Google Analytics: ENABLED (Production Mode) G-FJ5ECQE84Q"
4. Check Network tab - you'll see requests to googletagmanager.com

## Configuration Options

### Using Environment Variables (Optional)
You can override the Google Analytics ID using environment variables:

```bash
# .env.local (for local testing)
PUBLIC_GA_MEASUREMENT_ID=G-YOUR-TEST-ID

# Vercel Dashboard (for production)
PUBLIC_GA_MEASUREMENT_ID=G-FJ5ECQE84Q
```

### Forcing GA in Development (NOT Recommended)
If you absolutely need to test GA locally, you can temporarily modify the check in `/src/layouts/Layout.astro`:

```javascript
// TEMPORARY - Remove before committing!
const isProduction = true; // Force GA for testing
```

**⚠️ WARNING**: Never commit this change! It will cause development data to pollute your production analytics.

## Troubleshooting

### GA still showing development traffic?
1. Clear your browser cache
2. Check for any browser extensions that might be injecting GA
3. Verify no hardcoded GA scripts exist elsewhere in the codebase
4. Check Google Analytics Real-Time reports to identify the source

### GA not working in production?
1. Check the browser console for the "ENABLED" message
2. Verify the GA ID is correct: `G-FJ5ECQE84Q`
3. Check Network tab for blocked requests (ad blockers)
4. Verify the domain in GA property settings matches production URL

## Security Notes
- The GA Measurement ID is public (visible in browser source)
- No sensitive data should be tracked in GA events
- User privacy should be respected per GDPR/CCPA requirements

## Related Files
- `/src/layouts/Layout.astro` - Main implementation
- `.env.example` - Example environment variables
- `.gitignore` - Ensures .env files aren't committed
