# Bluehost Deployment Guide

## Static Export Complete ✅

Your Next.js site has been configured for static export and is ready to deploy to Bluehost.

## Build Output

The static files are in the `out/` directory (7.2MB). This contains all the HTML, CSS, JavaScript, and images needed for your site.

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

