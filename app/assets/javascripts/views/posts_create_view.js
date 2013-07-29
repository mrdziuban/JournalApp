Journl.Views.PostsCreateView = Backbone.View.extend({
  events: {
    "click button.submit": "submit"
  },

  submit: function() {
    var that = this;

    var post = new Journl.Models.Post({
      title: that.$("input[name=post\\[title\\]]").val(),
      body: that.$("textarea[name=post\\[body\\]]").val()
    })

    if (post.isNew()) {
      that.collection.create(post);
    }
    // post.save();
    that.collection.add(post);
    Backbone.history.navigate("#/");
  },

  render: function() {
    var that = this;

    var renderedContent = JST["posts/create"]();
    that.$el.html(renderedContent);
    return that;
  }
})