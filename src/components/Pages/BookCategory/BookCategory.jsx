import React from 'react';
import { Link } from 'react-router-dom';

const BookCategory = () => {
    return (
        <div>

            <h1 className='text-4xl font-bold'>Our Category</h1>
            <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
    <Link to="/bookDetails" className="btn btn-primary">Book Details</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default BookCategory;