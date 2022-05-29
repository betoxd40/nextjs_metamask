export interface GetEstimatedBlockCountdownTimeAPI {
  data: {
    status: string;
    message: string;
    result: {
      CurrentBlock: string;
      CountdownBlock: string;
      RemainingBlock: string;
      EstimateTimeInSec: string;
    };
  };
}
