import React from "react";
import "../css/ImageGallery.css"
function ImageGallery(){
    return(
        <div className="gallery">
            <div>
                <span>
                    <img src="img1.png" id="next">
                    </img>
                </span>
                <span>
                    <img src="img2.png" id="next">
                    </img>
                </span>
                <span>
                    <img src="img3.png" id="next">
                    </img>
                </span>
                <span>
                    <img src="img4.png" id="next">
                    </img>
                </span>
                <span>
                    <img src="img5.png" id="next">
                    </img>
                </span>
           </div>
        </div>
    )
}
export default ImageGallery;