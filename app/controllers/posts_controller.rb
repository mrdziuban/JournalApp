class PostsController < ApplicationController
  respond_to :html, :json

  def index
    respond_with(@posts = Post.all)
  end

  def create
    @post = Post.new(params[:post])
    if @post.save
      respond_with(@post)
    else
      respond_with(@post.errors)
    end
  end

  def destroy
    post = Post.find(params[:id])
    post.destroy
    respond_with(post)
  end
end
