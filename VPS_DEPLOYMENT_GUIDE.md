# 🐧 Linux VPS Deployment Guide

## Prerequisites

- Ubuntu/Debian VPS with root/sudo access
- Domain name (optional but recommended)
- SSH access to your VPS

---

## Step 1: Connect to Your VPS

```bash
ssh root@your-vps-ip
# OR
ssh your-username@your-vps-ip
```

---

## Step 2: Install Node.js 20.x

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 20.x
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Verify installation
node -v  # Should show v20.x.x
npm -v
```

---

## Step 3: Install Git and Clone Repository

```bash
# Install Git
sudo apt install git -y

# Clone your repository
cd /var/www
sudo git clone https://github.com/tarak6984/Integrated-System-AI.git
cd Integrated-System-AI

# Set permissions
sudo chown -R $USER:$USER /var/www/Integrated-System-AI
```

---

## Step 4: Install Dependencies

```bash
# Install all dependencies
npm install

# Install PM2 globally (for process management)
sudo npm install -g pm2
```

---

## Step 5: Create Environment File

```bash
# Create .env file
nano .env
```

**Add this content:**
```env
NODE_ENV=production
PORT=5001
CLIENT_URL=http://your-domain.com
JWT_SECRET=your-super-secret-key-change-this-NOW
DB_PATH=./server/database.sqlite

# Optional: Email service
VITE_NEWS_API_KEY=your-news-api-key
VITE_EMAILJS_SERVICE_ID=your-service-id
VITE_EMAILJS_TEMPLATE_ID=your-template-id
VITE_EMAILJS_PUBLIC_KEY=your-public-key
```

**Save:** `Ctrl + X`, then `Y`, then `Enter`

---

## Step 6: Build the Application

```bash
# Build frontend
npm run build

# This creates the /dist folder
```

---

## Step 7: Start with PM2

```bash
# Start the application
pm2 start server/index.js --name "integrated-systems-ai"

# View logs
pm2 logs integrated-systems-ai

# Check status
pm2 status

# Make PM2 restart on server reboot
pm2 startup
pm2 save
```

---

## Step 8: Install and Configure Nginx (Reverse Proxy)

```bash
# Install Nginx
sudo apt install nginx -y

# Create Nginx configuration
sudo nano /etc/nginx/sites-available/integrated-systems-ai
```

**Add this configuration:**
```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    # Serve static files
    location / {
        proxy_pass http://localhost:5001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

**Save and enable:**
```bash
# Enable the site
sudo ln -s /etc/nginx/sites-available/integrated-systems-ai /etc/nginx/sites-enabled/

# Test Nginx configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

---

## Step 9: Install SSL Certificate (Let's Encrypt)

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Get SSL certificate
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

# Follow the prompts
# Certbot will automatically configure HTTPS
```

---

## Step 10: Configure Firewall

```bash
# Allow HTTP, HTTPS, and SSH
sudo ufw allow 22/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# Enable firewall
sudo ufw enable

# Check status
sudo ufw status
```

---

## 🎯 Your App is Now Live!

Visit: `https://your-domain.com`

---

## 📝 Useful PM2 Commands

```bash
# View logs
pm2 logs integrated-systems-ai

# Restart app
pm2 restart integrated-systems-ai

# Stop app
pm2 stop integrated-systems-ai

# Delete app from PM2
pm2 delete integrated-systems-ai

# Monitor
pm2 monit
```

---

## 🔄 Deploying Updates

When you make changes:

```bash
# SSH to your VPS
ssh root@your-vps-ip

# Navigate to project
cd /var/www/Integrated-System-AI

# Pull latest changes
git pull origin main

# Install new dependencies (if any)
npm install

# Rebuild frontend
npm run build

# Restart PM2
pm2 restart integrated-systems-ai
```

---

## 🐛 Troubleshooting

### Check if app is running:
```bash
pm2 status
pm2 logs integrated-systems-ai --lines 50
```

### Check Nginx:
```bash
sudo nginx -t
sudo systemctl status nginx
sudo tail -f /var/log/nginx/error.log
```

### Check if port is in use:
```bash
sudo netstat -tlnp | grep 5001
```

### Restart everything:
```bash
pm2 restart integrated-systems-ai
sudo systemctl restart nginx
```

---

## 🔐 Security Best Practices

1. **Change default SSH port:**
   ```bash
   sudo nano /etc/ssh/sshd_config
   # Change Port 22 to something else
   sudo systemctl restart ssh
   ```

2. **Disable root login:**
   ```bash
   sudo nano /etc/ssh/sshd_config
   # Set: PermitRootLogin no
   sudo systemctl restart ssh
   ```

3. **Keep system updated:**
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

4. **Use strong JWT secret:**
   Generate one: `openssl rand -base64 64`

---

## 📊 Monitoring

```bash
# Install monitoring tools
sudo apt install htop -y

# View system resources
htop

# View disk usage
df -h

# View memory usage
free -h
```

---

## 🎉 Success!

Your Integrated Systems AI app is now deployed on your VPS!

**Access your app at:** https://your-domain.com

**Features:**
- ✅ Production-ready deployment
- ✅ HTTPS with SSL
- ✅ Auto-restart on crash (PM2)
- ✅ Reverse proxy (Nginx)
- ✅ Firewall configured
- ✅ Process monitoring

---

## 📞 Need Help?

- Check logs: `pm2 logs`
- Check Nginx: `sudo nginx -t`
- Check firewall: `sudo ufw status`
- Restart app: `pm2 restart integrated-systems-ai`

---

*Happy Deploying! 🚀*
