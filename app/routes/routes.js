module.exports = (function() {
    'use strict';

    // ROUTES FOR OUR API
    // =============================================================================
    var router = require('express').Router();              // get an instance of the express Router

    // test route to make sure everything is working (accessed at GET http://localhost:8080/playground/nodeAPI)
    router.get('/', function(req, res) {
        res.json({ message: 'hello!' });   
    });

    router.get('/article',function(req,res){
        //db logic
        // Section.getArticle();
        // res.json({message: "Article: " + Section.getArticle()});
    });

    return router;
})();