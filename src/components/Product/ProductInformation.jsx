import React, {useState} from "react";
import { currentContext } from "../../ProductContext";

export default function ProductInformation({children}) {

    return (
        <div className="info-container">
            {children}
        </div>
    )
}