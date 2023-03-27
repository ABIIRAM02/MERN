import axios from "axios";
import { useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const LogIn = ({addAdmin}) => {

    let [name , setName] = useState("")
    let [password , setPassword] = useState("")

    let navigate = useNavigate()

    let handleLogin = (e)=>
    {
        e.preventDefault()
        let loginData = { name , password }
        axios.post("http://localhost:2001/login" , loginData)
        .then((res)=>
        {
            let adminData = res.data.adminData
            console.log(adminData);

            switch(res.data.message)
            {
                case "login successfull" : return addAdmin(adminData) , alert("login successfull") , navigate('/home')
                case "incorrect password" : return alert("incorrect password")
                default : alert("seems like you haven't signed before")
            }
        })
    }

    return ( 
        <section className="h-screen flex flex-col justify-center items-center bg-gray-100" >
            <main className=" p-3 rounded-lg h-3/5 w-1/3 border border-gray-400 shadow-1 bg-white">
                <div className=" rounded-md bg-gray-100 py-5" >
                <h2 className="text-center text-3xl font-bold" >LogIn</h2>
                <form onSubmit={handleLogin} className="flex flex-col gap-5 my-10 w-2/3 m-auto" >
                    <input onChange={(e)=>{setName(e.target.value)}} className="rounded p-2 text-lg border border-black" placeholder="UserName" type="text" />
                    <input onChange={(e)=>{setPassword(e.target.value)}} className="rounded p-2 text-lg border border-black" placeholder="Password" type="password" />
                    <input className="cursor-pointer rounded p-2 text-lg border border-black" type="submit" value='LogIn' />
                </form>
                </div>
                <div className="text-center py-10 text-lg flex justify-center items-center gap-x-5 font-semibold" >
                    <h2>Dont have an account.?</h2>
                    <Link to='/signup' ><button className="px-5 py-1 rounded bg-green-300 " >SignUp</button></Link>
                </div>
            </main>
        </section>
     );
}
 
let mapStateToProps = (state)=>
{
    return {...state}
}

let mapDispatchToProps = (dispatch)=>
{
    return{
        addAdmin : (adminData)=>{dispatch({type:"addAdmin" , payload : adminData })}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LogIn);