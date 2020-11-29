UserController=require('../controlleur/user-controller');

module.exports = (server) =>{
    server.get('/users',UserController.getUsers);
    server.get('/user/:id',UserController.getUser);
    server.post('/user',UserController.createUser);
    server.delete('/user',UserController.deleteUser);

    server.post('/autoInsertUsers/:number',UserController.autoInsertUsers);
    
    server.get('/front.html', function(request, response) {
        response.sendfile('./front.html');
      });

    //server.delete('/movie',MovieController.delete);
    //server.delete('/user',UserController.deleteUser); 
    
}