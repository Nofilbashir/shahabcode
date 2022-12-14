import React ,{useState}from 'react'
import './MobileNav.css' ;
// import { a} from 'react-router-dom';


const MobNav = () => {
    const [show, setShow] = useState(false)

  return (
    <div className="Mob_Navbar">
        <div className={show?"hidden":'Mob_Navbar_left'}>
        </div>
       

        <div className={show?"Mob_Navbar_right":'hidden_animation'}>
            <a href='#about'>About</a>
            <a href='#products'>Products</a>
            <a href='#services'>Services</a>
            <a href='#contact'>Contact</a>
        </div>
        <div className={show?'cross burger':'burger'} onClick={()=>setShow(!show)}>
            <div></div>
            <div></div>
        </div>
       
    </div>
  )
}

export default MobNav

