export interface IContract {
  address: `0x${string}`;
}

export interface INetworkConfig {
  name: string;
  backendUrl: string;
  contracts: { bridge: IContract; NFTYToken: IContract };
}

export const networksConfig: Record<number, INetworkConfig> = {
  97: {
    name: "bscTestnet",
    backendUrl: "https://bsc-be.magnify.blaize.technology",
    contracts: {
      bridge: { address: "0xaB2C4DAb32a8a07dD0403E23ab67b4E787270ace" },
      NFTYToken: { address: "0x5Ce62153Cd1F7Da9099d81b58906C0843886dd5D" },
    },
  },
  80_002: {
    name: "polygonAmoy",
    backendUrl: "https://polygon-be.magnify.blaize.technology",
    contracts: {
      bridge: { address: "0xD10df379F53D5Ed5b643428a774298Cc3B475272" },
      NFTYToken: { address: "0x0B5d53E3b79e3317A17AD5F61910d4F807eCa56a" },
    },
  },
  11_155_111: {
    name: "sepolia",
    backendUrl: "https://eth-be.magnify.blaize.technology",
    contracts: {
      bridge: { address: "0x42993fde1a2f73C117d266D351097917e2Ac8b49" },
      NFTYToken: { address: "0x6c28de594318C8AB116Ad5865A7fc4b75a8e1dfe" },
    },
  },
};
