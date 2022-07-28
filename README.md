# README

## About

This is the Wails SvelteKit template.

## Getting Started

### Installing pnpm

https://pnpm.io/installation

### Installing Wails

```sh
go install github.com/wailsapp/wails/v2/cmd/wails@latest
```

### Creating a Project

```sh
wails init -n YOUR_PROJECT_NAME -t https://github.com/h8gi/wails-sveltekit
```

## Live Development

To run in live development mode, run `wails dev` in the project directory. In another terminal, go into the `frontend`
directory and run `npm run dev`. The frontend dev server will run on http://localhost:34115. Connect to this in your
browser and connect to your application.

## Building

To build a redistributable, production mode package, use `wails build`.
