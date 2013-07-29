Journl.Views.PostsShowView = Backbone.View.extend({
  events: {
    'dblclick .title' : 'editTitle',
    'dblclick .body' : 'editBody',
    'click #save' : 'save'
  },

  render: function () {
    var that = this;

    var renderedContent = JST["posts/show"]({
      post: that.model
    });

    that.$el.html(renderedContent);
    return that;
  },

  editTitle: function(e) {
    var title = this.model.get("title");
    $(e.toElement).html("<input type='text' value='"+title+"' class='editedTitle'>");
  },

  editBody: function(e) {
    var body = this.model.get("body");
    $(e.toElement).html("<textarea>"+body+"</textarea>");
  },

  save: function(e) {
    var title = $("input[type=text]").val();
    var body = $("textarea").val();
    if (title === undefined) {
      title = this.model.get("title");
    }
    if (body === undefined) {
      body = this.model.get("body");
    }
    this.model.set({title: title ,body: body})
    this.model.save();
    $(".title").html(this.model.get("title"));
    $(".body").html(this.model.get("body"));
    console.log("saved");
  }
});