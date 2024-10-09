import { Link } from "react-router-dom";  
import '../styles/Landing.css'
const Landing = () => {
    return ( 
        <div className="page">
            <Link to='/adminlogin'>
            <img src="https://static.vecteezy.com/system/resources/previews/029/156/453/non_2x/admin-business-icon-businessman-business-people-male-avatar-profile-pictures-man-in-suit-for-your-web-site-design-logo-app-ui-solid-style-illustration-design-on-white-background-eps-10-vector.jpg" alt="Admin-Login" />
            <h1>Admin Login</h1>
            </Link>
            <Link to='/userlogin'>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg" alt="User-Login" />
            <h1>User Login</h1>
            </Link>
        </div>
     );
}
 
export default Landing;

// React Router Dom ?  {code to install is (npm install react-router-dom)}