
let listPost = [];
const MAXPOST = 5;
const post = {
  title: '',
  content: '',
  author: ''
};

// Xây dựng một hàm createPost để thêm một bài viết mới vào danh sách
function createPost(newPost) {
  if (listPost.length >= MAXPOST) {
    console.log('Danh sách bài viết đã đầy');
    return;
  }
  listPost = [...listPost, newPost];
}

// Viết một vòng lặp for...of để duyệt qua danh sách bài viết và in ra màn hình thông tin của mỗi bài viết
function displayPosts() {
  for (const post of listPost) {
    console.log('Tiêu đề:', post.title);
    console.log('Nội dung:', post.content);
    console.log('Tác giả:', post.author);
    console.log('-------------------');
  }
}

// Thực hiện chức năng tìm kiếm bài viết trong danh sách theo tiêu đề, nội dung hoặc tác giả
function searchPost(keyword) {
  const result = listPost.filter(post => {
    return (
      post.title.includes(keyword) ||
      post.content.includes(keyword) ||
      post.author.includes(keyword)
    );
  });
  return result;
}

module.exports = {
  createPost,
  displayPosts,
  searchPost
};
