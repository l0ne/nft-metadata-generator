'use strict';

import * as Hapi from '@hapi/hapi';

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: '0.0.0.0'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return {status: 'OK'};
        }
    });

    server.route({
        method: 'GET',
        path: '/metadata/erc721/{id}',
        handler: function (request, h) {

            const json = {
                name:"Jake Kuhlman",
                description:"New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
                image:"https://images.unsplash.com/photo-1643101810683-9b4ba3b7adcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                attributes: [ ],
                external_url: "https://opensea.io/",
            };

            return h.response(json);
        }
    });

    server.route({
        method: 'GET',
        path: '/metadata/erc1155/{id}',
        handler: function (request, h) {
            const json = {
                name:"Jake Kuhlman",
                description:"New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
                image:"https://images.unsplash.com/photo-1643101810683-9b4ba3b7adcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                attributes: [ ],
                external_url: "https://opensea.io/",
            };

            return h.response(json);
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