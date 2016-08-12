#!/bin/bash

NAME=$(grep -m1 name package.json | awk -F: '{ print $2 }' | sed 's/[", ]//g')

for i in dev qa staging
do
    git ls-remote --exit-code $i >/dev/null 2>&1
    if [ $? -ne 0 ]
    then
    	echo "Remote $i does not exist."
        echo "Adding $i remote..."
        git remote add $i dokku@$i.sapientnyc.com:$NAME
        echo "$i remote added!"
        echo "------------------------------------"
        echo "URL: http://$NAME.$i.sapientnyc.com"
        echo
        echo
    else
        echo "Dokku configuration for $i already exists."
    fi
done
