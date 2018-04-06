echo "***************************"
echo "Actualizando codigo: git pull"
git pull
echo ""
cd ..
echo "***************************"
echo "Actualizando paquetes servidor: npm install"
npm install
echo ""
echo "***************************"
echo "Compilando TypeScript servidor: tsc"
tsc
cd client
echo ""
echo "***************************"
echo "Actualizando paquetes servidor: npm install"
npm install
echo ""
echo "***************************"
echo "Compilando TypeScrip client: tsc"
tsc
echo ""
echo "***************************"
echo "Compilando angular: ng build"
ng build
echo ""
echo "***************************"
echo "Actualizando imagenes cp de images a client"
cp -r ../client/images ../client/dist/
cd ..
echo ""
echo "***************************"
echo "Ejecutando el forever"
forever stopall
forever start bin/www

echo ""
echo ""
echo "***************************"
echo "Instalación concluída"
forever list