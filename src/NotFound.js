import {Link} from 'react-router-dom'

const NotFound = () => {
    return ( 
        <div className='not-found txt-center'>
            <h2>404</h2>
            <p>Sorry, Page not found</p>
            <Link to="/">Back to Home page</Link>
        </div>
     );
}
 
export default NotFound;