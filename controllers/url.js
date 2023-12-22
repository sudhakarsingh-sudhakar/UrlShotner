const shortid = require("shortid");
const URL = require("../models/url")

async function handelGenerateNewShortURL(req,res){
    const body = req.body;
    if(!body.url) return res.status(400).json({error : "url is required"})

    const shortID = shortid(req.body.url);
    await URL.create({
        shortId : shortID,
        redirectURL : body.url,
        visitistory : [],
    });
    return res.json({id:shortID})
}

async function handelGetAnalytics(req,res){
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortId });
    return res.json({totalClicks : result.visitHistory.length,analytics:result.visitHistory})
}
//get response
async function handelGetRedirect(req,res){
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({shortId},{$push:{
            visitHistory:{
                timestamp : Date.now(),
            }

        }});
    res.redirect(entry.redirectURL)
}

module.exports={
    handelGenerateNewShortURL,
    handelGetAnalytics,
    handelGetRedirect
}