import { React, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function DeleteMaterial() {

    const {cod_material} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        fetch(`http://localhost:5000/excluirMaterial/${cod_material}`, {
            method:'DELETE',
            mode:'cors',
            headers:{
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*'
            },
        }).then(
            resp => resp.json()
        ).then(
            (data)=>{
                navigate('/listMaterial',{state:'MATERIAL EXCLUÍDO COM SUCESSO!'});
            }
        ).catch(
            err => console.log(err)
        );
    })

    return (
        <>
        </>
    )
}
export default DeleteMaterial
