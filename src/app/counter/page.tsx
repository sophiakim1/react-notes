"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface CounterProps {
  display: number;
}

const Counter = ({ display }: CounterProps) => {
  const textStyle = {
    fontSize: 72,
    fontFamily: "sans-serif",
    color: "#333",
    fontWeight: "bold",
  };

  return <div style={textStyle}>{display}</div>;
};
const CounterParent = () => {
    // const router = useRouter();
    const [count, setCount] = useState(0);

  const backgroundStyle: React.CSSProperties = {
    padding: 50,
    backgroundColor: "#FFC53A",
    width: 250,
    height: 100,
    borderRadius: 10,
    textAlign: "center",
  };
  const buttonStyle = {
    fontSize: "1em",
    width: 30,
    height: 30,
    fontFamily: "sans-serif",
    color: "#333",
    fontWeight: "bold",
    lineHeight: "3px",
  };
  return (
    <div style={backgroundStyle}>
      <Counter display={count} />
      <button style={buttonStyle} onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
};

function CounterPage() {
  return (
    <div>
      <CounterParent />
    </div>
  );
}

export default CounterPage;
