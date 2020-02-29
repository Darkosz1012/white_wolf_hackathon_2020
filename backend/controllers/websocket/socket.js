const apiDatabase = require("../database/api");


module.exports = function(io){
    io.on('connection', function (socket) {
        socket.emit('news', {
            hello: 'world'
        });
        socket.on('login', function (data) {
            apiDatabase.model.user.find({username: data.username}, function(err, data){
                if (err) return handleError(res,err);
                if(data.length == 0){
                    io.emit('login', {success:false, err:err});
                }
                io.emit('login', {success:true, data:data});
            })
            
        });
        socket.on('matchmaking', function (data) {
            apiDatabase.model.user.find({username: data.username}, function(err, data){
                if (err) return handleError(res,err);
                if(data.length == 0){
                    io.emit('login', {success:false, err:err});
                }
                io.emit('login', {success:true, data:data});
            })
            
        });

    });
}