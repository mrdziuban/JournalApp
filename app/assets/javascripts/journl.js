window.Journl = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function($rootEl,postsData) {
    var posts = postsData;
    var postCollection = new Journl.Collections.Posts(postsData)
    new Journl.Routers.PostsRouter($rootEl,postCollection);
    Backbone.history.start();
  }
};

// $(document).ready(function(){
//   Journl.initialize();
// });
