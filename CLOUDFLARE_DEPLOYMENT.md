# Cloudflare Pages Deployment Guide

## Static Export Complete ✅

Your Next.js site has been configured for static export and is ready to deploy to Cloudflare Pages.

## Build Output

The static files are in the `out/` directory. This contains all the HTML, CSS, JavaScript, and images needed for your site.

## Prerequisites

- Cloudflare account (free tier available)
- GitHub repository for your project
- Domain name (optional - Cloudflare Pages provides a free subdomain)

## Deployment Methods

Cloudflare Pages offers two main deployment methods:

### Method 1: GitHub Integration (Recommended)

This is the easiest and most automated approach. Cloudflare Pages connects directly to your GitHub repository and automatically deploys on every push.

#### Step 1: Connect GitHub Repository

1. Log into [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Workers & Pages** → **Pages**
3. Click **Create a project**
4. Select **Connect to Git**
5. Authorize Cloudflare to access your GitHub account
6. Select your repository: `visible-home-inspections`
7. Click **Begin setup**

#### Step 2: Configure Build Settings

**IMPORTANT:** Make sure you configure these settings correctly to avoid deployment errors.

Configure the following build settings:

- **Project name**: `visible-home-inspections` (or your preferred name)
- **Production branch**: `main`
- **Framework preset**: Select **`None`** (do NOT select "Cloudflare Workers" - that's for Workers, not Pages)
- **Build command**: `npm run build`
- **Build output directory**: `out`
- **Root directory**: `/` (leave as default)

**⚠️ Critical:** If you see an error about `wrangler deploy` or needing to specify assets directory, it means Cloudflare Pages is trying to deploy as a Workers project instead of Pages. Make sure:
- Framework preset is set to **`None`** (not Workers)
- Build output directory is set to **`out`**
- You're using **Cloudflare Pages**, not **Cloudflare Workers**

#### Step 3: Add Environment Variables

Click **Environment variables** and add:

- **`RESEND_API_KEY`**: Your Resend API key for the contact form
  - Value: `re_ioUNCrEq_4ivW4mbFc72pEeXrnLrLuXPLsss` (or your actual key)

#### Step 4: Deploy

1. Click **Save and Deploy**
2. Cloudflare will build and deploy your site
3. Your site will be available at: `https://visible-home-inspections.pages.dev` (or your custom domain)

#### Step 5: Custom Domain Setup (Optional)

1. In your Cloudflare Pages project, go to **Custom domains**
2. Click **Set up a custom domain**
3. Enter your domain: `visiblehomeinspections.com`
4. Cloudflare will automatically configure DNS records
5. If your domain is already on Cloudflare, DNS will be configured automatically
6. If your domain is elsewhere, you'll need to add a CNAME record:
   - Type: `CNAME`
   - Name: `@` (or `www`)
   - Target: `visible-home-inspections.pages.dev`
   - Proxy status: Proxied (orange cloud)

### Method 2: Wrangler CLI (Advanced)

For more control or CI/CD integration, you can use Wrangler CLI.

#### Step 1: Install Wrangler

```bash
npm install -g wrangler
# or
npm install --save-dev wrangler
```

#### Step 2: Authenticate

```bash
wrangler login
```

This will open a browser window to authenticate with Cloudflare.

#### Step 3: Build Your Site

```bash
npm run build
```

#### Step 4: Deploy

```bash
wrangler pages deploy out --project-name=visible-home-inspections
```

## Domain DNS Configuration

### If Domain is on Cloudflare

1. Go to your domain in Cloudflare Dashboard
2. Navigate to **DNS** → **Records**
3. Cloudflare Pages will automatically add the necessary records
4. Ensure the proxy status is **Proxied** (orange cloud) for better performance

### If Domain is Elsewhere

1. Add a CNAME record at your DNS provider:
   - **Type**: `CNAME`
   - **Name**: `@` (or `www` for www subdomain)
   - **Target**: `visible-home-inspections.pages.dev`
   - **TTL**: Auto or 3600

2. For root domain (`@`), some providers require an A record instead:
   - **Type**: `A`
   - **Name**: `@`
   - **Target**: `192.0.2.1` (Cloudflare Pages IP - check Cloudflare docs for current IP)
   - Or use a CNAME flattening service

3. Wait for DNS propagation (usually 5-30 minutes)
4. Verify DNS: https://www.whatsmydns.net

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

**Note:** Cloudflare Pages handles routing automatically for Next.js static exports. The `404.html` file will be used for 404 errors.

## Verify Deployment

1. Visit your domain: `https://visiblehomeinspections.com`
2. Test all pages:
   - Home page
   - Contact form
   - All navigation links
   - 404 page (visit a non-existent URL)

## Contact Form

The contact form is configured to send emails directly to `info@visiblehomeinspections.com` using Resend API.

**Note:** The API key should be stored as an environment variable in Cloudflare Pages (not in client-side code). Make sure `RESEND_API_KEY` is set in your Cloudflare Pages environment variables.

## Automatic Deployments

With GitHub integration enabled:
- **Every push to `main`**: Automatically triggers a production deployment
- **Pull requests**: Create preview deployments automatically
- **Deployment history**: Available in Cloudflare Pages dashboard

## Rebuilding After Changes

When you make changes to your site:

```bash
git add .
git commit -m "Update site"
git push origin main
```

Cloudflare Pages will automatically:
1. Detect the push
2. Build your site
3. Deploy the new version
4. Make it live (usually within 1-2 minutes)

## Troubleshooting

### Build Fails

1. **Check build logs** in Cloudflare Pages dashboard
2. **Verify build command**: Should be `npm run build`
3. **Check output directory**: Should be `out`
4. **Verify environment variables**: Ensure `RESEND_API_KEY` is set
5. **Check Node.js version**: Cloudflare Pages uses Node.js 18.x by default

### Error: "wrangler deploy" or "Specify the path to the directory of assets"

**This error occurs when Cloudflare Pages is trying to deploy as a Workers project instead of Pages.**

**Solution:**
1. Go to your Cloudflare Pages project dashboard
2. Navigate to **Settings** → **Builds & deployments**
3. Check **Framework preset** - it should be **`None`** (NOT "Cloudflare Workers")
4. Verify **Build output directory** is set to **`out`**
5. If Framework preset shows "Cloudflare Workers", change it to **`None`**
6. Save settings and trigger a new deployment

**Important:** Do NOT create a `wrangler.jsonc` or `wrangler.toml` file - those are for Cloudflare Workers, not Pages. Cloudflare Pages handles static site deployment automatically.

### 404 Errors on Routes

- Cloudflare Pages automatically handles Next.js routing
- Ensure `404.html` exists in the `out/` directory
- Check that all routes are properly exported

### Images Not Loading

- Verify `images/` folder is in the build output
- Check image paths are correct
- Ensure images are in the `public/` directory before building

### Contact Form Not Working

- Verify `RESEND_API_KEY` is set in Cloudflare Pages environment variables
- Check browser console for errors
- Ensure the API key is valid and has proper permissions
- Check Resend API dashboard for request logs

### Custom Domain Not Working

1. **Check DNS records**: Verify CNAME or A record is correct
2. **Wait for propagation**: DNS changes can take up to 48 hours
3. **Check SSL/TLS**: Cloudflare automatically provisions SSL certificates (may take a few minutes)
4. **Verify domain in Cloudflare**: Ensure domain is added to Cloudflare Pages project

### Deployment Takes Too Long

- Cloudflare Pages builds typically take 2-5 minutes
- Check build logs for specific bottlenecks
- Consider optimizing your build process
- Check for large dependencies or assets

## Performance Optimization

Cloudflare Pages automatically provides:
- **Global CDN**: Your site is served from 300+ locations worldwide
- **Automatic HTTPS**: Free SSL certificates
- **DDoS Protection**: Built-in protection
- **Image Optimization**: Available via Cloudflare Images (optional)
- **Caching**: Automatic caching of static assets

## Preview Deployments

Cloudflare Pages automatically creates preview deployments for:
- Pull requests
- Feature branches (if configured)

Preview URLs are available in:
- GitHub pull request comments
- Cloudflare Pages dashboard

## Rollback

If you need to rollback to a previous deployment:

1. Go to Cloudflare Pages dashboard
2. Navigate to your project
3. Click **Deployments**
4. Find the deployment you want to restore
5. Click **Retry deployment** or **Create retry deployment**

## Support

For issues:
- Check [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- Review build logs in Cloudflare dashboard
- Check [Cloudflare Community](https://community.cloudflare.com/)
- Contact Cloudflare Support (available on paid plans)

## Next Steps

After deployment:
1. Set up custom domain (if not done already)
2. Configure environment variables
3. Test all functionality
4. Set up monitoring (optional)
5. Configure custom headers (if needed)

Your site is now live on Cloudflare Pages! 🚀

