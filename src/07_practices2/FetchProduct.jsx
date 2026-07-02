import React, { useEffect, useState } from "react";

const FetchProduct = () => {
  const [product, setProduct] = useState([]);
const [search,setSearch] = useState("");
console.log(search)
  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await fetch("https://dummyjson.com/products");
        const data = await resp.json();
        setProduct(data.products);
      } catch (err) {
        console.log("Backend error", err);
      }
    };
    getData()
  },[]);

  const filterSearch = product.filter((ele)=>ele.title.toLowerCase().includes(search.toLowerCase()));
  

  return (
    <div>
      <div>FetchProduct</div>
      {/* <button onClick={getData}>fetch</button> */}
     <input type="text" placeholder="search here...." value={search} onChange={(e)=>setSearch(e.target.value)}/>
      {filterSearch.length === 0 ? (
        <p>No product available</p>
      ) : (
        <section>
          {filterSearch.map((ele) => {
            return (
              <div key={ele.id}>
                <h4>{ele.title}</h4>
              </div>
            );
          })}
        </section>
      )}
    </div>
  );
};

export default FetchProduct;
