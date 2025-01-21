import React, { useState } from "react";
import { ethers } from "ethers";

const UNISWAP_ROUTER_ADDRESS = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
const UNISWAP_ROUTER_ABI = [
  "function swapExactTokensForTokens(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts)"
];

const SwapTokens = ({ signer }) => {
  const [amountIn, setAmountIn] = useState("");
  const [tokenOutAddress, setTokenOutAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const swapTokens = async () => {
    if (!signer) return alert("Please connect your wallet first.");
    if (!amountIn || isNaN(amountIn) || Number(amountIn) <= 0 || !tokenOutAddress)
      return alert("Enter valid input values.");

    try {
      setLoading(true);
      const routerContract = new ethers.Contract(UNISWAP_ROUTER_ADDRESS, UNISWAP_ROUTER_ABI, signer);
      const path = ["0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", tokenOutAddress];
      const deadline = Math.floor(Date.now() / 1000) + 60 * 20;

      const tx = await routerContract.swapExactTokensForTokens(
        ethers.parseEther(amountIn),
        0n,
        path,
        await signer.getAddress(),
        deadline
      );

      await tx.wait();
      alert("Swap successful!");
    } catch (error) {
      console.error("Error swapping tokens:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto mt-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Swap Tokens</h2>
      
      <input
        type="number"
        placeholder="Amount of WETH"
        value={amountIn}
        onChange={(e) => setAmountIn(e.target.value)}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring focus:ring-blue-200"
      />
      
      <input
        type="text"
        placeholder="ERC20 Token Address"
        value={tokenOutAddress}
        onChange={(e) => setTokenOutAddress(e.target.value)}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring focus:ring-blue-200"
      />

      <button
        onClick={swapTokens}
        disabled={loading}
        className={`w-full py-2 px-4 rounded ${
          loading ? "bg-gray-400" : "bg-purple-500 hover:bg-purple-600"
        } text-white font-bold transition duration-300`}
      >
        {loading ? "Processing..." : "Swap Tokens"}
      </button>
    </div>
  );
};

export default SwapTokens;
