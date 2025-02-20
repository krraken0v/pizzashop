import styles from './NotFound.module.sass'

function NotFound(){
    return(
        <>
         <div className={styles.notfoundcontainer}>
            <img src='./public/sadnotfound.png.jpg'></img>
            <h2>Ничего не найдено</h2>
            <h3>К сожалению данная страница отсутствует в нашем интернет-магазине</h3>
         </div>
        
        </>
    )
       

    
   
}
export default NotFound;