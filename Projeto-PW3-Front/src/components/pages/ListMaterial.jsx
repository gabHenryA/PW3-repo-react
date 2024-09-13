import React from "react";
import style from './ListMaterial.module.css'
import CardMaterial from "../CardMaterial";
// import imageDED from 'dd.jpg'

const ListMaterial = () => {
    return (
        <>
        <h1 className={style.title}>CATÁLOGO COMPLETO</h1>
            <section className={style.list_material}>
                <CardMaterial
                titulo='Livro de regras de D&D'
                autor='Gary Gygax e Dave Arneson'
                imagem='d&d.jpg'
                />
                <CardMaterial
                titulo='Ficha de personagem de D&D'
                autor='Gary Gygax e Dave Arneson'
                imagem='ficha.png'
                />
                <CardMaterial
                titulo='Grid de batalha decrépita'
                autor='Jonh20 Pippin'
                imagem='grid.jpeg'
                />
            </section>
        </>
    )
}

export default ListMaterial