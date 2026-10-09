# Full MERN Stack Project 1

A legacy e-commerce learning project connecting a React client to an Express/MongoDB server.

## Current status

Legacy learning prototype. This documentation describes the committed implementation, not a production-ready service.

## Features and implementation

- Catalog list/detail routes and catalog-item creation.
- Profile lookup and edit routes.
- Authentication controller mounted by the central router.
- Stripe payment creation code.

## Technology

React/Create React App, JavaScript, Express, MongoDB/Mongoose, and JWT authentication. Stripe integration code is also present.

## Repository map

| Path | Purpose |
| --- | --- |
| [client](<client>) | React browser application |
| [client/package.json](<client/package.json>) | Client scripts and dependencies |
| [server/src/index.js](<server/src/index.js>) | Express entry point |
| [server/src/router.js](<server/src/router.js>) | Mounted API routes |
| [server/src/Config/db.js](<server/src/Config/db.js>) | Database connection configuration |
| [server/package.json](<server/package.json>) | Server scripts and dependencies |

## Local setup

Use Node.js/npm compatible with the checked-in legacy dependencies and a local MongoDB instance. Install the server and client separately:

```bash
git clone https://github.com/frontend-alex/full-mern-stack-project1.git
cd full-mern-stack-project1/server
npm install
cd ../client
npm install
```

The server listens on port 5000. Update the local database connection in the linked database module before starting; setting a made-up DATABASE_URL variable would not configure the current implementation.

Start each process in a separate terminal from the repository root:

```bash
cd server
npm start
```

```bash
cd client
npm start
```

Create React App normally serves the client on http://localhost:3000. Review client API base URLs if the server port or hostname differs. Configure payment code only with your own Stripe test credentials; starting the UI does not verify payment handling.

## Verification

The client exposes the Create React App test command and a production build:

```bash
cd client
npm run build
npm test
```

The test command is interactive by default. Check whether the included tests cover application behavior rather than only the starter page. The server declares no automated test script. No build, database, authentication, or payment flow was executed during documentation work.

## Limitations and next steps

- Database connection settings are hardcoded in the current database module; local configuration must be reviewed before startup.
- Review authentication and payment secrets in source and externalize them before deployment.
- Dependencies are committed under server/node_modules; use the manifest for installation.
- Add focused API and authentication tests before relying on behavior beyond a local demonstration.

## Code review starting points

- [server/src/index.js](<server/src/index.js>)
- [server/src/router.js](<server/src/router.js>)
- [server/src/Config/db.js](<server/src/Config/db.js>)
