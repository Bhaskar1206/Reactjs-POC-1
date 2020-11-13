
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import FooterComponent from './FooterComponent';
import Header from './Header';
import FormSignup from './LoginComponent/FormSignup';
import StudentList from './StudentList';
import Welcome from './Welcome';
import Logout from './Logout'
import AuthenticationRoute from './AuthenticationRoute'


function Student() {
    
        return(
            <div className="StudentApp">
                <Router>
                    <Header></Header>
                    <Switch>
                        <Route  path="/" exact component={FormSignup}></Route>
                        <Route path="/login" component={FormSignup}></Route>
                        <AuthenticationRoute path ="/welcome" component={Welcome}></AuthenticationRoute>
                        <AuthenticationRoute path ="/student-list" component={StudentList}></AuthenticationRoute>
                        <AuthenticationRoute path ="/logout" component={Logout}  ></AuthenticationRoute>
                    </Switch>
                    <FooterComponent></FooterComponent>
                </Router>
            </div>
        )
    
}
export default Student;