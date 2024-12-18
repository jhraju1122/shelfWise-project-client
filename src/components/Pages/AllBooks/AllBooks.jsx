import React from 'react';
import { Link } from 'react-router-dom';

const AllBooks = () => {
    return (
        <div>
     <h1 className='text-4xl font-bold mt-16'>Popular Books</h1>
     <h1></h1>
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
          <div className="card-actions w-full grid grid-cols-1">
            <Link to="/bookDetails" className="btn btn-primary ">Book Details</Link>
            <Link className='btn'>Update</Link>
            <Link className='btn'>Delete</Link>
          </div>
        </div>
      </div>
        </div>
    );
};

export default AllBooks;