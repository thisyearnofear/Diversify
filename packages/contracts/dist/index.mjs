// src/celo.ts
import { ethers } from "ethers";
var ABIS = {
  ERC20_BALANCE: ["function balanceOf(address) view returns (uint256)"],
  ERC20_ALLOWANCE: [
    "function allowance(address owner, address spender) view returns (uint256)"
  ],
  ERC20_APPROVE: [
    "function approve(address spender, uint256 amount) returns (bool)"
  ],
  BROKER_PROVIDERS: [
    "function getExchangeProviders() view returns (address[])"
  ],
  EXCHANGE: [
    "function getExchanges() view returns ((bytes32 exchangeId, address[] assets)[])"
  ],
  BROKER_RATE: [
    "function getAmountOut(address exchangeProvider, bytes32 exchangeId, address assetIn, address assetOut, uint256 amountIn) view returns (uint256)"
  ],
  BROKER_SWAP: [
    "function swapIn(address exchangeProvider, bytes32 exchangeId, address assetIn, address assetOut, uint256 amountIn, uint256 minAmountOut) returns (uint256)"
  ]
};
var STABLECOIN_ADDRESSES = {
  cUSD: "0x765DE816845861e75A25fCA122bb6898B8B1282a",
  cEUR: "0xD8763CBa276a3738E6DE85b4b3bF5FDed6D6cA73",
  cREAL: "0xe8537a3d056DA446677B9E9d6c5dB704EaAb4787"
};
async function getStablecoinBalance(address, token) {
  try {
    const provider = new ethers.JsonRpcProvider(
      "https://forno.celo.org"
    );
    const tokenContract = new ethers.Contract(
      STABLECOIN_ADDRESSES[token],
      ABIS.ERC20_BALANCE,
      provider
    );
    const balance = await tokenContract.balanceOf(address);
    return balance.toString();
  } catch (error) {
    console.error(`Error getting ${token} balance:`, error);
    return "0";
  }
}
async function getAllStablecoinBalances(address) {
  try {
    return {
      cUSD: "1000000000000000000",
      // 1 cUSD
      cEUR: "2000000000000000000",
      // 2 cEUR
      cREAL: "3000000000000000000"
      // 3 cREAL
    };
  } catch (error) {
    console.error("Error getting all stablecoin balances:", error);
    return {
      cUSD: "0",
      cEUR: "0",
      cREAL: "0"
    };
  }
}
async function getStablecoinRates() {
  try {
    return {
      cUSD: "1.0",
      cEUR: "1.1",
      cREAL: "0.2"
    };
  } catch (error) {
    console.error("Error getting stablecoin rates:", error);
    return {
      cUSD: "1.0",
      cEUR: "1.1",
      cREAL: "0.2"
    };
  }
}
export {
  getAllStablecoinBalances,
  getStablecoinBalance,
  getStablecoinRates
};
//# sourceMappingURL=index.mjs.map