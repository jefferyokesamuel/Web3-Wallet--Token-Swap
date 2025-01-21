import React, { useState } from "react";
import { ethers } from "ethers";

const WETH_ADDRESS = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
const WETH_ABI = ["function deposit() payable"];

const WrapETH = ({ signer }) => {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const wrapETH = async () => {
    if (!signer) return alert("Please connect your wallet first.");
    if (!amount || isNaN(amount) || Number(amount) <= 0) return alert("Enter a valid amount.");

    try {
      setLoading(true);
      const wethContract = new ethers.Contract(WETH_ADDRESS, WETH_ABI, signer);
      const tx = await wethContract.deposit({ value: ethers.parseEther(amount) });
      await tx.wait();
      alert("Successfully wrapped ETH to WETH!");
    } catch (error) {
      console.error("Error wrapping ETH:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto mt-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Wrap ETH to WETH</h2>
      <input
        type="number"
        placeholder="Enter amount of ETH"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring focus:ring-blue-200"
      />
      <button
        onClick={wrapETH}
        disabled={loading}
        className={`w-full py-2 px-4 rounded ${
          loading ? "bg-gray-400" : "bg-green-500 hover:bg-green-600"
        } text-white font-bold transition duration-300`}
      >
        {loading ? "Processing..." : "Wrap ETH"}
      </button>
    </div>
  );
};

export default WrapETH;
