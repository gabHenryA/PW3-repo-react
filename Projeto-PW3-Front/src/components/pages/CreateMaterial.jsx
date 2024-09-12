import React from "react";
import style from './CreateMaterial.module.css'

import Input from "../forms/Input";
import Category from "../forms/Category";
import Button from "../forms/Button";


const CreateMaterial = () => {
    return(
        
        <section className={style.create_material}>
            <h1>SUBIR MATERIAIS</h1>

            <Input
                type='text'
                name='txtMaterial'
                placeHolder='Digite o nome deste material'
                text='Titulo do material'
            />

            <Category
                name='category'
                text='Selecione a categoria do material'
            />

            <Input
                type='text'
                name='txtAuthor'
                placeHolder='Digite o nome do autor do Material'
                text='Nome do autor'
            />

            <Input
                type='text'
                name='txtDescription'
                placeHolder='Digite uma descrição do material'
                text='Descrição do Material'
            />

            

            <Button
                rotulo='Subir material'
            />

        </section>

    )
}
export default CreateMaterial