//Import Contact Model

Contact = require('./ContactModel');

//Handle Index Actions
// Get : /Contacts

exports.index = function(req,res){
    Contact.get(function(err,contacts){
        if(err){
            res.json({
                status:"error",
                message:err
            });
        }
        res.json({
            status:"Success",
            message : "Contact retrieved successfully",
            data:contacts
        });
    });
};

//Handle New Contact
//Post 

exports.new = function(req,res){
    var contact = new Contact();
    contact.name = req.body.name ? req.body.name : contact.name;
    contact.email = req.body.email;
    contact.gender = req.body.gender;
    contact.email = req.body.email;
    contact.phone = req.body.phone;
    contact.save(
        function(err){
            if(err)
            {
                res.json({status:"error",message:err});
            }
            res.json({
                status:"Success",
                message : "New contact record inserted successfully"
            });
        }
    );
};

//Handle View Contact Info
//Get /contacts/id

exports.view = function(req,res){
    Contact.findById(req.params.contact_id,function(err,contact){
        if(err)
        {
            res.json({status:"err",message:err});
        }
        res.json({
            status:"Contact for Id " + req.params.contact_id + " retrieved",
            data:contact
        });
    });
};

//Handle Update
//Put

exports.update = function (req,res){
    Contact.findById(req.params.contact_id,function(err,contact){
        if(err){
            res.json({status:"err",message:err});
        }
        contact.name = req.body.name;
        contact.gender = req.body.gender;
        contact.phone = req.body.phone;

        contact.save(function(err){
            if(err)
            {
                res.json({status:"err",message:err});
            }
            res.json({status:"Success",message:"Updated Successfully"});
        });
    });
};

//Handle Delete
//delete

exports.delete = function(req,res){
    Contact.remove(
        { _id : req.params.contact_id},
        function(err){
            if (err)
            res.send(err);
            res.json({
                status: "success",
                message: 'Contact deleted'
            });
        });
    };

