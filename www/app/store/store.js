import User from "../models/user.js";
import Post from "../models/post.js";
import Comment from "../models/comment.js";

// @ts-ignore
const postItApi = axios.create({
  baseURL: `//localhost:3000`,
  timeout: 3000
})

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
    fetch('api/posts/by-user/' + state.user._id)
      .then(res => res.json())
      .then(data => {
        setState('posts', data.map(post => new Post(post)))
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
  login(cred, draw) {
    fetch('/auth/login', {
      method: 'post',
      body: JSON.stringify(cred),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    })
      .then(res => res.json())
      .then(data => {
        setState('user', new User(data))
        draw()
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
    })
    .catch(console.error)
  }
}