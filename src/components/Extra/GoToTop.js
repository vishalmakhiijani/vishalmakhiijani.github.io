import React from "react";

const GoToTop = () =>{
    const goToBtn = () =>{
        window.scrollTo({top:0,left:0, behavior:"smooth"})
    }
    return <div className="TopBtn" onClick={goToBtn}>
        <h1>TOp BTn</h1>
    </div>;
}

export default GoToTop;