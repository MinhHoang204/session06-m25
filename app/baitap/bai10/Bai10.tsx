import React from 'react'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
const posts = [
    { id: '1', title: 'Lập trình cơ bản', image: '/images/basic-programming.jpg', content: 'Chi tiết về lập trình cơ bản.' },
    { id: '2', title: 'Lập trình nâng cao', image: '/images/advanced-programming.jpg', content: 'Chi tiết về lập trình nâng cao.' },
    { id: '3', title: 'Học JavaScript', image: '/images/learn-javascript.jpg', content: 'Chi tiết về học JavaScript.' },
];
export default function Bai10() {
  const router = useRouter();
  const { id } = router.query;
  
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) {
      // Tìm bài viết dựa trên id
      const foundPost = posts.find((post) => post.id === id);

      if (foundPost) {
        setPost(foundPost);

        // Tìm kiếm bài viết khác theo tiêu đề
        const searchTitle = foundPost.title;
        const relatedPost = posts.find((post) => post.title.includes(searchTitle) && post.id !== id);

        if (relatedPost) {
          console.log('Bài viết liên quan:', relatedPost);
        }
      }
    }
  }, [id]);

  if (!post) {
    return <p>Bài viết không tồn tại</p>;
  }
  return (
  <div>
    <h1>{post.title}</h1>
    <img src={post.image} alt={post.title} style={{ width: '200px', height: '200px' }} />
    <p>{post.content}</p>
    
    {/* Hiển thị thông tin của bài viết tìm thấy */}
    <h2>Bài viết liên quan:</h2>
    <p>Không tìm thấy bài viết liên quan.</p>
  </div>
  )
}
