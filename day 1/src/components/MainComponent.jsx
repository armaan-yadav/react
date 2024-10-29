import React from "react";
import WelcomeMessage from "./WelcomeMessage";
import Child from "./Child";
import CartList from "./CartList";
import UserStatus from "./UserStatus";
import { AiFillChrome } from "react-icons/ai";
import ClickCounter from "./ClickCounter";
import ArrayCounter from "./arrayCounter";
import ObjectState from "./ObjectState";
const MainComponent = () => {
  const product = {
    name: "Apple",
    price: "100",
    avaiability: "In Stock",
  };

  const array = [
    {
      name: "Apple",
      price: "100",
      avaiability: "Out of Stock",
    },
    {
      name: "Banana",
      price: "400",
      avaiability: "In Stock",
    },
    {
      name: "Mango",
      price: "200",
      avaiability: "In Stock",
    },
  ];
  return (
    <>
      {/* <div>I am the MainComponent</div> */}

      {/* <div>
        {array.map(({ name, price, avaiability }) => (
          <>
            <h1>{name}</h1>
            <p>{price}</p>
            <p>{avaiability}</p>
          </>
        ))}
      </div> */}

      {/* <Child
        age={18}
        gender={"female"}
        name={"Kaju"}
        profile={
          "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg"
        }
      /> */}

      {/* <Child>
        <p>Hello world</p>
        <h3>Namaste Duniya</h3>
      </Child> */}

      {/* <CartList items={["apple", "mango", "banana", "papaya"]} /> */}

      {/* <UserStatus isAdmin={true} isLoggedIn={false} />
      <AiFillChrome size={40} /> */}

      {/* <button onMouseMove={submitHandler}>Click me</button> */}

      {/* <ClickCounter></ClickCounter> */}
      {/* <ArrayCounter /> */}

      <ObjectState />
    </>
  );

  function submitHandler() {
    alert("mouse moved");
    console.log("button hovered");
  }
};

export default MainComponent;
