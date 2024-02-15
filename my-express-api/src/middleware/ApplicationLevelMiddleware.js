const commonMiddleware = (req, res, next) => {
    console.log('Common middleware executed');
    next();
  };
  
  app.use(commonMiddleware);