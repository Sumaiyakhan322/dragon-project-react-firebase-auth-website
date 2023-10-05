import { Link } from "react-router-dom";
import Navbar from "./Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Providiers/AuthProvider";
 

const Register = () => {
    const {createUser}=useContext(AuthContext)
    const handleRegister=e=>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form=new FormData(e.currentTarget)
        const email=form.get('email');
        const name=form.get('name');
        const photo=form.get('photo');
        const password=form.get('password');
      
        console.log(email,password,name,photo);

        //create user
        createUser(email,password)
        .then(result=>{
            console.log(result.user);
            e.target.reset()
        })

        .catch(error=>{
            console.log(error.message);
        })
    }
    return (
        <div >
        <Navbar></Navbar>
        <h2 className="text-3xl text-center mt-4">Please Register</h2>
        {/* <div className="hero min-h-screen bg-base-200"> */}
<div className="hero-content flex-col lg:flex-row-reverse">

<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-4 ">
  <form className="card-body" onSubmit={handleRegister}>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Photo url</span>
      </label>
      <input type="text" placeholder="Photo Url" name="photo" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" placeholder="email" name="email" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" placeholder="password" name="password" className="input input-bordered" required />
      <label className="label">
        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
      </label>
    </div>
    <div className="form-control mt-6">
      <button className="btn btn-primary" >Register</button>
    </div>
  </form>
  <p className="text-center mt-3">Already have an account <Link to='/login' className="text-blue-400">Login</Link></p>
</div>
</div>
</div>
   
    );
};

export default Register;