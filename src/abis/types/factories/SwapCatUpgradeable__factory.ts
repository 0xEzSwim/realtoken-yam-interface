/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SwapCatUpgradeable,
  SwapCatUpgradeableInterface,
} from "../SwapCatUpgradeable";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldModerator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newModerator",
        type: "address",
      },
    ],
    name: "ModeratorTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "offerId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "OfferAccepted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "offerToken",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "buyerToken",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "offerId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "OfferCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "offerId",
        type: "uint256",
      },
    ],
    name: "OfferDeleted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "TokenUnWhitelisted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "TokenWhitelisted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "UPGRADER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "offerId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "buy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "offerId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "buyWithPermit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "offerToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "buyerToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "offerId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "createOffer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "offerToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "buyerToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "offerId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "createOfferWithPermit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "offerId",
        type: "uint256",
      },
    ],
    name: "deleteOffer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "offerId",
        type: "uint256",
      },
    ],
    name: "deleteOfferByAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getOfferCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "admin_",
        type: "address",
      },
      {
        internalType: "address",
        name: "moderator_",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token_",
        type: "address",
      },
    ],
    name: "isWhitelisted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "moderator",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "offerId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "pricePreview",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "saveLostTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "offerId",
        type: "uint256",
      },
    ],
    name: "showOffer",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token_",
        type: "address",
      },
    ],
    name: "toggleWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenaddr",
        type: "address",
      },
    ],
    name: "tokenInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newModerator",
        type: "address",
      },
    ],
    name: "transferModerator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "whitelistedTokens",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523060601b60805234801561001757600080fd5b5060805160601c612bc161005260003960008181610c1301528181610c5301528181610f5b01528181610f9b015261102a0152612bc16000f3fe6080604052600436106101c25760003560e01c806347028f65116100f7578063c8d35a3b11610095578063daf9c21011610064578063daf9c2101461055a578063f5dab7111461058b578063f72c0d8b146105ba578063f851a440146105ee57600080fd5b8063c8d35a3b146104e5578063cc1d179b14610505578063d048db3714610525578063d547741f1461053a57600080fd5b806352d1902d116100d157806352d1902d1461047b57806374268ff21461049057806391d14854146104b0578063a217fddf146104d057600080fd5b806347028f6514610428578063485cc955146104485780634f1ef2861461046857600080fd5b80632f2ff15d11610164578063387439041161013e578063387439041461037557806339393ac9146103ae5780633af32abf146103ce57806340993b261461040857600080fd5b80632f2ff15d1461031557806336568abe146103355780633659cfe61461035557600080fd5b80631bcae916116101a05780631bcae91614610277578063248a9ca314610297578063292d52f2146102d55780632a3f700b146102f557600080fd5b8063017716dc146101c757806301ffc9a7146102255780631390dc4814610255575b600080fd5b3480156101d357600080fd5b506101e76101e236600461259f565b61060f565b604080516001600160a01b039687168152948616602086015292909416918301919091526060820152608081019190915260a0015b60405180910390f35b34801561023157600080fd5b506102456102403660046125f1565b6107a0565b604051901515815260200161021c565b34801561026157600080fd5b506102756102703660046123d0565b6107d7565b005b34801561028357600080fd5b506102756102923660046126cf565b610895565b3480156102a357600080fd5b506102c76102b236600461259f565b60009081526065602052604090206001015490565b60405190815260200161021c565b3480156102e157600080fd5b506102c76102f0366004612683565b610924565b34801561030157600080fd5b506102756103103660046123d0565b6109ec565b34801561032157600080fd5b506102756103303660046125cf565b610b5f565b34801561034157600080fd5b506102756103503660046125cf565b610b8a565b34801561036157600080fd5b506102756103703660046123d0565b610c08565b34801561038157600080fd5b5061010254610396906001600160a01b031681565b6040516001600160a01b03909116815260200161021c565b3480156103ba57600080fd5b506102756103c93660046123d0565b610ce8565b3480156103da57600080fd5b506102456103e93660046123d0565b6001600160a01b0316600090815260ff60208190526040909120541690565b34801561041457600080fd5b506102756104233660046126a4565b610d96565b34801561043457600080fd5b5061027561044336600461259f565b610da1565b34801561045457600080fd5b506102756104633660046123ea565b610e1f565b6102756104763660046124da565b610f50565b34801561048757600080fd5b506102c761101d565b34801561049c57600080fd5b506102756104ab36600461259f565b6110d0565b3480156104bc57600080fd5b506102456104cb3660046125cf565b6111a7565b3480156104dc57600080fd5b506102c7600081565b3480156104f157600080fd5b5061027561050036600461245d565b6111d2565b34801561051157600080fd5b5061027561052036600461241c565b611253565b34801561053157600080fd5b506102c7611265565b34801561054657600080fd5b506102756105553660046125cf565b61127c565b34801561056657600080fd5b506102456105753660046123d0565b60ff602081905260009182526040909120541681565b34801561059757600080fd5b506105ab6105a63660046123d0565b6112a2565b60405161021c939291906128d3565b3480156105c657600080fd5b506102c77f189ab7a9244df0848122154315af71fe140f3db0fe014031783b0946b8c9d2e381565b3480156105fa57600080fd5b5061010154610396906001600160a01b031681565b600081815260fc602090815260408083205460fe9092528083205490516370a0823160e01b81526001600160a01b03918216600482015283928392839283929190911690829082906370a082319060240160206040518083038186803b15801561067857600080fd5b505afa15801561068c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106b091906125b7565b600089815260fe6020526040808220549051636eb1769f60e11b81526001600160a01b03918216600482015230602482015292935090919084169063dd62ed3e9060440160206040518083038186803b15801561070c57600080fd5b505afa158015610720573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061074491906125b7565b905081811015610752578091505b50600097885260fc60209081526040808a205460fd8352818b205460fe8452828c205460fb90945291909a20546001600160a01b039a8b169b918b169a909216985090965090945092505050565b60006001600160e01b03198216637965db0b60e01b14806107d157506301ffc9a760e01b6001600160e01b03198316145b92915050565b610102546001600160a01b031633146108375760405162461bcd60e51b815260206004820152601760248201527f43616c6c6572206973206e6f74206d6f64657261746f7200000000000000000060448201526064015b60405180910390fd5b610102546040516001600160a01b038084169216907f8427d4739e7dc11aacb1135cad949e4e0cf051201130f48373d5b8baa91a9e9e90600090a361010280546001600160a01b0319166001600160a01b0392909216919091179055565b600087815260fd60205260409081902054905163d505accf60e01b81526001600160a01b039091169063d505accf906108de90339030908a908a908a908a908a906004016127e7565b600060405180830381600087803b1580156108f857600080fd5b505af115801561090c573d6000803e3d6000fd5b5050505061091b878787611415565b50505050505050565b600082815260fc6020908152604080832054815163313ce56760e01b815291516001600160a01b0390911692839263313ce5679260048083019392829003018186803b15801561097357600080fd5b505afa158015610987573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109ab91906125b7565b6109b690600a6129dc565b600085815260fb60205260409020546109cf9085612a84565b6109d99190612979565b6109e4906001612961565b949350505050565b610102546001600160a01b0316331480610a115750610101546001600160a01b031633145b610a725760405162461bcd60e51b815260206004820152602c60248201527f6f6e6c792061646d696e206f72206d6f64657261746f722063616e206d6f766560448201526b206c6f737420746f6b656e7360a01b606482015260840161082e565b610102546040516370a0823160e01b815230600482015282916001600160a01b038084169263a9059cbb92919091169083906370a082319060240160206040518083038186803b158015610ac557600080fd5b505afa158015610ad9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610afd91906125b7565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401600060405180830381600087803b158015610b4357600080fd5b505af1158015610b57573d6000803e3d6000fd5b505050505050565b600082815260656020526040902060010154610b7b8133611979565b610b8583836119dd565b505050565b6001600160a01b0381163314610bfa5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b606482015260840161082e565b610c048282611a63565b5050565b306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161415610c515760405162461bcd60e51b815260040161082e9061283b565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610c9a600080516020612b45833981519152546001600160a01b031690565b6001600160a01b031614610cc05760405162461bcd60e51b815260040161082e90612887565b610cc981611aca565b60408051600080825260208201909252610ce591839190611af5565b50565b6000610cf48133611979565b6001600160a01b038216600090815260ff60208190526040909120805460ff198116908316159081179091551615610d5e576040516001600160a01b038316907f6a65f90b1a644d2faac467a21e07e50e3f8fa5846e26231d30ae79a417d3d26290600090a25050565b6040516001600160a01b038316907fca5bd79f90488f3c1591194c3f105d7e690f3b9fb0d337958b5bfd8a3ca175e590600090a25050565b610b85838383611415565b6000610dad8133611979565b600082815260fe6020908152604080832080546001600160a01b031990811690915560fc835281842080548216905560fd83528184208054909116905560fb9091528082208290555183917f88686b85d6f2c3ab9a04e4f15a22fcfa025ffd97226dcf0a67cdf682def5567691a25050565b600054610100900460ff16610e3a5760005460ff1615610e3e565b303b155b610ea15760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161082e565b600054610100900460ff16158015610ec3576000805461ffff19166101011790555b610ecb611c6f565b610ed3611c6f565b610ede6000846119dd565b610f087f189ab7a9244df0848122154315af71fe140f3db0fe014031783b0946b8c9d2e3846119dd565b61010180546001600160a01b038086166001600160a01b0319928316179092556101028054928516929091169190911790558015610b85576000805461ff0019169055505050565b306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161415610f995760405162461bcd60e51b815260040161082e9061283b565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610fe2600080516020612b45833981519152546001600160a01b031690565b6001600160a01b0316146110085760405162461bcd60e51b815260040161082e90612887565b61101182611aca565b610c0482826001611af5565b6000306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146110bd5760405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c0000000000000000606482015260840161082e565b50600080516020612b4583398151915290565b600081815260fe60205260409020546001600160a01b031633146111365760405162461bcd60e51b815260206004820181905260248201527f6f6e6c79207468652073656c6c65722063616e2064656c657465206f66666572604482015260640161082e565b600081815260fe6020908152604080832080546001600160a01b031990811690915560fc835281842080548216905560fd83528184208054909116905560fb9091528082208290555182917f88686b85d6f2c3ab9a04e4f15a22fcfa025ffd97226dcf0a67cdf682def5567691a250565b60009182526065602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6111de89898989611cdc565b60405163d505accf60e01b81526001600160a01b038a169063d505accf9061121690339030908a908a908a908a908a906004016127e7565b600060405180830381600087803b15801561123057600080fd5b505af1158015611244573d6000803e3d6000fd5b50505050505050505050505050565b61125f84848484611cdc565b50505050565b60006001610100546112779190612aa3565b905090565b6000828152606560205260409020600101546112988133611979565b610b858383611a63565b60006060806000849050806001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156112e557600080fd5b505afa1580156112f9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061131d91906125b7565b816001600160a01b03166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b15801561135657600080fd5b505afa15801561136a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526113929190810190612619565b826001600160a01b03166306fdde036040518163ffffffff1660e01b815260040160006040518083038186803b1580156113cb57600080fd5b505afa1580156113df573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526114079190810190612619565b935093509350509193909250565b600083815260fc602090815260408083205460fd83528184205460fb9093529220546001600160a01b03928316929091169084146114895760405162461bcd60e51b81526020600482015260116024820152706f666665722070726963652077726f6e6760781b604482015260640161082e565b600085815260fc602090815260408083205460fe909252909120546114bc916001600160a01b0390811691163386611ef2565b6115005760405162461bcd60e51b81526020600482015260156024820152741d1c985b9cd9995c881a5cc81b9bdd081d985b1a59605a1b604482015260640161082e565b6000826001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561153b57600080fd5b505afa15801561154f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061157391906125b7565b61157e90600a6129dc565b6115888686612a84565b6115929190612979565b61159d906001612961565b6040516370a0823160e01b81523360048201529091506000906001600160a01b038416906370a082319060240160206040518083038186803b1580156115e257600080fd5b505afa1580156115f6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061161a91906125b7565b600088815260fe60205260408082205490516370a0823160e01b81526001600160a01b0391821660048201529293509091908616906370a082319060240160206040518083038186803b15801561167057600080fd5b505afa158015611684573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116a891906125b7565b600089815260fe6020526040908190205490516323b872dd60e01b81523360048201526001600160a01b039182166024820152604481018690529192508516906323b872dd90606401600060405180830381600087803b15801561170b57600080fd5b505af115801561171f573d6000803e3d6000fd5b505050600089815260fe6020526040908190205490516323b872dd60e01b81526001600160a01b0391821660048201523360248201526044810189905290871691506323b872dd90606401600060405180830381600087803b15801561178457600080fd5b505af1158015611798573d6000803e3d6000fd5b50506040516370a0823160e01b81523360048201526001600160a01b03871692506370a08231915060240160206040518083038186803b1580156117db57600080fd5b505afa1580156117ef573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061181391906125b7565b821161184f5760405162461bcd60e51b815260206004820152600b60248201526a313abcb2b91032b93937b960a91b604482015260640161082e565b600088815260fe6020526040908190205490516370a0823160e01b81526001600160a01b039182166004820152908616906370a082319060240160206040518083038186803b1580156118a157600080fd5b505afa1580156118b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118d991906125b7565b81116119165760405162461bcd60e51b815260206004820152600c60248201526b39b2b63632b91032b93937b960a11b604482015260640161082e565b600088815260fe60209081526040918290205482518a815291820189905233926001600160a01b03909116918b917f8210e9bd2a5d8bc2c71608bf97cbb56d747cc7a054aed7897eec4b881c441c9a910160405180910390a45050505050505050565b61198382826111a7565b610c045761199b816001600160a01b03166014611f8c565b6119a6836020611f8c565b6040516020016119b7929190612772565b60408051601f198184030181529082905262461bcd60e51b825261082e91600401612828565b6119e782826111a7565b610c045760008281526065602090815260408083206001600160a01b03851684529091529020805460ff19166001179055611a1f3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b611a6d82826111a7565b15610c045760008281526065602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b7f189ab7a9244df0848122154315af71fe140f3db0fe014031783b0946b8c9d2e3610c048133611979565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff1615611b2857610b8583612175565b826001600160a01b03166352d1902d6040518163ffffffff1660e01b815260040160206040518083038186803b158015611b6157600080fd5b505afa925050508015611b91575060408051601f3d908101601f19168201909252611b8e918101906125b7565b60015b611bf45760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201526d6f6e206973206e6f74205555505360901b606482015260840161082e565b600080516020612b458339815191528114611c635760405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f786044820152681a58589b195555525160ba1b606482015260840161082e565b50610b85838383612211565b600054610100900460ff16611cda5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b606482015260840161082e565b565b6001600160a01b038416600090815260ff6020819052604090912054859116611d425760405162461bcd60e51b8152602060048201526018602482015277151bdad95b881a5cc81b9bdd081dda1a5d195b1a5cdd195960421b604482015260640161082e565b6001600160a01b038416600090815260ff6020819052604090912054859116611da85760405162461bcd60e51b8152602060048201526018602482015277151bdad95b881a5cc81b9bdd081dda1a5d195b1a5cdd195960421b604482015260640161082e565b83611e1e576101008054945084906000611dc183612afd565b9091555050600084815260fe602090815260408083208054336001600160a01b03199182161790915560fc8352818420805482166001600160a01b038c81169190911790915560fd90935292208054909216908716179055611e84565b600084815260fe60205260409020546001600160a01b03163314611e845760405162461bcd60e51b815260206004820181905260248201527f6f6e6c79207468652073656c6c65722063616e206368616e6765206f66666572604482015260640161082e565b8260fb60008681526020019081526020016000208190555083856001600160a01b0316876001600160a01b03167f1e1a944902b7d587d9352b556127d1316831a4c829cfc46cc2fcb10c8ab5382286604051611ee291815260200190565b60405180910390a4505050505050565b6040516372331c7360e11b81526001600160a01b038481166004830152838116602483015260448201839052600091829187169063e46638e69060640160606040518083038186803b158015611f4757600080fd5b505afa158015611f5b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f7f9190612565565b5090979650505050505050565b60606000611f9b836002612a84565b611fa6906002612961565b67ffffffffffffffff811115611fcc57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611ff6576020820181803683370190505b509050600360fc1b8160008151811061201f57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350600f60fb1b8160018151811061205c57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a9053506000612080846002612a84565b61208b906001612961565b90505b600181111561211f576f181899199a1a9b1b9c1cb0b131b232b360811b85600f16601081106120cd57634e487b7160e01b600052603260045260246000fd5b1a60f81b8282815181106120f157634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060049490941c9361211881612ae6565b905061208e565b50831561216e5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640161082e565b9392505050565b6001600160a01b0381163b6121e25760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b606482015260840161082e565b600080516020612b4583398151915280546001600160a01b0319166001600160a01b0392909216919091179055565b61221a83612236565b6000825111806122275750805b15610b855761125f8383612276565b61223f81612175565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606001600160a01b0383163b6122de5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b606482015260840161082e565b600080846001600160a01b0316846040516122f99190612756565b600060405180830381855af49150503d8060008114612334576040519150601f19603f3d011682016040523d82523d6000602084013e612339565b606091505b50915091506123618282604051806060016040528060278152602001612b656027913961236a565b95945050505050565b6060831561237957508161216e565b8251156123895782518084602001fd5b8160405162461bcd60e51b815260040161082e9190612828565b80356001600160a01b03811681146123ba57600080fd5b919050565b803560ff811681146123ba57600080fd5b6000602082840312156123e1578081fd5b61216e826123a3565b600080604083850312156123fc578081fd5b612405836123a3565b9150612413602084016123a3565b90509250929050565b60008060008060808587031215612431578182fd5b61243a856123a3565b9350612448602086016123a3565b93969395505050506040820135916060013590565b60008060008060008060008060006101208a8c03121561247b578485fd5b6124848a6123a3565b985061249260208b016123a3565b975060408a0135965060608a0135955060808a0135945060a08a013593506124bc60c08b016123bf565b925060e08a013591506101008a013590509295985092959850929598565b600080604083850312156124ec578182fd5b6124f5836123a3565b9150602083013567ffffffffffffffff811115612510578182fd5b8301601f81018513612520578182fd5b803561253361252e82612939565b612908565b818152866020838501011115612547578384fd5b81602084016020830137908101602001929092525090939092509050565b600080600060608486031215612579578283fd5b83518015158114612588578384fd5b602085015160409095015190969495509392505050565b6000602082840312156125b0578081fd5b5035919050565b6000602082840312156125c8578081fd5b5051919050565b600080604083850312156125e1578182fd5b82359150612413602084016123a3565b600060208284031215612602578081fd5b81356001600160e01b03198116811461216e578182fd5b60006020828403121561262a578081fd5b815167ffffffffffffffff811115612640578182fd5b8201601f81018413612650578182fd5b805161265e61252e82612939565b818152856020838501011115612672578384fd5b612361826020830160208601612aba565b60008060408385031215612695578182fd5b50508035926020909101359150565b6000806000606084860312156126b8578081fd5b505081359360208301359350604090920135919050565b600080600080600080600060e0888a0312156126e9578081fd5b8735965060208801359550604088013594506060880135935061270e608089016123bf565b925060a0880135915060c0880135905092959891949750929550565b60008151808452612742816020860160208601612aba565b601f01601f19169290920160200192915050565b60008251612768818460208701612aba565b9190910192915050565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516127aa816017850160208801612aba565b7001034b99036b4b9b9b4b733903937b6329607d1b60179184019182015283516127db816028840160208801612aba565b01602801949350505050565b6001600160a01b0397881681529590961660208601526040850193909352606084019190915260ff16608083015260a082015260c081019190915260e00190565b60208152600061216e602083018461272a565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b19195b1959d85d1958d85b1b60a21b606082015260800190565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b6163746976652070726f787960a01b606082015260800190565b8381526060602082015260006128ec606083018561272a565b82810360408401526128fe818561272a565b9695505050505050565b604051601f8201601f1916810167ffffffffffffffff8111828210171561293157612931612b2e565b604052919050565b600067ffffffffffffffff82111561295357612953612b2e565b50601f01601f191660200190565b6000821982111561297457612974612b18565b500190565b60008261299457634e487b7160e01b81526012600452602481fd5b500490565b600181815b808511156129d45781600019048211156129ba576129ba612b18565b808516156129c757918102915b93841c939080029061299e565b509250929050565b600061216e83836000826129f2575060016107d1565b816129ff575060006107d1565b8160018114612a155760028114612a1f57612a3b565b60019150506107d1565b60ff841115612a3057612a30612b18565b50506001821b6107d1565b5060208310610133831016604e8410600b8410161715612a5e575081810a6107d1565b612a688383612999565b8060001904821115612a7c57612a7c612b18565b029392505050565b6000816000190483118215151615612a9e57612a9e612b18565b500290565b600082821015612ab557612ab5612b18565b500390565b60005b83811015612ad5578181015183820152602001612abd565b8381111561125f5750506000910152565b600081612af557612af5612b18565b506000190190565b6000600019821415612b1157612b11612b18565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfe360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220d22edcf5a2b8fd2a0d54b4c44295c49459e59f18cd4d27b6249502697086105c64736f6c63430008040033";

export class SwapCatUpgradeable__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SwapCatUpgradeable> {
    return super.deploy(overrides || {}) as Promise<SwapCatUpgradeable>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SwapCatUpgradeable {
    return super.attach(address) as SwapCatUpgradeable;
  }
  connect(signer: Signer): SwapCatUpgradeable__factory {
    return super.connect(signer) as SwapCatUpgradeable__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SwapCatUpgradeableInterface {
    return new utils.Interface(_abi) as SwapCatUpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SwapCatUpgradeable {
    return new Contract(address, _abi, signerOrProvider) as SwapCatUpgradeable;
  }
}
