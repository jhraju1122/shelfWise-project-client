import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const navItems = <>
    <li><Link to="/" className="text-blue-400 font-bold">Home</Link></li>
    <li><Link to="/" className="text-blue-400 font-bold">Add Book</Link></li>
    <li><Link to="/" className="text-blue-400 font-bold">All Books</Link></li>
    <li><Link to="/" className="text-blue-400 font-bold"> Borrowed Books</Link></li>
    </>

const handleRegister = e =>{
  e.preventDefault()
   const name = e.target.name.value;
   const photo = e.target.photo.value;
   const email = e.target.email.value;
   const password = e.target.password.value;
   const user = {name, photo, email, password};
   console.log(user);
}


    return (
        
            <div className="hero bg-base-200 min-h-screen">
      
          <div className="hero-content flex-col lg:flex-row-reverse">
        <div id='register-nav' className='mt-[-500px] flex w-full display-none gap-5'>
        {navItems}
        </div>
            <div className="text-center lg:text-left">   
              <h1 className="text-5xl font-bold">Register now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.
              </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form onClick={handleRegister} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                </div>
              
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="text" placeholder="photo link" name='photo' className="input input-bordered" required />
                </div>
  
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
              <p>Have you already register ? please go to <Link to="/login">Login</Link></p>
            </div>
          </div>
        </div>
        
    );
};

export default Register;