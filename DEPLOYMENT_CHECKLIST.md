# Deployment Verification Checklist

Use this checklist to verify your site is deployed correctly on Bluehost.

## Pre-Deployment Checklist

- [ ] Site builds successfully: `npm run build`
- [ ] `out/` directory contains all files
- [ ] `.htaccess` file exists in `out/` directory
- [ ] `index.html` exists in `out/` directory

## Upload Checklist

- [ ] Logged into Bluehost cPanel
- [ ] Navigated to File Manager
- [ ] Opened `public_html` folder (or `www` folder for your domain)
- [ ] Deleted old files (backed up if needed)
- [ ] Uploaded ALL files from `out/` folder to `public_html` root
- [ ] Verified `.htaccess` file is visible in `public_html` root
- [ ] Verified `index.html` is in `public_html` root

## File Verification

Check these files exist in `public_html` root:
- [ ] `index.html`
- [ ] `.htaccess` (may be hidden - enable "Show Hidden Files" in File Manager)
- [ ] `404.html`
- [ ] `_next/` folder
- [ ] `images/` folder
- [ ] `about/` folder
- [ ] `contact/` folder

## File Permissions Check

In File Manager, verify permissions:
- [ ] `.htaccess` = **644**
- [ ] `index.html` = **644**
- [ ] All folders = **755**

## Domain Configuration

- [ ] Domain `visiblehomeinspections.com` is active
- [ ] Domain is pointing to `public_html` directory
- [ ] DNS records are correct (check in cPanel → Domains)
- [ ] Domain is not parked or suspended

## Testing

- [ ] Visit `https://visiblehomeinspections.com` - should show homepage
- [ ] Visit `https://visiblehomeinspections.com/index.html` - should show homepage
- [ ] Test navigation links (About, Contact, Services, etc.)
- [ ] Check browser console for errors (F12 → Console tab)
- [ ] Test on mobile device or different browser

## Common Issues & Solutions

### Issue: "Error. Page cannot be displayed"
**Solutions:**
1. Verify `index.html` exists in `public_html` root
2. Check `.htaccess` file permissions (should be 644)
3. Verify domain is pointing to correct directory
4. Check DNS is resolving correctly
5. Try accessing `index.html` directly

### Issue: 404 errors on navigation
**Solutions:**
1. Ensure `.htaccess` file is in root directory
2. Verify `.htaccess` file permissions (644)
3. Check mod_rewrite is enabled (contact Bluehost support)

### Issue: Images not loading
**Solutions:**
1. Verify `images/` folder was uploaded
2. Check file paths in browser console
3. Verify image files exist in `public_html/images/`

### Issue: CSS/JS not loading
**Solutions:**
1. Verify `_next/` folder was uploaded completely
2. Check browser console for 404 errors
3. Verify file permissions on `_next/` folder (755)

## Still Having Issues?

1. **Check Bluehost Error Logs:** cPanel → Metrics → Errors
2. **Contact Bluehost Support:** They can verify server configuration
3. **Verify DNS:** Use `nslookup visiblehomeinspections.com` or online DNS checker
4. **Test with FTP:** Try uploading via FTP client instead of File Manager

