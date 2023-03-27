const person = {admin : null , update: null , emp : [{ emp_id : 1 , emp_image : "" , emp_name : "abii" , emp_email: "abiram@gmail.com" , emp_mobile:7540071057 , emp_designation : "web developer" , emp_gender : "male" , emp_course:"BCA" , emp_createdDate : new Date().toLocaleDateString()  }]}

let reducer = ( state = person , action)=>
{
    switch(action.type)
    {
        case "addAdmin"         : return { ...state , admin : action.payload }
        case "gonna_update_emp" : return { ...state , update : action.payload }
        case "update_emp"       : return { ...state , emp : action.payload }
        case "add_emp"          : return { ...state , emp : [...state.emp , action.payload] }
        case "del_emp"          : return { ...state , emp :  state.emp.filter((data)=>{return(data.emp_id !== action.payload)})  }
        case "search_emp"       : return { ...state , emp :  state.emp.filter((data)=>{return(data.emp_id == action.payload)})  }
        default : return {...state}
    }
}

export default reducer