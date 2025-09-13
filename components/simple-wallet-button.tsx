'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Button } from '@/components/ui/button';

interface RainbowWalletButtonProps {
  children?: (props: {
    show: () => void;
    isConnected: boolean;
    address?: string;
    ensName?: string;
  }) => React.ReactNode;
}

export function SimpleWalletButton({ children }: RainbowWalletButtonProps) {
  return (
    <ConnectButton.Custom>
      {({ account, chain, openConnectModal, openAccountModal, mounted }) => {
        const ready = mounted;
        const connected = ready && account && chain;

        // If children render prop is provided, use it
        if (children) {
          return (
            <>
              {children({
                show: openConnectModal,
                isConnected: !!connected,
                address: account?.address,
                ensName: account?.ensName,
              })}
            </>
          );
        }

        // Default button rendering
        if (connected) {
          return (
            <Button onClick={openAccountModal} variant="outline">
              {account.ensName || `${account.address.slice(0, 6)}...${account.address.slice(-4)}`}
            </Button>
          );
        }

        return (
          <Button 
            onClick={openConnectModal}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Connect Wallet
          </Button>
        );
      }}
    </ConnectButton.Custom>
  );
}