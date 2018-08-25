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

  drawPost() {
    let post = store.state.post
    document.querySelector('.post-modal').style.display = 'block'
  }


}
window.onclick = function (event) {
  if (event.target == document.querySelector('.post-modal')) {
    document.querySelector('.post-modal').style.display = 'none'
  }
}