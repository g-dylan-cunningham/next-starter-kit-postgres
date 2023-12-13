https://www.youtube.com/watch?v=6UYkcOQUcZc&t=24s

create-next-app@latest (all default)
pnpm import package-lock.json
rm package-lock.json
pnpm dev (app should load);
- add docker compose file
docker compose up
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

