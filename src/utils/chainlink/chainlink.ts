
// Map token to their oracle price feed contract
export const chainLink: Map<string,string> = new Map<string,string>([
    //GNOSIS
    ["0xe91d153e0b41518a2ce8dd3d7944fa863463a97d","0x678df3415fc31947dA4324eC63212874be5a82f8"], //WXDAI
    ["0xddafbb505ad214d7b80b1f830fccc89b60fb7a83","0x26C31ac71010aF62E6B486D1132E266D6298857D"], //USDC
    ["0x7349C9eaA538e118725a6130e0f8341509b9f8A0","0x678df3415fc31947dA4324eC63212874be5a82f8"], // rmmXDAI
    // ETH
    ["0x5f98805a4e8be255a32880fdec7f6728c6568ba0","0x3D7aE7E594f2f2091Ad8798313450130d0Aba3a0"], //LUSD
    ["0x6b175474e89094c44da98b954eedeac495271d0f","0xAed0c38402a5d19df6E4c03F4E2DceD6e29c1ee9"], //DAI
    ["0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48","0x8fFfFfd4AfB6115b954Bd326cbe7B4BA576818f6"], //USDC
    ["0xdac17f958d2ee523a2206206994597c13d831ec7","0x3E7d1eAB13ad0104d2750B8863b489D65364e32D"], //TUSD
]);