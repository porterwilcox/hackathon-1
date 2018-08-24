import Store from "../../store/store.js";

let store = new Store()

function draw() {
 let template = ''
 store.state.posts.forEach(post => template += post.listTemplate)
 document.getElementById('posts').innerHTML = template
}

export default class PostConroller {
 getPosts() {
  store.getPosts(draw)
 }

}