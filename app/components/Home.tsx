"use client";

import { useEffect, useState } from "react";

export default function Mint() {
  const [minting, setMinting] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = () => {
      try {
        //
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  const handleMint = () => {
    //
  };
  return (
    <div className="flex w-screen h-screen items-center content-center">
      <button
        className="p-5 bg-red-700 text-white font-bold"
        disabled={minting}
        onClick={handleMint}
      >
        Mint
      </button>
    </div>
  );
}
