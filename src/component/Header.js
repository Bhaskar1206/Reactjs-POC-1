
import {Link} from 'react-router-dom'
import { withRouter } from 'react-router'
import AuthenticationService from './AuthenticationService'


function Header() {
    const userLoggedIn = AuthenticationService.isLogin();
    console.log(userLoggedIn);

    return(
        <header>
            <nav className="nav navbar-expand-md navbar-dark bg-dark">
                <div ><a href="https://www.google.com">Google</a></div>
                <ul className="navbar-nav">
                    {userLoggedIn && <li><Link to="/welcome" className="nav-link">Home</Link></li>}
                    {userLoggedIn && <li><Link to="/student-list" className="nav-link">Student-List</Link></li>}
                </ul>
                <ul className="navbar-nav navbar-collapse justify-content-end">
                    {!userLoggedIn && <li><Link to="/login" className="nav-link">Login</Link></li>}
                    {userLoggedIn && <li><Link to="/logout" className="nav-link" onClick={AuthenticationService.logout}>Logout</Link></li>}
                </ul>
            </nav>
        </header>
    )

}
export default withRouter(Header);