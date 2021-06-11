// import hapi

const Hapi = require('@hapi/hapi');
const routes = require('./routes');

// Initialize new server

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  // start server
  await server.start();

  console.log(`Server running: ${server.info.uri}`);
};

// run init
init();
