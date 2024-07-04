import { Outlet, Link } from "react-router-dom"
const Navbar = () => {
    return(
        <div>
             <div className="navbar ">
            <span><Link to={"/"} className="listItem ">Navbar</Link></span>
            <section>
                <ul className="list">
                    <li className="listItem"><Link to={"/net"} className="listItem">Networks</Link></li>
                    <li className="listItem"><Link to={"/mac"} className="listItem">Machines</Link></li>
                    <li className="listItem"><Link to={"/eco"} className="listItem">ECO</Link></li>
                    <li className="listItem"><Link to={"/power"} className="listItem">Power</Link></li>
                    <li className="listItem"><Link to={"/ada"} className="listItem">ADA</Link></li>
                </ul>
            </section>
        </div>
        <div className="main-container">
            <Outlet/>
        </div>
        </div>
    )
}

export default Navbar