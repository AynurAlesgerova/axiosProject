import React from "react";
import { Item } from "./Item";

export const SearchList = ({ list }) => {
  return (
    <div className="searchList">
      {list.map((el, index) => {
       return <Item key={index} image={el} />;
      })}
    </div>
  );
};
