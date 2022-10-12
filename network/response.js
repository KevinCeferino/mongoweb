exports.success = (req, res, message, status)=>{
    res.status(status || 200).send({
        error: '',
        data: message
    });
}

exports.error = (req, res, message, status, details)=>{
    console.log(`[Response error] ${details}`);
    res.status(status || 500).send({
        error: message,
        data    : ''
    });
}