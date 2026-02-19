// import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";
const Products = () => {
  const LIMIT = 10;
  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [products, setProducts] = useState([]);
  const user= useSelector((state)=>state.auth.users)
  console.log(user,"registerd user");


  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const currentSkip = skip;
    try {
      const results = await fetch(
        `https://dummyjson.com/products?limit=${LIMIT}&skip=${currentSkip}`
      );
      const data = await results.json();
      const newProducts=data.products
      
      const totalLength = data.total;
  
      setProducts((prev)=>{
        const updated=[...prev,...newProducts]
        if(updated.length>=totalLength){
          setHasMore(false)
        }
        return updated

      });
      setSkip((prev) => prev + LIMIT);

      
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <div className="text-amber-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center"> All Products</h1>
        <InfiniteScroll
          dataLength={products.length}
          next={fetchProducts}
          hasMore={hasMore}
        >
      <div className="grid-container grid grid-cols-4 gap-4 p-10 ">
          {products.map((item) => {
            console.log(item.id);
             return <ProductCard key={item.id} product={item} />
             
          })}
            
      
      </div>
        </InfiniteScroll>
    </div>
  )
};

export default Products;
