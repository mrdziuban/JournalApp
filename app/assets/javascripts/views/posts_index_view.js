Journl.Views.PostsIndexView = Backbone.View.extend({
  initialize: function (postsObj) {
    var that = this;
    var renderCallback = that.render.bind(that);
    that.postsObj = postsObj;
    // var collection = new Journl.Collections.Posts(that.collection);

    that.listenTo(postsObj.postsCollection, "remove", renderCallback);
    that.listenTo(postsObj.postsCollection, "add", renderCallback);
    that.listenTo(postsObj.postsCollection, "change:title", renderCallback);
    that.listenTo(postsObj.postsCollection, "reset", renderCallback);
  },

  render: function () {
    var that = this;

    var renderedContent = JST["posts/index"]({
      posts: that.postsObj.postsCollection
    });

    that.$el.html(renderedContent);
    return that;
  },

  events: {
    "click button.delButton": "delete"
  },

  delete: function() {
    var that = this;
    var id = that.$(".delButton").data("id");

    // var collection = new Journl.Collections.Posts(that.collection);
    var post = that.postsObj.postsCollection.get(id);
    post.destroy();
  }
});