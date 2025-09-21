import React from "react";


function Images({ item }) {
  return (
    
      <img className="w-[100%] h-[100%] object-cover" src={item.image} alt="card_image" />
   
  );
}

export default Images;
