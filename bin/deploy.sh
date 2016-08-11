if ! currentbranch=$(git symbolic-ref --short -q HEAD)
then
	echo "Cannot find current branch."
	exit 1
fi

if ! git diff-index --quiet HEAD --; then
    echo "Unable to deploy!"
	echo "There are uncommited changes on this repository."
    echo "Please commit your changes and try again."
	exit 1
else
    git push dev $currentbranch:master
fi
