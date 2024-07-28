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
      bridge: { address: "0xA0b09Ed92f434e8C8CF178f3cdA837bBd4b96C55" },
      NFTYToken: { address: "0xe3D2c52CA3C9C32Fd0E3c897afaDbB414bc207Df" },
    },
  },
  [polygonAmoy.id]: {
    name: "polygonAmoy",
    backendUrl: "https://polygon-be.magnify.blaize.technology",
    contracts: {
      bridge: { address: "0x23BA69D704929635225d2d78921E779E54aACF72" },
      NFTYToken: { address: "0xbDA91415bC7e77b461116778F24Ac2D91d25A298" },
    },
  },
  [sepolia.id]: {
    name: "sepolia",
    contracts: {
      bridge: { address: "0x83362A52cF7e3221A73763e508623be7f74f4eA3" },
      Migrator: { address: "0xb8E75E47fE7c195170747CC2Aa3CB862AF1c72b9" },
      NFTYToken: { address: "0x56D2a6fC1aECf6C14B98f53fAa095d962615C2f1" },
    },
  },
};

const networksConfigProd: Record<number, INetworkConfig> = {
  [bsc.id]: {
    name: "bsc",
    backendUrl: "https://mag-bridge-backend-bsc-g6d8j.ondigitalocean.app/nfty-to-mag-backend-bsc",
    contracts: {
      bridge: { address: "0x7F7c5328621965608d0a6a95a6C33461Ef3FDb24" },
      NFTYToken: { address: "0x5774B2fc3e91aF89f89141EacF76545e74265982" },
    },
  },
  [polygon.id]: {
    name: "polygon",
    backendUrl: "https://mag-bridge-backend-bsc-g6d8j.ondigitalocean.app/nfty-to-mag-backend-polygon",
    contracts: {
      bridge: { address: "0x7F7c5328621965608d0a6a95a6C33461Ef3FDb24" },
      NFTYToken: { address: "0xCC081220542a60A8Ea7963C4F53D522b503272c1" },
    },
  },
  [mainnet.id]: {
    name: "mainnet",
    contracts: {
      bridge: { address: "0xA60F87ff29C03b6500f22dE535B57918EFa8afe1" },
      NFTYToken: { address: "0xE1D7C7a4596B038CEd2A84bF65B8647271C53208" },
      Migrator: { address: "0xb78A3a7e54c59204E36658C0fCdf7CC2fBE830eC" },
    },
  },
};

export const networksConfig = IS_DEV ? networksConfigDev : networksConfigProd;
