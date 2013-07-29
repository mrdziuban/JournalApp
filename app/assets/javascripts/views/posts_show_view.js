Journl.Views.PostsShowView = Backbone.View.extend({
  render: function () {
    var that = this;

    var renderedContent = JST["posts/show"]({
      post: that.model
    });

    that.$el.html(renderedContent);
    return that;
  }
});