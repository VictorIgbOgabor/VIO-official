# VIO Official Website

Premium web design and development agency for creative professionals worldwide.

## Setup on GitHub Pages

### Step 1. Create a GitHub Account
If you do not have one already, go to https://github.com and sign up.

### Step 2. Create a New Repository
1. Click the "+" icon at the top right of GitHub.
2. Select "New repository".
3. Name it: `vio-official`
4. Set it to Public.
5. Do NOT initialize with a README (you already have one).
6. Click "Create repository".

### Step 3. Upload Your Files
Option A (Drag and Drop, easiest):
1. Open your new empty repository.
2. Click "uploading an existing file".
3. Drag and drop ALL the files and folders from this project.
4. Scroll down and click "Commit changes".

Option B (Git command line):
```bash
git init
git add .
git commit -m "Initial VIO website launch"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/vio-official.git
git push -u origin main
```

### Step 4. Enable GitHub Pages
1. Go to your repository on GitHub.
2. Click "Settings" tab.
3. Scroll down to "Pages" in the left sidebar.
4. Under "Source", select "Deploy from a branch".
5. Select branch: `main`, folder: `/ (root)`.
6. Click "Save".
7. Wait 1 to 2 minutes, then your site will be live at:
   `https://YOUR-USERNAME.github.io/vio-official/`

### Step 5. Custom Domain (Optional)
To use a custom domain like `vioofficial.com`:
1. Purchase your domain from Namecheap, GoDaddy, or Google Domains.
2. In GitHub Pages settings, enter your custom domain.
3. In your domain registrar, add these DNS records:
   - A record: 185.199.108.153
   - A record: 185.199.109.153
   - A record: 185.199.110.153
   - A record: 185.199.111.153
4. Wait up to 24 hours for DNS propagation.

## Contact Form Setup
The contact form uses Formspree for submissions. To activate it:
1. Go to https://formspree.io and create a free account.
2. Create a new form and copy your form ID.
3. In `contact.html`, replace `your-form-id` in the form action URL with your actual form ID.

## File Structure
```
vio-official/
├── index.html          (Homepage)
├── services.html       (Services page)
├── portfolio.html      (Portfolio page)
├── about.html          (About page)
├── contact.html        (Contact page)
├── css/
│   └── style.css       (All styles)
├── js/
│   └── main.js         (All JavaScript)
└── README.md           (This file)
```

## Customization
- Colors: Edit CSS variables in `css/style.css` under `:root`
- Fonts: Google Fonts are loaded in the CSS `@import`
- Stats on homepage: Update numbers in `index.html` hero section
- Social links: Search for `footer__social-link` and update href values
- Projects: Update project cards in `portfolio.html` with real images and links

Built by VIO. Design. Strategy. Clarity.
