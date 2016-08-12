#!/bin/bash

if [ "$1" = 'production' ]; then
    BUILDENV=production
else
    BUILDENV=development
fi


echo -e "\033[1m=> Clean"
echo -e "-------------------------\033[0m"
npm run clean

echo
echo -e "\033[1m=> Imagemin"
echo -e "-------------------------\033[1m"
npm run images $BUILDENV

echo
echo -e "\033[1m=> Sass"
echo -e "-------------------------\033[0m"
npm run sass $BUILDENV

echo
echo -e "\033[1m=> Iconfont"
echo -e "-------------------------\033[0m"
npm run iconfont $BUILDENV

echo
echo -e "\033[1m=> Webpack"
echo -e "-------------------------\033[0m"
npm run webpack $BUILDENV

echo
echo -e "\033[1m=> Assemble"
echo -e "-------------------------\033[0m"
npm run assemble $BUILDENV
