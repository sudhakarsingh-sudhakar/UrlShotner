const express = require('express');
const {handelGenerateNewShortURL,handelGetAnalytics,handelGetRedirect} = require("../controllers/url")
const router = express.Router();

router.post("/",handelGenerateNewShortURL);
//get analytics for ID
router.get("/analytics/:shortId",handelGetAnalytics)
// Redirect to page
router.get("/:shortId",handelGetRedirect)

module.exports = router;