import React from "react";
import { useState, useEffect } from "react"
import style from './ListMaterial.module.css'
import CardMaterial from "../CardMaterial"

import ContainerMaterial from "../layout/ContainerMaterial";

import ded from '../../assets/d&d.jpg'

import Container from '../layout/Container'

// import imageDED from 'dd.jpg'

const ListMaterial = () => {

    const [materiais, setMaterial] = useState([])

    useEffect(() => {

        fetch('http://localhost:5000/listagemMaterias', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Acess-Control-Allow-Origin': '*', // asteristico significa que pega tudo
                'Acess-Control-Allow-Headers': '*'
            },
        })
    .then((resp)=>resp.json())
    .then((data)=>{
        console.log('MATERIAL: ' + data.data)
        setMaterial(data.data)
        console.log('STATE: ' + materiais)
    })
    .catch((err)=> {console.log(err)})
    },[])

    return (

        <Container>

            <h1 className={style.title}>CATÁLOGO COMPLETO</h1>

            <section className={style.list_material}>
                
                    <ContainerMaterial>
                        {
                            materiais.map((material)=>(
                                <CardMaterial

                                    titulo={material.nome_material}
                                    autor={material.autor_material}
                                    imagem={ded}
                                    cod_material={material.cod_material}
                                    key={material.cod_material}

                                    // CONTINUAR DAQUI

                                />
                            ))
                        }    
                    </ContainerMaterial>     

            </section>

        </Container>

        // <>
        // <h1 className={style.title}>CATÁLOGO COMPLETO</h1>
        //     <section className={style.list_material}>
        //         <CardMaterial
        //         titulo='Livro de regras de D&D'
        //         autor='Gary Gygax e Dave Arneson'
        //         imagem='d&d.jpg'
        //         />
        //         <CardMaterial
        //         titulo='Ficha de personagem de D&D'
        //         autor='Gary Gygax e Dave Arneson'
        //         imagem='ficha.png'
        //         />
        //         <CardMaterial
        //         titulo='Grid de batalha decrépita'
        //         autor='Jonh20 Pippin'
        //         imagem='grid.jpeg'
        //         />
        //     </section>
        // </>
    )
}

export default ListMaterial