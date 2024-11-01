#!/bin/bash

# install dependencies
echo "installing dependencies"
yarn
echo "installing dependencies finish"

# "next build" will create a production ready build directory
# "next export" will export nextjs files as bundle like in react app in "out" directory...
next build