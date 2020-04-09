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

To start the dev server with hot reloading

```sh
$ yarn dev
```

To add some test data, you can run

```sh
# migrate
$ yarn run knex seed:run
```

### Build and run

```sh
docker build . -t covidrome
docker run --publish 8080:80 covidrome
```
