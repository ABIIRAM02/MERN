import { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const EmployeeList = ({emp , del_emp ,search_emp ,gonna_update_emp  }) => {

    let [searchInput , setSearchInput ] = useState("")

    let handleSearch =(e)=>
    {
        e.preventDefault()
        search_emp(Number(searchInput))
    }

    return ( 
        <section className="h-screen" >
            <Nav/>
            <main className="h-5/6 border flex flex-col w-11/12 m-auto items-center justify-center" >
                <div className="flex justify-between items-center w-full text-xl font-semibold px-5" >
                    <h2>Total Employees : {emp.length}</h2>
                   <div className="w-2/5 flex justify-between items-center" >
                        <Link to='/addemployee' ><button  className="bg-purple w-full px-5 py-2 rounded text-dimwhite" >Create employee</button></Link>
                        <form onSubmit={handleSearch} className='w-3/5' >
                        <input type="search" onChange={(e)=>{setSearchInput(e.target.value)}} placeholder="Search_Emp_id" className="w-full p-2 rounded-md text-mygray bg-dimwhite border-2 border-purple outline-none text-lg" />
                        <input className=" border border-black hidden" type="submit" />
                        </form>
                   </div>
                </div>
                <table className="h-fit flex flex-col rounded w-full border border-black m-5" >
                    <thead className="bg-mygray text-dimwhite w-full rounded-t" >
                        <tr className="grid p-5 grid-cols-10 place-items-center" >
                            <th>Unique_id</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Designation</th>
                            <th>Gender</th>
                            <th>Course</th>
                            <th>CreatedDate</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                {
                    emp.map((data , index)=>
                    {
                        return(
                            <tbody key={index} className="bg-dimwhite text-lg text-mygray rounded-b w-full py-5 ">
                            <tr className="grid grid-cols-10 place-items-center " >
                                <td>{data.emp_id}</td>
                                <td >{data.emp_name}</td>
                                <td className="hidden" >{data.emp_image}</td>
                                <td className="col-span-2">{data.emp_email}</td>
                                <td>{data.emp_mobile}</td>
                                <td>{data.emp_designation}</td>
                                <td>{data.emp_gender}</td>
                                <td>{data.emp_course}</td>
                                <td>{data.emp_createdDate}</td>
                                <td >
                                    <Link to='/updateemployee' >
                                        <button onClick={()=>{gonna_update_emp(data)}} title='EDIT' >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 text-dimwhite mr-2  px-2 rounded cursor-pointer bg-purple p-1 " fill="currentcolor" viewBox="0 0 24 24" ><path d="m16 2.012 3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287-3-3zm0 6h16v2H4z"></path></svg>
                                        </button></Link>
                                        <button onClick={()=>{del_emp(data);console.log(data.emp_id)}} title='DELETE' >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 text-dimwhite  px-2 rounded cursor-pointer bg-red-500 p-1  " fill="currentcolor" viewBox="0 0 24 24" ><path d="M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm.706 13.293-1.414 1.414L12 13.415l-3.292 3.292-1.414-1.414 3.292-3.292-3.292-3.292 1.414-1.414L12 10.587l3.292-3.292 1.414 1.414-3.292 3.292 3.292 3.292z"></path></svg>
                                        </button> </td>
                            </tr>
                        </tbody>
                        )
                    })
                }
                </table>

            </main>

        </section>
     );
}

let mapStateToProps = (state)=>
{
    return{
        emp : state.emp  
    }
}
let mapDispatchToProps = (dispatch)=>
{
   return{
        del_emp : (data)=>{dispatch({type:"del_emp" , payload:data.emp_id})},
        search_emp : (searchInput)=>{dispatch({type:"search_emp" , payload:searchInput})},
        gonna_update_emp : (data)=>{dispatch({type:"gonna_update_emp" , payload:data})}
}
}
 
export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);