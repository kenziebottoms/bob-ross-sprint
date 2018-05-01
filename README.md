# The Bob Ross Sprint

## _Start with a blank canvas, and end up with a happy little full-stack web app_

This app brings together 6 months of web development training for NSS Cohort 23 in one place. It allows a user to search a movie API to create a watch list of films and rank them after viewing.

As a single-page app, Angular handles the client-side routing, while NodeJS handles interactions with the API, as well as communication with the database.

### API Endpoints

| Path | Method | Result |
| ---- | ------ | ------ |
| `/movies/:q` | `GET` | Search movies for `q` |

### Angular Routes

| Path | Method | Result |
| ---- | ------ | ------ |
| `/#!/movies/:q` | `GET` | Search movies for `q` |