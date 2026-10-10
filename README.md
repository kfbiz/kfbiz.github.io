# KF Biz Website

The official website for **KF Biz**, a Turku, Finland–based business support service founded by Kyeonghwan Kim.

**Live website:** https://kfbiz.github.io/  
**GitHub repository:** https://github.com/kfbiz/kfbiz.github.io

KF Biz helps new and small-business owners navigate business planning, practical financial decisions, basic bookkeeping support, and business administration in Finland. The website is designed to make useful information and tools accessible, particularly to people who are starting a business in Finland.

## Website features

### Main website
- Responsive homepage with navigation for business resources, free tools, services, and contact.
- Mobile navigation menu.
- About page introducing KF Biz and its founder.
- Service pages describing the scope, process, example situations, and indicative prices for:
  - Business consulting
  - Bookkeeping support
  - Other business advisory
- Contact form for consultation requests.
- Free 30-minute first consultation offer.
- Privacy policy linked from the contact form and website footer.
- Thank-you page shown after a successful form submission.

### Guides for starting a business
The current guides are:
- [Starting a Business in Finland](https://kfbiz.github.io/guides/starting-a-business-in-finland.html)
- [Toiminimi vs Oy](https://kfbiz.github.io/guides/toiminimi-vs-oy.html)
- [Startup Checklist](https://kfbiz.github.io/guides/startup-checklist.html)

These guides provide general educational information and link to relevant official resources. They are not a substitute for individual legal, tax, or professional advice.

### Free business calculators
The website currently includes four standalone calculators:
- [VAT Calculator](https://kfbiz.github.io/tools/vat-calculator.html) — calculate a price with or without VAT using a selected rate.
- [Startup Cost Calculator](https://kfbiz.github.io/tools/startup-cost-calculator.html) — estimate the costs and working capital needed to start a business.
- [Break-even Calculator](https://kfbiz.github.io/tools/break-even-calculator.html) — estimate the sales volume needed to cover costs.
- [Profit Calculator](https://kfbiz.github.io/tools/profit-calculator.html) — estimate contribution margin, operating result, and margins from entered figures.

Each calculator includes instructions and explanatory information. Results are estimates and depend on the accuracy and completeness of the information entered.

### Progressive Web App (PWA)
The site includes a web app manifest, app icons, and a service worker. This provides basic installable-app functionality and caching for supported browsers. The service worker's cache list and version should be kept in sync with important website changes.

## Technology

This is a lightweight static website built with:
- HTML for page content and structure
- CSS for layout and responsive styling
- JavaScript for calculator logic, mobile navigation, and PWA functionality
- GitHub Pages for hosting
- FormSubmit for processing contact-form submissions

There is no build step or framework required. The pages are stored directly in the repository.

## Repository structure

```text
.
├── index.html
├── about.html
├── contact.html
├── privacy.html
├── thanks.html
├── manifest.webmanifest
├── sw.js
├── assets/
│   ├── styles.css
│   ├── contact.css
│   └── images/
├── guides/
│   ├── starting-a-business-in-finland.html
│   ├── toiminimi-vs-oy.html
│   └── startup-checklist.html
├── services/
│   ├── business-consulting.html
│   ├── bookkeeping.html
│   └── business-advisory.html
├── tools/
│   ├── vat-calculator.html
│   ├── startup-cost-calculator.html
│   ├── break-even-calculator.html
│   └── profit-calculator.html
└── icons/
    ├── icon-192.png
    └── icon-512.png
```

The logo assets are stored in `assets/images/`. Check the relevant HTML file for the exact image path used on each page.

## Publishing and updating the website

The site is published from this repository using GitHub Pages.

1. Open the repository: https://github.com/kfbiz/kfbiz.github.io
2. Open **Settings → Pages** and confirm the source is configured to deploy from the `main` branch and the repository root (`/ (root)`).
3. Edit an existing file or upload a new file, then commit the change to `main`.
4. GitHub Pages publishes the update automatically after deployment completes.
5. Open https://kfbiz.github.io/ and check the updated page.

For a simple static page, create an HTML file in the appropriate folder and link to it using a relative path. For example, a page in `guides/` can link to the contact page with `../contact.html`.

### Important when adding or changing pages

- Update the homepage links when adding a new guide, service, or tool.
- Keep navigation and footer links consistent across pages.
- Check mobile layout and links after publishing.
- If a new page should be available offline or through the PWA cache, add it to the relevant list in `sw.js`.
- When changing cached files, update the service worker's cache version so browsers can pick up the new cache.
- Use working relative paths for images, stylesheets, and links, especially for pages inside subfolders.

## Contact form and privacy

The contact form in `contact.html` uses FormSubmit to send enquiries to **kfbizcontact@gmail.com**. Form processing depends on the external FormSubmit service, and its initial email confirmation may need to be completed if the form recipient or setup changes.

The form includes a privacy-consent checkbox linked to `privacy.html`. If the form fields, processing service, purposes, or retention practices change, review and update the privacy policy accordingly. Test the form and thank-you-page redirect after making changes.

## Business details

- **Business name:** KF Biz
- **Business form:** Toiminimi (sole proprietorship)
- **Location:** Turku, Finland
- **Business ID (Y-tunnus):** 3576201-3
- **Email:** kfbizcontact@gmail.com
- **Website:** https://kfbiz.github.io/

## Maintenance notes

- Keep information about Finnish business rules, VAT, fees, and public services current. Prefer official Finnish sources such as [Suomi.fi](https://www.suomi.fi/) and [the Finnish Tax Administration (Vero)](https://www.vero.fi/).
- Review calculator explanations and disclaimers whenever tax rates or rules change.
- Prices and service descriptions on the website should match the services KF Biz actually offers.
- The website is informational and does not automatically determine a visitor's legal, tax, or accounting obligations.
