# API Reference

Base URL during local development: `http://localhost:5000`.

JSON request and response bodies use `Content-Type: application/json`. Authenticated routes require `Authorization: Bearer <token>`. Access tokens expire after seven days. Error responses use `{ "message": "..." }`.

## Health

### `GET /api/health`

Returns API and database connection status.

```json
{ "status": "ok", "database": "connected" }
```

## Authentication

### `POST /api/auth/register`

Create an account. Usernames are 3–24 characters and may contain letters, numbers, and underscores. Passwords must contain at least 8 characters.

```json
{
  "username": "alex_dev",
  "email": "alex@example.com",
  "password": "use-a-long-password"
}
```

Returns `201 Created` with a token and public user object. Duplicate username or email returns `409 Conflict`.

### `POST /api/auth/login`

```json
{ "email": "alex@example.com", "password": "use-a-long-password" }
```

Returns a token and public user object. Invalid credentials return `401 Unauthorized`.

### `GET /api/auth/me`

Authentication required. Returns the current public user.

## Discussions

A post contains `title`, `body`, `topic`, `author`, `votes`, `comments`, timestamps, and report data. Valid topics are `General`, `Technology`, `Design`, `Career`, `Projects`, and `Questions`.

### `GET /api/posts`

Public. Returns up to 100 posts, newest first. Optional query parameters:

| Parameter | Description |
| --- | --- |
| `topic` | Filter by an exact valid topic name |
| `search` | Case-insensitive search across title and body; regex metacharacters are escaped |

Example: `GET /api/posts?topic=Technology&search=react`

### `GET /api/posts/:id`

Public. Returns one discussion with populated author and comment author usernames.

### `POST /api/posts`

Authentication required. Creates a post.

```json
{
  "title": "What are you building this week?",
  "body": "I am prototyping a small community calendar and would love feedback on the data model.",
  "topic": "Projects"
}
```

Returns `201 Created` with the saved post.

### `DELETE /api/posts/:id`

Authentication required. Only the post author may delete it. A successful deletion returns `204 No Content`; deleting another member's post returns `403 Forbidden`.

## Replies and votes

### `POST /api/posts/:id/comments`

Authentication required. Adds a comment and returns the updated post.

```json
{ "body": "Have you considered using a separate collection for events?" }
```

### `POST /api/posts/:id/vote`

Authentication required. Toggles the current member's upvote and returns the updated post. Sending the request a second time removes that member's vote.

## Reports and moderation

### `POST /api/posts/:id/report`

Authentication required. Adds a report for moderator review.

```json
{ "reason": "This post appears to contain spam." }
```

The reason is optional and limited to 500 characters. Returns `201 Created` when stored. Duplicate reports are currently allowed.

### `GET /api/posts/moderation/reports`

Requires authentication **and** an account email present in the server's `MODERATOR_EMAILS` comma-separated allowlist. Returns report entries with post, author, reporter, reason, and date. There is no report resolution endpoint or moderator UI yet.

## Common status codes

- `200 OK` — successful read or update
- `201 Created` — resource created
- `204 No Content` — successful deletion
- `400 Bad Request` — invalid input or ID
- `401 Unauthorized` — missing, invalid, or expired token
- `403 Forbidden` — authenticated member lacks permission
- `404 Not Found` — post or account does not exist
- `409 Conflict` — username or email already registered
- `500 Internal Server Error` — unexpected server error
