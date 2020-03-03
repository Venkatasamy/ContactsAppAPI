//Initialize Express Router
let router = require('express').Router();

//Set Default API Response
router.get('/',function(req,res){
    res.json({
        status : 'API its working',
        message : 'Welcome To my REST API'
    });
});

var contactController = require('./ContactController');

router.route('/contacts').get(contactController.index).post(contactController.new);

router.route('/contacts/:contact_id').get(contactController.view).put(contactController.update).delete(contactController.delete);

module.exports = router;