/* IMPORTAÇÃO DA STATE */
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import style from './UpdateMaterial.module.css'
import Input from '../forms/Input'
import Category from '../forms/Category'
import Button from '../forms/Button'
import ImageView from "../forms/ImageView";

const UpdateMaterial = () => {

        /* CRIAÇAO DO STATE DOS DADOS DOS MATERIAIS */
        const [material, setMaterial] = useState({});

        /* RECUPERA O CÓDIGO ENVIADO PELO BOTÃO */
        const {cod_material} = useParams();

        /* OBJETO DE NAVEGAÇÃO */
        const navigate = useNavigate();

        /* STATE DE DADOS DAS CATEGORIAS VINDAS DO ARQUIVO db.json */
        const [categorias, setCategorias] = useState([]);

        /* HANDLER DE CAPTURA DOS DADOS DE INPUT (NOME DO MATERIAL, AUTOR E DESCRIÇÃO) */
        function handlerChangeMaterial(event) {
                setMaterial({...material, [event.target.name] : event.target.value});
                console.log(material)
        }

        /* CAPTURA OS DADOS DA SELECT */
        function handleChangeCategory(event) {
                setMaterial({...material, cod_categoria: event.target.value});
                console.log(material);
        }

        /* RECUPERA OS DADOS DE CATEGORIA DO BANCO DADOS */
        useEffect(()=>{
                fetch('http://localhost:5000/listagemCategorias', {
                        method:'GET',
                        headers:{
                                'Content-Type':'application/json',
                                'Access-Control-Allow-Origin':'*',
                                'Access-Control-Allow-Headers':'*'
                        },
                }).then(
                        (resp)=>
                                resp.json()
                ).then(
                        (data)=>{
                        setCategorias(data.data);
                        // console.log('TESTE-DATA:' + data.data);
                        }
                ).catch(
                        (error)=>{
                        console.log(error);
                        }
                )
        }, [])

        /* RECUPERA OS DADOS DO MATERIAL DO BACKEND */
        useEffect(()=>{

                fetch(`http://localhost:5000/listagemMaterias/${cod_material}`, {
                method: 'GET',
                mode:'cors',
                headers:{
                        'Content-Type':'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Headers': '*'
                },
                })
                .then((resp)=>resp.json())
                .then((data)=>{
                        console.log('MATERIAIS: ' + data.data.cod_material);
                        setMaterial(data.data);
                        console.log('STATE: ' + material.nome_material);
                })
                .catch((err)=>{console.log(err)});

        }, []);

        /* ALTERAÇÃO DOS DADOS DE MATERIAL */
        function updateMaterial(material) {
        
                console.log(JSON.stringify(material))
        
                fetch('http://localhost:5000/atualizarMaterial', {
                        method:'PUT',
                        mode:'cors',
                        headers:{
                        'Content-Type':'application/json',
                        'Access-Control-Allow-Origin':'*',
                        'Access-Control-Allow-Headers':'*'
                        },
                        body: JSON.stringify(material)
                })
                .then(
                        (resp)=>resp.json()
                )
                .then(
                        (data)=>{
                                console.log(data);
                                navigate('/listMaterial',{state:'MATERIAL ATUALIZADO'});
                        }
                )
                .catch(
                        (err)=>{ console.log(err) }
                )
        }

        /* FUNÇÃO DE SUBMIT */
        function submit(event) {
                event.preventDefault();
                updateMaterial(material);
        }

        return (
                <section className={style.create_material}>
                        <h1 className={style.title}>ATUALIZAR MATERIAL</h1>

                        <form onSubmit={submit}>

                            <Input
                                type='text'
                                name='nome_material'
                                id='nome_material'
                                placeHolder='Digite o nome deste material'
                                text='Título do material'
                                handlerChangeMaterialProp={handlerChangeMaterial}
                                value={material.nome_material}
                            />

                            <Category
                                name='category'
                                text='Selecione a categoria do material'
                                options={categorias}
                                handleChangeCategory={handleChangeCategory}
                            />

                            <Input
                                type='text'
                                name='autor_material'
                                id='autor_material'
                                placeHolder='Digite o nome do autor do Material'
                                text='Nome do autor'
                                handlerChangeMaterialProp={handlerChangeMaterial}
                                value={material.autor_material}
                            />

                            <Input
                                type='text'
                                name='descricao_material'
                                id='descricao_material'
                                placeHolder='Digite uma descrição do material'
                                text='Descrição do material'
                                handlerChangeMaterialProp={handlerChangeMaterial}
                                value={material.descricao_material}
                            />

                            <ImageView
                                name='imageView'
                                placeHolder='Insira uma imagem de visualização'
                                text='Imagem de visualização'
                            />

                            <Input
                                type='file'
                                name='file'
                                placeHolder='Insira seu arquivo'
                                text='Arquivo'
                                handlerChangeMaterialProp={null}
                            />

                            <Button
                                rotulo='Editar material'
                            />

                        </form>

                </section>
        )
}

export default UpdateMaterial
