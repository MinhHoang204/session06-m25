import React from 'react';

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>Shop Section</h1>
      {children}
    </div>
  );
}
