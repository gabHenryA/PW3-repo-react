import styles from './ImageView.module.css'

function ImageView({text, name, placeHolder}){
    return (

        <div className={styles.form_control}>

            <label htmlFor={name}>{text}</label>
            <input 
                type='file'
                accept='image/*'
                name={name}
                id={name}
                placeholder={placeHolder}/>
        </div>

    )
}
export default ImageView