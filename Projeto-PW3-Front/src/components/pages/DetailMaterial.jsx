import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import style from './DetailMaterial.module.css'
import Button from '../Button'
import ded from '../../assets/d&d.jpg'


const DetailMaterial = () => {

    /*RECUPERAR O CODIGO DO LIVRO*/
    const {cod_material} = useParams()
    console.log('CODIGO DO MATERIAL: ' + cod_material)

    /*CRIAÇÃO DA STATE DOS DADOS DO LIVRO*/
    const [material, setMaterial] = useState({})

    /* RECUPERANDO OS DADOS DE LIVRO PARA A EDIÇAO */
    useEffect(()=>{

        fetch(`http://localhost:5000/listagemMaterias/${cod_material}`, {
            method: 'GET',
            mode:'cors',
            headers: {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Headers':'*',
        },
        })
            .then((resp)=>resp.json())
            .then((data)=>{
            setMaterial(data.data);
            console.log(data.data);
        })
        .catch((err)=>{console.log(err)});

    },[]);

    return (
        <div className={style.grid}>
            
            <div className={style.container_img}>
                <img className={style.img_material_detail} src={ded} alt='Capa do Material: Livro de regras de D&D' />
            </div>

            <div className={style.info}>

                <span className={style.titulo}>{material.nome_material}</span>
                <span className={style.autor}>{material.autor_material}</span>

                <span className={style.descricao}>
                    {material.descricao_material}
                </span>

                <div className={style.container_buttons}>
                    <Button 
                        label='EDITAR'
                        router='/updateMaterial/'
                        cod_material={material.cod_material}
                    />

                    <Button 
                        label='EXCLUIR'
                        router='/deleteMaterial/'
                        cod_material={material.cod_material}
                    />

                </div>

            </div>

        </div>
    )
}

export default DetailMaterial