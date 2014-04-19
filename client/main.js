// can be removed since we have let the router handle our subscription
// Meteor.subscribe('posts', 'Tom Coleman');

// Meteor.subscribe('posts');

// Meteor.subscribe('allPosts');

Meteor.startup(function(){
  Deps.autorun(function(){
    console.log('There are ' + Posts.find().count() + ' posts');
  });
});
