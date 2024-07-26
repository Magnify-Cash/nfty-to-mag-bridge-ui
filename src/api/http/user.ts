import { useQuery } from "wagmi/query";
import axios from "axios";
import { useContractByNetworkId } from "@/api/web3/hooks/useContractByNetworkId";
import { useMemo } from "react";
import { useAccount } from "wagmi";
import { IUserInfoResponse } from "@/lib/types";

const fetchInfoByUserAddress = async (
  url: string,
  userAddress: `0x${string}` | undefined,
) => {
  const { data } = await axios.get<IUserInfoResponse>(`${url}/user/order`, {
    params: { userAddress },
  });

  return data;
};

const useHttpClientByChainId = () => {
  const { backendUrl } = useContractByNetworkId();

  return useMemo(() => {
    if (backendUrl) {
      return (userAddress: `0x${string}` | undefined) =>
        fetchInfoByUserAddress(backendUrl, userAddress);
    }
    return undefined;
  }, [backendUrl]);
};

export const useInfoByUserAddress = () => {
  const httpClient = useHttpClientByChainId();
  const { address } = useAccount();

  const { data } = useQuery({
    queryKey: ["useInfoByUserAddress"],
    queryFn: () => httpClient!(address),
    enabled: !!address && !!httpClient,
    refetchInterval: 5000,
  });
  const userData = data as IUserInfoResponse | undefined;
  const isSent = userData?.status === "SENT";
  const isBlock = userData?.status === "BLOCKED";
  const isComplete = userData?.status === "COMPLETE";
  const isRefund = userData?.status === "REFUND";

  return { data, isRefund, isComplete, isBlock, isSent };
};
