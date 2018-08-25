import Store from "../../store/store.js";

let store = new Store()

function draw(postId) {
  let template = ''
  store.state.comments.forEach(comment => template += comment.listComment)
  document.getElementById(`comments-${postId}`).innerHTML = template
}

export default class CommentController {
  getComments(postId) {
    store.getComments(postId, draw)
  }
  commentModal(postId){
    if (!store.state.user.hasOwnProperty("username")){
      return alert("Please login or sign up to make comments")
    }
    let username = store.state.user.username
    document.querySelector(".comment-modal").style.display = "block"
  }
}
document.querySelector(".comment-modal").onclick = function (event) {
  if (event.target == document.querySelector('.comment-modal')) {
    document.querySelector('.comment-modal').style.display = 'none'
  }
}