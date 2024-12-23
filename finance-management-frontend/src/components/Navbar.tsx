import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-4 bg-blue-600 text-white">
      <h1 className="text-xl font-bold">Finance Manager</h1>
      <div>
        <Link to="/login" className="mr-4">
          Login
        </Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
