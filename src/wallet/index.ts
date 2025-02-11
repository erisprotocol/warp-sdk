import { Wallet as TerraWallet } from '@terra-money/terra.js';
import { ConnectedWalletInput, ConnectedWallet } from './connected';
import { NativeWallet } from './native';

export type WalletLike =
  | {
      connectedWallet: ConnectedWalletInput;
    }
  | TerraWallet;

export const wallet = (walletLike: WalletLike) => {
  if ('connectedWallet' in walletLike) {
    return new ConnectedWallet(walletLike.connectedWallet);
  }

  return new NativeWallet(walletLike);
};

export * from './base';
export * from './utils';
export * from './connected';
export * from './native';
