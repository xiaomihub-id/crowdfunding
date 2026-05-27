# XiaomiHub | XFI Crowdfunding

Static crowdfunding archive and facilitation platform for **XiaomiHub | Xiaomi Federation Indonesia (XFI)**.

XFI acts as a **community facilitator and umbrella/federation** for Xiaomi device development communities. Campaigns are owned by their maintainers or organizers, while this repository keeps public campaign information, funding progress, updates, and closure records accessible for transparency.

XFI is not a profit-oriented platform. Crowdfunding exists to support maintainers, device source work, and related community projects. Contributions are fully allocated to the maintainer, developer, or team responsible for the related device/project.

Pencatatan crowdfunding mulai dilakukan dan diarsipkan secara terbuka di GitHub sejak tahun 2025. Data crowdfunding sebelum periode tersebut kemungkinan belum terdokumentasi secara lengkap.

## Campaign Data

Campaigns are driven from:

```text
src/data/campaigns.json
```

To add a future campaign, add a new object to the JSON file using the existing Rodin campaign as the reference shape.

Required campaign fields include:

- `title`
- `codename`
- `maintainer`
- `target`
- `raised`
- `supporters`
- `status`
- `startDate`
- `endDate`
- `description`
- `updates`
- `completed`
- `featured`

## Preserved Archive

The completed **POCO X7 Pro / rodin** campaign remains preserved:

- Source data: [`src/data/campaigns.json`](./src/data/campaigns.json)
- Archive page route: `/rodin/`
- Campaign detail route: `/campaigns/rodin/`

The Rodin campaign is marked as **Successfully Funded** and **Completed Campaign**.

## Brand Assets

Official XFI logos live in:

```text
public/brand/
```

- `XFI_logo.svg` is the primary colored mark for the navbar and hero branding.
- `XFI_logo_white.svg` is the monochrome mark for occasional inverted or low-emphasis brand surfaces.
- `XFI_mainlogo.svg` is the full Xiaomi Federation Indonesia logo for About, transparency, and larger official branding sections.

## Development

```bash
npm install
npm run dev
npm run build
```

The site is built with Astro and Tailwind CSS for GitHub Pages compatible static output.

## Deployment

GitHub Pages must use **GitHub Actions** as the source, not "Deploy from branch".

The deployment workflow is:

```text
.github/workflows/deploy.yml
```

Astro builds to `dist/`, and `public/.nojekyll` is included so GitHub Pages does not process the output with Jekyll.

**XiaomiHub | XFI**  
_Community-driven, transparent, and accountable._
