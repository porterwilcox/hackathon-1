import User from "../models/user.js";
import Post from "../models/post.js";
import Comment from "../models/comment.js";

// @ts-ignore
const postItApi = axios.create({
  baseURL: `//localhost:3000`,
  timeout: 3000
})
let time = new Date()
let hour = time.getHours()
let min = time.getMinutes()
let store

let state = {
  user: {},
  post: [],
  comment: []
}
function setState(prop, data) {
  state[prop] = data
  console.log(state)
}

export default class Store {
  postPost(postData, userId, username, draw) {
    postItApi.post("/posts", {
      userId: userId,
      username: username,
      timestamp: `${hour}:${min}`,
      voteCount: 0,
      content: postData.content.value,
      imgUrl: postData.imgUrl.value,
      title: postData.title.value
    })
      .then(res => {
        console.log(username)
        this.getPosts(draw)
        document.querySelector('.post-modal').style.display = 'none'

      })
      .catch(console.error)
  }
  constructor() {
    if (store) {
      return store
    }
    store = this
  }
  get state() {
    return {
      ...state
    }
  }
  getPosts(draw) {
    postItApi.get("/posts")
      .then(data => {
        console.log(data)
        setState('posts', data.data.map(post => new Post(post)))
        draw()
      })
  }
  getComments(draw) {
    fetch('api/comments/by-user/' + state.user._id)
      .then(res => res.json())
      .then(data => {
        setState('comments', data.map(comment => new Comment(comment)))
        draw()
      })
  }
  login(userData, callback) {
    postItApi.post("/login", {
      username: userData.username.value,
      password: userData.password.value
    })
      .then(res => {
        setState('user', new User(res.data))
        callback()
        document.getElementById('login-form').style.display = 'none'
      })
      .catch(console.error)
  }
  register(userData, callback) {
    console.log(userData)
    let newUser = new User(userData)
    console.log(newUser)
    postItApi.post("/register", {
      username: userData.username.value,
      password: userData.password.value
    })
      .then(res => {
        setState('user', new User(res.data))
        callback()
        document.getElementById('register-form').style.display = 'none'

      })
      .catch(console.error)
  }
}