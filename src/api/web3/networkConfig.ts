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
  backendUrl?: string;
  contracts: { bridge: IContract; NFTYToken: IContract, Migrator?: IContract };
}

const networksConfigDev: Record<number, INetworkConfig> = {
  [bscTestnet.id]: {
    name: "bscTestnet",
    backendUrl: "https://bsc-be.magnify.blaize.technology",
    contracts: {
      bridge: { address: "0x7aB884116fa50A80fDD585c0CAd8FbD2271635D0" },
      NFTYToken: { address: "0xe3D2c52CA3C9C32Fd0E3c897afaDbB414bc207Df" },
    },
  },
  [polygonAmoy.id]: {
    name: "polygonAmoy",
    backendUrl: "https://polygon-be.magnify.blaize.technology",
    contracts: {
      bridge: { address: "0xC125Db6Aa3aB446b621E1CaB77Deea6B6CC2De0a" },
      NFTYToken: { address: "0xbDA91415bC7e77b461116778F24Ac2D91d25A298" },
    },
  },
  [sepolia.id]: {
    name: "sepolia",
    contracts: {
      bridge: { address: "0xf98f635214a14610516423382D9bF562C5386512" },
      Migrator: { address: "0xb8E75E47fE7c195170747CC2Aa3CB862AF1c72b9" },
      NFTYToken: { address: "0x56D2a6fC1aECf6C14B98f53fAa095d962615C2f1" },
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
    contracts: {
      bridge: { address: "0xf98f635214a14610516423382D9bF562C5386512" },
      NFTYToken: { address: "0x6c28de594318C8AB116Ad5865A7fc4b75a8e1dfe" },
      Migrator: { address: "0xb8E75E47fE7c195170747CC2Aa3CB862AF1c72b9" },
    },
  },
};

export const networksConfig = IS_DEV ? networksConfigDev : networksConfigProd;
