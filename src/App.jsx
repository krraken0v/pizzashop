import PizzaBlock from './Pizzablock.module/Pizzablock.module'
import Header from './Header/ReactPizzaLogo.main'
import Options from './Options/Options.main'
import Skeleton from './Pizzablock.module/Skeleton'
import { useEffect } from 'react'
import { useState } from 'react'

 

function App() {
    let [items , setItems] = useState([]);
    useEffect(()=>{
      fetch('https://67b4848c392f4aa94fab367e.mockapi.io/items').then(res=>{
        return res.json();
      }).then(arr =>{
        setTimeout(()=>{
         setItems(arr);
         setisLoading(false);
         console.log(arr);

        },1000)
        
      })
    },[]);
    let [isLoading,setisLoading] = useState(true);
   
  return (
    <>
      <Header></Header>
      <Options></Options>
      <div className='allpizzas'>
      { isLoading ? [...new Array(8)].map((_,index)=><Skeleton key={index}></Skeleton>) : items.map(pizzasitems => <PizzaBlock key = {pizzasitems.id} name = {pizzasitems.title} price = {pizzasitems.price} types={pizzasitems.types} image = {pizzasitems.imageUrl} sizes={pizzasitems.sizes}></PizzaBlock>)}
      </div>
        
      
      <div className='footer'>
        
      </div>
      

      
    </>
  )
}

export default App
