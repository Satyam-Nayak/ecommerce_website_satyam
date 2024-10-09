import { Link } from "react-router-dom";  
import '../styles/Landing.css'
const Landing = () => {
    return ( 
        <div className="page">
            <Link to='/adminlogin'>
            <img src="https://w7.pngwing.com/pngs/306/70/png-transparent-computer-icons-management-admin-silhouette-black-and-white-neck-thumbnail.png" alt="Admin-Login" />
            <h1>Admin Login</h1>
            </Link>
            <Link to='/userlogin'>
            <img src="https://png.pngtree.com/png-clipart/20191120/original/pngtree-outline-user-icon-png-image_5045523.jpg" alt="User-Login" />
            <h1>User Login</h1>
            </Link>
        </div>
     );
}
 
export default Landing;

// React Router Dom ?  {code to install is (npm install react-router-dom)}