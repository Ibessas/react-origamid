import React from "react";

const Eventos = () => {
    function handleScroll(event) {
        console.log(event)
    }
    window.addEventListener('scroll', handleScroll)
    return (
        <div style={{height: '200px'}}>
            <button onClick={(event) => alert(event.target.innerText)}>Compre violão</button>
        </div>
    )
}

export default Eventos;