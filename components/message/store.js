const db = require('mongoose');
const Model = require('./model')
// const uri = 'mongodb+srv://KevinCeferino:MAwEtsjj3VeAdJPb@tele-mongo-node.bxebgua.mongodb.net/?retryWrites=true&w=majority';
const uri = 'mongodb+srv://KevinCeferino:MAwEtsjj3VeAdJPb@tele-mongo-node.bxebgua.mongodb.net/tele-mongo-node';

db.Promise = global.Promise;
db.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('[db] Conectada con éxito'))
  .catch(err => console.error('[db]', err));


function addMessage(message){
    // list.push(message);
    console.log(message);
    const myMessage = new Model(message)
    myMessage.save();
}

async function getMessages(){
    // return list;
    const messages = await Model.find();
    return messages;
}

module.exports = {
    add: addMessage,
    list: getMessages,
    // get: ,
    // update: ,
    // delete: ,
}