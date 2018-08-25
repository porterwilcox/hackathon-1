export default class Post {
  constructor(data, userId, username) {
    this._id = data._id
    this.userId = data.userId
    this.username = data.username
    this.timestamp = data.timestamp
    this.voteCount = data.voteCount
    this.content = data.content
    this.imgUrl = data.imgUrl
    this.title = data.title
  }

  get listTemplate() {
    return `
  <div id="posts" class="post-head"><button class="btn expand-button mr-3" data-toggle="collapse" role="button" href="#${this._id}"><i class="fas fa-plus"></i></button>${this.voteCount}  ${this.title}</div>
  <div id="${this._id}" class="collapse post-body flex-column">
  <div class="username">${this.username}</div>
  <div class="username">${this.timestamp}</div>
  <div><img src=${this.imgUrl}></div>
  ${this.content}
  <button class="btn up-post-button my-1" onclick="app.controllers.post.upPostPost(${this.voteCount}, '${this._id}')">UpPost</button>
  <button class="btn down-post-button my-1" onclick="app.controllers.post.downPostPost(${this.voteCount}, '${this._id}')">DownPost</button>
  <button class="btn comment-button my-1">Comment</button>
</div>
  `
  }



}