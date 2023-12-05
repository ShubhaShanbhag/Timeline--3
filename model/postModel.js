const mongoose = require('mongoose')
const moment = require('moment/moment')

const postSchema = new mongoose.Schema ({
    post : {
        type:String,
        required:true
    },
     create_at:{
        type:Date,
        default:Date.now,
        get: function(createdAt){
         return moment(createdAt).format('MMMM Do YY , h:mm a')
       }
    },
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref : 'Comment'
    }]
})
const Post = mongoose.model('Post' , postSchema)
module.exports = Post;
    
