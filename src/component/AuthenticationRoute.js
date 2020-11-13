import React , {Component} from 'react'
import { Redirect, Route } from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'


class AuthenticationRoute extends Component{

    render(){
        if(AuthenticationService.isLogin()){
        return <Route {...this.props}></Route>
        }
        else{
            return <Redirect to="/login"></Redirect>
        }
    }
}
export default AuthenticationRoute