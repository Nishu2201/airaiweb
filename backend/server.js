// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:3000', // Allow requests from this origin
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route to handle form submission
app.post('/api/v1/auth/addFeedback', (req, res) => {
  const { name, email, phone, message } = req.body;

  // Here you can process the form data, e.g., save it to a database
  // For demonstration, let's just log the received data
  console.log('Received form data:', { name, email, phone, message });

  // Send a response back to the client
  res.json({ success: true, message: 'Feedback submitted successfully' });
});

// Route for root URL
app.get('/', (req, res) => {
  res.send('Server is running'); // Send a simple response indicating that the server is running
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
