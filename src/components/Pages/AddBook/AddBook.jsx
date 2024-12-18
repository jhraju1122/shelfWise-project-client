 import { Link } from 'react-router-dom';

const AddBook = () => {
    const handleAddBook = event =>{
      event.preventDefault();
      const form = event.target;
      const  name = form.name.value;
      const quantity = form.quantity.value;
      const AuthorName = form.AuthorName.value;
      const Category = form.Category.value;
      const description = form.description.value;
      const Rating = form.Rating.value;
      const photo = form.photo.value;

      const newBook = {name, quantity, AuthorName, Category, description, Rating, photo}
      console.log(newBook);

      // send data to the server 
      fetch('http://localhost:5000/book', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(newBook) // Ensure newBook is a valid object
      })
      .then(res => res.json())
      .then(data =>{
         console.log(data);
      })
      
   
    }

    const navItems = <>
    <li><Link to="/" className="text-blue-400 font-bold">Home</Link></li>
    <li><Link to="/addBook" className="text-blue-400 font-bold">Add Book</Link></li>
    <li><Link to="/" className="text-blue-400 font-bold">All Books</Link></li>
    <li><Link to="/" className="text-blue-400 font-bold"> Borrowed Books</Link></li>
     
    </>
    return (
       
     <div className="bg-[#F4F3F0] p-24">
        <div id='register-nav' className='flex w-full display-none gap-5 justify-end mb-20'>
            {navItems}
        </div>
      <h1 className="mb-5 text-black text-3xl font-extrabold">add a book</h1>
      
      <form onSubmit={handleAddBook}>
         {/* form name and Quantity row  */}
      <div className="md:flex w-[100%] justify-center mb-3 gap-3">
      <div className="input input-bordered flex items-center gap-2 md:w-1/2">
      <input type="text" className="grow" name="name" placeholder="Book Name" />
      </div>
      <div className="input input-bordered flex items-center gap-2 md:w-1/2">
       <input type="number" name="quantity" placeholder="Quantity" />
      </div >
      </div>
         {/* form supplier row  */}
       <div className="md:flex w-[100%] justify-center mb-3 gap-3">
      <div className="input input-bordered flex items-center gap-2 md:w-1/2">
       <input type="text" name="AuthorName" placeholder="Author Name" />

      </div>
      <div className="input input-bordered flex items-center gap-2 md:w-1/2">
     <input type="text" name="Category" placeholder="Category" />
      </div >
      </div>
          {/* form teste row  */}
       <div className="md:flex w-[100%] justify-center mb-3 gap-3">
      <div className="input input-bordered flex items-center gap-2 md:w-1/2">
       <textarea name="description" placeholder="Description"></textarea>
      </div>
     
      <div className="input input-bordered flex items-center gap-2 md:w-1/2">
      <input type="number" name="Rating" placeholder="Rating" />
      </div >
      </div>
      <div className="input input-bordered flex items-center gap-2 md:w-full">
      <input type="text" name="photo" placeholder="Photo URL" />
      </div > 


          <button type='submit' className="btn mt-5 w-full">Add Book</button>
      </form>
     </div>





            
    );
};

export default AddBook;