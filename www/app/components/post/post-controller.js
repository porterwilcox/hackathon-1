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
<<<<<<< HEAD
// window.onclick = function (event) {
//   if (event.target == document.querySelector('.post-modal')) {
//     document.querySelector('.post-modal').style.display = 'none'
//   }
// }
=======

window.onclick = function (event) {
  if (event.target == document.querySelector('.post-modal')) {
    document.querySelector('.post-modal').style.display = 'none'
  }
}
>>>>>>> b1b8869eec8794a4a2477a0672adea9d15021163
