Journl.Views.PostsShowView = Backbone.View.extend({
  render: function () {
    var that = this;

    console.log(that.model);

    var renderedContent = JST["posts/show"]({
      post: that.model
    });

    that.$el.html(renderedContent);
    return that;
  }
});