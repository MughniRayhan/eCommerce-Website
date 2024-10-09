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
    const [shopProducts,setShopProducts] = useState(HomeProducts);
    const [cart,setCart] = useState([]);
    const [favourite,setFavourite] = useState([]);
    const [search,setSearch] = useState('');

     // filter trending products
     const filterProduct = (category) =>{
        const filterProduct = HomeProducts.filter((data)=>{
          return data.type === category
        }) 
        setTrendingProducts(filterProduct);
        
      }
      
      // all trending products
      const allTrending = () =>{
        setTrendingProducts(HomeProducts);
      }


       // filter categories
  const filterCategory = (category) =>{
    const filteredProduct = HomeProducts.filter((product)=>{
      return product.category === category;
    })
    setShopProducts(filteredProduct);
  }

  // all category
  const allCategory = () =>{
    setShopProducts(HomeProducts);
  }


// search
 const searchProduct = () =>{
  const searchFilter = HomeProducts.filter((x)=>{
    return x.category === search.toLowerCase();
  })
  setShopProducts(searchFilter);
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

   //  add to favourite
const addToFavourite = (product) =>{
  console.log(product)
  const existProduct = favourite.find((x)=>{
    return x.id === product.id
  })
  if(existProduct){
    alert("this product is already added to the wish list")
  }
  else{
    setFavourite([...favourite,{...product}])
    alert("added to the wish list")
  }
 

}

    return <useUserContext.Provider 
    value={
        {
    trendingProducts, setTrendingProducts,
    shopProducts,setShopProducts,
    allTrending,filterProduct,
    addToCart,cart,setCart,
    favourite,setFavourite,addToFavourite,
    search,setSearch,searchProduct,
    allCategory,filterCategory
    }
  }>
      {children}
    </useUserContext.Provider>
  
} 