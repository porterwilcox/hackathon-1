import Store from "../../store/store.js";

let store = new Store()

function draw(postId) {
  let template = ''
  store.state.comments.forEach(comment => template += comment.listTemplate)
  document.getElementById(`comments-${postId}`).innerHTML = template
}

export default class CommentController {
  getComments(postId) {
    store.getComments(postId, draw)
  }
}