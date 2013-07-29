Journl.Views.PostsIndexView = Backbone.View.extend({
  initialize: function () {
    var that = this;
    var renderCallback = that.render.bind(that);

    that.listenTo(that.collection, "remove", renderCallback);
    that.listenTo(that.collection, "add", renderCallback);
    that.listenTo(that.collection, "change:title", renderCallback);
    that.listenTo(that.collection, "reset", renderCallback);
  },

  render: function () {
    var that = this;

    var renderedContent = JST["posts/index"]({
      posts: that.collection
    });

    that.$el.html(renderedContent);
    return that;
  },

  events: {
    "click button.delButton": "delete"
  },

  delete: function(e) {
    var that = this;
    var post = that.collection.get(e.toElement.id);
    post.destroy();
  }
});