import styles from "./FormInput.module.css";

function FormInput ({
    label,
    type = 'text',
    value,
    onChange,
    placeholder
}){

    return (
        <div className={styles["form-input"]}>

            <label className= {styles["form-label"]}>{label}</label>

            <input
                className={styles["form-control"]}
                type = {type}
                value = {value}
                onChange= {onChange}
                placeholder= {placeholder}
             />

        </div>
    )
}

export default FormInput