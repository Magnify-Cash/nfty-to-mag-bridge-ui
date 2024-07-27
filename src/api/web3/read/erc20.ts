import { useContractByNetworkId } from "@/api/web3/hooks/useContractByNetworkId";
import { useAccount, useBlockNumber, useReadContract } from "wagmi";
import { ERC20Abi } from "@/lib/abi/ERC20";
import { useEffect } from "react";
import { parseUnits } from "viem";

export const useCheckAllowanceNFTYToken = ({
  amount = 0,
  isMainnet,
}: {
  amount?: number | bigint;
  isMainnet?: boolean;
}) => {
  const { contracts } = useContractByNetworkId();
  const { data: blockNumber } = useBlockNumber({
    watch: true,
  });
  const spender = isMainnet
    ? contracts.Migrator!.address
    : contracts.bridge.address;

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
    args: [address!, spender],
  });
  useEffect(() => {
    if (Number(blockNumber) % 4 === 0) {
      refetchAllowanceUsdc();
    }
  }, [blockNumber]);

  const isApproved = amountValidate === BigInt(0) ? false : data >= amountValidate;
  return { isApproved, data, refetchAllowanceUsdc };
};
