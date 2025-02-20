import styles from './PizzaBlock.module.sass'
import { useState } from 'react'

function PizzaBlock({name,price,types,image,sizes,idnum}){
    const [count,setCount] = useState(0);
    const [type,setType] = useState(0);
    const [sizeid,setSize] = useState(0);
    const typeNames = ["тонкое","традиционное"]
   
   
    return(<>
    <div className={styles.allpizzas}>
     <div className={styles.pizzacontainer}>
        <img className={styles.pizzaimage} src={image} alt="image" />
        <h2 className={styles.pizzamaintitle}>{name}</h2>
        <div className={styles.choicesize}>
            <ul className={styles.choice}>
                {types.map((index)=><li onClick={()=>setType(index)} className={type==index?styles.choicebuttonactive:styles.choicebutton}>{typeNames[index]}</li>)}
            </ul>
            <ul className={styles.choice}>
                {sizes.map((i)=><li onClick={()=>setSize(i)} className={sizeid==i?styles.choicebuttonactive:styles.choicebutton}>{i} см</li>)}
            </ul>
        </div>
        <div className={styles.pricecontainer}>
            <p className={styles.pricecontainer_title}>{price} rub</p>
            <button className={styles.pricecontainer_button} onClick={()=>{setCount(count+1)}}>Добавить <span>{count}</span>
            </button>
        </div>
     </div>
    </div>
    
    </>)
}

export default PizzaBlock
