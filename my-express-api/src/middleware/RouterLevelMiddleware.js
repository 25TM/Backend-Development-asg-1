const routerMiddleware = (req, res, next) => {
    
    console.log('Router-level middleware executed');
    next();
  };
  
  module.exports = routerMiddleware;