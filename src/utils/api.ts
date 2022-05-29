import axios from 'axios';

const ETHERSCAN_API_KEY = 'TS4YVXP3I33QGQ1R7TMJJG42GH4TM16TSV';
const ETHERSCAN_API_URL = 'https://api.etherscan.io/api';

const api = () =>
  axios.create({
    baseURL: ETHERSCAN_API_URL
  });

export const getEstimatedBlockCountdownTime = (blockNumber: number) => {
  return api().get(
    `?module=block&action=getblockcountdown&blockno=${blockNumber}&apikey=${ETHERSCAN_API_KEY}`
  );
};
