import {Link, Outlet } from "react-router-dom";

const Navbar = () => {
    return (
      <>
        <nav className="navbar">
          <h1>The Old Classics</h1>
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/create">New Blog</Link>
          </div>
        </nav>
        <div className="content">
          <Outlet />
        </div>
        
      </>
    );
}
   
export default Navbar;