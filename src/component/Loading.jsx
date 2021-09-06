import React from "react";

export default function Loading(){
    return(
        <div>
            <div className="overlay-wrapper">
                <div className="overlay"><i className="fas fa-3x fa-sync-alt fa-spin"></i>
                </div>
            </div>
        </div>
    )
}