console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const newPost = document.createElement("article");
newPost.classList.add("post");
document.body.append(newPost);

const postContent = document.createElement("p");
postContent.classList.add("post__content");
postContent.textContent = "This is a new post";

newPost.append(postContent);

const footer = document.createElement("footer");
footer.classList.add("post__footer");

newPost.append(footer);

const username = document.createElement("span");
username.classList.add("post__username");
username.textContent = "@Sannfilms";
footer.append(username);

const newLikeButton = document.createElement("button");
newLikeButton.addEventListener("click", handleLikeButtonClick);
newLikeButton.textContent = "♥  Like";
footer.append(newLikeButton);

// <article class="post">
// <p class="post__content">
//   Lorem ipsum dolor, sit amet consectetur adipisicing elit.
// </p>
// <footer class="post__footer">
//   <span class="post__username">@username</span>
//   <button type="button" class="post__button" data-js="like-button">
//     ♥ Like
//   </button>
// </footer>
// </article>
