import { useContext, useState } from "react";
import { createContext } from "react";
import HomeProducts from "../HomeProducts";

export const useUserContext = createContext();


export const userContext = () =>{
    const context = useContext(useUserContext)
    return context;

}

export const UseContextProvider = ({children}) => {
    const [trendingProducts, setTrendingProducts] = useState(HomeProducts);
    const [isProductShowOpen, setIsProductShowOpen] = useState(false);
    const [detail, setDetail] = useState([])
    const [cart,setCart] = useState([]);

     // filter products
     const filterCategory = (category) =>{
        const filterProduct = HomeProducts.filter((data)=>{
          return data.type === category
        }) 
        setTrendingProducts(filterProduct);
        
      }
      
      // all products
      const allTrending = () =>{
        setTrendingProducts(HomeProducts);
      }

    const detailsShow = (id) =>{
        setIsProductShowOpen(true)
        const show = trendingProducts.filter((x)=>{return x.id===id})
        setDetail(show[0])
      }
    
      
    
      const closeDetail = () =>{
        setIsProductShowOpen(false)
      }

   //  add to cart

const addToCart = (product) =>{
    const existProduct = cart.find((x)=>{
      return x.id === product.id
    })
    if(existProduct){
      alert("this product is already added to the cart")
    }
    else{
      setCart([...cart,{...product, qty:1}])
      alert("added to the cart")
    }
   
  
  }

   

    return <useUserContext.Provider 
    value={{isProductShowOpen, setIsProductShowOpen,
    detail, setDetail,
    closeDetail,detailsShow,
    trendingProducts, setTrendingProducts,
    allTrending,filterCategory,
    addToCart,cart,setCart
    }}>
      {children}
    </useUserContext.Provider>
  
} 