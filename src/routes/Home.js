// import { Link } from "fs"
import React from "react"
import { Link } from "react-router-dom"

function Home(){
    return(
        <div>
            <h1>Home</h1>
            <Link to="/registry">Click here to go to registry</Link>
        </div>
    )
}

export default Home;