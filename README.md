# Trace & Statistics

Sample app to trace and get statistics from IP addresses

## Quickstart

Required:
- node v16 (install using NVM)
```bash
nvm install --lts 
nvm use --lts
```

- Docker

## Instalation

```bash
npm install
```

## Run locally

```bash
npm run dev
```

## Testing

```bash
npm t
```

## Usage

In order to fully understand how the API work please refer to the Swagger documention by running
```bash
npm run dev
```
then go to your browser to http://localhost:3000/docs/

This service require the use of MongoDB as an external service


## Docker instructions

This project can be built with Docker just by using the following commands

```bash
docker build . -t <your username>/cookunity
docker run -p 8000:3000 -d <your username>/node-web-app
```


## TODO:

- implement redis cache
- improve testing