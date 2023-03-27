import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const Protect = ({admin , child}) => {
    return ( 
        <section>
            {
                admin ? child : <Navigate to='/' replace />
            }
        </section>
     );
}

let mapStateToProps = (state)=>
{
    return { admin : state.admin }
}
 
export default connect(mapStateToProps)(Protect);