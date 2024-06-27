export interface IChainAdditionalConfig {
  icon: string;
  amount: number;
}

export type TXStatuses = "SENT" | "COMPLETE" | "BLOCK" | "REFUND";

export interface IUserInfoResponse {
  _id: string;
  createdAt: string;
  fromChain: string;
  toChain: string;
  nonce: string;
  fromUser: string;
  toUser: string;
  tokenFromChain: string;
  tokenOtherChain: string;
  amount: string;
  status: TXStatuses;
  sendTxHash: string;
  createdOnBlock: number;
  createdTimestamp: number;
  __v: number;
  updatedTimestamp: number;
  withdrawTxHash: string;
}
