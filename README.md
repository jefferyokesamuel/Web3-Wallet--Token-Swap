# **Web3 Wallet Interface**

This is a simple Web3 wallet interface built with **React**, **Ethers.js v6**, and **Tailwind CSS**. The application allows users to:

1. Connect their wallet (e.g., MetaMask).
2. Wrap ETH into WETH.
3. Swap WETH for an ERC20 token using Uniswap V2.

---

## **Features**

- **Wallet Connection**: Connect your wallet securely via MetaMask.
- **Wrap ETH**: Easily convert ETH to WETH.
- **Token Swap**: Swap WETH for any ERC20 token using Uniswap V2.
- **Responsive Design**: Clean and modern UI optimized for all devices.
- **Real-time Feedback**: Get transaction status updates and error handling.

---

## **Technologies Used**

- **Frontend Framework**: React
- **Blockchain Library**: Ethers.js v6
- **Styling**: Tailwind CSS
- **Build Tool**: Vite

---

## **Getting Started**

### 1. Clone the Repository

```bash
git clone https://github.com/your-repo/web3-wallet-interface.git
cd web3-wallet-interface
```

### 2. Install Dependencies

Install the required dependencies:

```bash
npm install
```

### 3. Start the Development Server

Run the following command to start the app locally:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173`.

---

## **Usage**

1. Connect your wallet by clicking the "Connect Wallet" button.
2. Use the "Wrap ETH" section to convert ETH into WETH by entering an amount and confirming the transaction.
3. Use the "Swap Tokens" section to swap WETH for another ERC20 token by providing:
   - Amount of WETH to swap.
   - The ERC20 token's contract address.

---

## **Project Structure**

```
src/
├── components/
│   ├── WalletConnect.jsx   # Handles wallet connection
│   ├── WrapETH.jsx         # Wraps ETH into WETH
│   ├── SwapTokens.jsx      # Swaps WETH for ERC20 tokens
├── App.jsx                 # Main application component
├── index.css               # Tailwind CSS styles
└── main.jsx                # Entry point of the app
```

---

## **Requirements**

- Node.js >= 18.x (to support Ethers.js v6)
- MetaMask or any Ethereum-compatible wallet installed in your browser.

---

## **Customization**

You can customize the app by:

1. Updating styles in `index.css` or using Tailwind CSS classes in components.
2. Adding more blockchain features (e.g., viewing balances, transaction history).
3. Configuring additional networks or wallets.

---

## **Contributing**

Contributions are welcome! Feel free to open an issue or submit a pull request.

---

## **License**

This project is licensed under the MIT License.

---

## **Acknowledgments**

- [Ethers.js](https://docs.ethers.org/v6/) for blockchain interactions.
- [Tailwind CSS](https://tailwindcss.com/) for styling.
- [Uniswap V2](https://uniswap.org/) for token swapping functionality.

Enjoy building with Web3! 🚀