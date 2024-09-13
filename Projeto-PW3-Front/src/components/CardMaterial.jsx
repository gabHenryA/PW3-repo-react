import style from './CardMaterial.module.css'
import Button from './forms/Button'

const CardMaterial = ({ titulo, autor, imagem }) => {
    
    return(
        <div className={style.card_material}>
            <h3 className={style.titulo}>{titulo}</h3>
            <p className={style.autor}>{autor}</p>
            <img src={imagem} title={{titulo}} />
            <div>
                <Button rotulo='DETALHES'/>
            </div>
        </div>
    )
}

export default CardMaterial