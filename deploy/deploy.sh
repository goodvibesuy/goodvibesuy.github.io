echo "********************************************"
echo "***"
echo "*** Scripts para hacer deploy de GoodVibes"
echo "***"
echo "********************************************"
echo ""

echo "*************************"
echo "*    ADVERTENCIA"
echo "El scripts no actualiza el código desde el repositorio!!"
echo "Es necesario hacer git pull a mano."
read -p "Presionar cualquier tecla para continuar (Ctrl + C para cancelar)... " -n1 -s
echo ""
echo "*************************"

echo "Hora comienzo: $(date +%Y-%m-%d-%H.%M.%S)"

echo "***************************"
echo "Paso 1/10 Cambiando directorio:"
cd /root/src/goodvibesuy.github.io
echo "current dir: $(pwd)"
echo ""

echo "***************************"
echo "Paso 2/10 Dando permisos de ejecución a scripts de backup"
echo "chmod a+x (path)/build/backup.sh"
chmod a+x /root/src/goodvibesuy.github.io/build/backup.sh
echo ""

echo "***************************"
echo "Paso 3/10 Actualizando paquetes servidor: npm install"
npm install
echo "current dir: $(pwd)"
echo ""

echo "***************************"
echo "Paso 4/10 Compilando TypeScript servidor: tsc"
tsc
echo "current dir: $(pwd)"
echo ""

echo "***************************"
echo "Paso 5/10 Actualizando paquetes cliente: npm install"
cd client
npm install
echo "current dir: $(pwd)"
echo ""

echo "***************************"
echo "Paso 6/10 Compilando TypeScrip client: tsc"
tsc
echo "current dir: $(pwd)"
echo ""

echo "***************************"
echo "Paso 7/10 Compilando angular: ng build"
ng build --locale es-UY 
echo "current dir: $(pwd)"
echo ""

echo "***************************"
echo "Paso 8/10 Actualizando imagenes cp de images a client"
cp -r /root/src/goodvibesuy.github.io/client/images /root/src/goodvibesuy.github.io/client/dist/
echo "current dir: $(pwd)"
echo ""

echo "***************************"
echo "Paso 9/10 Ejecutando el forever"
forever stopall
# el forever necesita iniciarse desde el directorio root
cd /root/src/goodvibesuy.github.io
forever start bin/www
echo "current dir: $(pwd)"
echo ""

echo "***************************"
echo "Paso 10/10 Instalación concluída"
forever list
echo "current dir: $(pwd)"
echo ""

echo "***************************"
echo "***   FIN"
echo "***************************"