# Dolpo.ai Website

Dolpo.ai provides private AI solutions hosted on customer infrastructure.
This repository contains a React front-end served via CDN and suitable for
GitHub Pages deployment.

## Pages

- **Home** – overview of our on-premise AI offerings
- **Services** – details on custom models, deployment, and support
- **About** – mission and approach to secure local AI
- **Contact** – email form for reaching our team

## Development

1. Install dependencies (optional for CDN-based build):
   ```
   npm install
   ```
2. Run tests:
   ```
   npm test
   ```
3. Serve locally for development:
   ```
   npx serve .
   ```

## Deployment

The static files in this repository can be deployed directly to GitHub Pages.
To publish:

1. Push changes to the `main` branch.
2. In the repository settings on GitHub, enable **Pages** and select `main` as
   the source with the root directory.
3. Save the settings and GitHub will build and serve the site at the provided
   URL.
