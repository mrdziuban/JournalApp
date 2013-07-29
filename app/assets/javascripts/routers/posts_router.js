Journl.Routers.PostsRouter = Backbone.Router.extend({

  initialize: function($rootEl,postsCollection) {
    this.$rootEl = $rootEl;
    this.postsCollection = postsCollection;
  },

  routes: {
    "": "index",
    "posts/:id": "show"
  },

  index: function() {
    var that = this;

    var postsIndexView = new Journl.Views.PostsIndexView({
      postsCollection: that.postsCollection
    });

    that.$rootEl.html(postsIndexView.render().$el)
  },

  show: function(id) {
    var that = this;

    console.log(id);

    var post = that.postsCollection.get(id);
    var postsShowView = new Journl.Views.PostsShowView({
      model: post
    })

    that.$rootEl.html(postsShowView.render().$el);
  }
})