
const { populate } = require('../models/post');
const Post = require('../models/post');

module.exports.home = function(req,res){
    //return res.end('<h1>Express is up for codeial!</h1>');

    // console.log(req.cookies);
    // res.cookie('user_id',25);
    // return res.render('home',{
    //     title:"Home"
    // });

    // Post.find({},function(err,posts){
    //     return res.render('home',{
    //         title: "Codeial | Home",
    //         posts:posts
    //     });
    // });
     
    //populate the user of each post
    Post.find({}).populate('user').exec(function(err,posts){
        return res.render('home',{
            title: "Codeial | Home",
            posts:posts
        });

    });

} 
 
//module.exports.actionName = function(req,res){}

