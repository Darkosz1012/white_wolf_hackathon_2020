var mongoose = require('mongoose');

module.exports = {
    user: new mongoose.Schema({
        firstname: {type: String, required: true},
        lastname: {type: String, required: true},
        email: {type: String, required: true},
        username: {type: String, required: true,unique: true},
        password: {type: String, required: true},
        friends: [{
            _id: {type: mongoose.Schema.Types.ObjectId, required: true},
            username:{type: String, required: true}
        }],
        sports: [{
            _id:{type: mongoose.Schema.Types.ObjectId, required: true},
            name: {type: String, required: true},
            icon: {type: String, required: true},
            ranking: {type: Number, default: 0},
            league: {type: Boolean, default:false},
            stats:[{
                name: {type: String, required: true},
                value: {type: String, required: true}
            }],
            match:[{
                user:{
                    _id: {type: mongoose.Schema.Types.ObjectId, required: true},
                    username:{type: String, required: true}
                },
                result : {type: Number, required: true},
                opponentResult : {type: Number, required: true},
                type:{type: String, required: true}
            }],
            note:[{
                type:{type: String, required: true},
                content:{type: String, required: true}
            }]
        }],
        singleScore:[{
            value: {type: Number, required: true},
            location: {type: String, required: false},
            date: {type:Date, required: true}
        }]
    }),
    matchMaking: new mongoose.Schema({
        team1:[{
            _id: {type: mongoose.Schema.Types.ObjectId, required: true},
            username:{type: String, required: true},
            accept:{type:Boolean, default:false}
        }],
        team2:[{
            _id: {type: mongoose.Schema.Types.ObjectId, required: true},
            username:{type: String, required: true},
            accept:{type:Boolean, default:false}
        }],
        sport:{
            _id: {type: mongoose.Schema.Types.ObjectId, required: true},
            name: {type: String, required: true},
            icon: {type: String, required: true}
        },
        location: {type: String, required: true},
        date: {type:Date, required: true}

    }),
    sport: new mongoose.Schema({
        name: {type: String, required: true},
        icon: {type: String, required: true}
        
    })

}
