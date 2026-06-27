# Security Policy

The **Sadhana APPSC** development team takes the security of our application and user data extremely seriously. We are committed to maintaining a robust security posture and resolving any potential vulnerabilities swiftly.

## Supported Versions

We only provide security updates for the latest version of the application deployed to the `main` branch. 

| Version | Supported          |
| ------- | ------------------ |
| Latest  | :white_check_mark: |
| Older   | :x:                |

## Reporting a Vulnerability

If you discover a security vulnerability within the Sadhana APPSC codebase or infrastructure, please do **not** disclose it publicly or create a public GitHub Issue.

Instead, please send an email immediately to our security and support team at:
📧 **contact.sadhanappsc@gmail.com**

Please include the following details in your report:
- A detailed description of the vulnerability.
- Steps to reproduce the issue.
- Potential impact and severity.
- Any relevant code snippets, logs, or screenshots.

### Response Timeline
We will acknowledge receipt of your vulnerability report within **48 hours**. We will then investigate the issue and keep you updated on the progress of our remediation efforts.

## Security Practices

We enforce several layers of security to protect our application:

- **Continuous Audits:** The codebase undergoes regular automated and manual security audits.
- **Dependency Management:** All NPM dependencies are actively monitored for known vulnerabilities (CVEs) and patched regularly.
- **Security Headers:** The production application is enforced with strict HTTP security headers including robust Content Security Policies (CSP), `X-Content-Type-Options`, and `Referrer-Policy`.
- **Infrastructure:** The application is deployed on Vercel, leveraging their enterprise-grade Edge Network and automatic SSL/TLS certificate management.
- **Client-Side Sanitization:** All user inputs and API responses (where applicable) are strictly sanitized to prevent Cross-Site Scripting (XSS) attacks.

Thank you for helping us keep Sadhana APPSC safe and secure!
