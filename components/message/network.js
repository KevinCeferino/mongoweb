const express = require('express');

const router = express.Router();

const response = require('../../network/response')

const controller = require('./controller')

router.get('/', (req, res) =>{
    controller.getMessages()
        .then((messageList) =>{
            response.success(req, res, messageList, 200);
        })
        .catch(e =>{
            response.error(req, res, 'Unexpected Error', 500, e)
        })
});

router.post('/', (req, res) =>{
    controller.addMessage(req.body.user, req.body.message)
        .then((data)=>{
            response.success(req, res, data, 201)
        })
        .catch(e => {
        response.error(req, res, 'Error inesperado', 404, e)
        })

});

module.exports = router;