# Launch Watcher

A webapp that displays rocket launch data collected from Launch Library 2 public APIs.
LW is built using [Next.js](https://github.com/vercel/next.js/).

# Usage

### Docker

`docker build -t launch-watcher:latest .` to build a container and

`docker run -p 3000:3000 launch-watcher:latest` to start it.

### Manual

`npm install` to install all dependencies,

`npm run dev` to start the development server on `localhost:3000` or

`npm run build` to create an optimized build.

# API Requests and Endpoints

`https://lldev.thespacedevs.com/2.2.0/launch` for testing & development, stale dataset;

`https://ll.thespacedevs.com/2.2.0/launch` contains up-to-date data,
limited to 15 requests/hr without a key.

The application is set up to use `lldev` by default.

To reduce the number of API calls, a limit of 1 request/load (= max 100 items) is used.

# License

Copyright (c) 2023-present, curiosity

The application is licensed under GNU AGPLv3, see `LICENSE` for details.
