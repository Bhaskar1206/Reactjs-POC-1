
import {Link} from 'react-router-dom'


function Welcome(){
    return(
        <div>
            Welcome to the Home Page!!!!
            <div>
            <Link to="/student-list">Click here..</Link>
            </div>
        </div>
    )
}
export default Welcome;