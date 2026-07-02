import React from "react";
import { useContext } from "react";
import { formData } from "./ContextData";
const DisplayForm = () => {
  const { allUser,handleDelete,search,handleSearch} = useContext(formData);
  console.log(allUser);
    const updated = allUser.filter((ele)=>ele.name.toLowerCase().includes(search.toLowerCase()));
    console.log(updated)
  return (
    <div>
      <h3>All User is Disaply here.......</h3>
      <input type="search" placeholder="Search Here........" value={search} onChange={handleSearch} />
      {allUser.length === 0 ? (
        <p>No user Avilable</p>
      ) : (
        <section>
          {updated.map((ele) => {
            return (
              <div key={ele.id}>
                <h4>{ele.name}</h4>
                <h4>{ele.email}</h4>
                <h4>{ele.phone}</h4>
                <h4>{ele.password}</h4>
                <button>Edit</button>
                <button onClick={()=>handleDelete(ele.id)}>Deleter</button>
              </div>
            );
          })}
        </section>
      )}
    </div>
  );
};

export default DisplayForm;
