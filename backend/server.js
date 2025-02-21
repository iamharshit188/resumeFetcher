const express = require('express');
const bodyParser = require('body-parser');
const resumeRoutes = require('./routes/resume');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/resume', resumeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 