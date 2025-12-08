# Deployment Verification Checklist

Use this checklist to verify your site is deployed correctly on GitHub Pages.

## Pre-Deployment Checklist

- [ ] Site builds successfully: `npm run build`
- [ ] `out/` directory contains all files
- [ ] `404.html` file exists in `out/` directory
- [ ] `index.html` exists in `out/` directory
- [ ] GitHub Secrets are configured (`RESEND_API_KEY`)

## GitHub Pages Setup Checklist

- [ ] GitHub repository exists
- [ ] GitHub Pages enabled in repository settings
- [ ] Source set to "GitHub Actions" in Pages settings
- [ ] GitHub Actions workflow file exists (`.github/workflows/deploy-github-pages.yml`)
- [ ] Repository secrets configured:
  - [ ] `RESEND_API_KEY` secret added
- [ ] Initial deployment successful

## Custom Domain Setup (Optional)

- [ ] Custom domain added in GitHub Pages settings
- [ ] DNS records configured:
  - [ ] CNAME record pointing to `gits5213.github.io`
  - [ ] Or A record if required by DNS provider
- [ ] SSL certificate provisioned (automatic, wait 5-10 minutes)
- [ ] DNS propagation verified (check with `dig` or online DNS checker)

## File Verification

After deployment, verify these files exist in the build output:
- [ ] `index.html`
- [ ] `404.html`
- [ ] `_next/` folder
- [ ] `images/` folder
- [ ] `about/` folder
- [ ] `contact/` folder
- [ ] All route folders (services, pricing, etc.)

## Testing

- [ ] Visit GitHub Pages URL: `https://gits5213.github.io/visible-home-inspections/`
- [ ] Visit custom domain (if configured): `https://visiblehomeinspections.com`
- [ ] Test navigation links (About, Contact, Services, etc.)
- [ ] Test 404 page (visit a non-existent URL)
- [ ] Check browser console for errors (F12 → Console tab)
- [ ] Test on mobile device or different browser
- [ ] Test contact form submission
- [ ] Verify images load correctly
- [ ] Check CSS/JavaScript loads correctly

## Performance Verification

- [ ] Site loads quickly (< 3 seconds)
- [ ] Images are optimized and load properly
- [ ] No console errors
- [ ] Mobile responsive design works
- [ ] SSL certificate is valid (green lock icon)

## Automatic Deployment Verification

- [ ] Push to `main` branch triggers automatic deployment
- [ ] Deployment appears in GitHub Actions tab
- [ ] Build logs show successful build
- [ ] Site updates within 1-2 minutes after push
- [ ] Deployment status visible in repository → Settings → Pages → Deployments

## Common Issues & Solutions

### Issue: Build Fails

**Solutions:**
1. Check build logs in GitHub Actions tab
2. Verify `RESEND_API_KEY` secret is set in repository secrets
3. Ensure all dependencies are in `package.json`
4. Verify `next.config.ts` has `output: 'export'`
5. Check Node.js version compatibility (workflow uses Node.js 20)

### Issue: 404 errors on routes

**Solutions:**
1. Verify `404.html` exists in `out/` directory
2. Check that all routes are properly exported
3. GitHub Pages handles Next.js routing automatically
4. Verify build output includes all route folders
5. Check base path configuration if using subdirectory

### Issue: Images not loading

**Solutions:**
1. Verify `images/` folder is in build output
2. Check image paths are correct
3. Ensure images are in `public/` directory before building
4. Check browser console for 404 errors on images

### Issue: CSS/JS not loading

**Solutions:**
1. Verify `_next/` folder is in build output
2. Check browser console for 404 errors
3. Verify build completed successfully
4. Clear browser cache and try again
5. Check base path configuration

### Issue: Contact form not working

**Solutions:**
1. Verify `RESEND_API_KEY` is set in GitHub repository secrets
2. Check API key is valid and has proper permissions
3. Review browser console for JavaScript errors
4. Check Resend API dashboard for request logs
5. Ensure API key is not exposed in client-side code

### Issue: Custom domain not working

**Solutions:**
1. Verify DNS records are correct (CNAME pointing to `gits5213.github.io`)
2. Wait for DNS propagation (can take up to 48 hours)
3. Check SSL certificate status in GitHub Pages settings
4. Verify domain is added in GitHub Pages settings
5. Use online DNS checker to verify records

### Issue: Deployment takes too long

**Solutions:**
1. Check GitHub Actions workflow logs for specific bottlenecks
2. Review dependencies for large packages
3. Consider optimizing build process
4. Check GitHub status page for service issues

### Issue: GitHub Pages not enabled

**Solutions:**
1. Go to repository → Settings → Pages
2. Under Source, select "GitHub Actions"
3. Save settings
4. Push a commit to trigger deployment

### Issue: Workflow not running

**Solutions:**
1. Verify workflow file exists: `.github/workflows/deploy-github-pages.yml`
2. Check workflow file syntax is correct
3. Ensure you're pushing to `main` branch
4. Check repository Actions permissions
5. Verify GitHub Actions is enabled for the repository

## Still Having Issues?

1. **Check GitHub Actions:** Review workflow logs in the Actions tab
2. **Check GitHub Pages Settings:** Review deployment history in Settings → Pages
3. **GitHub Community:** Visit [GitHub Community](https://github.community/)
4. **GitHub Documentation:** Review [GitHub Pages Docs](https://docs.github.com/en/pages)
5. **GitHub Support:** Contact GitHub support if needed

## Post-Deployment

- [ ] Monitor site for 24-48 hours
- [ ] Set up monitoring/alerts (optional)
- [ ] Configure custom 404 page if needed
- [ ] Document any custom configurations
- [ ] Bookmark deployment URL for easy access
