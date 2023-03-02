import React from "react";
import Data from "./Data"
import Procard from "./Procard";

function FeaturedPro(){
return(
    <> 
       <div className="small-container">
       <h2>Featured Products</h2>
       <div className="row">
        {Data.map((val)=>{
            return(
               
               <Procard 
               imgsrc = {val.imgsrc}
               productName = {val.productName}
               Price ={val.Price}/>  
               
            )
        })}
       </div>
      </div> 
    
    </>
    )
}
export default FeaturedPro 