const notFoundHandler = (err, req, res, next) => {
    if (err.httpStatusCode === 404) {
        res.status(404).send('Not Found')
    }
    //we need to put next so that if it doesn't match the if criteria goes to the next handler
    next(err)
    
}
const badRequestHandler = (err, req, res, next) => {
  if (err.httpStatusCode === 400) {
    res.status(400).send(err);
  }
  //we need to put next so that if it doesn't match the if criteria goes to the next handler
  next(err);
};

const unauthorizedHandler = (err, req, res, next) => {
    if (err.httpStatusCode === 401) {
        res.status(401).send('Unahtorized')
    }
    next(err)
}

const forbiddenHandler = (err, res, req, next) => {
    if (err.httpStatusCode === 403) {
        res.status(403).send("Forbidden!");
    }
    next(err)
}

const genericErrorHandler = (err, req, res, next) => {
    //this undenfified whatever response has not been handled 
    if (!res.headersSent) {
        res.status(err.httpStatusCode || 500).send('Generic Server Error')
    }

    //here we don't need a next because it is the ultimate error handler which meets any condition left
}

//I export the error handlers 
module.exports = {
    notFoundHandler,
     badRequestHandler ,
    unauthorizedHandler,
    forbiddenHandler,
    genericErrorHandler
}