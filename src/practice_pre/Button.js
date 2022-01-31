
import styles from "./App.module.css";

function Button({ text }) {
    return <button className={styles.btn}>{text}</button>
    
    /* 내부에서 css를 가질 때 
    <button 
       style={{
         backgroundColor: "grey",
         color: "white",
        }} 
    >
        {text}
    </button>
    */
}
export default Button;