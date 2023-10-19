import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Topbar() {
    const [count,setcount] = useState(7)
    const [Title,setTitle] = useState("Coming home to Norway")

    const textHandler = () => {
        setTitle("I'm going to mississippi")
    }
    
    const countHandler = () => {
        setcount((prev) => {
            return prev + 5
        })
    }

    const abtUrl = {
        pathname: '/about',
        search:"?p=21&cn=tunji bello"
    }

    return ( 
        <>

        <div className='Container'>
            <ul className="route">
                <li>
                    <NavLink activeclassname="active" to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink activeclassname="active" to={abtUrl}>About</NavLink>
                </li>
                <li>
                    <NavLink activeclassname="active" to="/product">Product</NavLink>
                </li>
            </ul>
        </div>

        <div className="names">
            <h2>Student Records Manager</h2>
            <h3>{count}</h3>
            <h2>{Title}</h2>
            <button onClick={countHandler}>Count</button>
            <button onClick={textHandler}>Change</button>
        </div>
        </>
     );
}

export default Topbar;