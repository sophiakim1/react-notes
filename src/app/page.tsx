"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Circle = ({ bgColor }) => {
  const circleStyle = {
    padding: 10,
    margin: 20,
    display: "inline-block",
    backgroundColor: bgColor,
    borderRadius: "50%",
    width: 100,
    height: "100px",
  };

  return <div style={circleStyle}></div>;
};

function showCircle() {
  const colors = [
    "#393E41",
    "#E94F37",
    "#1C89BF",
    "#A1D363",
    "#85FFC7",
    "#297373",
    "#FF8552",
    "#A40E4C",
  ];

  return colors.map((color, index) => (
    <Circle key={index + color} bgColor={color} />
  ));
}

function Home() {
  const router = useRouter();
  const renderData = showCircle();

  return (
    <div>
      {renderData}
      <Link href="/counter">
        Go to Counter
      </Link>
    </div>
  );
}

export default Home;