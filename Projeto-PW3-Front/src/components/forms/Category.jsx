import styles from './Category.module.css'

function Category({ name, text, options, handleChangeCategory }) {

    return (

        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
                <select name={name} id={name} onChange={handleChangeCategory}>
                    <option>Selecione uma categoria</option>
                    {
                        options.map((option) => {
                            return <option value={option.cod_categoria} key={option.cod_categoria}>{option.nome_categoria}</option>
                        })
                    }
                </select>
        </div>

    )

}

export default Category