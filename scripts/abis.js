const ERC20 = [
  {
    "constant": true,
    "inputs": [],
    "name": "mintingFinished",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "setOwner",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "name": "_to",
        "type": "address"
      },
      {
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "Mint",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "MintFinished",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "SetOwner",
    "type": "event"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_to",
        "type": "address"
      },
      {
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_owner",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_from",
        "type": "address"
      },
      {
        "name": "_to",
        "type": "address"
      },
      {
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_spender",
        "type": "address"
      },
      {
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_owner",
        "type": "address"
      },
      {
        "name": "_spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_spender",
        "type": "address"
      },
      {
        "name": "_addedValue",
        "type": "uint256"
      }
    ],
    "name": "increaseApproval",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_spender",
        "type": "address"
      },
      {
        "name": "_subtractedValue",
        "type": "uint256"
      }
    ],
    "name": "decreaseApproval",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_to",
        "type": "address"
      },
      {
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "mint",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "finishMinting",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
]


const WETH = [
  {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      },
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "payable": true,
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "src",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "guy",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "wad",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "src",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "dst",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "wad",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "dst",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "wad",
        "type": "uint256"
      }
    ],
    "name": "Deposit",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "src",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "wad",
        "type": "uint256"
      }
    ],
    "name": "Withdrawal",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "deposit",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "wad",
        "type": "uint256"
      }
    ],
    "name": "withdraw",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "guy",
        "type": "address"
      },
      {
        "name": "wad",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "dst",
        "type": "address"
      },
      {
        "name": "wad",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "src",
        "type": "address"
      },
      {
        "name": "dst",
        "type": "address"
      },
      {
        "name": "wad",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
]


const Exchange = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "setOwner",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "operators",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "bytes32"
      }
    ],
    "name": "filled",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "wethToken",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "feeAccount",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "bytes32"
      }
    ],
    "name": "traded",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "VERSION",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "name": "_wethToken",
        "type": "address"
      },
      {
        "name": "_feeAccount",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "oldWethToken",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "newWethToken",
        "type": "address"
      }
    ],
    "name": "LogWethTokenUpdate",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "oldFeeAccount",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "newFeeAccount",
        "type": "address"
      }
    ],
    "name": "LogFeeAccountUpdate",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "operator",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "isOperator",
        "type": "bool"
      }
    ],
    "name": "LogOperatorUpdate",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "taker",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "tokenSell",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "tokenBuy",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "orderHashes",
        "type": "bytes32[]"
      },
      {
        "indexed": false,
        "name": "tradeHashes",
        "type": "bytes32[]"
      },
      {
        "indexed": false,
        "name": "filledAmounts",
        "type": "uint256[]"
      },
      {
        "indexed": true,
        "name": "tokenPairHash",
        "type": "bytes32"
      }
    ],
    "name": "LogBatchTrades",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "maker",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "taker",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "tokenSell",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "tokenBuy",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "filledAmountSell",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "filledAmountBuy",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "paidFeeMake",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "paidFeeTake",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "orderHash",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "tradeHash",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "name": "tokenPairHash",
        "type": "bytes32"
      }
    ],
    "name": "LogTrade",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "errorId",
        "type": "uint8"
      },
      {
        "indexed": false,
        "name": "orderHash",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "tradeHash",
        "type": "bytes32"
      }
    ],
    "name": "LogError",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "orderHash",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "tokenBuy",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "amountBuy",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "tokenSell",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "amountSell",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "expires",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "nonce",
        "type": "uint256"
      },
      {
        "indexed": true,
        "name": "maker",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "tokenPairHash",
        "type": "bytes32"
      }
    ],
    "name": "LogCancelOrder",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "orderHash",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "tradeNonce",
        "type": "uint256"
      },
      {
        "indexed": true,
        "name": "taker",
        "type": "address"
      }
    ],
    "name": "LogCancelTrade",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "SetOwner",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_wethToken",
        "type": "address"
      }
    ],
    "name": "setWethToken",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_feeAccount",
        "type": "address"
      }
    ],
    "name": "setFeeAccount",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_operator",
        "type": "address"
      },
      {
        "name": "_isOperator",
        "type": "bool"
      }
    ],
    "name": "setOperator",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "orderValues",
        "type": "uint256[8][]"
      },
      {
        "name": "orderAddresses",
        "type": "address[4][]"
      },
      {
        "name": "v",
        "type": "uint8[2][]"
      },
      {
        "name": "rs",
        "type": "bytes32[4][]"
      }
    ],
    "name": "executeBatchTrades",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "orderValues",
        "type": "uint256[8]"
      },
      {
        "name": "orderAddresses",
        "type": "address[4]"
      },
      {
        "name": "v",
        "type": "uint8[2]"
      },
      {
        "name": "rs",
        "type": "bytes32[4]"
      }
    ],
    "name": "executeTrade",
    "outputs": [
      {
        "name": "",
        "type": "bytes32"
      },
      {
        "name": "",
        "type": "bytes32"
      },
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "orderValues",
        "type": "uint256[6][]"
      },
      {
        "name": "orderAddresses",
        "type": "address[3][]"
      },
      {
        "name": "v",
        "type": "uint8[]"
      },
      {
        "name": "r",
        "type": "bytes32[]"
      },
      {
        "name": "s",
        "type": "bytes32[]"
      }
    ],
    "name": "batchCancelOrders",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "orderValues",
        "type": "uint256[6]"
      },
      {
        "name": "orderAddresses",
        "type": "address[3]"
      },
      {
        "name": "v",
        "type": "uint8"
      },
      {
        "name": "r",
        "type": "bytes32"
      },
      {
        "name": "s",
        "type": "bytes32"
      }
    ],
    "name": "cancelOrder",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "orderHash",
        "type": "bytes32[]"
      },
      {
        "name": "amount",
        "type": "uint256[]"
      },
      {
        "name": "tradeNonce",
        "type": "uint256[]"
      },
      {
        "name": "taker",
        "type": "address[]"
      },
      {
        "name": "v",
        "type": "uint8[]"
      },
      {
        "name": "r",
        "type": "bytes32[]"
      },
      {
        "name": "s",
        "type": "bytes32[]"
      }
    ],
    "name": "batchCancelTrades",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "orderHash",
        "type": "bytes32"
      },
      {
        "name": "amount",
        "type": "uint256"
      },
      {
        "name": "tradeNonce",
        "type": "uint256"
      },
      {
        "name": "taker",
        "type": "address"
      },
      {
        "name": "v",
        "type": "uint8"
      },
      {
        "name": "r",
        "type": "bytes32"
      },
      {
        "name": "s",
        "type": "bytes32"
      }
    ],
    "name": "cancelTrade",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "signer",
        "type": "address"
      },
      {
        "name": "hash",
        "type": "bytes32"
      },
      {
        "name": "v",
        "type": "uint8"
      },
      {
        "name": "r",
        "type": "bytes32"
      },
      {
        "name": "s",
        "type": "bytes32"
      }
    ],
    "name": "isValidSignature",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "numerator",
        "type": "uint256"
      },
      {
        "name": "denominator",
        "type": "uint256"
      },
      {
        "name": "target",
        "type": "uint256"
      }
    ],
    "name": "isRoundingError",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "numerator",
        "type": "uint256"
      },
      {
        "name": "denominator",
        "type": "uint256"
      },
      {
        "name": "target",
        "type": "uint256"
      }
    ],
    "name": "getPartialAmount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  }
]

module.exports = {
  ERC20,
  WETH,
  Exchange
}