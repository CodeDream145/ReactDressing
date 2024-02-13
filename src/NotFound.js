import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="notfound">
            <h4>404 Page Not Found</h4>
            <Link to="/">Go back to Home</Link>
        </div>
    );
}
    <div>
        <h4>Page Not Found</h4>
        <Link to="/">Go back to Home</Link>
    </div>
export default NotFound;