import React from "react";
function Alert(props) {
    return(
            <div className="alert alert-waening alert-dismissible fade show" role="alert">
  <strong> {props.alert} </strong>
   <button type="button" className="btn-class" data-bs-dismiss="alert" aria-label="close"></button>
            </div>
       
    )
}
  export default Alert