# Backend de tienda de Ropa

## Instalacion y actualizacion de prisma

1. npx prisma generate
2. npx prisma migrate dev --name init
3. npx prisma db push

## Empaquetacion del dispositivo

1. Ejecutar `pnpm build`
2. Copiar la carpeta dist a la carpeta distribucion /backend
3. Luego de instalar poner habilitar el puerto en el firewall
   `New-NetFirewallRule -DisplayName "MiServidorBackup :puerto" -Direction Inbound -Protocol TCP -LocalPort :puerto -Action Allow`
