import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../images/404-error.png';

const NotFound = () => {
    return (
        <div className="text-center">
            <img style={{width:'100%', height:'500px'}} src={error} alt="" /> <br />
            <Link to="/home"><button className="btn btn-danger m-3">Go Back Home</button></Link>
        </div>
    );
};

export default NotFound;