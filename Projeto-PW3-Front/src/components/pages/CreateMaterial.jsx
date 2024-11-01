import React from "react";
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import style from './CreateMaterial.module.css'

import Input from "../forms/Input";
import Category from "../forms/Category";
import Button from "../forms/Button";
import ImageView from "../forms/ImageView";


const CreateMaterial = () => {

    /* DEFINE O STATE DE DADOS DAS CATEGORIAS */
    const [categorias, setCategorias] = useState([])

    /* STATE DE DADOS QUE VAI ARMAZENAR O OBJETO JSON DE LIVRO */
    const [material, setMaterial] = useState({})

    const navigate = useNavigate()

    /* HANDLER DE CAPTURA DOS DADOS DE INPUT (NOME DO LIVRO, AUTOR E DESCRIÇÃO) */
    function handlerChangeMaterial(event) {
        setMaterial({ ...material, [event.target.name]: event.target.value })
        console.log(material)
    }

    function handleChangeCategory(event) {
        setMaterial({...material, cod_categoria: event.target.value});
        console.log(material);
    }

    /* RECUPERAR OS DADOS DE CAREGORIAS DA APIREST */
    useEffect(() => {
        fetch('http://localhost:5000/listagemCategorias', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Acess-Control-Allow-Origin': '*', // asteristico significa que pega tudo
                'Acess-Control-Allow-Headers': '*'
            }
        }).then(
            (resp) =>
                // console.log("RESPOSTA: " + resp)
                resp.json()

        ).then(
            (data) => {
                // console.log('DATA: ' + data.data[3].nome_categoria)
                setCategorias(data.data)
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }, [])

    /* INSERÇÃO DOS DADOS DE LIVRO */
    function createMaterial(material) {

        console.log(JSON.stringify(material))

        fetch('http://localhost:5000/inserirMaterial', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*'
            },
            body: JSON.stringify(material)
        })
            .then(
                (resp) => resp.json()
            )
            .then(
                (data) => {
                    console.log(data)
                    navigate('/listMaterial',{state:'MATERIAL CADASTRADO COM SUCESSO!'});
                }
            )
            .catch(
                (err) => { console.log(err) }
            )
    }

    /* FUNÇÃO DE SUBMIT */
    function submit(event) {
        event.preventDefault()
        createMaterial(material)
    }

    return (

        <section className={style.create_material}>
            <h1 className={style.title}>SUBIR MATERIAIS</h1>

            <form onSubmit={submit}>

                <Input
                    type='text'
                    name='nome_material'
                    placeHolder='Digite o nome deste material'
                    text='Título do material'
                    handlerChangeMaterialProp={handlerChangeMaterial}
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
                    placeHolder='Digite o nome do autor do Material'
                    text='Nome do autor'
                    handlerChangeMaterialProp={handlerChangeMaterial}
                />

                <Input
                    type='text'
                    name='descricao_material'
                    placeHolder='Digite uma descrição do material'
                    text='Descrição do material'
                    handlerChangeMaterialProp={handlerChangeMaterial}
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
                    rotulo='Subir material'
                />

            </form>

        </section>

    )
}
export default CreateMaterial