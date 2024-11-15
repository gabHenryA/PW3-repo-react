import style from './CardMaterial.module.css'
import Button from './Button'

const CardMaterial = ({ titulo, autor, imagem, cod_material }) => {
    
    return(
        <div className={style.card_material}>
            <h3 className={style.titulo}>{titulo}</h3>
            <p className={style.autor}>{autor}</p>
            <img src={imagem} title={{titulo}} />
            <div>
                <Button label='DETALHES' router='/detailMaterial/' cod_material={cod_material}/>
            </div>
        </div>
    )
}

export default CardMaterial