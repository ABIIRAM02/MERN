import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Nav = ({admin , addAdmin}) => {
    return ( 
        <section className="bg-purple text-dimwhite flex py-[1rem] justify-between items-center font-semibold text-lg" >
            <div className="flex justify-evenly w-1/3" >
                <h2 className="text-xl font-bold" >LOGO</h2>
                <Link to='/home' ><h2>Home</h2></Link>
                <Link to='/employeelist' ><h2>Employee List</h2></Link>
            </div>
            <div className="flex w-1/3 justify-evenly" >
                <h2 className="" >Admin : {admin.name}</h2>
                <button onClick={addAdmin} className="px-5 py-1 bg-mygray rounded ">Logout</button>
            </div>
        </section>
     );
}

let mapStateToProps = ( state )=>
{
    return {admin : state.admin }
}

let mapDispatchToProps = (dispatch)=>
{
    return{
        addAdmin : ()=>{dispatch({type : "addAdmin" , payload:null})}
    }
}
 
export default connect(mapStateToProps , mapDispatchToProps)(Nav);