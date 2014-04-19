// var postData = [
// {
//   title: 'Introducing Telescope',
//   author: 'Sacha Greif',
//   url: 'http://sachagreif.com/introducing-telescope'
// },
// {
//   title: 'Meteor',
//   author: 'Tom Coleman',
//   url: 'http://meteor.com'
// },
// {
//   title: 'The Meteor Book',
//   author: 'Tom Coleman',
//   url: 'http://themeteorbook.com'
// }
// ];

// Template.postsList.helpers({
//   // posts: postData
// });


// Template.postsList.helpers({
//   posts : function(){
//     return Posts.find();
//   }
// });

Template.postsList.helpers({
  posts : function(){
    // this line has no effect, the line in main.js has real effect
    // return Posts.find({author: 'Tom Coleman'});

    return Posts.find({}, {sort: {submitted: -1}});

    // Posts.find().observe({
    //   added: function(post){
    //     // when 'added' callback fires, add HTML element
    //     $('ul').append('<li id="' + post._id + '">' + post.title + '</li>');
    //   },
    //
    //   changed: function(post){
    //     // when 'changed' callback fires, modify HTML element's text
    //     $('ul li#' + post._id).text(post.title);
    //   },
    //   removed: function(post){
    //     // when 'removed' callback fires, remove HTML element
    //     $('ul li#' + post._id).remove();
    //   }
    // });
  }
});
