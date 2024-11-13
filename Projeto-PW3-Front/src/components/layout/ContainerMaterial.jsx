import React from 'react'

import style from './ContainerMaterial.module.css'

const ContainerMaterial = (props) => {
    return (
        <div className={style.container_material}>
            {props.children}
        </div>
    )
}

export default ContainerMaterial