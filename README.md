# The Bob Ross Sprint

## _Start with a blank canvas, and end up with a happy little full-stack web app_

This app brings together 6 months of web development training for NSS Cohort 23 in one place. It allows a user to search a movie API to create a watch list of films and rank them after viewing.

As a single-page app, Angular handles the client-side routing, while NodeJS handles interactions with the API, as well as communication with the database.

### Node Routes

| Path | Method | Result |
| ---- | ------ | ------ |
| `/movies/search/:q` | `GET` | Search movies for `q` |
| `/login` | `POST` | Login |
| `/register` | `POST` | Register |
| `/logout` | `POST` | Logout |

### Angular Routes

| Path | Method | Result |
| ---- | ------ | ------ |
| `/#!/movies` | `GET` | Movie search page |
| `/#!/register` | `GET` | Render registration form |
| `/#!/login` | `GET` | Render login form |