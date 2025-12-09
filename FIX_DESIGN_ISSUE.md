# Fixing Design Issues After Deployment

If your design is broken after deployment, it's likely because CSS/JS assets aren't loading correctly. Here's how to fix it:

## Common Causes

1. **BasePath still being used** - Assets are looking for `/visible-home-inspections/_next/` instead of `/_next/`
2. **CUSTOM_DOMAIN secret not set correctly** - The build is still using basePath
3. **DNS/Cache issues** - Browser cache showing old version

## Step-by-Step Fix

### Step 1: Verify GitHub Secret

1. Go to your GitHub repository: `https://github.com/gits5213/visible-home-inspections`
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Verify `CUSTOM_DOMAIN` secret exists and has value: `true` (not `"true"` or `True`)

### Step 2: Check Build Logs

1. Go to **Actions** tab
2. Click on the latest workflow run
3. Expand **Debug environment variables** step
4. Verify it shows:
   ```
   CUSTOM_DOMAIN secret value: true
   CUSTOM_DOMAIN env will be: true
   ```

### Step 3: Verify Build Output

In the build logs, check the **Verify build output** step:
- Look for `_next/` directory
- Check `index.html` - asset paths should NOT start with `/visible-home-inspections/`
- Asset paths should be like: `/_next/static/...` (not `/visible-home-inspections/_next/static/...`)

### Step 4: Trigger New Deployment

**Option A: Manual Trigger (Recommended)**
1. Go to **Actions** tab
2. Click **Deploy to GitHub Pages** workflow
3. Click **Run workflow** → **Run workflow**

**Option B: Push a Commit**
```bash
git add .
git commit -m "Fix: Rebuild without basePath for custom domain"
git push origin main
```

### Step 5: Clear Browser Cache

After deployment:
1. **Hard refresh**: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
2. **Or clear cache**: Browser settings → Clear browsing data → Cached images and files
3. **Or use incognito/private mode** to test

### Step 6: Verify Assets Load

1. Open your site: `https://visiblehomeinspections.com`
2. Open browser DevTools (F12)
3. Go to **Network** tab
4. Reload the page
5. Check for failed requests (red entries)
6. Look for CSS/JS files:
   - Should load from: `/_next/static/...`
   - Should NOT load from: `/visible-home-inspections/_next/static/...`

## Troubleshooting

### Issue: Assets Still Loading from BasePath

**Symptoms:** Browser console shows 404 errors for `/_next/static/...` or `/visible-home-inspections/_next/static/...`

**Solution:**
1. Verify `CUSTOM_DOMAIN=true` secret is set correctly
2. Check build logs to confirm secret was used
3. Verify `next.config.ts` logic is correct (should NOT set basePath when `CUSTOM_DOMAIN=true`)
4. Trigger a new deployment

### Issue: CSS Not Loading

**Symptoms:** Site has no styling, looks like plain HTML

**Solution:**
1. Check Network tab for CSS file requests
2. Verify CSS files exist in `out/_next/static/css/`
3. Check if CSS files are being blocked (CORS, CSP headers)
4. Verify asset paths in HTML don't include basePath

### Issue: JavaScript Not Loading

**Symptoms:** Interactive features don't work, console errors

**Solution:**
1. Check Network tab for JS file requests
2. Verify JS files exist in `out/_next/static/chunks/`
3. Check browser console for specific errors
4. Verify asset paths in HTML don't include basePath

### Issue: Images Not Loading

**Symptoms:** Images show broken icon or don't appear

**Solution:**
1. Check Network tab for image requests
2. Verify images exist in `out/images/`
3. Check `getImagePath()` function is working correctly
4. Verify image paths don't include basePath when using custom domain

## Verification Checklist

After fixing, verify:

- [ ] `CUSTOM_DOMAIN=true` secret is set in GitHub
- [ ] Build logs show `CUSTOM_DOMAIN env will be: true`
- [ ] `index.html` has asset paths like `/_next/static/...` (not `/visible-home-inspections/_next/static/...`)
- [ ] Browser Network tab shows assets loading successfully
- [ ] No 404 errors in browser console
- [ ] CSS styling appears correctly
- [ ] JavaScript functionality works
- [ ] Images load properly

## Quick Test

Open browser console and run:
```javascript
// Check if basePath is being used incorrectly
console.log('Current pathname:', window.location.pathname);
console.log('Asset paths in HTML:', document.querySelectorAll('link[href*="_next"], script[src*="_next"]'));
```

If you see `/visible-home-inspections/_next/` in the paths, the basePath is still being used.

## Still Not Working?

1. **Check GitHub Actions logs** for build errors
2. **Verify secret value** is exactly `true` (lowercase, no quotes)
3. **Check next.config.ts** - basePath should NOT be set when `CUSTOM_DOMAIN=true`
4. **Try rebuilding locally**:
   ```bash
   CUSTOM_DOMAIN=true GITHUB_PAGES=true npm run build
   ```
   Then check `out/index.html` for asset paths

## Expected Behavior

**With Custom Domain (`CUSTOM_DOMAIN=true`):**
- Asset paths: `/_next/static/css/...`
- Image paths: `/images/...`
- No basePath prepended

**Without Custom Domain (GitHub Pages subdomain):**
- Asset paths: `/visible-home-inspections/_next/static/css/...`
- Image paths: `/visible-home-inspections/images/...`
- BasePath prepended

