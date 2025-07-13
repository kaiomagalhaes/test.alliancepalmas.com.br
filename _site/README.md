# Terapeuta Sheila Moraes - Jekyll Website

This is a Jekyll-based website for Sheila Moraes, a therapist specializing in integrative therapies.

## Features

- Responsive design
- Service showcase
- Blog articles
- Client testimonials
- Contact form
- Mobile-friendly navigation

## Setup

### Prerequisites

- Ruby (version 2.5 or higher)
- RubyGems
- GCC and Make

### Installation

1. Install Jekyll and Bundler:

   ```bash
   gem install jekyll bundler
   ```

2. Install dependencies:

   ```bash
   bundle install
   ```

3. Build and serve the site:

   ```bash
   bundle exec jekyll serve
   ```

4. Open your browser and navigate to `http://localhost:4000`

## Project Structure

```
├── _config.yml          # Jekyll configuration
├── _layouts/            # Page layouts
│   └── default.html     # Default layout
├── _includes/           # Reusable components
│   ├── navigation.html  # Navigation menu
│   └── footer.html      # Footer
├── _servicos/           # Service data files
├── _artigos/            # Article data files
├── _depoimentos/        # Testimonial data files
├── assets/              # Static assets
│   ├── css/             # Stylesheets
│   └── js/              # JavaScript files
└── index.html           # Homepage
```

## Adding Content

### Services

Add new services by creating markdown files in the `_servicos/` directory:

```markdown
---
title: Service Name
description: Service description
icon: fas fa-icon-name
---
```

### Articles

Add new articles by creating markdown files in the `_artigos/` directory:

```markdown
---
title: Article Title
image: image-url
url: article-url
link_text: Read more
---
```

### Testimonials

Add new testimonials by creating markdown files in the `_depoimentos/` directory:

```markdown
---
author: Client Name
content: Testimonial text
---
```

## Customization

### Colors

Update the CSS variables in `assets/css/main.css`:

```css
:root {
  --primary: #6a2c70;
  --secondary: #f08a5d;
  --light: #f9f9f9;
  --dark: #333;
  --max-width: 1100px;
}
```

### Contact Form

Update the form action URL in `index.html` to point to your form service (e.g., Formspree, Netlify Forms).

## Deployment

### GitHub Pages

1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select source branch (usually `main` or `master`)
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `bundle exec jekyll build`
3. Set publish directory: `_site`
4. Deploy

### Other Platforms

The site can be deployed to any static hosting service that supports Jekyll.

## License

This project is licensed under the MIT License.
