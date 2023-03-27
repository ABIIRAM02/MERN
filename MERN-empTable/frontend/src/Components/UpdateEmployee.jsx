import { useState } from "react"
import { connect } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom"

const UpdateEmployee = ({updateData , emp , update_emp}) => 
{

    let [ BCAisChecked , setBCAIsChecked  ] = useState(true)
    let [ BSCisChecked , setBSCIsChecked  ] = useState(false)
    let [ MCAisChecked , setMCAIsChecked  ] = useState(false)

    let [id , setId] = useState(updateData.emp_id)
    let [name , setname] = useState(updateData.emp_name)
    let [email , setEmail] = useState(updateData.emp_email)
    let [mobile , setMobile] = useState(updateData.emp_mobile)
    let [gender , setGender] = useState(updateData.emp_gender)
    let [designation , setDesignation] = useState(updateData.emp_designation)
    let [course , setCourse  ] = useState(updateData.emp_course)

    let navigate = useNavigate()


    let handleUpdatedData = (e)=>
    {
        e.preventDefault()

        let empUpdateData = {emp_id:id, emp_image:null, emp_name:name , emp_email:email , emp_mobile:mobile , emp_gender:gender ,emp_designation: designation , emp_course:course ,  emp_createdDate : new Date().toLocaleDateString()}
        let ind = emp.findIndex((data)=>{ return(data.emp_id === empUpdateData.emp_id) })
        let updatedEmp = [...emp]
        updatedEmp.splice(ind , 1 , empUpdateData)
        console.log(updatedEmp);
        update_emp(updatedEmp)
        navigate('/employeelist')
    }

    return ( <>

            {
                updateData ?
            
        <section className="h-screen flex flex-col justify-center items-center bg-gray-100" >
            <main className=" p-3 rounded-lg h-fit w-1/3 border border-gray-400 shadow-1 bg-white">
                <div className=" rounded-md bg-gray-100 py-5" >
                <h2 className="text-center text-3xl font-bold text-mygray " >Update Employee</h2>
                <form onSubmit={handleUpdatedData} className="flex flex-col gap-5 my-10 w-2/3 m-auto" >
                    <input value={id} onChange={(e)=>{setId(e.target.value)}} required className="rounded p-2 text-lg border border-black" placeholder="emp_id" type="number" />
                    <input value={name} onChange={(e)=>{setname(e.target.value)}} required className="rounded p-2 text-lg border border-black" placeholder="UserName" type="text" />
                    <input value={email} onChange={(e)=>{setEmail(e.target.value)}} required className="rounded p-2 text-lg border border-black" placeholder="Email" type="email" />
                    <input value={mobile} onChange={(e)=>{setMobile(e.target.value)}} required className="rounded p-2 text-lg border border-black" placeholder="Mobile" type="number" />
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
                    <div className="text-lg flex gap-x-3 items-center" >
                        <input type="checkbox" checked={BCAisChecked} onChange={()=>{setBCAIsChecked(true) ; setBSCIsChecked(false) ; setMCAIsChecked(false) ; setCourse("BCA")}} /><label htmlFor="">BCA</label>
                        <input type="checkbox" checked={BSCisChecked} onChange={()=>{setBCAIsChecked(false) ; setBSCIsChecked(true) ; setMCAIsChecked(false) ; setCourse("BSC")}} /><label htmlFor="">BSC</label>
                        <input type="checkbox" checked={MCAisChecked} onChange={()=>{setBCAIsChecked(false) ; setBSCIsChecked(false) ; setMCAIsChecked(true) ; setCourse("MCA")}} /><label htmlFor="">MCA</label>
                    </div>
                    <input  className="rounded bg-white p-2 text-lg border border-black" type="file" accept="image/png , image/jpg" />
                    <input className="cursor-pointer bg-purple text-dimwhite font-semibold tracking-wide mt-5 rounded p-2 text-lg " type="submit" value='ADD' />
                </form>
                </div>
            </main>
        </section> : <Navigate to='/addemployee' replace />
        }
        </>
     );
}

let mapStateToProps = (state)=>
{
    return{
        updateData : state.update , emp : state.emp
    }
}

let mapDispatchToProps = (dispatch)=>
{
    return{
        update_emp : (updatedEmp)=>{ dispatch( {type: "update_emp" ,payload :updatedEmp } ) }
    }
}
 
export default connect(mapStateToProps ,mapDispatchToProps)(UpdateEmployee);