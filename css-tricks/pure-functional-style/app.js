var postData = {
  isSponsored: true,
  author: 'Brandon Smith',
  title: 'A CSS Trick',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
};

function Header() {
  return `<div class="header">
            Home
            About
            Contact
          </div>`;
}

function BlogPost(postData) {
  return `<div class="post ${postData.isSponsored ? 'sponsored-post' : ''}">
            <input type="checkbox" ${postData.isSponsored ? 'checked' : ''}>
            <h1>
              ${postData.title} ${postData.isSponsored ? '<img src="badge.png">' : ''}
            </h1>
            <h3>By ${postData.author}</h3>
            <p>${postData.body}</p>
          </div>`;
}

function BlogPostList(posts) {
  return `<div class="blog-post-list">
            ${posts.map(BlogPost).join('')}
          </div>`
}

function PostPage(postData) {
  return  `<div class="page">
            ${Header()}
            ${BlogPost(postData)}
          </div>`;
}

function HomePage() {
  return `<div class="page">
            ${Header()}
            <h1>Welcome to my blog!</h1>
            <p>It's about lorem ipsum dolor sit amet, consectetur ad...</p>
          </div>`;
}

function update() {
  document.querySelector('body').innerHTML = PostPage(postData);
}

update();

// var allPosts = [
//   {
//     author: 'Brandon Smith',
//     title: 'A CSS Trick',
//     body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
//   },
//   {
//     author: 'Chris Coyier',
//     title: 'Another CSS Trick',
//     body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
//   },
//   {
//     author: 'Bob Saget',
//     title: 'A Home Video',
//     body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
//   }
// ]

// document.querySelector('body').innerHTML = BlogPostList(allPosts);
