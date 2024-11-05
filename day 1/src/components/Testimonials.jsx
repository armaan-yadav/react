import React, { useState } from "react";
import { BsCheckLg } from "react-icons/bs";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([
    {
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus rem omnis id animi atque, eius recusandae non optio alias eum?",
      name: "John Doe",
    },
    {
      text: "Ram Ramlasjeflkasjflkas fasdbfasd fas fa sdf asdf asdf",
      name: "Raj",
    },
    {
      text: "as da sd asd qwf sa Fas fa g asdv asdcsAFD asfdW ER WQEFD asd ASD FadA?",
      name: "Armaan",
    },
    {
      text: "asf ASD asd aSD as d",
      name: "Keshav",
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(currentIndex);

  return (
    <div className="flex items-center justify-center bg-[#cfcfcf] h-screen">
      <div className="bg-slate-500 flex flex-col w-[400px] p-3 rounded-sm">
        <p>{testimonials[currentIndex].text}</p>
        <p>{testimonials[currentIndex].name}</p>

        <div className="w-full  flex justify-between items-center mt-3">
          <button
            className="bg-slate-400 px-4 rounded-md"
            onClick={() => {
              currentIndex > 0 && setCurrentIndex(currentIndex - 1);
            }}
          >
            Prev
          </button>
          <button
            className="bg-slate-400 px-4 rounded-md"
            onClick={() => {
              const newIndex = currentIndex + 1;

              newIndex < testimonials.length && setCurrentIndex(newIndex);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
