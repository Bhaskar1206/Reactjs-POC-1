class AuthenticationService {

    registerSuccessfullLogin(userName , password){
        sessionStorage.setItem('authenticaticatedUser',userName);
    }
    logout(){
        sessionStorage.removeItem('authenticaticatedUser');
    }
    isLogin(){
        let user = sessionStorage.getItem('authenticaticatedUser');
        if(user === null) return false
        return true
    }
    


}
export default new AuthenticationService();