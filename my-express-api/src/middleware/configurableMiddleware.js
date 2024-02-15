const configurableMiddleware = (config) => {
    return (req, res, next) => {
      const { param1, param2 } = config;
      console.log(`Configurable Middleware executed with : ${config}`);

      next();
    };
  };
  
  module.exports = configurableMiddleware;