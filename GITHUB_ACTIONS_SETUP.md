# GitHub Actions Deployment to Bluehost

This guide will help you set up automatic deployment from GitHub to Bluehost.

## Prerequisites

- GitHub repository for your project
- Bluehost FTP/SFTP credentials
- Resend API key (for contact form)

## Setup Instructions

### Step 1: Choose Deployment Method

We've provided two workflow files:

1. **FTP Deployment** (`.github/workflows/deploy-bluehost.yml`)
   - Easier to set up
   - Uses FTP credentials
   - Recommended for most users

2. **SFTP Deployment** (`.github/workflows/deploy-bluehost-sftp.yml`)
   - More secure
   - Requires SSH key setup
   - Better for advanced users

### Step 2: Configure GitHub Secrets

Go to your GitHub repository → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**

#### For FTP Deployment:

Add these secrets:

1. **`BLUEHOST_FTP_SERVER`**
   - Value: Your FTP server (e.g., `ftp.visiblehomeinspections.com` or `ftp.yourdomain.com`)
   - Find this in Bluehost cPanel → FTP Accounts

2. **`BLUEHOST_FTP_USERNAME`**
   - Value: Your FTP username
   - Usually your cPanel username or a custom FTP user

3. **`BLUEHOST_FTP_PASSWORD`**
   - Value: Your FTP password

4. **`RESEND_API_KEY`**
   - Value: Your Resend API key (`re_ioUNCrEq_4ivW4mbFc72pEeXrnLrLuXPLsss`)

#### For SFTP Deployment:

Add these secrets:

1. **`BLUEHOST_SSH_KEY`**
   - Value: Your private SSH key
   - Generate SSH key pair if you don't have one
   - Add public key to Bluehost cPanel → SSH Access

2. **`BLUEHOST_HOST`**
   - Value: Your server hostname (e.g., `visiblehomeinspections.com`)

3. **`BLUEHOST_USERNAME`**
   - Value: Your cPanel username

4. **`BLUEHOST_PORT`** (optional)
   - Value: SSH port (usually `22`)

5. **`BLUEHOST_DEPLOY_PATH`** (optional)
   - Value: Deployment path (usually `/public_html/`)

6. **`RESEND_API_KEY`**
   - Value: Your Resend API key

### Step 3: Choose and Enable Workflow

1. **For FTP**: Keep `deploy-bluehost.yml` and delete `deploy-bluehost-sftp.yml`
2. **For SFTP**: Keep `deploy-bluehost-sftp.yml` and delete `deploy-bluehost.yml`

Or rename the one you want to use to `deploy.yml`

### Step 4: Push to GitHub

```bash
git add .
git commit -m "Add GitHub Actions deployment"
git push origin main
```

### Step 5: Monitor Deployment

1. Go to your GitHub repository
2. Click on **Actions** tab
3. Watch the workflow run
4. Check for any errors

## How It Works

1. **On Push**: When you push to `main` branch, workflow triggers
2. **Build**: Installs dependencies and builds static export
3. **Deploy**: Uploads `out/` folder contents to Bluehost `public_html/`
4. **Complete**: Your site is live!

## Manual Deployment

You can also trigger deployment manually:
1. Go to **Actions** tab
2. Select **Deploy to Bluehost** workflow
3. Click **Run workflow** → **Run workflow**

## Troubleshooting

### FTP Connection Failed
- Verify FTP server address
- Check username/password
- Ensure FTP is enabled in Bluehost cPanel
- Try using IP address instead of domain

### SFTP Connection Failed
- Verify SSH key is correct
- Check SSH is enabled in Bluehost
- Verify port number (usually 22)
- Ensure public key is added to Bluehost

### Build Fails
- Check Node.js version compatibility
- Verify all dependencies are in package.json
- Check build logs for specific errors

### Files Not Uploading
- Verify deployment path is correct (`/public_html/`)
- Check file permissions on Bluehost
- Ensure enough disk space

## Finding Bluehost FTP Credentials

1. Log into Bluehost cPanel
2. Go to **Files** → **FTP Accounts**
3. Find your FTP account or create a new one
4. Note the:
   - Server: `ftp.yourdomain.com` or IP address
   - Username: Your FTP username
   - Password: Your FTP password

## Security Notes

- Never commit `.env.local` or API keys to GitHub
- Use GitHub Secrets for all sensitive data
- Regularly rotate passwords and API keys
- Consider using SFTP instead of FTP for better security

## Next Steps

After setup:
1. Make a test change
2. Push to GitHub
3. Watch deployment in Actions tab
4. Verify site updates on Bluehost

Your site will automatically deploy every time you push to the main branch! 🚀

