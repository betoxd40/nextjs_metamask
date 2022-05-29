import React, { FunctionComponent, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/theme';
import { ThirdwebWeb3Provider } from '@3rdweb/hooks';
import { WEB3_SUPPORTED_CHAINS } from '@/types';

type Props = {
  children: React.ReactNode;
};

declare module '@3rdweb/hooks' {
  interface ThirdwebWeb3ProviderProps {
    children?: ReactNode;
  }
}

export const GlobalProviders: FunctionComponent<Props> = ({ children }) => {
  // List of Networks supported
  const supportedChainIds = [
    WEB3_SUPPORTED_CHAINS.MAINNET,
    WEB3_SUPPORTED_CHAINS.RINKEYBY,
    WEB3_SUPPORTED_CHAINS.POLYGON_MAINNET
  ];
  const connectors = {
    injected: {}
  };

  return (
    <ThirdwebWeb3Provider supportedChainIds={supportedChainIds} connectors={connectors}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThirdwebWeb3Provider>
  );
};
