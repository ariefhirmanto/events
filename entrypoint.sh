#!/bin/sh
yarn typeorm schema:sync
yarn install
yarn start
