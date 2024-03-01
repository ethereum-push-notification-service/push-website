"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[93350],{860674:e=>{e.exports=JSON.parse('{"title":"The Developer guide to enabling Opt-into EPNS channels via the front-end sdk.","description":"The Developer guide to enabling Opt-into EPNS channels via the front-end sdk.","frontMatter":{"slug":"the-developer-guide-to-enabling","title":"The Developer guide to enabling Opt-into EPNS channels via the front-end sdk.","description":"The Developer guide to enabling Opt-into EPNS channels via the front-end sdk.","authors":["push"],"image":"./cover-image.webp","text":"Your users subscribe to your channel via our dApp, want to move this functionality to your dApp? Here\u2019s a definitive guide on how to do it.","tags":["Ethereum","Defi","Epnsproject","Newsletter","Blockchain"]},"content":{"id":"the-developer-guide-to-enabling","metadata":{"permalink":"/blog/the-developer-guide-to-enabling","source":"@site/blog/2022-03-21-the-developer-guide-to-enabling/index.md","title":"The Developer guide to enabling Opt-into EPNS channels via the front-end sdk.","description":"The Developer guide to enabling Opt-into EPNS channels via the front-end sdk.","date":"2022-03-21T00:00:00.000Z","formattedDate":"March 21, 2022","tags":[{"label":"Ethereum","permalink":"/blog/tags/ethereum"},{"label":"Defi","permalink":"/blog/tags/defi"},{"label":"Epnsproject","permalink":"/blog/tags/epnsproject"},{"label":"Newsletter","permalink":"/blog/tags/newsletter"},{"label":"Blockchain","permalink":"/blog/tags/blockchain"}],"readingTime":2.71,"hasTruncateMarker":true,"authors":[{"name":"Push Protocol","url":"https://twitter.com/pushprotocol","imageURL":"/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"the-developer-guide-to-enabling","title":"The Developer guide to enabling Opt-into EPNS channels via the front-end sdk.","description":"The Developer guide to enabling Opt-into EPNS channels via the front-end sdk.","authors":["push"],"image":"./cover-image.webp","text":"Your users subscribe to your channel via our dApp, want to move this functionality to your dApp? Here\u2019s a definitive guide on how to do it.","tags":["Ethereum","Defi","Epnsproject","Newsletter","Blockchain"]},"unlisted":false,"prevItem":{"title":"EPNS at ETHDenver 2022: A Throwback","permalink":"/blog/epns-at-ethdenver-2022-a-throwback"},"nextItem":{"title":"EPNS Collaborates With Float Capital to Bring Push Notifications to Magic Internet Assets","permalink":"/blog/epns-collaborates-with-float-capital"}},"content":"import { ImageText } from \'@site/src/css/SharedStyling\';\\n\\n![Cover image of The Developer guide to enabling Opt-into EPNS channels via the front-end sdk.](./cover-image.webp)\\n\\n\x3c!--truncate--\x3e\\n\\nEPNS is an open-source, decentralized notification protocol. The protocol went live on [Ethereum Mainnet on Jan 11th](https://medium.com/ethereum-push-notification-service/the-epns-mainnet-is-here-470faec0c01) and it now has 19 official channels by major projects in Web3 including ENS, MakerDAO, Coindesk and dYdX.\\n\\nAny service, protocol, or individual who wants to include the functionality to include notifications in their dApp could follow this guide. **In this post, we\u2019ve made it easy to learn how to get started.**\\n\\nEPNS Integration\\n================\\n\\nThe initial step for EPNS integration is **channel creation**. Here is the [**step-by-step guide on how to create a channel**](https://medium.com/ethereum-push-notification-service/getting-started-with-epns-ca2dd7f43329).\\n\\nOnce the channel is created, the channel owner could start sending notifications from the dApp and receive notifications on all of the EPNS platforms \u2014 dApp, Android App, iOS App, Browser Extension, and the users would have to subscribe on our dApp, but after this integration, you would be able to perform that very functionality on your dApp.\\n\\nIntegrating with the Frontend SDK\\n=================================\\n\\nFront-end SDK allows developers & protocols to integrate the notifications to their dApp or mobile app, we would specifically be focusing on the channel module of it.\\n\\nThis module comprises of three sub-modules majorly:\\n\\n*   Opt in and out to a channel from the SDK\\n*   Fetching the details of a channel by using it\u2019s address as an identifier.\\n*   Find out if a user is subscribed to a channel.\\n\\nHere is how you can integrate your React Frontend Dapp with EPNS Decentralized notification service:\\n\\n**Step 1:** Install the npm package\\n\\n```\\nnpm install @epnsproject/frontend-sdk\\n```\\n\\nSubscribing to the channel\\n--------------------------\\n\\n**Step 2:** Import the channels module from the package.\\n\\n```\\nimport { channels } from \\"@epnsproject/frontend-sdk-staging\\";\\n```\\n\\n**Step 3:** Define the required variables to make a request to fetch some notifications!\\n\\n```\\nconst { library, active, account, chainId } = useWeb3React();const signer = library.getSigner(account); //this could also be any entity which has a method \\\\`\\\\_signTypedData(domain, type, message)\\\\` which is capable of signing messages using eip 712.const channelAddress = \\"0x94c3016ef3e503774630fC71F59B8Da9f7D470B7\\"; //the address of the channel we want to op-in to or opt-out fromconst chainId = 1; //this is for the ethereum network, and can be any of out supported chains.const userAddress = \\"0x57c1D4dbFBc9F8cB77709493cc43eaA3CD505432\\";\\n```\\n\\nit is worth noting that the \\\\*signer\\\\* variable could be gotten through other means, for more information on the signer object, please refer to [this article.](https://docs.ethers.io/v5/api/signer/#Signer)\\n\\n**Step 4:** Opt in-to or out-of the channel!\\n\\n```\\nconst epnsSubscribe = () => {  \\n     await channels.optIn(  \\n         [signer](https://docs.ethers.io/v5/api/signer/),  \\n         channelAddress,  \\n         chainId,  \\n         userAddress,  \\n         {  \\n            onSuccess: () => \\"so something\\"  // do something after success  \\n         }  \\n    )}  \\nconst epnsUnSubscribe = () => {  \\n     await channels.optOut(  \\n         [signer](https://docs.ethers.io/v5/api/signer/),  \\n         channelAddress,  \\n         chainId,  \\n         userAddress,  \\n         {  \\n            onSuccess: () => \\"do something\\"  // do something after success  \\n         }  \\n    )}\\n```\\n\\nStep 5:\\n-------\\n\\nCheck if the user is subscribed to the current channel, in order to know if to subscribe to the user or unsubscribe them.\\n\\n```\\nconst \\\\[isSubscribed, setIsSubscribed\\\\] = useState(false);  \\nchannels.isUserSubscribed(userAddress, channelAddress)  \\n.then((res) => {  \\n      setIsSubscribed(res);  \\n});\\n```\\n\\nPutting it all together\\n-----------------------\\n\\n**Step 6:** Finally, we proceed to combine all the above into a coherent code.\\n\\n```\\nimport { useEffect, useState } from \\"react\\";  \\nimport { useWeb3React } from \\"[@web3](http://twitter.com/web3)\\\\-react/core\\";  \\nimport { channels } from \\"[@epnsproject/frontend-sdk-staging](http://twitter.com/epnsproject/frontend-sdk-staging)\\";  \\nimport ConnectButton from \\"./components/connect\\";  \\nimport \\"./App.scss\\";const CHANNEL\\\\_ADDRESS = \\"0x94c3016ef3e503774630fC71F59B8Da9f7D470B7\\";function App() {  \\n  const { library, active, account, chainId } = useWeb3React();// create state components to fetch all the notifications.  \\n  const \\\\[isSubscribed, setIsSubscribed\\\\] = useState(false);// channel details  \\n  const \\\\[channel, setChannel\\\\] = useState(null);  \\n  // load channel details on start  \\n  useEffect(() => {  \\n    if (!account) return;  \\n    // on page load, fetch channel details  \\n    channels.getChannelByAddress(CHANNEL\\\\_ADDRESS).then((data) => {  \\n      setChannel(data);  \\n    });  \\n    // fetch if user is subscribed to channel  \\n    channels.isUserSubscribed(account, CHANNEL\\\\_ADDRESS).then((res) => {  \\n      console.log(res);  \\n      setIsSubscribed(res);  \\n    });  \\n  }, \\\\[account\\\\]);const epnsSubscribe = () => {  \\n     await channels.optIn(  \\n         [signer](https://docs.ethers.io/v5/api/signer/),  \\n         channelAddress,  \\n         chainId,  \\n         userAddress,  \\n         {  \\n            onSuccess: () => \\"so something\\"  // do something after success  \\n         }  \\n    )}  \\nconst epnsUnSubscribe = () => {  \\n     await channels.optOut(  \\n         [signer](https://docs.ethers.io/v5/api/signer/),  \\n         channelAddress,  \\n         chainId,  \\n         userAddress,  \\n         {  \\n            onSuccess: () => \\"do something\\"  // do something after success  \\n         }  \\n    )}return (  \\n    <div className=\\"App\\">  \\n      {/\\\\* define the header \\\\*/}  \\n      <h2 className=\\"App\\\\_\\\\_header\\">  \\n        <span> EPNS Playground </span>  \\n        <ConnectButton />  \\n      </h2>  \\n      {/\\\\* define the header \\\\*/}{active ? (  \\n        <>  \\n          {/\\\\* section for channels \\\\*/}  \\n          {channel && (  \\n            <div>  \\n              <h3>Sample clear  \\n                code Channel</h3>  \\n              <div className=\\"sample\\\\_\\\\_channel\\">  \\n                <div>  \\n                  <img src={channel.icon} className=\\"channel\\\\_\\\\_image\\" />  \\n                  <h2>{channel.name}</h2>  \\n                </div>  \\n                <div  \\n                  onClick={() => {  \\n                    isSubscribed  \\n                      ? epnsUnSubscribe()  \\n                      : epnsSubscribe()  \\n                  }}  \\n                  className=\\"subscribebutton\\"  \\n                >  \\n                  {isSubscribed ? \\"unsubscribe\\" : \\"subscribe\\"}  \\n                </div>  \\n              </div>  \\n            </div>  \\n          )}  \\n          {/\\\\* section for channels \\\\*/}</>  \\n      ) : (  \\n        <p>Please connect to your wallet on the kovan test network to proceed</p>  \\n      )}  \\n    </div>  \\n  );  \\n}export default App;\\n```\\n\\nLink to GitHub code with a working example\\n==========================================\\n\\n[https://github.com/ethereum-push-notification-service/epns-opt-demo](https://github.com/ethereum-push-notification-service/epns-opt-demo)\\n\\nMainnet URLs\\n============\\n\\n**EPNS dapp** -[https://app.epns.io/](https://app.epns.io/)\\n\\n**Front-end SDK** \u2014 [https://www.npmjs.com/package/@epnsproject/frontend-sdk](https://www.npmjs.com/package/@epnsproject/frontend-sdk)\\n\\nTestnet URLs\\n============\\n\\n**EPNS Staging dapp** -[https://staging-app.epns.io/](https://staging-app.epns.io/)\\n\\n**Front-end SDK Staging** -[https://www.npmjs.com/package/@epnsproject/frontend-sdk-staging](https://www.npmjs.com/package/@epnsproject/frontend-sdk-staging)\\n\\nFollow us to stay up to date: [Twitter](https://twitter.com/epnsproject), [Discord](https://discord.gg/YVPB99F9W5), [Telegram](https://t.me/epnsproject)."}}')}}]);