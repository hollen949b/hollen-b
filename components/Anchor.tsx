"use client"
import { useEffect } from 'react';

const Anchor = ({
    id
}:{
    id:string
}) => { 
    return (
        <div className="relative">
          <span className="absolute lg:top-0" id={id} />
        </div>
    )
}

export default Anchor