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
    const [isProductShowOpen, setIsProductShowOpen] = useState(false);
    const [detail, setDetail] = useState([])
    const [cart,setCart] = useState([]);
    const [search,setSearch] = useState('');

     // filter products
     const filterProduct = (category) =>{
        const filterProduct = HomeProducts.filter((data)=>{
          return data.type === category
        }) 
        setTrendingProducts(filterProduct);
        
      }
      
      // all products
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
    return x.category === search;
  })
  setShopProducts(searchFilter);
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
    value={
        {
        isProductShowOpen, setIsProductShowOpen,
    detail, setDetail,
    closeDetail,detailsShow,
    trendingProducts, setTrendingProducts,
    shopProducts,setShopProducts,
    allTrending,filterProduct,
    addToCart,cart,setCart,
    search,setSearch,searchProduct,
    allCategory,filterCategory
    }
  }>
      {children}
    </useUserContext.Provider>
  
} 