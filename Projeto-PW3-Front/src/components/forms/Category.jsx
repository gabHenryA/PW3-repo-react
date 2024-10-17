import styles from './Category.module.css'

function Category({ name, text, options }) {

    return (

        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <form>
                <select name={name} id={name}>
                    <option>Selecione uma cartegoria</option>
                    {
                        options.map((option) => {
                            return <option>{option.nome_categoria}</option>
                        })
                    }
                </select>
            </form>
        </div>

    )

}

export default Category