import { useContractByNetworkId } from "@/api/web3/hooks/useContractByNetworkId";
import { useAccount, useBlockNumber, useReadContract } from "wagmi";
import { ERC20Abi } from "@/lib/abi/ERC20";
import { useEffect } from "react";
import { parseUnits } from "viem";

export const useCheckAllowanceNFTYToken = ({
  amount = 0,
}: {
  amount?: number | bigint;
}) => {
  const { contracts } = useContractByNetworkId();
  const { data: blockNumber } = useBlockNumber({
    watch: true,
  });

  const { address } = useAccount();
  const amountValidate =
    amount !== undefined
      ? typeof amount === "bigint"
        ? amount
        : parseUnits(String(amount), 18)
      : BigInt(0);

  const { data = BigInt(0), refetch: refetchAllowanceUsdc } = useReadContract({
    address: contracts.NFTYToken.address,
    abi: ERC20Abi,
    functionName: "allowance",
    args: [address!, contracts.bridge.address],
  });

  useEffect(() => {
    if (Number(blockNumber) % 4 === 0) {
      refetchAllowanceUsdc();
    }
  }, [blockNumber]);

  const isApproved = data >= amountValidate;

  return { isApproved, data, refetchAllowanceUsdc };
};
