# SilverTreeOfAman
Simulator part of Y86 Simulator

## Backend API Server

This project is initialized as a Node.js + Express + TypeScript HTTP API server.

- Port: `3333`
- Protocol: `HTTP`
- Source root: `src`
- Build output: `build`
- Swagger UI: `/docs`

## Installation

```bash
npm install
```

## Run

Development mode:

```bash
npm run dev
```

Build and run:

```bash
npm run build
npm run start
```

## API Categories and Paths

- Machine
	- `POST /machine/start`
	- `POST /machine/shutdown`
- Execute
	- `POST /execute/instruction`
	- `POST /execute/program`
- Memory
	- `GET /memory/view`
- Context
	- `GET /context/view`
- Device (TBD)
	- `GET /device`

Each API endpoint is implemented with separate classes:

- Router class: handles path matching and request/response wiring
- Service class: performs API business logic
- Schema class: defines request/response interfaces and validation
