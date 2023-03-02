import React from "react";

function Procard (props){
    return(
        <>
       
        <div className="col-4">
        <img src={props.imgsrc} />
        <h4>{props.productName}</h4>
        <p>{props.Price}</p>
        </div>
        </>
    )

}
export default Procard