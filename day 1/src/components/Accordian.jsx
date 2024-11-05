import React, { useState } from "react";

const Accordian = () => {
  const accordionData = [
    {
      title: "What is React?",
      content:
        "React is a JavaScript library for building user interfaces. It was developed by Facebook and is used for handling the view layer for web and mobile apps.",
    },
    {
      title: "What is JSX?",
      content:
        "JSX is a syntax extension for JavaScript that allows you to write HTML directly within JavaScript. It makes it easier to write and add HTML in React.",
    },
    {
      title: "How does React work?",
      content:
        "React creates a virtual DOM in memory. Instead of directly manipulating the browser’s DOM, React creates a virtual DOM and syncs it with the real DOM.",
    },
    {
      title: "Is React free to use?",
      content:
        "Yes, React is an open-source library maintained by Facebook and is free to use for building web and mobile applications.",
    },
    {
      title: "What is Flutter?",
      content:
        "Flutter is an open-source UI software development toolkit created by Google. It is used to develop cross-platform applications.",
    },
    {
      title: "What is Dart?",
      content:
        "Dart is a programming language optimized for building mobile, desktop, server, and web applications. It is used with Flutter to build apps.",
    },
    {
      title: "How does Flutter work?",
      content:
        "Flutter uses a framework with a rich set of widgets that allow developers to build applications with a native look and feel across different platforms.",
    },
    {
      title: "Is Flutter free to use?",
      content:
        "Yes, Flutter is free and open-source. You can use it to build and deploy apps without paying any licensing fees.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(null);

  const [showMultiple, setShowMultiple] = useState(false);
  return (
    <div className="h-screen bg-slate-200 flex items-center justify-center flex-col">
      <h1 className="text-3xl font-bold">Accordian</h1>
      <div className="flex items-center justify-center gap-4">
        <label htmlFor="showMultiple">Show Multiple</label>
        <input
          type="checkbox"
          name="showMultiple"
          checked={showMultiple}
          onChange={(e) => {
            setShowMultiple(e.target.checked);
          }}
        />
      </div>

      <div>
        {accordionData.map((e, index) => (
          <AccordianItem
            content={e.content}
            showMultiple={showMultiple}
            title={e.title}
            index={index}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            key={Math.random()}
          />
        ))}
      </div>
    </div>
  );
};

const AccordianItem = ({
  title,
  content,
  index,
  currentIndex,
  setCurrentIndex,
  showMultiple,
}) => {
  const [showAccordianItem, setshowAccordianItem] = useState(
    currentIndex == index
  );

  return (
    <div className="bg-slate-500 rounded-md text-white px-5 py-2 my-3  w-[500px] flex-col">
      <div className="flex items-center justify-between">
        <p> {title}</p>
        <span
          className="text-2xl cursor-pointer"
          onClick={() => {
            showMultiple
              ? showAccordianItem
                ? setshowAccordianItem(false)
                : setshowAccordianItem(true)
              : currentIndex == index
              ? setCurrentIndex(null)
              : setCurrentIndex(index);
          }}
        >
          {showAccordianItem ? "-" : "+"}
        </span>
      </div>

      <div
        style={{
          maxHeight: currentIndex == index || showAccordianItem ? "200px" : "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease",
        }}
        className="mt-2"
      >
        <p
          className={`transition-opacity duration-300 ${
            currentIndex == index || showAccordianItem
              ? "opacity-100"
              : "opacity-0"
          }`}
        >
          {content}
        </p>
      </div>
    </div>
  );
};

export default Accordian;
