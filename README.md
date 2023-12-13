https://www.youtube.com/watch?v=6UYkcOQUcZc&t=24s

create-next-app@latest (all default)
pnpm import package-lock.json
rm package-lock.json
pnpm dev (app should load);
- add docker compose file
docker compose up

- if port is in use
sudo lsof -i -P | grep LISTEN | grep :5432
kill -9 <pid>


pnpm add prisma -D
pnpx prisma init
- create model scema
pnpm prisma generate
- update .env file database url

pnpm add knex pg    - add knex for migrations
pnpx knex init -x ts   - makes knexfile typescript
- update knexfile - https://kevinwwwade.medium.com/the-ultimate-node-docker-setup-step-by-step-2023-update-4fd9dd8be48b

- typescript compiler needs some work
pnpm add ts-node
- add scripts in package.json
    "db:migrate": "TS_NODE_COMPILER_OPTIONS='{ \"module\": \"commonjs\" }' knex migrate:latest",
    "db:migrate:undo": "TS_NODE_COMPILER_OPTIONS='{ \"module\": \"commonjs\" }' knex migrate:down",
    "db:migrate:make": "TS_NODE_COMPILER_OPTIONS='{ \"module\": \"commonjs\" }' knex migrate:make"


- create a migration file by using one of those commands in /migrations
pnpm db:migrate:make init-db

- add migration commands

- run the migration
pnpm db:migrate
- it fails with "Unable to acquire a connection"
- the issue is that env vars in env.development file aren't loaded in knexfile
pnpm add dotenv
- add following line in knexfile
require('dotenv').config({ path: '.env.development'});


- now it fixed, run:
pnpm db:migrate    - should work


- clear out /app/page.tsx file
create /src/modules/db.ts






# brew services start postgresql
# brew services stop postgresql
# lsof -i :5432
# kill -9 <pid>
<!-- sudo lsof -i -P | grep LISTEN | grep :5432 -->