
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (

        <div className='column'>
            <NavLink className='btn btn-light' to='/home' style={({ isActive }) => {
                return { color: isActive ? 'blue' : 'black' }
            }}> Home Page </NavLink>
            <NavLink className='btn btn-light' to='/about' style={({ isActive }) => {
                return { color: isActive ? 'blue' : 'black' }
            }}> About</NavLink>
            <NavLink className='btn btn-light' to='/products' style={({ isActive }) => {
                return ({ color: isActive ? 'blue' : 'black' })
            }} > Products</NavLink>
            <NavLink className='btn btn-light' to='/postproducts' style={({ isActive }) => {
                return ({ color: isActive ? 'blue' : 'black' })
            }} > Post</NavLink>
        </div>

    )
}
export default Navbar