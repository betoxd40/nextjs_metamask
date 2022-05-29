import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useWeb3 } from '@3rdweb/hooks';
import { WEB3_WALLETs } from '@/types';
import { Counter } from '@/components';
import { GetEstimatedBlockCountdownTimeAPI } from '@/types/requests';
import { api } from '@/utils/request';

const Home: NextPage = () => {
  const { address, connectWallet, disconnectWallet, provider } = useWeb3();
  const [estimatedTime, setEstimatedTime] = useState<number | undefined>(undefined);
  const [blockNumber, setBlockNumber] = useState(0);

  useEffect(() => {
    if (provider && provider?.blockNumber > 0) fetchNetworkBlockNumberAPI();
  }, [provider, provider?.blockNumber]);

  const fetchNetworkBlockNumberAPI = async () => {
    try {
      const blockNumber = provider!.blockNumber;
      setBlockNumber(blockNumber);
      setEstimatedTime(undefined);
      const nextBlockNumber = blockNumber + 1;

      const response = await api<GetEstimatedBlockCountdownTimeAPI>(`/api/networks/${nextBlockNumber}`);
      const roundEstimatedTime = Math.round(+response.data.result.EstimateTimeInSec);
      setEstimatedTime(roundEstimatedTime);
    } catch (error) {
      // FIXME: Handle Error
    }
  };

  return (
    <Container>
      {address ? (
        <>
          <Title>ETH current block number: {blockNumber} </Title>
          <Title>
            Estimated Time next Block:{' '}
            {estimatedTime && <Counter timer={estimatedTime} onComplete={fetchNetworkBlockNumberAPI} />}
          </Title>
          <button onClick={disconnectWallet}>Disconnect Wallet</button>
        </>
      ) : (
        <>
          <button onClick={() => connectWallet(WEB3_WALLETs.METAMASK)}>Connect Wallet</button>
        </>
      )}
    </Container>
  );
};

export default Home;

const Container = styled.header`
  display: flex;
  flex-direction: column;
  padding: 20px 40px;

  button {
    margin-top: 30px;
    padding: 5px;
    border-radius: 4px;
    border: 1px solid;
    border-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.white};
    width: 200px;
  }
`;

const Title = styled.h3``;
