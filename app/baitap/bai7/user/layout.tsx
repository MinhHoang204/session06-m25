import React from 'react';

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>User Section</h1>
      {children}
    </div>
  );
}