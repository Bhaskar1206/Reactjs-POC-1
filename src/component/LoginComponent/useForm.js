import {useState} from 'react';
import { useHistory } from "react-router-dom";
import AuthenticationService from '../AuthenticationService'

const useForm =() => {
    const history = useHistory();
     const [values, setValues] = useState({
         username: '',
         password : ''
     })
     
     console.log(values);

     const handleChange = e => {

        const { name ,value} = e.target
         setValues({
             ...values,
             [name] : value
         })
     }

     const handleSubmit = e => {
        e.preventDefault();
        if(values.username==="Bhaskar" && values.password==="123"){
            history.push(`/welcome`);
            AuthenticationService.registerSuccessfullLogin(values.username,values.password);
            console.log("Success");
        }else{
            console.log("Fail")
        }
     }

     return{handleChange , values, handleSubmit}
}
export default useForm;
