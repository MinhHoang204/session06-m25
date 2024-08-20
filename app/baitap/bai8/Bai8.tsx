import React from 'react'
import { useRouter } from 'next/router';
export default function Bai8() {
  const router = useRouter();
  const { slug } = router.query;

  // Convert slug from array to string path
  const path = Array.isArray(slug) ? `/${slug.join('/')}` : '';
  return (
    <div>
      <h1>Blog Page</h1>
      <p>Bạn đang xem blog với đường dẫn: {path}</p>
    </div>
  )
}
