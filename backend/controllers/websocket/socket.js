const apiDatabase = require("../database/api");

var tabMatchMaking = []

module.exports = function(io){
    io.on('connection', function (socket) {
        // socket.emit('news', {
        //     hello: 'world'
        // });
        socket.on('login', function (data) {
            apiDatabase.model.user.find({username: data.username}, function(err, data){
                if (err) return handleError(res,err);
                if(data.length == 0){
                    socket.emit('login', {success:false, err:err});
                }
                socket.emit('login', {success:true, data:data});
            })
            
        });
        socket.on('matchmaking', function (data) {
            var index = tabMatchMaking.findIndex((value)=> value.data.sport == data.sport);
            if(index==-1){
                tabMatchMaking.push({
                    socket: socket.id,
                    data: data
                })
                socket.emit('wait', {success:true});
            }else{
                var opponent = tabMatchMaking.splice(index,1);
                
                var obj = {
                    success:true,
                    data:{
                        user1: data,
                        user2: opponent.data
                    }
                }

                io.sockets.to(opponent.socket).emit("found", obj);
                socket.emit('found', obj);
            }
            
        });

    });
}