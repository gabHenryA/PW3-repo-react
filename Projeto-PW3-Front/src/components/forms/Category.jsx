import styles from './Category.module.css'

function Category({name, text}) {
    
    return(

        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <form>
                <select name={name} id={name}>
                    <option value="">Selecione uma cartegoria</option>
                    <option value="rulesAndReferences">Regras e referências</option>
                    <option value="character">Personagem</option>
                    <option value="physicalGame">Jogo Físico</option>
                    <option value="VisualsAndAids">Visuais e Auxiliares</option>
                    <option value="other">Outro</option>
                </select>
            </form>
        </div>
        
    )

}

export default Category