window.Journl = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function($sidebar,$content,postsData) {
    var postCollection = new Journl.Collections.Posts(postsData)
    this.installSidebar($sidebar, postCollection);
    new Journl.Routers.PostsRouter($content, postCollection);
    Backbone.history.start();
  },

  installSidebar: function ($sidebar, posts) {
    var that = this;

    var postsIndexView = new Journl.Views.PostsIndexView({
      collection: posts
    });

    $sidebar.html(postsIndexView.render().$el);
  }
};

// $(document).ready(function(){
//   Journl.initialize();
// });
