import React, { useState } from "react";
import { ethers } from "ethers";

const WalletConnect = ({ setProvider, setSigner }) => {
  const [address, setAddress] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const userAddress = await signer.getAddress();

        setProvider(provider);
        setSigner(signer);
        setAddress(userAddress);
      } catch (error) {
        console.error("Failed to connect wallet:", error);
      }
    } else {
      alert("MetaMask is not installed!");
    }
  };

  return (
    <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Connect Your Wallet</h2>
      <button
        onClick={connectWallet}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
      >
        {address ? "Wallet Connected" : "Connect Wallet"}
      </button>
      {address && (
        <p className="mt-4 text-gray-600 text-sm">
          Connected Address: <span className="font-mono">{address.slice(0, 6)}...{address.slice(-4)}</span>
        </p>
      )}
    </div>
  );
};

export default WalletConnect;
