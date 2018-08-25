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
  commentModal(postId) {
    if (!store.state.user.hasOwnProperty("username")) {
      return alert("Please login or sign up to make comments")
    }
    let username = store.state.user.username
    document.querySelector(".comment-modal").style.display = "block"
    let template = `
    <form id="post" class="d-flex justify-content-center align-items-center flex-column post-modal-height" onsubmit="app.controllers.comment.postComment(event, '${postId}')">
      <textarea type="text" class="large-input" name="content" placeholder="Please type your comment here"></textarea>
      <button class="btn new-post-button mt-1">Make New Coment</button>
    </form>
    `
    document.getElementById("comment-modal-content").innerHTML = template
  }

  postComment(e, postId) {
    e.preventDefault();
    let username = store.state.user.username
    store.postComment(e.target, username, postId, draw)
  }

}
document.querySelector(".comment-modal").onclick = function (event) {
  if (event.target == document.querySelector('.comment-modal')) {
    document.querySelector('.comment-modal').style.display = 'none'
  }
}