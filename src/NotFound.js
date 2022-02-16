import {Link} from 'react-router-dom'

const NotFound = () => {
    return ( 
        <div className='not-found txt-center'>
            <h2 className='heading-404'>404</h2>
            <hr className='m-auto' />
            <p>Sorry, page not found, please check your link again.</p>
            <Link to="/">Back to Home page</Link>
        </div>
     );
}
 
export default NotFound;