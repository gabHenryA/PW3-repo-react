import { Outlet, Link } from 'react-router-dom' 

import style from './NavBar.module.css'

const NavBar = () =>{
    return(

        <>
            <nav className={style.navbar}>
                <ul className={style.list}>

                    <Link to='/'>
                    <li className={style.item}><img className = {style.logo} src="./Dadorpg.png"/> </li>
                    </Link>

                    <Link to='/'>
                    <li className={style.item}>HOME</li>
                    </Link>

                    <Link to='/createMaterial'>
                    <li className={style.item}>CRIAR MATERIAL</li>
                    </Link>

                    <Link to='listMaterial'>
                    <li className={style.item}>LISTAR MATERIAIS</li>
                    </Link>

                </ul>

            </nav>

            <Outlet/>

        </>
    )
}

export default NavBar