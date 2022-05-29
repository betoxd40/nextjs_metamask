# ETH Block Number App

## App Link

- https://nextjs-metamask.vercel.app/

### Did you finish everything you wanted to? If not, what would you do if you spent another hour or two working on this?

- No, there're more features / improvements to add, i would spent another hour on:
  - Error Handling FE / BE.
  - Better folder structure for components only used in one container and not shared by others
  - Refactor logic inside `/src/pages/index.tsx`, we can improve it moving the fetch logic in another layer and not in the page itself.
  - Better typing on Nextjs api routes.
  - Move env vars into their respective files (Etherscan variables as an example).
  - Is not a requirement, but the app should be responsiveness.

### If this simple site suddenly started getting 1000s of users always active, how would you optimize the backend so you aren’t making 1000s of redundant calls to Etherscan?

- I would cache the response of Etherscan, and refresh the information every `EstimateTimeInSec` time. This way, everytime frontend submit an api request to the backend, it will return cache data.