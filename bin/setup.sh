#!/bin/bash

NAME=$(grep -m1 name package.json | awk -F: '{ print $2 }' | sed 's/[", ]//g')

git ls-remote --exit-code dev >/dev/null 2>&1
if [ $? -ne 0 ]
then
	echo "Remote dev does not exist."
    echo "Adding dev remote..."
    git remote add dev dokku@dev.sapientnyc.com:$NAME
    echo "Dev remote added!"
    echo "------------------------------------"
    echo "URL: http://$NAME.dev.sapientnyc.com"
else
    echo "Dokku configuration already exists."
fi
