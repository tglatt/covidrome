# covidrome

## Installation

Make sure you're using NodeJS 10.15

```sh
# Install all the packages
$ yarn
```

### Build

```sh
# Build all the packages
$ yarn build
```

### Development

```sh
# start db
$ docker-compose up --build
# migrate 
$ ./node_modules/.bin/knex migrate:latest
# migrate 
$ ./node_modules/.bin/knex seed:run

# start
$ yarn dev
```

### Build and run

```sh
docker build . -t covidrome
docker run --publish 8080:80 covidrome
```
