# KF Biz website

Static first version of the KF Biz website, designed for GitHub Pages.

## Publish with GitHub Pages
1. Create a repository named `kf-biz-site` (or any name you prefer).
2. Upload the contents of this folder.
3. In GitHub, open **Settings → Pages**.
4. Choose **Deploy from a branch**, then select the `main` branch and `/ (root)`.
5. Save. GitHub Pages will publish the static site.

GitHub Pages supports HTML, CSS and JavaScript directly. A custom domain can be added later.

## Next development steps
- Add full Finland business guides and SEO content.
- Add a real business-directory data layer.
- Add contact/lead forms.
- Add analytics and conversion tracking.
- Connect payments for paid directory listings and digital products.

## Contact form

The site now includes `contact.html`, styled to match the current KF Biz Canva direction. The form uses FormSubmit as a lightweight form backend and sends requests to `kfbizcontact@gmail.com`. FormSubmit requires a one-time email confirmation the first time the form is submitted. The `_next` field points to `thanks.html` on the GitHub Pages site, so update that URL if the repository/site URL changes.

## Branding
The website uses the official KF Biz logo supplied by the owner in `assets/images/kf-biz-logo.png`. The logo is used consistently in the main site, contact page, thank-you page, and free-tool pages.
