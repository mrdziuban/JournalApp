Journl.Routers.PostsRouter = Backbone.Router.extend({

  initialize: function($rootEl,postsCollection) {
    this.$rootEl = $rootEl;
    this.posts = postsCollection;
  },

  routes: {
    "": "index",
    "new": "create",
    "posts/:id": "show",
    "edit/:id": "edit"
  },

  index: function() {
    var that = this;

    // var postsIndexView = new Journl.Views.PostsIndexView({
    //   collection: that.posts
    // });

    that.$rootEl.empty();
    // that.$rootEl.html(postsIndexView.render().$el)
  },

  show: function(id) {
    var that = this;

    var post = that.posts.get(id)
    var postsShowView = new Journl.Views.PostsShowView({
      model: post
    })

    that.$rootEl.html(postsShowView.render().$el);
  },

  create: function(){
    var that = this;

    var postsCreateView = new Journl.Views.PostsCreateView({
      collection: that.posts,
      model: new Journl.Models.Post
    });

    that.$rootEl.html(postsCreateView.render().$el);
  },

  edit: function(id) {
    var that = this;

    var postsCreateView = new Journl.Views.PostsCreateView({
      collection: that.posts,
      model: that.posts.get(id)
    });

    that.$rootEl.html(postsCreateView.render().$el);
  }
})