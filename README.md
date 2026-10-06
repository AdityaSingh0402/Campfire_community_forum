# Campfire

**A community forum for curious people to share, ask, build, and figure things out together.**

Campfire is a MERN stack discussion forum built with React, Express, Node.js, and MongoDB. Members can publish topic-based discussions, search the community, upvote useful posts, reply, and report posts for moderator review.

## Features

- Account registration and sign-in with bcrypt password hashing and JWT authentication
- Discussions organized into General, Technology, Design, Career, Projects, and Questions
- Search posts by title or body and filter by topic
- Upvote and remove your own vote
- Comment on discussions
- Report posts for moderator review
- Moderator report API guarded by an allowlist of email addresses
- Responsive layout for desktop and mobile screens

## Tech stack

| Area | Tools |
| --- | --- |
| Frontend | React 18, Vite |
| Backend | Node.js, Express 4 |
| Database | MongoDB, Mongoose 8 |
| Authentication | JSON Web Tokens, bcryptjs |
| Local development | npm workspaces, concurrently, nodemon |

## Getting started

### Prerequisites

- Node.js 20.19+ or 22.12+
- npm (included with Node.js)
- MongoDB running locally, or a MongoDB Atlas connection string

### Install and configure

1. Clone the repository and open its root directory.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Copy the server environment template:

   ```bash
   # macOS / Linux
   cp server/.env.example server/.env

   # Windows PowerShell
   Copy-Item server/.env.example server/.env
   ```

4. Edit `server/.env`:

   ```dotenv
   MONGODB_URI=mongodb://127.0.0.1:27017/campfire_forum
   JWT_SECRET=replace-with-a-long-random-secret
   PORT=5000
   CLIENT_ORIGIN=http://localhost:5173
   MODERATOR_EMAILS=moderator@example.com
   ```

   Use a unique, randomly generated JWT secret. `MODERATOR_EMAILS` is a comma-separated allowlist; create a member account with an address in that list to access the moderation reports endpoint.

5. Start the frontend and API together:

   ```bash
   npm run dev
   ```

6. Visit [http://localhost:5173](http://localhost:5173).

The Vite development server proxies `/api` requests to the Express API at `http://localhost:5000`. The API connects to MongoDB before it starts listening. To build the frontend for production, run `npm run build`.

## Project layout

```text
.
├── client/
│   ├── index.html
│   ├── vite.config.js
│   └── src/
│       ├── App.jsx
│       ├── main.jsx
│       └── style.css
├── server/
│   ├── .env.example
│   └── src/
│       ├── index.js
│       ├── middleware/
│       │   └── auth.js
│       ├── models/
│       │   ├── Post.js
│       │   └── User.js
│       └── routes/
│           ├── auth.js
│           └── posts.js
├── docs/
│   ├── API.md
│   └── CONTRIBUTING.md
├── .gitignore
├── package.json
└── README.md
```

## API documentation

See [docs/API.md](docs/API.md) for endpoints, authentication, parameters, and request examples. A quick health check is available at `GET /api/health`.

## Contributing

Bug reports and improvements are welcome. Read [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md) before opening an issue or pull request. Please never commit `.env` files or real secrets.

## Security notes

Campfire is a learning starter, not a production-hardened service. See [SECURITY.md](SECURITY.md) for the current authentication and moderation limitations and how to report a vulnerability.

## License

No license has been selected yet. Until one is added, the repository is not granted an open-source license; ask the repository owner before reusing or redistributing its code.
