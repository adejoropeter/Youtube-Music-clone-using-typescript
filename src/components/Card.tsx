import React from "react";
import { State } from "./types/type";
type Prop = {
  profileName: string;
  gender: string;
  todo: State;
  item: State[];
  setItem: React.Dispatch<React.SetStateAction<State[]>>;
};

const Card = ({gender, todo,profileName,setItem,item}:Prop) => {
  const handleDelete = (id: number | string) => {
    const filterItem = item.filter((a: State) => {
      return a.id !== id;
    });
    console.log(filterItem);
    setItem(filterItem);
  };
  const handleDone = (id: number | string) => {
    const toggle = item.map((a) => {
      return a.id === id ? { ...a, isDone: !a.isDone } : a;
    });
    setItem(toggle);
  };
 
  return (
    <div>
      <h1 >{profileName}</h1>
      <h2
        className={`${
          todo.isDone &&
          "decoration-wavy line-through decoration-pink-300 decoration-8 "
        } bg-blue-600 transition-all delay-1000`}
      >
        {gender}{" "}
      </h2>
    </div>
  );
};

export default Card;
