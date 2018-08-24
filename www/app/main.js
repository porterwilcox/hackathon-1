import UserController from "./components/user/user-controller.js";
import PostController from "./components/post/post-controller.js";
import CommentController from "./components/comment/comment-controller.js";

class App {
 constructor() {
  this.controllers = {
   user: new UserController,
   post: new PostController,
   comment: new CommentController
  }
 }
}

window.app = new App