echo "********************************************"
echo "***"
echo "*** Scripts para hacer deploy de GoodVibes"
echo "***"
echo "********************************************"
echo ""
echo "Hora comienzo: $(date +%Y-%m-%d-%H.%M.%S)"

echo "*************************"
echo "*    ADVERTENCIA"
echo "El scripts no actualiza el código desde el repositorio!!"
echo "Es necesario hacer git pull a mano."
read -p "Presionar cualquier tecla para continuar (Ctrl + C para cancelar)... " -n1 -s
echo "*************************"

echo "***************************"
echo "Paso 1/10 Cambiando directorio:"
echo ""
cd /root/src/goodvibesuy.github.io
pwd
echo ""

echo "***************************"
echo "Paso 2/10 Dando permisos de ejecución a scripts de backup"
echo "chmod a+x (path)/build/backup.sh"
chmod a+x /root/src/goodvibesuy.github.io/build/backup.sh
echo ""

cd ..
echo "***************************"
echo "Paso 3/10 Actualizando paquetes servidor: npm install"
echo ""
npm install
echo ""

echo "***************************"
echo "Paso 4/10 Compilando TypeScript servidor: tsc"
echo ""
tsc
echo ""

echo "***************************"
echo "Paso 5/10 Actualizando paquetes cliente: npm install"
echo ""
cd client
npm install
echo ""

echo "***************************"
echo "Paso 6/10 Compilando TypeScrip client: tsc"
echo ""
tsc
echo ""

echo "***************************"
echo "Paso 7/10 Compilando angular: ng build"
echo ""
ng build --locale es-UY 
echo ""

echo "***************************"
echo "Paso 8/10 Actualizando imagenes cp de images a client"
echo ""
cp -r ../client/images ../client/dist/
echo ""

echo "***************************"
echo "Paso 9/10 Ejecutando el forever"
echo ""
forever stopall
forever start bin/www
echo ""

echo "***************************"
echo "Paso 10/10 Instalación concluída"
echo ""
forever list
echo ""

echo "***************************"
echo "***   FIN"
echo "***************************"