import React from 'react';
import '../styles/components/history.scss';


const History = (props)=> {
    console.log(props)
    var table = props.match.map((val)=>{
        return <tr><td>{val.user.username}</td><td>{val.result}</td><td>{val.opponentResult}</td></tr>;
    })
      return (
        <div>
            <table class="history">
                <tr>
                    <th>Opponent</th>
                    <th>Your score</th>
                    <th>Opponent's score</th>
                </tr>
                {table}
            </table>
        </div>
      );
    }

  export default History;
//   _id:{type: mongoose.Schema.Types.ObjectId, required: true},
//             name: {type: String, required: true},
//             icon: {type: String, required: true},
//             ranking: {type: Number, default: 0},
//             league: {type: Boolean, default:false},
//             stats:[{
//                 name: {type: String, required: true},
//                 value: {type: String, required: true}
//             }],
//             match:[{
//                 user:{
//                     _id: {type: mongoose.Schema.Types.ObjectId, required: true},
//                     username:{type: String, required: true}
//                 },
//                 result : {type: Number, required: true},
//                 opponentResult : {type: Number, required: true},
//                 type:{type: String, required: true}
//             }],
//             note:[{
//                 type:{type: String, required: true},
//                 content:{type: String, required: true}
//             }]