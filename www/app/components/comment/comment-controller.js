import Store from "../../store/store.js";

let store = new Store()

function draw() {
 let template = ''
 store.state.comments.forEach(comment => template += comment.listTemplate)
 document.getElementById('comments').innerHTML = template
}

export default class CommentController {
 getComments() {
  store.getComments(draw)
 }
}