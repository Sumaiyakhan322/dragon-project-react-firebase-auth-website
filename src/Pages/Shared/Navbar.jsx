import { Link, NavLink } from "react-router-dom";
import userPic from '../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../Providiers/AuthProvider";

const Navbar = () => {
  const { user,SignOutUser } = useContext(AuthContext);
  const handleSignOut=(e)=>{
    e.preventDefault()
    SignOutUser()
    .then()
    .catch()
  }
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="about">About</NavLink>
      </li>
      <li>
        <NavLink to="career">Career</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 my-7">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={userPic}/>
            </div>
          </label>
          {/* <Link to='/login'><button className="btn ">Login</button></Link> */}
          {user ? (
            <>
              
                <button className="btn " onClick={handleSignOut}>SignOut</button>
              
            </>
          ) : (
            <Link to="/login">
              <button className="btn ">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
