const express = require('express');
const { exec } = require('child_process');
const router = express.Router();

// Fetch LinkedIn data and generate resume using web scraping
router.post('/generate', (req, res) => {
  const { linkedInProfileUrl } = req.body;

  exec(`python scrape_linkedin.py ${linkedInProfileUrl}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return res.status(500).send('Error generating resume');
      console.log("Not Fetching anything");
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return res.status(500).send('Error generating resume');
    }

    const linkedInData = JSON.parse(stdout);
    res.json({ message: 'Resume generated', data: linkedInData });
  });
});

module.exports = router; 