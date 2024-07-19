import {
  bsc,
  bscTestnet,
  mainnet,
  polygon,
  polygonAmoy,
  sepolia,
} from "wagmi/chains";
import { IS_DEV } from "@/lib/constants";

export interface IContract {
  address: `0x${string}`;
}

export interface INetworkConfig {
  name: string;
  backendUrl: string;
  contracts: { bridge: IContract; NFTYToken: IContract };
}

const networksConfigDev: Record<number, INetworkConfig> = {
  [bscTestnet.id]: {
    name: "bscTestnet",
    backendUrl: "https://bsc-be.magnify.blaize.technology",
    contracts: {
      bridge: { address: "0xfB548718eCBa9Df6ddb67864F38Bf3decE9771e9" },
      NFTYToken: { address: "0x5Ce62153Cd1F7Da9099d81b58906C0843886dd5D" },
    },
  },
  [polygonAmoy.id]: {
    name: "polygonAmoy",
    backendUrl: "https://polygon-be.magnify.blaize.technology",
    contracts: {
      bridge: { address: "0xe76a587296294211cbAE2A3Fefe83441E2a956A3" },
      NFTYToken: { address: "0x0B5d53E3b79e3317A17AD5F61910d4F807eCa56a" },
    },
  },
  [sepolia.id]: {
    name: "sepolia",
    backendUrl: "https://eth-be.magnify.blaize.technology",
    contracts: {
      bridge: { address: "0xf98f635214a14610516423382D9bF562C5386512" },
      NFTYToken: { address: "0x6c28de594318C8AB116Ad5865A7fc4b75a8e1dfe" },
    },
  },
};

const networksConfigProd: Record<number, INetworkConfig> = {
  [bsc.id]: {
    name: "bsc",
    backendUrl: "https://bsc-be.magnify.blaize.technology",
    contracts: {
      bridge: { address: "0xfB548718eCBa9Df6ddb67864F38Bf3decE9771e9" },
      NFTYToken: { address: "0x5Ce62153Cd1F7Da9099d81b58906C0843886dd5D" },
    },
  },
  [polygon.id]: {
    name: "polygon",
    backendUrl: "https://polygon-be.magnify.blaize.technology",
    contracts: {
      bridge: { address: "0xe76a587296294211cbAE2A3Fefe83441E2a956A3" },
      NFTYToken: { address: "0x0B5d53E3b79e3317A17AD5F61910d4F807eCa56a" },
    },
  },
  [mainnet.id]: {
    name: "mainnet",
    backendUrl: "https://eth-be.magnify.blaize.technology",
    contracts: {
      bridge: { address: "0xf98f635214a14610516423382D9bF562C5386512" },
      NFTYToken: { address: "0x6c28de594318C8AB116Ad5865A7fc4b75a8e1dfe" },
    },
  },
};

export const networksConfig = IS_DEV ? networksConfigDev : networksConfigProd;
