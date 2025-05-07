import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav style={{display:'flex', justifyContent:'end', marginRight:'10%'}}>
        <Link to="/" style={{marginRight:'2rem'}}>Home</Link>
        <Link to='/about'>About</Link>
    </nav>
  )
}

export default Navbar