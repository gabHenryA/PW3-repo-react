import style from './Button.module.css'
import { Link } from 'react-router-dom'

const Button = ({label, router, cod_material}) => {
    return(
        <div className={style.buttonContainer}>

            <Link to={`${router}${cod_material}`}>
                <button>{label}</button>
            </Link>
            
        </div>
    )
}

export default Button