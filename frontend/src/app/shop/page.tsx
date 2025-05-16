import React from 'react'

import {ChevronLeft} from "lucide-react";

export default function page() {
  return (
    <div>
        {/* breadcrumbs */}
        <div className='flex '> 
            <ChevronLeft/>
            <span>Back to shop</span>
        </div>

        <div>
            {/* image */}
            <div>
                 {/* magnifying image */}
                <img src="" alt="" />
                
                {/* images slider 3-4 imgs */}
                <div>

                </div>
            </div>

            {/* scrollable info section */}
            <div>
                {/* title */}
                <h2></h2>
                {/* desc */}
                <p></p> 
                {/* price */}
                <p></p>
            </div>

        </div>


    </div>
  )
}