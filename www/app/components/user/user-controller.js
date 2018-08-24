import Store from "../../store/store.js";

let store = new Store()

let elem = document.getElementById('app')

function draw() {
 elem.innerHTML =
  `
   <div>
     <h1>${store.state.user.username}</h1>
     <button onclick="app.controllers.posts.getPosts()">MY POSTS</button>
     <div id="posts"></div>
   </div>
   `
}

export default class UserController {
 constructor() {

 }

 login(e) {
  e.preventDefault();
  console.log(e.target)
  // let creds = {
  //  username: e.target.username.value,
  //  password: e.target.password.value
  // }
  // store.login(creds, draw)
}

register(e) {
  e.preventDefault();
  store.register(e.target, draw)
}

}