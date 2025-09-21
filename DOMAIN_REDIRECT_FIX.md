# Domain Redirect Issue - Fix Required in Vercel Dashboard

## Current Problem
Your site has a domain configuration mismatch causing Google Search Console errors:

### What's Happening Now:
1. `http://penelopesboutiquevenue.com/` → redirects to → `https://penelopesboutiquevenue.com/`
2. `https://penelopesboutiquevenue.com/` → redirects to → `https://www.penelopesboutiquevenue.com/`

### Why This Is a Problem:
- **Your code expects:** `https://penelopesboutiquevenue.com` (NO www)
- **Vercel is redirecting to:** `https://www.penelopesboutiquevenue.com` (WITH www)
- **Result:** All your canonical tags point to URLs that redirect elsewhere

## The Fix: Update Vercel Domain Settings

### Step 1: Log into Vercel Dashboard
1. Go to https://vercel.com/dashboard
2. Select your `penelopes-venue` project

### Step 2: Navigate to Domain Settings
1. Click on "Settings" tab
2. Click on "Domains" in the left sidebar

### Step 3: Check Current Configuration
You likely have:
- `www.penelopesboutiquevenue.com` set as PRIMARY domain
- `penelopesboutiquevenue.com` redirecting to www version

### Step 4: Switch the Primary Domain
You need to change it to:
- `penelopesboutiquevenue.com` as PRIMARY domain (no www)
- `www.penelopesboutiquevenue.com` redirecting to non-www version

### How to Make the Switch:
1. In the Domains section, find both domain entries
2. Click the three dots (⋮) next to `penelopesboutiquevenue.com`
3. Select "Set as Primary Domain"
4. Confirm the change

### Step 5: Verify the DNS Records
Ensure both domains have proper DNS records:
- `penelopesboutiquevenue.com` → A record pointing to Vercel
- `www.penelopesboutiquevenue.com` → CNAME record pointing to `cname.vercel-dns.com`

## After Making the Change

### Expected Behavior:
- `http://penelopesboutiquevenue.com/` → `https://penelopesboutiquevenue.com/` ✅
- `http://www.penelopesboutiquevenue.com/` → `https://penelopesboutiquevenue.com/` ✅
- `https://www.penelopesboutiquevenue.com/` → `https://penelopesboutiquevenue.com/` ✅
- `https://penelopesboutiquevenue.com/` → No redirect, serves content ✅

### Testing the Fix:
After making the change in Vercel, test with:
```bash
# Should return 200 OK (no redirect)
curl -I https://penelopesboutiquevenue.com/

# Should redirect to non-www
curl -I https://www.penelopesboutiquevenue.com/
```

## Why This Matters for SEO

1. **Canonical Consistency**: Your canonical tags will point to the actual final URL
2. **Link Equity**: All backlinks will consolidate to one domain version
3. **Crawl Efficiency**: Google won't waste time following redirect chains
4. **Search Console**: The "Page with redirect" errors will resolve

## Timeline
- **Immediate**: Change takes effect on Vercel (may take 5-10 minutes to propagate)
- **24-48 hours**: DNS changes fully propagate globally
- **1-2 weeks**: Google re-crawls and validates the fix
- **2-4 weeks**: Search Console shows the errors as resolved

## Alternative Solution (Not Recommended)
If you absolutely must keep www as primary, you would need to:
1. Update `astro.config.mjs` to use `https://www.penelopesboutiquevenue.com`
2. Update all canonical URLs in 29+ content files
3. Rebuild and redeploy the site

This is much more work and not recommended since non-www is cleaner and already configured in your code.

## Current Code Configuration
Your code is already correctly configured for non-www:

### astro.config.mjs
```javascript
site: 'https://penelopesboutiquevenue.com'  // Correct - no www
```

### All Content Files
```yaml
canonical: "https://penelopesboutiquevenue.com/..."  // Correct - no www
```

## Next Steps
1. ✅ Log into Vercel Dashboard
2. ✅ Set `penelopesboutiquevenue.com` as primary domain
3. ✅ Wait 10 minutes for changes to propagate
4. ✅ Test with curl commands above
5. ✅ Monitor Google Search Console for validation



