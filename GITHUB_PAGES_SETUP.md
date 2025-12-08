# GitHub Pages Deployment Setup

This guide will help you set up automatic deployment from GitHub to GitHub Pages.

## Prerequisites

- GitHub repository for your project
- Resend API key (for contact form)

## Setup Instructions

### Step 1: Enable GitHub Pages

1. **Go to your GitHub repository**
   - Navigate to: `https://github.com/gits5213/visible-home-inspections`
   - Click on **Settings** tab

2. **Navigate to Pages settings**
   - In the left sidebar, click **Pages**

3. **Configure source**
   - Under **Source**, select **GitHub Actions**
   - This enables automatic deployment via GitHub Actions workflow

4. **Save settings**
   - The page will automatically save

### Step 2: Configure Repository Secrets

1. **Go to repository secrets**
   - In your repository, go to **Settings** → **Secrets and variables** → **Actions**

2. **Add Resend API key**
   - Click **New repository secret**
   - **Name**: `RESEND_API_KEY`
   - **Value**: Your Resend API key (`re_ioUNCrEq_4ivW4mbFc72pEeXrnLrLuXPLsss` or your actual key)
   - Click **Add secret**

### Step 3: Push to GitHub

The GitHub Actions workflow will automatically deploy your site:

1. **Push your code** (if not already pushed):
   ```bash
   git add .
   git commit -m "Add GitHub Pages deployment"
   git push origin main
   ```

2. **Monitor deployment**:
   - Go to your repository → **Actions** tab
   - Watch the workflow run
   - Wait for it to complete (usually 1-2 minutes)

3. **Access your site**:
   - Your site will be available at: `https://gits5213.github.io/visible-home-inspections/`
   - The URL format is: `https://<username>.github.io/<repository-name>/`

### Step 4: Set Up Custom Domain (Optional)

If you want to use `visiblehomeinspections.com`:

1. **Add custom domain in GitHub**:
   - Go to repository → **Settings** → **Pages**
   - Under **Custom domain**, enter: `visiblehomeinspections.com`
   - Click **Save**

2. **Configure DNS**:
   - Go to your domain registrar (GoDaddy, Namecheap, etc.)
   - Add a CNAME record:
     - **Type**: `CNAME`
     - **Name**: `@` (or `www` for www subdomain)
     - **Target**: `gits5213.github.io`
     - **TTL**: 3600 (or default)
   - Save the DNS record

3. **Wait for DNS propagation**:
   - DNS changes can take 5-30 minutes (sometimes up to 48 hours)
   - Check propagation: https://www.whatsmydns.net

4. **SSL certificate**:
   - GitHub automatically provisions SSL certificates
   - This may take a few minutes after DNS propagates
   - You'll see a green checkmark when SSL is active

## How It Works

1. **On Push**: When you push to `main` branch, GitHub Actions workflow triggers
2. **Build**: Installs dependencies and runs `npm run build`
3. **Upload**: Uploads `out/` folder as Pages artifact
4. **Deploy**: Deploys to GitHub Pages
5. **Complete**: Your site is live!

## Automatic Deployments

GitHub Actions automatically deploys:
- **Production**: Every push to `main` branch
- **Manual**: You can trigger manually from the **Actions** tab

## Monitoring Deployments

1. **View deployment status**:
   - Go to repository → **Actions** tab
   - Click on any workflow run to see details

2. **View deployment history**:
   - Go to repository → **Settings** → **Pages** → **Deployments**
   - See all past deployments

3. **Check deployment URL**:
   - The deployment URL is shown in the workflow run
   - Also available in **Settings** → **Pages**

## Environment Variables

### Required Secrets

- **`RESEND_API_KEY`**: Your Resend API key for the contact form

### Adding More Secrets

1. Go to repository → **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Add your secret
4. It will be available in workflows as `${{ secrets.SECRET_NAME }}`

## Troubleshooting

### Build Fails

**Check Actions tab:**
1. Go to repository → **Actions**
2. Click on failed workflow run
3. Review build logs for errors

**Common issues:**
- Missing dependencies in `package.json`
- Build command incorrect (should be `npm run build`)
- Output directory wrong (should be `out`)
- Missing `RESEND_API_KEY` secret

**Solutions:**
- Verify all dependencies are in `package.json`
- Check `next.config.ts` has `output: 'export'`
- Ensure `RESEND_API_KEY` is set in repository secrets

### Deployment Succeeds but Site Doesn't Load

1. **Check Pages settings**: Verify source is set to "GitHub Actions"
2. **Check URL**: Ensure you're using the correct GitHub Pages URL format
3. **Wait a few minutes**: Sometimes there's a delay in propagation
4. **Clear cache**: Try accessing in incognito mode

### Contact Form Not Working

1. **Verify secret**: Check `RESEND_API_KEY` is set correctly
2. **Check API key**: Ensure the key is valid and has proper permissions
3. **Review console**: Check browser console for JavaScript errors
4. **Check Resend dashboard**: Review API request logs

### Custom Domain Not Working

1. **Check DNS**: Verify CNAME record points to `gits5213.github.io`
2. **Wait for propagation**: DNS changes can take up to 48 hours
3. **Check SSL**: Wait for GitHub to provision SSL certificate
4. **Verify domain**: Ensure domain is added in GitHub Pages settings

### Site Not Updating

1. **Check workflow**: Verify GitHub Actions workflow ran successfully
2. **Verify branch**: Ensure you pushed to `main` branch
3. **Check deployment**: Go to **Settings** → **Pages** → **Deployments**
4. **Clear cache**: Clear browser cache and try again

## Manual Deployment

If you need to deploy manually:

1. **Trigger workflow manually**:
   - Go to repository → **Actions**
   - Select **Deploy to GitHub Pages** workflow
   - Click **Run workflow** → **Run workflow**

2. **Or push a new commit**:
   ```bash
   git commit --allow-empty -m "Trigger deployment"
   git push origin main
   ```

## Security Notes

- Never commit `.env.local` or API keys to GitHub
- Use GitHub Secrets for all sensitive data
- Regularly rotate API keys
- Review GitHub Actions workflow permissions

## Performance

GitHub Pages provides:
- **CDN**: Content delivered via GitHub's CDN
- **Automatic HTTPS**: Free SSL certificates
- **Caching**: Automatic caching of static assets

## Next Steps

After setup:
1. Test your site thoroughly
2. Set up custom domain (if desired)
3. Monitor deployments in Actions tab
4. Configure custom 404 page (if needed)

Your site will automatically deploy every time you push to the main branch! 🚀

