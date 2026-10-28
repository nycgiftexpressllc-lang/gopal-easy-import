# Dr. Vijay B. Gopal — easy import edition

All files belong in the repository root. No subfolders are required in this source package.

## Upload and deploy
1. Extract the ZIP first. Upload every extracted file to the GitHub repository main page. Do not upload the ZIP itself.
2. In Vercel, import that repository. Framework: Other. Root Directory: leave empty. Build Command: npm run build. Output Directory: dist.
3. If replacing the previous upload, replace package.json, build.mjs, and vercel.json as well as the website assets. Old serve.mjs, hosting.json, or config.test.mjs are not used in the production build. This package includes the correct config.test.mjs.
4. Deploy the latest GitHub commit, rather than redeploying an older failed commit.

The build copies exactly five public files to dist and excludes configuration for deployment, tests, and build scripts. Run npm test and npm run build locally with Node.js 22+ if desired. No dependencies, keys, or installation are needed for the build.

## Practice configuration
Edit practice-config.js for all supplied business-card facts, approved HTTPS photo URL, and approved patient service URLs. Confirm name, credentials, address, telephone, fax, and email with the office before setting confirmedForLaunch to true. Static HTML metadata provides a fallback and should also be reviewed if branding changes.

## Patient services
This is a complete public information website with portal handoffs, not a patient-record system. Without configured approved URLs, patient actions explain that the service is not connected and offer a phone call. Payment processing, account balances, appointment submission, medication refill requests, and secure messages require the practice’s approved external services. Each URL can be configured individually, with the portal home as fallback. Do not store patient information, credentials, payment keys, or secrets in this public source. Do not use ordinary email for medical information.

## Before public launch
- Office confirms all practice details and approves website copy.
- Office supplies an approved doctor photo and usage permission.
- Office supplies and tests approved patient portal and payment URLs.
- Office provides approved privacy wording and its Notice of Privacy Practices; the website privacy dialog is not a substitute.
- Confirm office hours, insurance participation, appointment procedures, billing and refill instructions directly with the office before adding these facts.
- Check phone links, map destination, keyboard navigation, mobile layouts, zoom, screen reader behavior, and all patient-service links.
- Confirm hosting/vendor arrangements and review production security headers.

No biography, hospital affiliations, awards, insurance list, reviews, or office hours have been invented. The public site has no patient forms, database, tracking scripts, or payment intake. No GitHub repository or Vercel deployment is created by downloading this package.
