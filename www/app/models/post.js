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
  <div id="posts" class="post-head"><button class="btn expand-button mr-3" data-toggle="collapse" role="button" href="#${this._id}"><i class="fas fa-plus"></i></button>${this.title}</div>
  <div id="${this._id}" class="collapse post-body flex-column">
  <div class="username">${this.username}</div>
  <div class="username">${this.timestamp}</div>
  ${this.content}
  <button class="btn default-button">login</button>
</div>
  `
  }

}