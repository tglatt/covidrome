#!/bin/bash
set -e

POSTGRES_COVIDROME_USER=${POSTGRES_COVIDROME_USER:="covidrome"}
POSTGRES_COVIDROME_PASSWORD=${POSTGRES_COVIDROME_PASSWORD:="test"}

psql -v ON_ERROR_STOP=1 --username postgres <<-EOSQL
  -- Ensure that no one is connected to the database
  SELECT pg_terminate_backend(pid)
    FROM pg_stat_activity
    WHERE pid <> pg_backend_pid() AND datname in ('covidrome');

  -- Ensure that the emjpm database and schema is not
  DROP DATABASE IF EXISTS covidrome;

  -- Create the emjpm database and the default public schema
  CREATE DATABASE covidrome;

  -- covidrome user
  CREATE USER $POSTGRES_COVIDROME_USER with encrypted password '$POSTGRES_COVIDROME_PASSWORD';
  GRANT ALL PRIVILEGES ON DATABASE covidrome TO $POSTGRES_COVIDROME_USER;
  ALTER USER $POSTGRES_COVIDROME_USER CREATEDB;

EOSQL
