import Store from "../../store/store.js";

let store = new Store()

let elem = document.getElementById('app')

function draw() {
  // let template = 
  // `
  //  <div>
  //    <h1>${store.state.user.username}</h1>
  //    <button onclick="app.controllers.posts.getPosts()">MY POSTS</button>
  //    <div id="posts"></div>
  //  </div>
  //  `
  document.getElementById("username-title").innerHTML = `<b>${store.state.user.username}!</b>`
  document.getElementById("user-controls").innerHTML = `<i onclick="app.controllers.user.drawProfile()" class="fas fa-cog icon-cog"></i>`
}

export default class UserController {
  constructor() {
  }

  login(e) {
    e.preventDefault();
    store.login(e.target, draw)
  }

  register(e) {
    if(e.target.password.value !== e.target.password1.value){
      return alert("please confirm password")
    }
    e.preventDefault();
    store.register(e.target, draw)
    document.querySelector('.profile-modal').style.display = 'block'
  }

  drawProfile() {
    let user = store.state.user
    document.querySelector('.profile-modal').style.display = 'block'
  }
}

window.onclick = function(event){
  if(event.target == document.querySelector('.profile-modal')){
    document.querySelector('.profile-modal').style.display = 'none'
  }
}
