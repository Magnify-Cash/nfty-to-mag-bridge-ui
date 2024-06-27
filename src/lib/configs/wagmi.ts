import { createConfig, http } from "wagmi";
import { bscTestnet, polygonAmoy, sepolia } from "wagmi/chains";
import { injected, walletConnect } from "wagmi/connectors";

const devChains = [sepolia, polygonAmoy, bscTestnet] as const;
const devTransports = {
  [sepolia.id]: http(),
  [polygonAmoy.id]: http(),
  [bscTestnet.id]: http(),
};

export const chains = [...devChains] as const;
const transports = { ...devTransports };

export const wagmiConfig = createConfig({
  multiInjectedProviderDiscovery: false,
  chains,
  connectors: [
    injected(),
    walletConnect({
      projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID ?? "",
    }),
  ],
  transports,
});
