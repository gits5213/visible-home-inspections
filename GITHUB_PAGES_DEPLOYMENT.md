# GitHub Pages Deployment Guide

## Static Export Complete ✅

Your Next.js site has been configured for static export and is ready to deploy to GitHub Pages.

## Build Output

The static files are in the `out/` directory. This contains all the HTML, CSS, JavaScript, and images needed for your site.

## Prerequisites

- GitHub account
- GitHub repository for your project
- Resend API key (for contact form)

## Deployment Methods

GitHub Pages offers automatic deployment via GitHub Actions (recommended).

### Method 1: GitHub Actions (Automatic Deployment) - Recommended

This method automatically deploys your site whenever you push to the `main` branch.

#### Step 1: Enable GitHub Pages

1. Go to your GitHub repository: `gits5213/visible-home-inspections`
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Save the settings

#### Step 2: Configure Repository Secrets

1. Go to your repository → **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Add the following secret:
   - **Name**: `RESEND_API_KEY`
   - **Value**: Your Resend API key (`re_ioUNCrEq_4ivW4mbFc72pEeXrnLrLuXPLsss` or your actual key)
4. Click **Add secret**

#### Step 3: Push to GitHub

The GitHub Actions workflow (`.github/workflows/deploy-github-pages.yml`) will automatically:
1. Build your site (`npm run build`)
2. Deploy to GitHub Pages
3. Make your site live at: `https://gits5213.github.io/visible-home-inspections/`

#### Step 4: Custom Domain Setup (Optional)

If you want to use a custom domain like `visiblehomeinspections.com`:

1. Go to repository → **Settings** → **Pages**
2. Under **Custom domain**, enter your domain: `visiblehomeinspections.com`
3. Click **Save**
4. Configure DNS at your domain registrar:
   - **Type**: `CNAME`
   - **Name**: `@` (or `www` for www subdomain)
   - **Target**: `gits5213.github.io`
   - **TTL**: 3600 (or default)
5. Wait for DNS propagation (5-30 minutes)
6. GitHub will automatically provision an SSL certificate

### Method 2: Manual Deployment

If you prefer to deploy manually:

1. Build your site locally:
   ```bash
   npm run build
   ```

2. Push the `out/` directory to a `gh-pages` branch:
   ```bash
   git subtree push --prefix out origin gh-pages
   ```

3. Configure GitHub Pages to use the `gh-pages` branch:
   - Go to **Settings** → **Pages**
   - Select **Deploy from a branch**
   - Choose `gh-pages` branch
   - Save

**Note:** The GitHub Actions method is recommended as it's automatic and easier to maintain.

## File Structure

After deployment, your site structure will be:

```
out/
├── index.html
├── 404.html
├── about/
├── contact/
├── services/
├── pricing/
├── _next/
├── images/
└── ... (other static files)
```

## Verify Deployment

1. Visit your GitHub Pages URL: `https://gits5213.github.io/visible-home-inspections/`
2. Test all pages:
   - Home page
   - Contact form
   - All navigation links
   - 404 page (visit a non-existent URL)

## Contact Form

The contact form is configured to send emails directly to `info@visiblehomeinspections.com` using Resend API.

**Note:** The API key should be stored as a GitHub Secret (`RESEND_API_KEY`) and will be available during the build process. Make sure it's set in your repository secrets.

## Automatic Deployments

With GitHub Actions enabled:
- **Every push to `main`**: Automatically triggers a build and deployment
- **Deployment status**: Visible in the **Actions** tab
- **Deployment history**: Available in repository → **Settings** → **Pages** → **Deployments**

## Rebuilding After Changes

When you make changes to your site:

```bash
git add .
git commit -m "Update site"
git push origin main
```

GitHub Actions will automatically:
1. Detect the push
2. Build your site
3. Deploy to GitHub Pages
4. Make it live (usually within 1-2 minutes)

## Troubleshooting

### Build Fails

1. **Check Actions tab**: Go to repository → **Actions** → Click on failed workflow
2. **Review build logs**: Look for specific error messages
3. **Common issues**:
   - Missing dependencies in `package.json`
   - Build command incorrect (should be `npm run build`)
   - Output directory wrong (should be `out`)
   - Missing `RESEND_API_KEY` secret

### 404 Errors on Routes

- GitHub Pages handles Next.js routing automatically
- Ensure `404.html` exists in the `out/` directory
- Check that all routes are properly exported
- Verify the base path is configured correctly (if using a subdirectory)

### Images Not Loading

- Verify `images/` folder is in the build output
- Check image paths are correct
- Ensure images are in the `public/` directory before building

### Contact Form Not Working

- Verify `RESEND_API_KEY` is set in GitHub Secrets
- Check API key is valid and has proper permissions
- Review browser console for JavaScript errors
- Check Resend API dashboard for request logs

### Custom Domain Not Working

1. **Check DNS records**: Verify CNAME record points to `gits5213.github.io`
2. **Wait for propagation**: DNS changes can take up to 48 hours
3. **Check SSL certificate**: GitHub automatically provisions SSL (may take a few minutes)
4. **Verify domain in GitHub**: Ensure domain is added in repository → **Settings** → **Pages**

### Site Not Updating

- Check GitHub Actions workflow is running successfully
- Verify you pushed to the `main` branch
- Check deployment status in **Settings** → **Pages** → **Deployments**
- Clear browser cache and try again

## Performance Optimization

GitHub Pages automatically provides:
- **CDN**: Content delivered via GitHub's CDN
- **Automatic HTTPS**: Free SSL certificates
- **Caching**: Automatic caching of static assets

## Preview Deployments

GitHub Pages with GitHub Actions automatically creates preview deployments for:
- Pull requests (if configured)
- Feature branches (if configured)

Preview URLs are available in:
- GitHub pull request comments
- Actions workflow run details

## Rollback

If you need to rollback to a previous deployment:

1. Go to repository → **Settings** → **Pages** → **Deployments**
2. Find the deployment you want to restore
3. Click **Redeploy** on that deployment

## Support

For issues:
- Check [GitHub Pages Documentation](https://docs.github.com/en/pages)
- Review build logs in the **Actions** tab
- Check [GitHub Community](https://github.community/)
- Review GitHub Actions workflow logs

## Next Steps

After deployment:
1. Test your site thoroughly
2. Set up custom domain (if desired)
3. Configure monitoring (optional)
4. Set up custom 404 page (if needed)

Your site will automatically deploy every time you push to the main branch! 🚀

