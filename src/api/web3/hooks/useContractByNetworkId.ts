import { useAccount } from "wagmi";
import { networksConfig } from "@/api/web3/networkConfig";
import { IS_DEV } from "@/lib/constants";
import { isSupportedChains } from "@/lib/helpers/utils";
import {useEffect, useMemo} from "react";

export const useContractByNetworkId = () => {
  const { chainId: userChainId } = useAccount();

  const chainId = useMemo(() => isSupportedChains(userChainId), [userChainId]);

  useEffect(() => {
    if (!chainId) {
      console.error("Network not supported");
    }
  }, [chainId]);

  const verifChainId = IS_DEV ? chainId || 11_155_111 : chainId || 1;

  return networksConfig[verifChainId];
};
