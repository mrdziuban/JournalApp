Journl.Views.PostsCreateView = Backbone.View.extend({
  events: {
    "click button.submit": "submit"
  },

  initialize: function () {
    this.modelAttrs = _.clone(this.model.attributes);
  },

  submit: function() {
    var that = this;
    var title = $("input[name=post\\[title\\]]").val();
    var body = $("textarea[name=post\\[body\\]]").val();
    var post = that.model.set({title: title, body: body});

    if (!that.model.isNew()) {
      post.save({title: title, body: body},{success: function(){
        Backbone.history.navigate("#/");
      },
      error: function() {
          that.model.set(that.modelAttrs);
          that.render();
        }
      });
    } else {
        post.save({title: title, body: body},{success: function(){
          Backbone.history.navigate("#/");
          that.collection.add(post);
        },
        error: function() {
            that.render();
          }
        });
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