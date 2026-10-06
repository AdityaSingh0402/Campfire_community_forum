# Security Policy

Campfire is an educational starter and is not yet hardened for public production use.

## Reporting a vulnerability

Please do not publish exploitable details in a public issue. If GitHub Security Advisories are enabled for this repository, use **Security → Advisories → Report a vulnerability** to contact the maintainers privately. Otherwise, contact the repository owner privately before sharing details. Include the affected component, impact, and steps to reproduce where safe.

## Current security limitations

- JWTs are stored in browser local storage. A production application should evaluate secure, `HttpOnly`, `SameSite` cookies and its CSRF protections.
- The API has no rate limiting, account verification, password reset, or automated abuse detection.
- Moderation reports are allowlisted with `MODERATOR_EMAILS`, but report resolution and a moderator interface are not implemented.
- The service uses permissive development defaults for MongoDB connection configuration; deployment configuration must be reviewed and secrets must be kept outside source control.
- There is no automated security audit or integration-test suite included with this starter.

## Safe deployment checklist

Before exposing a deployment to the public, use a unique high-entropy `JWT_SECRET`, restrict MongoDB network access and credentials, configure the correct `CLIENT_ORIGIN`, enable TLS, add rate limiting and monitoring, and review authentication, moderation, dependency, and data-retention requirements.
