import React from "react";
import ImageSlider from "react-auto-image-slider";

const FeaturedCate = () =>{
 return (
    <>
    <div className="categories">
    <h2>Featured Categories</h2>
    <div className="small-container">
        <div className="rowk">
            <div className="col-3">
                <img src="images1/Product-1.jpg" />
            </div>
            <div className="col-3">
                <img src="images1/category-2.jpg" />
            </div>
            <div className="col-3">
                <img src="images1/category-3.jpg" />
            </div>
        </div>
        <hr/>
    </div>
</div>
    </>
 )
}
export default FeaturedCate