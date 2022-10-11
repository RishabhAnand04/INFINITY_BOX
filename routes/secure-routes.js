const express = require('express');
const router = express.Router();

//
const needle = require('needle');
process.env.BEARER_TOKEN='AAAAAAAAAAAAAAAAAAAAALgdiAEAAAAAumjfp4p0ddJcjZEMjaa8ndxaYJk%3DuyUhldeE9I3EFA39fEX174dWxUWIsd6vIPnxk7z3oSKPizDYJd'
const token = process.env.BEARER_TOKEN;
const endpointUrl = "https://api.twitter.com/2/tweets/search/recent";

//


router.get(
  '/createTask',
  (req, res, next) => {
    res.json({
      message: 'You made it to the secure route',
      user: req.user,
      token: req.query.secret_token
    })
    next();
  }
);

router.get(
  '/createTask',
  (req, res, next) => {
    async function getRequest() {
    var str = req.query.hashtag;
    console.log(str);
    const params = {

        'query': str,
        'tweet.fields':'public_metrics'

    }

    const res = await needle('get', endpointUrl, params, {
        headers: {
            "User-Agent": "v2RecentSearchJS",
            "authorization": `Bearer ${token}`
        }
    })

    if (res.body) {
        return res.body;
    } else {
        throw new Error('Unsuccessful request');
    }
}
      (async () => {

    try {
        const response = await getRequest();
        console.dir(response, {
            depth: null
        });

    } catch (e) {
        console.log(e);
        process.exit(-1);
    }
    process.exit();
  })();
    
  }
);

module.exports = router;

