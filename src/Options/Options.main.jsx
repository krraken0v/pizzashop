import styles from './Options.module.sass'
import { useState } from 'react';
function Options(){
  const options = ["Все","Мясные","Вегетарианская","Гриль","Острые","Закрытые"];
  const [activeIndex,setActiveIndex] = useState(0);
  
  return(<>
    <div className={styles.optionscontainer}>
        <ul className={styles.buttonscontainer}>
          {options.map((value,i)=><li key={i} onClick={()=>setActiveIndex(i)} className={activeIndex == i ? styles.active:styles.optionsbutton}>{value}</li>)}
        
        </ul>
        <div className={styles.formcontainer}>
         <form>
          <label>Сортировка по: </label>
           <select className={styles.selectpop} id="pop" name="popform">s
             <option value="popularity">популярности</option>
             <option value="price">цене</option>
             <option value="alphabet">алфавиту</option>
           </select>
         </form>
        </div>
    </div>
    <div className={styles.allpizza}>
        <h2 className={styles.allpizzatitle}>Все пиццы</h2>
    </div>
    
  </>)
}
export default Options