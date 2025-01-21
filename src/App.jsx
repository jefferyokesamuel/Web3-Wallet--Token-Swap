import React, { useState } from "react";
import WalletConnect from "./components/WalletConnect";
import WrapETH from "./components/WrapEth";
import SwapTokens from "./components/SwapTokens";

function App() {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-xl font-bold mb-6 text-gray-800">Web3 Wallet Interface</h1>

      {/* Wallet Connect */}
      <WalletConnect setProvider={setProvider} setSigner={setSigner} />

      {/* Show other components only if wallet is connected */}
      {signer && (
        <>
          <WrapETH signer={signer} />
          <SwapTokens signer={signer} />
        </>
      )}
    </div>
  );
}

export default App;
