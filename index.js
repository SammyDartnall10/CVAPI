'use strict';

const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/aboutme',
        handler: (request, h) => {

            return 'This is all about me';
        }
    });

    server.route({
        method: 'GET',
        path: '/experience/{id}',
        handler: (request, h) => {

            const id = request.params.id; 

            return `This will return info about job with the id ${id}`;
        }
    });

    server.route({
        method: 'GET',
        path: '/skills',
        handler: (request, h) => {

            return 'This returns my skills and tech stack';
        }
    });

    server.route({
        method: 'POST',
        path: '/talktome',
        handler: (request, h) => {

            return 'This will be where people can get in contact or give feedback';
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();