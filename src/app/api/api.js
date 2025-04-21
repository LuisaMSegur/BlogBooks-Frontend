export async function getBlogById() {
  const response = await fetch("/api/posts");
  const data = await response.json();
  return data.items;
}

export async function getPostById(postId) {
  const response = await fetch(`/api/posts/${postId}`);
  const data = await response.json();
  return data;
}
 