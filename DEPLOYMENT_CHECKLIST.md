# Deployment Verification Checklist

Use this checklist to verify your site is deployed correctly on Cloudflare Pages.

## Pre-Deployment Checklist

- [ ] Site builds successfully: `npm run build`
- [ ] `out/` directory contains all files
- [ ] `404.html` file exists in `out/` directory
- [ ] `index.html` exists in `out/` directory
- [ ] Environment variables are configured in Cloudflare Pages dashboard

## Cloudflare Pages Setup Checklist

- [ ] Cloudflare account created
- [ ] GitHub repository connected to Cloudflare Pages
- [ ] Build settings configured:
  - [ ] Build command: `npm run build`
  - [ ] Build output directory: `out`
  - [ ] Production branch: `main`
- [ ] Environment variables set:
  - [ ] `RESEND_API_KEY` configured
- [ ] Initial deployment successful

## Custom Domain Setup (Optional)

- [ ] Custom domain added in Cloudflare Pages dashboard
- [ ] DNS records configured:
  - [ ] CNAME record pointing to `*.pages.dev` subdomain
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

- [ ] Visit Cloudflare Pages URL: `https://visible-home-inspections.pages.dev`
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
- [ ] Deployment appears in Cloudflare Pages dashboard
- [ ] Build logs show successful build
- [ ] Site updates within 1-2 minutes after push

## Common Issues & Solutions

### Issue: Build Fails

**Solutions:**
1. Check build logs in Cloudflare Pages dashboard
2. Verify `RESEND_API_KEY` environment variable is set
3. Ensure all dependencies are in `package.json`
4. Verify `next.config.ts` has `output: 'export'`
5. Check Node.js version compatibility (Cloudflare uses Node.js 18.x)

### Issue: 404 errors on routes

**Solutions:**
1. Verify `404.html` exists in `out/` directory
2. Check that all routes are properly exported
3. Cloudflare Pages handles Next.js routing automatically
4. Verify build output includes all route folders

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

### Issue: Contact form not working

**Solutions:**
1. Verify `RESEND_API_KEY` is set in Cloudflare Pages environment variables
2. Check API key is valid and has proper permissions
3. Review browser console for JavaScript errors
4. Check Resend API dashboard for request logs
5. Ensure API key is not exposed in client-side code

### Issue: Custom domain not working

**Solutions:**
1. Verify DNS records are correct (CNAME or A record)
2. Wait for DNS propagation (can take up to 48 hours)
3. Check SSL certificate status in Cloudflare dashboard
4. Verify domain is added to Cloudflare Pages project
5. Use online DNS checker to verify records

### Issue: Deployment takes too long

**Solutions:**
1. Check build logs for specific bottlenecks
2. Review dependencies for large packages
3. Consider optimizing build process
4. Check Cloudflare Pages status page for service issues

## Still Having Issues?

1. **Check Cloudflare Pages Dashboard:** Review build logs and deployment history
2. **Check GitHub Actions:** If using GitHub Actions workflow, review workflow logs
3. **Cloudflare Community:** Visit [Cloudflare Community](https://community.cloudflare.com/)
4. **Cloudflare Documentation:** Review [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
5. **Contact Cloudflare Support:** Available on paid plans, or use community forums

## Post-Deployment

- [ ] Monitor site for 24-48 hours
- [ ] Set up monitoring/alerts (optional)
- [ ] Configure custom headers if needed
- [ ] Set up redirects if needed
- [ ] Document any custom configurations
