import { useChainId } from "wagmi";
import { networksConfig } from "@/api/web3/networkConfig";

export const useContractByNetworkId = () => {
  const chainId = useChainId();
  return networksConfig[chainId];
};
