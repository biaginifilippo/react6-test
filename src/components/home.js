import { Link, Outlet } from "react-router-dom"
import Navbar from "./navbar";
import { Button } from "bootstrap";
const Home = () =>  {

    return (
        <div>
            <b>AQUA S.p.A. </b>
            <Navbar>
            </Navbar> <br/><br/>

            <section className="section">

            <Outlet/> <br/> <br/>
            <b>CONTACTS</b> <br/> <br/>
             <b>Tel.</b> +39 1234567  <b> Fax</b>: 059 111111 <b>   eMail</b>: info@aqua.it   
            </section>
        </div>
    )     
}
export default Home;