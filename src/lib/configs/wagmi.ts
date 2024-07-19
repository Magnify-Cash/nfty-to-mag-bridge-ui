import { createConfig, http } from "wagmi";
import {
  bsc,
  bscTestnet,
  mainnet,
  polygon,
  polygonAmoy,
  sepolia,
} from "wagmi/chains";
import { injected, walletConnect } from "wagmi/connectors";
import { IS_DEV } from "@/lib/constants";

const devChains = [sepolia, polygonAmoy, bscTestnet] as const;
const prodChains = [mainnet, polygon, bsc] as const;

const devTransports = {
  [sepolia.id]: http(),
  [polygonAmoy.id]: http("https://polygon-amoy-bor-rpc.publicnode.com/"),
  [bscTestnet.id]: http(),
};

const prodTransports = {
  [mainnet.id]: http(),
  [polygon.id]: http(),
  [bsc.id]: http(),
};


export const chains = IS_DEV ? devChains : prodChains;
const transports = IS_DEV ? devTransports : prodTransports;

export const wagmiConfig = createConfig({
  multiInjectedProviderDiscovery: false,
  chains,
  connectors: [
    injected(),
    walletConnect({
      projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID ?? "",
    }),
  ],
  // @ts-ignore
  transports,
});
