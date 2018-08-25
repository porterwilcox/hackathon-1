export default class Post {
  constructor(data) {
    this._id = data._id
    this.userId = data.userId
    this.timestamp = data.timestamp
    this.voteCount = data.voteCount
    this.content = data.content
    this.imgUrl = data.imgUrl
    this.title = data.title
  }

  get listTemplate() {
    return `
  <div class="title">
    ${this.description}
  </div>
  <div class="voteCount">
    ${this.description}
  </div>
  <div class="timestamp">
    ${this.description}
  </div>
  <div class="content">
    ${this.description}
  </div>
  <div class="userId">
    ${this.description}
  </div>

  `
  }

  get detailsTemplate() {
    return `
<div>
  <h1>
   ${this.description}
  </h1>
 <div id="title"></div>
</div>
<div>
  <h1>
   ${this.description}
  </h1>
 <div id="voteCount"></div>
</div>
<div>
  <h1>
   ${this.description}
  </h1>
 <div id="timestamp"></div>
</div>
<div>
  <h1>
   ${this.description}
  </h1>
 <div id="content"></div>
</div>
<div>
  <h1>
   ${this.description}
  </h1>
 <div id="userId"></div>
</div>
  `
  }

}