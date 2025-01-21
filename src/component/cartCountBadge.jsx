import React from 'react';

const CartCountBadge = ({ size }) => {
  return (
    <div
      className={`absolute  bg-red-600 text-white text-sm font-bold ${size} flex items-center justify-center -right-4 -top-2 rounded-full shadow-md border-3 border-white`}
    >
      30
    </div>
  );
};

export default CartCountBadge;
