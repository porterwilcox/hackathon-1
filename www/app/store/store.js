import User from "../models/user.js";
import Post from "../models/post.js";
import Comment from "../models/comment.js";

let store

let state = {
  user: {},
  post: {},
  comment: {}
}
function setState(prop, data) {
  state[prop] = data
  console.log(state)
}

export default class Store {
  getPosts(draw) {
    fetch('api/posts/by-user/' + state.user._id)
      .then(res => res.json())
      .then(data => {
        setState('posts', data.map(goal => new Post(post)))
        draw()
      })
  }
  getComments(draw) {
    fetch('api/comments/by-user/' + state.user._id)
      .then(res => res.json())
      .then(data => {
        setState('comments', data.map(goal => new Comment(comment)))
        draw()
      })
  }
  login(cred, draw) {
    fetch('/auth/login', {
      method: 'post',
      body: JSON.stringify(creds),
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
}