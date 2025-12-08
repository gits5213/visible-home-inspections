# Cloudflare Pages Deployment Setup

This guide will help you set up automatic deployment from GitHub to Cloudflare Pages.

## ⚠️ Quick Fix: "wrangler deploy" Error

If you're seeing an error about `wrangler deploy` or "Specify the path to the directory of assets":

**The problem:** Cloudflare Pages is trying to deploy as a Workers project instead of Pages.

**The fix:**
1. Go to Cloudflare Pages dashboard → Your project → **Settings** → **Builds & deployments**
2. Change **Framework preset** to **`None`** (NOT "Cloudflare Workers")
3. Verify **Build output directory** is `out`
4. Save and redeploy

**Do NOT create `wrangler.jsonc` or `wrangler.toml`** - those are for Workers, not Pages!

## Prerequisites

- GitHub repository for your project
- Cloudflare account (free tier available)
- Resend API key (for contact form)

## Setup Instructions

### Step 1: Connect GitHub Repository to Cloudflare Pages

1. **Log into Cloudflare Dashboard**
   - Go to [https://dash.cloudflare.com/](https://dash.cloudflare.com/)
   - Sign in or create a free account

2. **Navigate to Pages**
   - Click **Workers & Pages** in the sidebar
   - Click **Pages** → **Create a project**

3. **Connect to Git**
   - Click **Connect to Git**
   - Authorize Cloudflare to access your GitHub account
   - Select your repository: `visible-home-inspections`
   - Click **Begin setup**

### Step 2: Configure Build Settings

Configure the following settings:

- **Project name**: `visible-home-inspections` (or your preferred name)
- **Production branch**: `main`
- **Framework preset**: **`None`** ⚠️ **IMPORTANT:** Select `None` - do NOT select "Cloudflare Workers" (that's for Workers, not Pages)
- **Build command**: `npm run build`
- **Build output directory**: `out`
- **Root directory**: `/` (leave as default)

**⚠️ Critical Setting:** If you select "Cloudflare Workers" as the framework preset, you'll get errors about `wrangler deploy` and needing to specify assets. Always select **`None`** for static Next.js exports.

### Step 3: Configure Environment Variables

1. Before deploying, click **Environment variables**
2. Add the following variable:

   - **Variable name**: `RESEND_API_KEY`
   - **Value**: Your Resend API key (`re_ioUNCrEq_4ivW4mbFc72pEeXrnLrLuXPLsss` or your actual key)
   - **Environment**: Select all (Production, Preview, Branch previews)

3. Click **Save**

### Step 4: Deploy

1. Click **Save and Deploy**
2. Cloudflare will:
   - Install dependencies (`npm ci`)
   - Build your site (`npm run build`)
   - Deploy to Cloudflare Pages
3. Wait for the build to complete (usually 2-5 minutes)
4. Your site will be available at: `https://visible-home-inspections.pages.dev`

### Step 5: Set Up Custom Domain (Optional)

1. In your Cloudflare Pages project dashboard, go to **Custom domains**
2. Click **Set up a custom domain**
3. Enter your domain: `visiblehomeinspections.com`
4. Follow the instructions to configure DNS

#### If Domain is Already on Cloudflare

- Cloudflare will automatically configure DNS records
- SSL certificate will be provisioned automatically
- Your site will be live within minutes

#### If Domain is Elsewhere

1. Add a CNAME record at your DNS provider:
   - **Type**: `CNAME`
   - **Name**: `@` (or `www` for www subdomain)
   - **Target**: `visible-home-inspections.pages.dev`
   - **TTL**: Auto or 3600

2. Wait for DNS propagation (5-30 minutes)
3. Cloudflare will automatically provision an SSL certificate

## How It Works

1. **On Push**: When you push to `main` branch, Cloudflare Pages detects the change
2. **Build**: Cloudflare runs `npm ci` and `npm run build` in a clean environment
3. **Deploy**: The `out/` folder contents are deployed to Cloudflare's global CDN
4. **Complete**: Your site is live worldwide within minutes!

## Automatic Deployments

Cloudflare Pages automatically deploys:

- **Production**: Every push to `main` branch
- **Preview**: Every pull request (creates a unique preview URL)
- **Branch previews**: Optional - can be enabled for feature branches

## Manual Deployment

You can also trigger deployments manually:

1. Go to Cloudflare Pages dashboard
2. Select your project
3. Click **Deployments** tab
4. Click **Retry deployment** on any previous deployment

## Monitoring Deployments

1. **GitHub Integration**: Deployment status appears in GitHub commit status
2. **Cloudflare Dashboard**: View all deployments, build logs, and status
3. **Email Notifications**: Configure email alerts for deployment failures

## Environment Variables

### Required Variables

- **`RESEND_API_KEY`**: Your Resend API key for the contact form

### Adding More Variables

1. Go to your Cloudflare Pages project
2. Navigate to **Settings** → **Environment variables**
3. Add new variables as needed
4. Variables are available during build time and runtime

### Variable Scopes

- **Production**: Available in production deployments
- **Preview**: Available in preview deployments (PRs)
- **Branch previews**: Available in branch preview deployments

## Troubleshooting

### Build Fails

**Check build logs:**
1. Go to Cloudflare Pages dashboard
2. Click on the failed deployment
3. Review build logs for errors

**Common issues:**
- **Missing dependencies**: Ensure all dependencies are in `package.json`
- **Build command incorrect**: Verify build command is `npm run build`
- **Output directory wrong**: Ensure output directory is `out`
- **Node.js version**: Cloudflare Pages uses Node.js 18.x by default
- **Wrong framework preset**: If you see `wrangler deploy` errors, Framework preset is set incorrectly

**Solutions:**
- Check `package.json` has all required dependencies
- Verify `next.config.ts` has `output: 'export'`
- Ensure `RESEND_API_KEY` environment variable is set
- **If you see "wrangler deploy" error**: Change Framework preset to **`None`** (not Workers)

### Error: "wrangler deploy" or "Specify the path to the directory of assets"

**This means Cloudflare Pages is trying to deploy as a Workers project.**

**Fix:**
1. Go to Cloudflare Pages project → **Settings** → **Builds & deployments**
2. Change **Framework preset** from "Cloudflare Workers" to **`None`**
3. Verify **Build output directory** is `out`
4. Save and redeploy

**Do NOT create `wrangler.jsonc` or `wrangler.toml`** - those are for Workers, not Pages!

### Deployment Succeeds but Site Doesn't Load

1. **Check custom domain**: Verify DNS records are correct
2. **Check SSL**: Wait a few minutes for SSL certificate provisioning
3. **Clear cache**: Try accessing in incognito mode
4. **Check build output**: Verify `out/` directory contains expected files

### Contact Form Not Working

1. **Verify environment variable**: Check `RESEND_API_KEY` is set correctly
2. **Check API key**: Ensure the key is valid and has proper permissions
3. **Review browser console**: Check for JavaScript errors
4. **Check Resend dashboard**: Review API request logs

### Preview Deployments Not Working

1. **Check GitHub integration**: Ensure Cloudflare has access to your repository
2. **Verify branch**: Ensure you're creating a pull request (not just pushing to a branch)
3. **Check build settings**: Verify preview deployments are enabled

### Custom Domain Issues

1. **DNS propagation**: Wait up to 48 hours for DNS changes
2. **CNAME vs A record**: Use CNAME if possible, A record if required by provider
3. **SSL certificate**: Wait 5-10 minutes for SSL provisioning
4. **Check DNS records**: Use `dig` or online DNS checker to verify records

## Advanced Configuration

### Custom Build Settings

If you need custom build settings:

1. Create `wrangler.toml` in your project root:
```toml
name = "visible-home-inspections"
compatibility_date = "2024-01-01"

[env.production]
name = "visible-home-inspections"
```

2. Or configure via Cloudflare Pages dashboard → Settings → Builds & deployments

### Custom Headers

Add custom headers via `_headers` file in `public/` directory:

```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
```

### Redirects

Add redirects via `_redirects` file in `public/` directory:

```
/old-page /new-page 301
/blog/* /news/:splat 301
```

## Security Notes

- Never commit `.env.local` or API keys to GitHub
- Use Cloudflare Pages environment variables for all sensitive data
- Regularly rotate API keys
- Enable Cloudflare's security features (WAF, DDoS protection)

## Performance

Cloudflare Pages automatically provides:
- **Global CDN**: 300+ edge locations worldwide
- **Automatic HTTPS**: Free SSL certificates
- **DDoS Protection**: Built-in protection
- **Image Optimization**: Available via Cloudflare Images
- **Caching**: Automatic caching of static assets

## Next Steps

After setup:
1. Test your site thoroughly
2. Set up custom domain (if not done)
3. Configure monitoring and alerts
4. Set up custom headers/redirects (if needed)
5. Enable Cloudflare Analytics (optional)

Your site will automatically deploy every time you push to the main branch! 🚀

