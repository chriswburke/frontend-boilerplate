git ls-remote --exit-code $1 >/dev/null 2>&1
if [ $? -ne 0 ]
then
    echo "Unable to deploy!"
    echo "----------------------------------------------"
    echo "Server does not exist!"
    echo "Please add the server and try again."
	exit 1
fi

if ! currentbranch=$(git symbolic-ref --short -q HEAD)
then
	echo "Cannot find current branch."
	exit 1
fi

if ! git diff-index --quiet HEAD --; then
    echo "Unable to deploy!"
    echo "----------------------------------------------"
	echo "There are uncommited changes on this repository."
    echo "Please commit your changes and try again."
	exit 1
else
    echo "Starting deployment from branch $currentbranch"
    echo "----------------------------------------------"
    git push $1 $currentbranch:master
fi
