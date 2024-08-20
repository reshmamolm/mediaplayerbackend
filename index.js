//import json-server
const jsonServer = require('json-server');

// create  server using create() method
const mediaPlayerServer = jsonServer.create()

//create a path/route to db.json file
const router = jsonServer.router('db.json');

//create a middle ware
const middleware = jsonServer.defaults();

//add middleware and router to mediaplayerServer

mediaPlayerServer.use(middleware);
mediaPlayerServer.use(router);

const PORT= 4000;

//run the mediaPlayerServer
mediaPlayerServer.listen(PORT,()=>{
    console.log(`Mediaplayer server running on PORT ${PORT}`)
})


