import { useQuery } from "wagmi/query";
import axios from "axios";
import { useContractByNetworkId } from "@/api/web3/hooks/useContractByNetworkId";
import { useCallback } from "react";
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

  return useCallback(
    (userAddress: `0x${string}` | undefined) =>
      fetchInfoByUserAddress(backendUrl, userAddress),
    [backendUrl],
  );
};

export const useInfoByUserAddress = () => {
  const httpClient = useHttpClientByChainId();
  const { address } = useAccount();

  return useQuery({
    queryKey: ["useInfoByUserAddress"],
    queryFn: () => httpClient(address),
    enabled: !!address,
    refetchInterval: 10000,
  });
};
