export default class Comment {
  constructor(data) {
    this.username = data.username
    this.postId = data.postId
    this._id = data._id
    // this.timestamp = data.timestamp
    this.content = data.content
  }

  get listComment() {
    return `
  ${this.content} 
  `
  }
}