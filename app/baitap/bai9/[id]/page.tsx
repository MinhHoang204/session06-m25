import React from 'react'
import { useRouter } from 'next/router';
const posts = [
    { id: '1', title: 'Lập trình cơ bản', image: '/images/basic-programming.jpg', content: 'Chi tiết về lập trình cơ bản.' },
    { id: '2', title: 'Lập trình nâng cao', image: '/images/advanced-programming.jpg', content: 'Chi tiết về lập trình nâng cao.' },
    { id: '3', title: 'Học JavaScript', image: '/images/learn-javascript.jpg', content: 'Chi tiết về học JavaScript.' },
];
export default function page() {
  const router = useRouter();
  const { id } = router.query;

  // Tìm bài viết dựa trên id
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return <p>Bài viết không tồn tại</p>;
  }
  return (
    <div>
      <h1>{post.title}</h1>
      <img src={post.image} alt={post.title} style={{ width: '200px', height: '200px' }} />
      <p>{post.content}</p>
    </div>
  )
}
