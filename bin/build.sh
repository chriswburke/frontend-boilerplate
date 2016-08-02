#!/bin/bash

echo -e "\033[1m=> Clean"
echo -e "-------------------------\033[0m"
npm run clean

echo
echo -e "\033[1m=> Imagemin"
echo -e "-------------------------\033[1m"
npm run images

echo
echo -e "\033[1m=> Assemble"
echo -e "-------------------------\033[0m"
npm run assemble
