var blogPostData = {
  author: 'Brandon Smith',
  title: 'A CSS Trick',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
};

var adData = {
  id: '1'
};

document.componentRegistry = { };
document.nextId = 0;

class Component {
  constructor() {
    this._id = ++document.nextId;
    document.componentRegistry[this._id] = this;
  }
}

class BlogPost extends Component {

  constructor(props, children) {
    super();

    this.children = children;
    this.state = {
      author: props.author,
      title: props.title,
      body: props.body
    }
  }

  render() {
    return `<div class="post">
              <h1>${this.state.title}</h1>
              <h3>By ${this.state.author}</h3>
              <textarea onchange="document.componentRegistry[${this._id}].setBody(this.value)">
                ${this.state.body}
              </textarea>
              <div>
                ${this.children.map((child) => child.render()).join('')}
              </div>
            </div>`;
  }

  setBody(newBody) {
    this.state.body = newBody;
    update();
  }

}

class Ad extends Component {

  constructor(props) {
    super();

    this.state = {
      id: props.id
    }
  }

  render() {
    return `<div>${this.state.id}</div>`;
  }

}

var adComponents = new Ad(adData);
var blogPost = new BlogPost(blogPostData, [adComponents]);

function update() {
  document.querySelector('body').innerHTML = blogPost.render();
}

update();
