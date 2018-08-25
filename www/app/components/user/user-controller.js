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
    if (e.target.password.value !== e.target.password1.value) {
      return alert("please confirm password")
    }
    e.preventDefault();
    store.register(e.target, draw)
    // @ts-ignore
   let wait = setTimeout(this.drawProfile, 1000)
  }

  drawProfile() {
    let user = store.state.user
    document.querySelector('.profile-modal').style.display = 'block'
    let template = `
    <div class="row profile-settings">
      <div class="col-6 profile-img">
        <img src="${user.userImg}" alt="profile picture" />
        <form onsubmit="">
        <input type="url" name="userImg" placeholder="Image Address" required>
        <button type="submit" class="default-button">Submit</button>
        </form>
      </div>
      <div class="col-6 user-delete">
        <h1>${user.username}</h1>
        <i onclick="app.controllers.user.deleteUser()" class="icon-trash fas fa-trash-alt" data-toggle="tooltip" data-placement="bottom" title="Delete User Account"></i>
      </div>
    </div>
    `
    document.getElementById('profile-modal-content').innerHTML = template
  }

  deleteUser(){
    let userId = store.state.user._id
    store.deleteUser(userId)
    location.reload()
  }
}

document.querySelector(".profile-modal").onclick = function (event) {
  if (event.target == document.querySelector('.profile-modal')) {
    document.querySelector('.profile-modal').style.display = 'none'
  }
}
