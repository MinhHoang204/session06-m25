import React from 'react'
import Link from 'next/link';
export default function page() {
    const posts = [
        { id: '1', title: 'Lập trình cơ bản', image: '/images/basic-programming.jpg' },
        { id: '2', title: 'Lập trình nâng cao', image: '/images/advanced-programming.jpg' },
        { id: '3', title: 'Học JavaScript', image: '/images/learn-javascript.jpg' },
      ];
  return (
  <div>
    <h1>Danh sách bài viết</h1>
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <img src={post.image} alt={post.title} style={{ width: '100px', height: '100px' }} />
          <h2>{post.title}</h2>
          <Link href={`/blogs/${post.id}`}>
            <a>Xem chi tiết</a>
          </Link>
        </li>
      ))}
    </ul>
  </div>
  )
}
