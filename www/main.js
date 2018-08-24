import UserController from "./app/components/user/user-controller.js";
import PostController from "./app/components/post/post-controller.js";
import CommentController from "./app/components/comment/comment-controller.js";

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