Journl.Views.PostsCreateView = Backbone.View.extend({
  events: {
    "click button.submit": "submit"
  },

  submit: function() {
    var that = this;
    var title = $("input[name=post\\[title\\]]").val();
    var body = $("textarea[name=post\\[body\\]]").val();

    if (that.model) {
      var post = that.model.set({title: title, body: body})
      post.save({title: title, body: body},{success: function(){
        Backbone.history.navigate("#/");
      },
      error: function() {
        var postsCreateView = new Journl.Views.PostsCreateView({
          collection: that.collection,
          model: that.model
        });

        that.$("body").html(postsCreateView.render().$el);

        }
      });
    } else {
      var post = new Journl.Models.Post({
        title: title,
        body: body
      });
      that.collection.create(post, {wait: true,
        success: function() {
          Backbone.history.navigate("#/");
        },
        error: function() {
        var postsCreateView = new Journl.Views.PostsCreateView({
          collection: that.collection
        });

        that.$("body").html(postsCreateView.render().$el);

        }
      });
      that.collection.add(post);
    }


  },

  render: function() {
    var that = this;
    if (that.model) {
      var renderedContent = JST["posts/create"]({
        model: that.model
      });
    } else {
      var renderedContent = JST["posts/create"]();
    }
    that.$el.html(renderedContent);
    return that;
  }
})