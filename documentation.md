# Getting Started

`npm i --save-dev prisma typescript nodemon ts-node @types/node`</br>
`npm i @prisma/client`</br>
`npx prisma init --datasource-provider postgresql`</br>
running `npx prisma generate` will manually generate the Prisma client</br>
start docker desktop locally</br>
run `docker-compose up -d` from the root directory</br>
run `npx prisma migrate dev --name init` to update database to reflect changes in the schema.prisma file</br>
run `docker exec -it prisma_wds_course psql -U prisma_db_user -d prisma_db` from the root directory to connect to the database to run commands/queries</br>
run `npm run devStart` to start development that will restart the server on saving
