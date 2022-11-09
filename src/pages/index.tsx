import { type NextPage } from "next";
import React, { useEffect, useRef, useState } from "react";

const Home: NextPage = () => {
  const [error, setError] = useState<boolean>(false);
  const [dec, setDec] = useState<number>(0);
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    if (input.match(/[^0-1]/g)) {
      setError(true);
    } else setError(false);
    const inputNumber = parseInt(input, 2);
    setDec(inputNumber);
  }, [input]);

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="mb-5 text-2xl font-bold">Binary to Decimal converter</h1>
      <h2 className="text-lg font-bold">Enter some Binary below</h2>
      <form>
        <input
          type="text"
          onChange={(e: React.ChangeEvent) => {
            setInput((e.target as HTMLTextAreaElement).value);
          }}
          value={input}
          className="border"
          maxLength={8}
        />
      </form>
      {input != "" && <p>{dec}</p>}
      {error && (
        <div className="text-red-600">Please enter only 1's or 0's</div>
      )}
    </div>
  );
};

export default Home;
