import React from 'react';
import StudentData from './StudentData';

function StudentList(){
    const {deleteStudent , values } = StudentData();

        return(
            <div className="container">
                <h1>StudentList are..</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>SUBJECT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            values.map(
                                value=>
                                
                                <tr key ={value.id}>
                                    <td >{value.id}</td>
                                    <td>{value.name}</td>
                                    <td>{value.subject}</td>
                                    <td><button 
                                        onClick={()=> deleteStudent(value.index)}
                                        className="btn- btn-dark"
                                    >x</button></td>
                                </tr>
                                
                            )
                            
                        }
                       
                    </tbody>
                </table>
               
                
            </div>
        )
}
export default StudentList;