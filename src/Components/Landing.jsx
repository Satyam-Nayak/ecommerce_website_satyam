import { Link } from "react-router-dom";  

const Landing = () => {
    return ( 
        <div className="page">
            <Link to='/adminlogin'>
            <h1>Admin Login</h1>
            </Link>
            <Link to='/userlogin'>
            <h1>User Login</h1>
            </Link>
        </div>
     );
}
 
export default Landing;

// React Router Dom ?  {code to install is (npm install react-router-dom)}