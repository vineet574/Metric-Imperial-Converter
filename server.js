const express = require('express');
const app = express();
const cors = require('cors');
const convertHandler = require('./controllers/convertHandler.js');
const apiRoutes = require('./routes/api.js');

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/convert', apiRoutes);

// Root route for testing
app.get('/', (req, res) => {
  res.send('Metric-Imperial Converter API');
});

// Listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
