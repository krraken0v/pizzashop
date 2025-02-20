import styles from './ReactPizzaLogo.module.sass'

function Header (){
    return(
    <>    
      <div className={styles.headerlayoutmain}>
        <div className={styles.headerlayout}>
            <img src='../public/pizzalogo.png' className={styles.imagepizza}></img>
            <h2 className={styles.pizzalogohead}>REACT PIZZA</h2>
            <h3 className={styles.pizzalogosub}>самая вкусная пицца во вселенной</h3>
        </div>
        <div className={styles.buttonlayout}>
            <button className={styles.headerbutton}>520P
                <div className={styles.linebutton}></div> 
                <img src="../public/shopiconbutton.png" className={styles.shopiconbutton} alt="shop" />
                <span>3</span>
            </button>
        </div>
      </div>
    </>
    )
    
}
export default Header;

