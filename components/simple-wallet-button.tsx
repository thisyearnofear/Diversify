'use client';

import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { injected } from 'wagmi/connectors';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface SimpleWalletButtonProps {
  children?: (props: {
    show: () => void;
    isConnected: boolean;
    address?: string;
    ensName?: string;
  }) => React.ReactNode;
}

export function SimpleWalletButton({ children }: SimpleWalletButtonProps) {
  const { address, isConnected } = useAccount();
  const { connect, isPending } = useConnect();
  const { disconnect } = useDisconnect();
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnect = async () => {
    if (isConnecting || isPending) return;
    
    setIsConnecting(true);
    try {
      await connect({ connector: injected() });
    } catch (error) {
      console.error('Connection failed:', error);
    } finally {
      setIsConnecting(false);
    }
  };

  const handleDisconnect = () => {
    disconnect();
  };

  // If children render prop is provided, use it
  if (children) {
    return (
      <>
        {children({
          show: handleConnect,
          isConnected,
          address,
          ensName: undefined, // We don't have ENS resolution in this simple version
        })}
      </>
    );
  }

  // Default button rendering
  if (isConnected && address) {
    return (
      <Button onClick={handleDisconnect} variant="outline">
        {`${address.slice(0, 6)}...${address.slice(-4)}`}
      </Button>
    );
  }

  return (
    <Button 
      onClick={handleConnect} 
      disabled={isConnecting || isPending}
      className="bg-primary text-primary-foreground hover:bg-primary/90"
    >
      {isConnecting || isPending ? 'Connecting...' : 'Connect Wallet'}
    </Button>
  );
}