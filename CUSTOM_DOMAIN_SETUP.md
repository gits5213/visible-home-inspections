# Custom Domain Setup for GitHub Pages

This guide will help you set up a custom domain (e.g., `visiblehomeinspections.com`) for your GitHub Pages site.

## Prerequisites

- GitHub Pages site already deployed and working
- Domain name registered (e.g., `visiblehomeinspections.com`)
- Access to your domain registrar's DNS settings

## Step-by-Step Setup

### Step 1: Add Custom Domain in GitHub

1. **Go to your GitHub repository**
   - Navigate to: `https://github.com/gits5213/visible-home-inspections`
   - Click on **Settings** tab

2. **Navigate to Pages settings**
   - In the left sidebar, click **Pages**

3. **Add custom domain**
   - Under **Custom domain**, enter your domain: `visiblehomeinspections.com`
   - Click **Save**
   - GitHub will create a `CNAME` file in your repository (don't delete it!)

4. **Enable HTTPS (recommended)**
   - Check the box **"Enforce HTTPS"** (this will be available after DNS is configured)
   - This ensures your site is always served over HTTPS

### Step 2: Configure DNS Records

You need to configure DNS at your domain registrar. The exact steps depend on your registrar, but here's what you need:

#### Option A: CNAME Record (Recommended for root domain)

**If your registrar supports CNAME for root domain (@):**

1. Log into your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.)
2. Navigate to DNS management
3. Add a CNAME record:
   - **Type**: `CNAME`
   - **Name/Host**: `@` (or leave blank for root domain)
   - **Target/Value**: `gits5213.github.io`
   - **TTL**: `3600` (or default)
4. Save the record

**For www subdomain (optional):**
- **Type**: `CNAME`
- **Name/Host**: `www`
- **Target/Value**: `gits5213.github.io`
- **TTL**: `3600`

#### Option B: A Records (If CNAME not supported for root)

**If your registrar doesn't support CNAME for root domain (@):**

You'll need to use A records pointing to GitHub Pages IP addresses:

1. Add A records:
   - **Type**: `A`
   - **Name/Host**: `@` (or leave blank)
   - **Target/Value**: `185.199.108.153`
   - **TTL**: `3600`
   
   Add additional A records with these IPs:
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`

2. For www subdomain, use CNAME:
   - **Type**: `CNAME`
   - **Name/Host**: `www`
   - **Target/Value**: `gits5213.github.io`

**Note:** GitHub Pages IP addresses may change. Check [GitHub Pages documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain) for current IPs.

### Step 3: Update Build Configuration for Custom Domain

**Important:** When using a custom domain, GitHub Pages serves your site from the root domain (e.g., `visiblehomeinspections.com`), not from a subdirectory. This means we need to build without the `basePath`.

1. **Add repository secret to disable basePath**:
   - Go to repository → **Settings** → **Secrets and variables** → **Actions**
   - Click **New repository secret**
   - **Name**: `CUSTOM_DOMAIN`
   - **Value**: `true`
   - Click **Add secret**

2. **Trigger a new deployment**:
   - The next push to `main` will automatically rebuild without basePath
   - Or manually trigger: Go to **Actions** → **Deploy to GitHub Pages** → **Run workflow**

**What this does:**
- Builds your site without the `/visible-home-inspections/` basePath
- All paths will work correctly on your custom domain
- Assets (CSS, JS, images) will load from the root

**Note:** After setting this up, your site will work on the custom domain (`visiblehomeinspections.com`), but the GitHub Pages subdomain (`gits5213.github.io/visible-home-inspections/`) may not work correctly. This is expected when using a custom domain - you'll primarily use your custom domain.

### Step 4: Wait for DNS Propagation

1. **DNS propagation** can take:
   - Minimum: 5-30 minutes
   - Maximum: 24-48 hours
   
2. **Check DNS propagation**:
   - Visit: https://www.whatsmydns.net
   - Enter your domain: `visiblehomeinspections.com`
   - Select record type: `CNAME` or `A`
   - Check if it shows `gits5213.github.io` or GitHub IPs

3. **Verify DNS locally**:
   ```bash
   # Check CNAME record
   dig visiblehomeinspections.com CNAME
   
   # Or check A records
   dig visiblehomeinspections.com A
   ```

### Step 5: Wait for SSL Certificate

1. **GitHub automatically provisions SSL certificates**
2. **This usually takes 5-10 minutes** after DNS propagates
3. **Check SSL status**:
   - Go to repository → **Settings** → **Pages**
   - Look for SSL certificate status
   - You'll see a green checkmark when SSL is active

### Step 6: Verify Custom Domain

1. **Visit your custom domain**: `https://visiblehomeinspections.com`
2. **Test all pages**:
   - Home page loads correctly
   - Navigation links work
   - Images load properly
   - Contact form works
3. **Check HTTPS**: Ensure the site redirects to HTTPS

## Troubleshooting

### Domain Not Resolving

**Symptoms:** Domain shows "Site can't be reached" or DNS error

**Solutions:**
1. Verify DNS records are correct
2. Wait longer for DNS propagation (can take up to 48 hours)
3. Check DNS records using `dig` or online DNS checker
4. Ensure you didn't add both CNAME and A records (use one or the other)

### SSL Certificate Not Provisioned

**Symptoms:** Site loads but shows "Not Secure" or SSL error

**Solutions:**
1. Wait 10-15 minutes after DNS propagates
2. Check GitHub Pages settings for SSL status
3. Ensure "Enforce HTTPS" is enabled in Pages settings
4. Try accessing `http://` version first, then HTTPS
5. Clear browser cache and try again

### Site Shows GitHub Pages Subdomain Content

**Symptoms:** Custom domain shows content but with wrong paths/assets

**Solutions:**
1. This means basePath is still being used
2. Add `CUSTOM_DOMAIN=true` secret to repository
3. Trigger a new deployment
4. Or wait - GitHub Pages should handle this automatically

### Mixed Content Warnings

**Symptoms:** Browser shows warnings about HTTP/HTTPS mixed content

**Solutions:**
1. Ensure all internal links use HTTPS
2. Check that images and assets load over HTTPS
3. Enable "Enforce HTTPS" in GitHub Pages settings

### www Subdomain Not Working

**Symptoms:** `www.visiblehomeinspections.com` doesn't work

**Solutions:**
1. Add CNAME record for `www` subdomain pointing to `gits5213.github.io`
2. In GitHub Pages settings, you can add both `visiblehomeinspections.com` and `www.visiblehomeinspections.com`
3. Choose which one redirects to the other

## DNS Configuration Examples

### Bluehost (Recommended for this project)

**See detailed guide:** [BLUEHOST_DNS_SETUP.md](./BLUEHOST_DNS_SETUP.md)

**Quick setup:**
1. Log into Bluehost cPanel
2. Go to **Domains** → **DNS** or **Advanced** → **DNS Zone Editor**
3. Add **four A records** for root domain (@):
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
4. Add **CNAME record** for www subdomain:
   - **Host**: `www`
   - **Points to**: `gits5213.github.io`

### GoDaddy

1. Log into GoDaddy
2. Go to **My Products** → **DNS**
3. Under **Records**, add:
   - **Type**: `CNAME`
   - **Name**: `@`
   - **Value**: `gits5213.github.io`
   - **TTL**: `1 Hour`

### Namecheap

1. Log into Namecheap
2. Go to **Domain List** → Click **Manage** next to your domain
3. Go to **Advanced DNS** tab
4. Add new record:
   - **Type**: `CNAME Record`
   - **Host**: `@`
   - **Value**: `gits5213.github.io`
   - **TTL**: `Automatic`

### Cloudflare

1. Log into Cloudflare
2. Select your domain
3. Go to **DNS** → **Records**
4. Add record:
   - **Type**: `CNAME`
   - **Name**: `@` (or your root domain)
   - **Target**: `gits5213.github.io`
   - **Proxy status**: Can be Proxied (orange cloud) or DNS only (grey cloud)
   - **TTL**: Auto

## After Setup

Once your custom domain is working:

1. ✅ Your site will be accessible at `https://visiblehomeinspections.com`
2. ✅ The GitHub Pages subdomain (`gits5213.github.io/visible-home-inspections/`) will still work
3. ✅ All future deployments will automatically work with your custom domain
4. ✅ SSL certificate will auto-renew

## Important Notes

- **Don't delete the `CNAME` file** that GitHub creates in your repository
- **DNS changes can take time** - be patient (up to 48 hours)
- **SSL provisioning takes 5-10 minutes** after DNS propagates
- **Both domains work** - custom domain and GitHub Pages subdomain
- **Future deployments** automatically work with custom domain (no extra configuration needed)

## Support

If you're still having issues:
- Check [GitHub Pages documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- Review DNS records with online DNS checker
- Contact your domain registrar support
- Check GitHub Pages status page

Your custom domain should be working within 24-48 hours! 🚀

