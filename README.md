# NestJS Tutorial On Integartion Testing

In this tutorial we will learn integration testing in nestjs without mocking dependencies.

### Run the API in development mode
yarn                               // install
yarn db:restart                    // start databases in docker in dev mode
yarn prisma migrate reset --force  // start databases migration
yarn start:dev                     // start api in dev mode

### Run the end-to-end tests
yarn          // install
yarn test:int // start api in dev mode
