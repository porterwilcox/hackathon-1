import Store from "../../store/store.js";

let store = new Store()

function draw() {
  let template = ''
  store.state.posts.forEach(post => template += post.listTemplate)
  document.getElementById('posts').innerHTML = template
}

export default class PostConroller {
  constructor() {
    store.getPosts(draw)
  }

  drawPost() {
    if (!store.state.user.hasOwnProperty('username')) {
      return alert("please login or sign up to make posts")
    }
    document.querySelector('.post-modal').style.display = 'block'
  }

  postPost(e) {
    e.preventDefault();
    console.log(e)
    let userId = store.state.user._id
    let username = store.state.user.username
    console.log(userId)
    store.postPost(e.target, userId, username, draw)
  }

  upPostPost(voteCount, postId) {
    store.upPostPost(voteCount, postId)
  }

  downPostPost(voteCount, postId) {
    store.downPostPost(voteCount, postId)
  }
}

window.onclick = function (event) {
  if (event.target == document.querySelector('.post-modal')) {
    document.querySelector('.post-modal').style.display = 'none'
  }
}


