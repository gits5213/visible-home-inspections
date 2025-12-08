# Bluehost Deployment Guide

## Static Export Complete ✅

Your Next.js site has been configured for static export and is ready to deploy to Bluehost.

## Build Output

The static files are in the `out/` directory (7.2MB). This contains all the HTML, CSS, JavaScript, and images needed for your site.

## Prerequisites: Domain DNS Configuration

**IMPORTANT:** Before deploying, ensure your domain is properly configured.

### If Domain is Registered Elsewhere (Not Bluehost)

If you see the error: *"This domain points to an IP address that does not use the DNS servers associated with this server"*

You need to configure DNS first:

#### Option 1: Update Nameservers (Recommended)
1. **Get Bluehost Nameservers:**
   - Log into Bluehost cPanel
   - Go to "Domains" → Check your welcome email
   - Common nameservers: `ns1.bluehost.com` and `ns2.bluehost.com`
   - Or check cPanel → "Zone Editor" for your specific nameservers

2. **Update at Domain Registrar:**
   - Log into where you registered `visiblehomeinspections.com` (GoDaddy, Namecheap, etc.)
   - Navigate to DNS/Nameserver settings
   - Change nameservers to Bluehost's nameservers
   - Save changes

3. **Wait for Propagation:**
   - DNS changes can take 24-48 hours to propagate
   - Check propagation status: https://www.whatsmydns.net

4. **Then Add Domain in Bluehost:**
   - After nameservers propagate, go to "Domains" → "Create a New Domain"
   - Enter `visiblehomeinspections.com`
   - Check "Share document root" if you want to use `/public_html`
   - Submit

#### Option 2: Use Addon Domain (Alternative)
- In cPanel, try "Addon Domains" instead of "Create a New Domain"
- This may work even if nameservers aren't fully configured
- Still requires DNS A record pointing to Bluehost's IP

#### Option 3: Use DNS A Records
- Get Bluehost's IP address (from cPanel or support)
- At your domain registrar, add A record:
  - Host: `@` (or blank)
  - Points to: Bluehost's IP address
- Then add domain in Bluehost

### If Domain is Already Registered with Bluehost
- Skip DNS configuration
- Proceed directly to deployment steps below

## Deployment Steps

### 1. Access Bluehost File Manager

1. Log into your Bluehost cPanel
2. Navigate to **File Manager**
3. Go to your domain's `public_html` folder (or `www` folder)

### 2. Upload Files

**Option A: Using File Manager (Recommended)**
1. Delete any existing files in `public_html` (backup first if needed)
2. Upload the entire contents of the `out/` folder to `public_html`
   - Select all files in `out/` folder
   - Upload via File Manager's upload feature
   - Or use FTP/SFTP client

**Option B: Using FTP/SFTP**
1. Connect to Bluehost via FTP/SFTP
2. Navigate to `public_html` directory
3. Upload all files from the `out/` folder

### 3. File Structure

After upload, your `public_html` should contain:
```
public_html/
├── index.html
├── .htaccess (important for 404 handling and routing)
├── 404.html
├── about/
├── contact/
├── services/
├── pricing/
├── _next/
├── images/
└── ... (other static files)
```

**Important:** The `.htaccess` file is included in the build output and is essential for:
- Custom 404 error page handling
- Next.js client-side routing
- Security headers
- Performance optimization (compression, caching)

### 4. Verify Deployment

1. Visit your domain: `https://visiblehomeinspections.com`
2. Test all pages:
   - Home page
   - Contact form
   - All navigation links

## Contact Form

The contact form is configured to send emails directly to `info@visiblehomeinspections.com` using Resend API.

**Note:** The API key is embedded in the client-side code. For production, consider:
- Using a form service like Formspree or Getform
- Setting up a serverless function (Vercel, Netlify Functions)
- Using Bluehost's email form handler

## Rebuilding After Changes

When you make changes to your site:

```bash
npm run build
```

This will regenerate the `out/` folder with updated files. Upload the new files to Bluehost.

## Troubleshooting

### "Error. Page cannot be displayed" Message

If you see this error when accessing your domain, check the following:

#### 1. Verify Files Are Uploaded Correctly
- **Check File Manager:** Log into Bluehost cPanel → File Manager → Navigate to `public_html`
- **Verify `index.html` exists:** The root `public_html` folder MUST contain `index.html`
- **Check `.htaccess` file:** Ensure `.htaccess` is in the root `public_html` directory (not in a subfolder)
- **Verify file structure:** You should see folders like `_next/`, `about/`, `contact/`, `images/`, etc.

#### 2. Check File Permissions
- **`.htaccess` file:** Should be **644** (readable by web server)
- **`index.html`:** Should be **644**
- **Folders:** Should be **755**
- **How to fix:** In File Manager, right-click file → Change Permissions → Set to 644 for files, 755 for folders

#### 3. Verify Domain Configuration
- **Check domain pointing:** In Bluehost cPanel → Domains → Ensure `visiblehomeinspections.com` is pointing to `public_html`
- **Check DNS:** Verify DNS records are correct (A record should point to Bluehost's IP)
- **Check if domain is parked:** If domain is parked, it might not be active yet

#### 4. Check `.htaccess` File Content
- Open `.htaccess` in File Manager and verify it contains:
  ```
  DirectoryIndex index.html
  ErrorDocument 404 /404.html
  <IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_URI} !^/_next/
    RewriteRule ^(.*)$ /index.html [L]
  </IfModule>
  ```

#### 5. Test Direct File Access
- Try accessing: `https://visiblehomeinspections.com/index.html` directly
- If this works but root doesn't, the `.htaccess` file might not be working
- Check if mod_rewrite is enabled on Bluehost (contact support if needed)

#### 6. Clear Browser Cache
- Clear browser cache and cookies
- Try accessing in incognito/private mode
- Try a different browser

#### 7. Check Bluehost Error Logs
- In cPanel → Metrics → Errors
- Look for specific error messages that might indicate the problem

#### 8. Verify Upload Method
- **If using File Manager:** Make sure you uploaded ALL files from `out/` folder, not just selected files
- **If using FTP:** Ensure you uploaded to the correct directory (`public_html`, not `public_html/out`)
- **Hidden files:** Make sure `.htaccess` was uploaded (some FTP clients hide files starting with `.`)

### 404 Errors
- **IMPORTANT:** Ensure `.htaccess` file is uploaded to `public_html` root
- The `.htaccess` file configures Apache to use your custom 404.html page
- Verify `.htaccess` file permissions (should be 644)
- Check that all files are in `public_html` root
- If you still see the default Apache 404 page, make sure `.htaccess` is in the root directory

### Images Not Loading
- Verify `images/` folder is uploaded correctly
- Check file paths are correct

### Contact Form Not Working
- Check browser console for errors
- Verify Resend API key is correct
- Test form submission

## Support

For issues:
- Check Bluehost documentation
- Verify file permissions (should be 644 for files, 755 for folders)
- Ensure PHP is disabled for static files (not needed for Next.js static export)
- **Contact Bluehost Support** if domain is not resolving or if you see "Page cannot be displayed" errors

