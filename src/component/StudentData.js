import React from 'react';


const StudentData =() => {
    const [values, setValues] = React.useState([

        {
            id: 1,
            name: 'Bhaskar',
            subject: 'math'
        },
        {
            id: 2,
            name: 'Sayon',
            subject: 'geography'
        },
        {
            id: 3,
            name: 'Shreyanjit',
            subject: 'history'
        },

    ]);
    

    
    
    const deleteStudent = index => {
        const newValues =[...values];
        newValues.splice(index,1);
        setValues(newValues);
    }
    
    return {deleteStudent , values }
}
export default StudentData;