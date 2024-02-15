const express = require('express');
const builtinMiddleware = require('./middleware/builtinMiddleware');
const applicationMiddleware = require('./middleware/applicationMiddleware');

const app = express();
const PORT = 3000;

// Use built-in middleware
app.use(BuiltinMiddleware);

// Use application-level middleware
app.use(ApplicationMiddleware);

// Define routes
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
