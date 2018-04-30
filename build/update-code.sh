echo "********************************************"
echo "***"
echo "*** Scripts para actualizar codigo fuente de GoodVibes"
echo "***"
echo "********************************************"
echo ""
read -p "Presionar cualquier tecla para continuar (Ctrl + C para cancelar)... " -n1 -s

echo ""
echo "Hora comienzo: $(date +%Y-%m-%d-%H.%M.%S)"

echo "***************************"
echo "Paso 1/3 Cambiando directorio: cd github"
echo ""
cd /root/src/goodvibesuy.github.io
echo "current dir: $(pwd)"
echo ""

echo "***************************"
echo "Paso 2/3 Copiar de respaldo del código: cp github github_backup"
echo ""
cd ..
cp -rf goodvibesuy.github.io/ goodvibesuy.github.io_backup_$(date +%Y-%m-%d-%H.%M.%S)
ls
echo "current dir: $(pwd)"
echo ""

echo "***************************"
echo "Paso 3/3 Actualización de código: git pull"
echo ""
cd goodvibesuy.github.io
git pull
echo "current dir: $(pwd)"
echo ""

echo "***************************"
echo "***   FIN"
echo "***************************"