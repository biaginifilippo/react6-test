import {  Outlet } from "react-router-dom"
import Navbar from "./navbar";

const Home = () =>  {

    return (
        <div>
            <br/>
            <img className=" preload-me" src="https://www.aqua.it/wp-content/uploads/2020/02/aqua_logo.png" srcSet="https://www.aqua.it/wp-content/uploads/2020/02/aqua_logo.png 161w, https://www.aqua.it/wp-content/uploads/2020/02/aqua_logo-hd.png 305w" width="161" height="90" sizes="161px" alt="Aqua"></img><br/> <br/>
            <Navbar>
            </Navbar> <br/><br/>

            <section className="section">


<div className="row">
            <Outlet/> <br/> <br/>

</div>


<br/> <br/>
            <b>CONTACTS</b> <br/> <br/> 
             <b>Tel.</b> +39 1234567  <b> Fax</b>: 059 111111 <b>   eMail</b>: info@aqua.it   
            </section>
        </div>
    )     
}
export default Home;