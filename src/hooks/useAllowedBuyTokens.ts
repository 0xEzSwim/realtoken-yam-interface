
import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react"
import { goerliAllowedBuyTokens } from "src/constants/allowedBuyTokens";
import { AllowedBuyToken } from "src/types/allowedBuyTokens";

type useAllowedBuyTokensReturn = {
    allowedBuyTokens: AllowedBuyToken[]
}

const getRightAllowBuyTokens = (chainId: number|undefined): AllowedBuyToken[]  => {
    if(!chainId) return [];
    switch(chainId){
        case 5:
            return goerliAllowedBuyTokens;
        default: 
            return [];
    }
}

export const useAllowedBuyTokens = (): useAllowedBuyTokensReturn => {

    const { chainId } = useWeb3React();
    const [allowedBuyTokens,setAllowedBuyTokens] = useState<AllowedBuyToken[]>([]);

    useEffect(() => {
        setAllowedBuyTokens(getRightAllowBuyTokens(chainId))
    },[chainId])

    return{
        allowedBuyTokens
    }

}