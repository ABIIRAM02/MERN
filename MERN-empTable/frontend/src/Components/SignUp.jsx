import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {

    let [name , setName] = useState("")
    let [password , setPassword] = useState("")
    let [confirmPassword , setConfirmPassword] = useState("")

    let navigate = useNavigate()

    let handleSignUp = (e)=>
    {
        e.preventDefault()
        if (name && (password === confirmPassword)) {
            let data = { name , password }
            axios.post('http://localhost:2001/signup' , data)
            .then((res)=>
            {
                alert(res.data.message)
                navigate('/')
            })
        }
            else
            {
                alert("Password Missmatch")
            }
        
    }

    return ( 
        <section className="h-screen flex flex-col justify-center items-center bg-gray-100" >
            <main className=" p-3 rounded-lg h-3/4 w-1/3 border border-gray-400 shadow-1 bg-white">
                <div className=" rounded-md bg-gray-100 py-5" >
                <h2 className="text-center text-3xl font-bold" >Regester</h2>
                <form onSubmit={handleSignUp} className="flex flex-col gap-5 my-10 w-2/3 m-auto" >
                    <input required onChange={(e)=>{setName(e.target.value)}} className="rounded p-2 text-lg border border-black" placeholder="UserName" type="text" />
                    <input required className="rounded p-2 text-lg border border-black" placeholder="Email" type="email" />
                    <input required onChange={(e)=>{setPassword(e.target.value)}} className="rounded p-2 text-lg border border-black" placeholder="Password" type="password" />
                    <input required onChange={(e)=>{setConfirmPassword(e.target.value)}} className="rounded p-2 text-lg border border-black" placeholder="Confirm-Password" type="password" />
                    <input className="cursor-pointer rounded p-2 text-lg border border-black" type="submit" value='SignUp' />
                </form>
                </div>
                <div className="text-center py-10 text-lg flex justify-center items-center gap-x-5 font-semibold" >
                    <h2>Already have an account .?</h2>
                    <Link to='/' ><button className="px-5 py-1 rounded bg-green-300 " >Login</button></Link>
                </div>
            </main>
        </section>
     );
}
 
export default SignUp;