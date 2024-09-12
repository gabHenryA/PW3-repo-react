import style from './CardMaterial.module.css'
import Button from './Button'

const CardBooks = ({ titulo, autor}) => {
    
    return(
        <div className={style.card_material}>
            <h3 className={style.titulo}>{titulo}</h3>
            <p className={style.autor}>{autor}</p>
            {/* <img src={imagem} alt={titulo} title={{titulo}} /> */}
            <div>
                <Button label='DETALHES'/>
            </div>
        </div>
    )
}

export default CardMaterial