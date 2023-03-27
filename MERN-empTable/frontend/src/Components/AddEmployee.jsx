import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddEmployee = ({emp, add_emp}) => {

    let [ BCAisChecked , setBCAIsChecked  ] = useState(true)
    let [ BSCisChecked , setBSCIsChecked  ] = useState(false)
    let [ MCAisChecked , setMCAIsChecked  ] = useState(false)

    let [id , setId] = useState("")
    let [name , setname] = useState("")
    let [email , setEmail] = useState("")
    let [mobile , setMobile] = useState("")
    let [gender , setGender] = useState("")
    let [designation , setDesignation] = useState("HR")
    let [ course , setCourse  ] = useState("BCA")

    let navigate = useNavigate()

    let empData = {emp_id:id, emp_image:null, emp_name:name , emp_email:email , emp_mobile:mobile , emp_gender:gender ,emp_designation: designation , emp_course:course ,  emp_createdDate : new Date().toLocaleDateString()}

    let handleAddData =(e)=>
    {
        e.preventDefault()
        if(emp.some((emp)=>{return((emp.emp_id == empData.emp_id || emp.emp_email == empData.emp_email))}))
        {
            alert("id or email already present")
        }
        else
        {
            add_emp(empData)
            alert("added")
            navigate('/employeelist')
        }

    }

    return ( 
        <section className="h-screen flex flex-col justify-center items-center bg-gray-100" >
            <main className=" p-3 rounded-lg h-fit w-1/3 border border-gray-400 shadow-1 bg-white">
                <div className=" rounded-md bg-gray-100 py-5" >
                <h2 className="text-center text-3xl font-bold text-purple " >Add Employee</h2>
                <form onSubmit={handleAddData} className="flex flex-col gap-5 my-10 w-2/3 m-auto" >
                    <input onChange={(e)=>{setId(e.target.value)}} required className="rounded p-2 text-lg border border-black" placeholder="emp_id" type="number" />
                    <input onChange={(e)=>{setname(e.target.value)}} required className="rounded p-2 text-lg border border-black" placeholder="UserName" type="text" />
                    <input onChange={(e)=>{setEmail(e.target.value)}} required className="rounded p-2 text-lg border border-black" placeholder="Email" type="email" />
                    <input onChange={(e)=>{setMobile(e.target.value)}} required className="rounded p-2 text-lg border border-black" placeholder="Mobile" type="number" />
                    <div className=" text-lg flex gap-x-20" >
                        <div><input className=" appearance-none outline p-[5px] outline-offset-2 rounded-full outline-purple checked:bg-purple transition mx-2 " required onClick={()=>{setGender("male")}} type="radio" name="Gender" /><label htmlFor="Male"> Male </label></div>
                        <div><input className=" appearance-none outline p-[5px] outline-offset-2 rounded-full outline-purple checked:bg-purple transition mx-2 " required onClick={()=>{setGender("female")}} type="radio" name="Gender" /><label htmlFor="Female"> Female </label></div>
                    </div>
                    <select value={designation} onChange={(e)=>{setDesignation(e.target.value)}} className="rounded p-2 text-lg border border-black" >
                        <option value="HR">HR</option>
                        <option value="Manager">Manager</option>
                        <option value="Sales">Sales</option>
                        <option value="Web Developer">Web Developer</option>
                    </select>
                    <div className="text-lg flex gap-x-3" >
                        <input type="checkbox" checked={BCAisChecked} onChange={()=>{setBCAIsChecked(true) ; setBSCIsChecked(false) ; setMCAIsChecked(false) ; setCourse("BCA")}} /><label htmlFor="">BCA</label>
                        <input type="checkbox" checked={BSCisChecked} onChange={()=>{setBCAIsChecked(false) ; setBSCIsChecked(true) ; setMCAIsChecked(false) ; setCourse("BSC")}} /><label htmlFor="">BSC</label>
                        <input type="checkbox" checked={MCAisChecked} onChange={()=>{setBCAIsChecked(false) ; setBSCIsChecked(false) ; setMCAIsChecked(true) ; setCourse("MCA")}} /><label htmlFor="">MCA</label>
                    </div>
                    <input  className="rounded bg-white p-2 text-lg border border-black" type="file" accept="image/png ,image/jpeg" />
                    <input className="cursor-pointer bg-mygray text-dimwhite font-semibold tracking-wide mt-5 rounded p-2 text-lg " type="submit" value='ADD' />
                </form>
                </div>
            </main>
        </section>
     );
}

let mapStateToProps = (state)=>
{
    return{ emp : state.emp }

}

let mapDispatchToProps =(dispatch)=>
{
    return{
        add_emp : (empData)=>{dispatch( {type:"add_emp" , payload:empData } )}
    }
}
 
export default connect(mapStateToProps , mapDispatchToProps)(AddEmployee);