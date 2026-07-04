import React, { useEffect, useState } from "react";

const Search = () => {
  const [product, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading,setLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
       setLoading(true) //  fetch start
        const resp = await fetch("https://dummyjson.com/products");
        const data = await resp.json();
        setProducts(data.products);
      } catch (error) {
        console.log("Backend Error", error);
      }finally{
        setLoading(false);
      }
    };
    FetchProducts();
  }, []);

  const filterSearch = product.filter((ele) =>
    ele.title.toLowerCase().includes(search.toLowerCase()),
  );

  if(loading){return<h2>Loading.......</h2>}

  return (
    <div>
      <h1>Products items</h1>
      <input
        type="text"
        placeholder="search here...."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {product.length === 0 ? (
        <p>No Prdouct Available</p>
      ) : filterSearch.length === 0 ? (
        <p>No Prdoucts Found</p>
      ) : (
        <section>
          {filterSearch.map((ele) => (
            <div key={ele.id}>
              <h3>{ele.title}</h3>
              <p>{ele.price}</p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default Search;
