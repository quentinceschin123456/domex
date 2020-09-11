scriptPath='C:\Users\AdminEtu\Desktop\REPOSITORY\domex\scripts'
appPath='C:/Users/AdminEtu/Desktop/REPOSITORY/domex/'


# module name
if [ -z $1 ]
then 
    echo entrer le nom du module
    read moduleName
else
    moduleName=$1
fi

if [ -z $2 ]
then 
    echo entrer le chemin souhaité pour le module, relatif only
    read modulePath
else
    modulePath=$2
fi

if [ -z $modulePath ]
then 
    $modulePath='./'
fi


modulePath=$appPath$modulePath

cd $modulePath 

mkdir $moduleName
mkdir $moduleName/component

mkdir $moduleName/view

mkdir $moduleName/data-access
mkdir $moduleName/data-access/model
echo 'export * from "."'>> $moduleName/data-access/model/index.ts
mkdir $moduleName/data-access/service
echo 'export * from "."'>> $moduleName/data-access/service/index.ts


touch $moduleName/data-access/index.ts
echo 'export * from "./model"
export * from "./service"' >> $moduleName/data-access/index.ts


echo souhaitez-vous un store vuex ? o/n
read answer
if [ $answer = 'o' ] 
then
    cd $modulePath/$moduleName/data-access/
    $scriptPath/createStore.sh
    echo 'export * from "./store" ' >> $modulePath/$moduleName/data-access/index.ts
else 
    echo le store ne sera pas créé
fi

cd $modulePath
touch $moduleName/index.ts
echo 'export * from "./component"
export * from "./view"
export * from "./data-access"' >> $moduleName/index.ts


