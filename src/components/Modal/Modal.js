import React from "react";
import "./Modal.sass"
import Thumb from "../Thumb/Thumb";

export default function Modal({active, setActive}) {
    return (
        <div className={active ? 'background active' : 'background'} onClick={() => setActive(false)}>
            <div className={active ? 'modal active' : 'modal'} onClick={(e) => e.stopPropagation()}>
                <div className='svgContainer'>
                    <Thumb/>
                </div>
                <button className="btn" onClick={() => setActive(false)}>Good job</button>
            </div>
        </div>
    )
}