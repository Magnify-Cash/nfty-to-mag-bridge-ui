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

  const isApproved = data >= amountValidate;

  return { isApproved, data, refetchAllowanceUsdc };
};
// "  address:   0xb8E75E47fE7c195170747CC2Aa3CB862AF1c72b9
// function:  send(address token, address to, uint256 amount)
// args:          (0x56D2a6fC1aECf6C14B98f53fAa095d962615C2f1, 0xF3Bc8C5F2A857d68D5809f02352C9d73656d74D4, 1111111111)
// sender:    0xF3Bc8C5F2A857d68D5809f02352C9d73656d74D4"