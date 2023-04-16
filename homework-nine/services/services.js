// let homePage = `<div class="homePage backgroundImages">
// <div class="heroText">
//   <h1>Decorating Ideas</h1>
//   <p>"Home is Where The Heart Is." Expressing Creativity Since 1994.</p>
//   <p class="ourBlog"><a href="blog.html">Our Blog</a></p>
// </div>
// <p class="copyright">Copyright PrettierRooms 1994</p>
// </div>`;

// let aboutPage = `<div class="aboutPage">
// <div class="aboutHero backgroundImages"></div>
// <div class="aboutUs">
//   <h1>About Us</h1>
//   <p>
//     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//     eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim
//     facilisis gravida neque convallis a. Tincidunt vitae semper quis
//     lectus nulla at volutpat diam. Turpis cursus in hac habitasse platea
//     dictumst quisque sagittis purus. At consectetur lorem donec massa
//     sapien faucibus et molestie ac. Euismod in pellentesque massa placerat
//     duis ultricies lacus. Ut sem viverra aliquet eget sit amet tellus cras
//     adipiscing. Nisl tincidunt eget nullam non. Commodo ullamcorper a
//     lacus vestibulum sed arcu non odio. Ut tortor pretium viverra
//     suspendisse potenti nullam ac tortor. Amet consectetur adipiscing elit
//     ut aliquam purus sit amet. Convallis convallis tellus id interdum. Est
//     pellentesque elit ullamcorper dignissim cras tincidunt lobortis.
//     Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit.
//     Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse.
//   </p>
// </div>
// </div>`;

// let blogPage = `<div class="blogPage">
// <div class="blogImages">
//   <img src="images/pexels-max-vakhtbovych-6301168.jpg" alt="" />
//   <img src="images/steven-ungermann-Aac7IlKnYX8-unsplash.jpg" alt="" />
// </div>
// <div class="theBlog">
//   <div class="blogPosts">
//     <div class="mobileImage">
//       <img src="images/pexels-max-vakhtbovych-6301168.jpg" alt="" />
//     </div>
//     <h1>Blog Entry #1:</h1>
//     <p>
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//       eiusmod tempor incididunt ut labore et dolore magna aliqua.
//       Tincidunt tortor aliquam nulla facilisi. Mattis nunc sed blandit
//       libero. Consequat mauris nunc congue nisi vitae suscipit tellus.
//       Risus sed vulputate odio ut enim. Lorem dolor sed viverra ipsum nunc
//       aliquet. Enim ut tellus elementum sagittis vitae et leo duis ut.
//       Turpis egestas integer eget aliquet nibh. Id diam vel quam
//       elementum. Facilisi etiam dignissim diam quis enim lobortis
//       scelerisque fermentum. Orci nulla pellentesque dignissim enim sit
//       amet venenatis urna cursus. Massa placerat duis ultricies lacus.
//       Nullam ac tortor vitae purus."
//     </p>
//   </div>
//   <div class="blogPosts">
//     <div class="mobileImage">
//       <img src="images/steven-ungermann-Aac7IlKnYX8-unsplash.jpg" alt="" />
//     </div>
//     <h1>Blog Entry #2:</h1>
//     <p>
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//       eiusmod tempor incididunt ut labore et dolore magna aliqua.
//       Tincidunt tortor aliquam nulla facilisi. Mattis nunc sed blandit
//       libero. Consequat mauris nunc congue nisi vitae suscipit tellus.
//       Risus sed vulputate odio ut enim. Lorem dolor sed viverra ipsum nunc
//       aliquet. Enim ut tellus elementum sagittis vitae et leo duis ut.
//       Turpis egestas integer eget aliquet nibh. Id diam vel quam
//       elementum. Facilisi etiam dignissim diam quis enim lobortis
//       scelerisque fermentum. Orci nulla pellentesque dignissim enim sit
//       amet venenatis urna cursus. Massa placerat duis ultricies lacus.
//       Nullam ac tortor vitae purus."
//     </p>
//   </div>
// </div>
// </div>`;

// let contactPage = `<div class="contactPage">
// <div class="contactHero backgroundImages"></div>
// <div class="contactUs">
//   <h1>Contact Us</h1>
//   <div class="contactForm">
//     <p>Name:</p>
//     <input type="text" name="name" id="" />
//     <p>Email:</p>
//     <input type="text" name="email" id="" />
//     <p>Phone:</p>
//     <input type="text" name="phone" id="" />
//     <p class="submit"><a href="">Submit</a></p>
//   </div>
// </div>
// </div>`;


export function changePage(givenPage) {
    let hashTag = window.location.hash;
    let pageRef = hashTag.replace("#", "");

    console.log(hashTag + " page ref: " + pageRef);

    if (pageRef != "")
    {
        console.log("changing page by url");
        $.get(`pages/${pageRef}.html`, function (data) {
            console.log(data);
            $("#site").html(data);
        })
        console.log("page has changed");
    }
    else
    {
        $.get(`pages/home.html`, function (data) {
            console.log(data);
            $("#site").html(data);
        })
        console.log("page default");
    }
}