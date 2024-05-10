"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[75052],{665786:e=>{e.exports=JSON.parse('{"title":"FAQ \u2014 Ethereum Push Notification Service (EPNS)","description":"FAQ \u2014 Ethereum Push Notification Service (EPNS)","frontMatter":{"slug":"faq\u2014ethereum-push-notification-service","title":"FAQ \u2014 Ethereum Push Notification Service (EPNS)","description":"FAQ \u2014 Ethereum Push Notification Service (EPNS)","authors":["push"],"image":"./cover-image.webp","text":"Ethereum Push Notification Service (EPNS) is a platform-agnostic, decentralized notification protocol for Ethereum-based Web 3.0 applications. It enables users to receive notifications for on-chain or off-chain activity.","tags":["FAQ","Ethereum","Blockchain","Announcements"]},"content":{"id":"faq\u2014ethereum-push-notification-service","metadata":{"permalink":"/blog/faq\u2014ethereum-push-notification-service","source":"@site/blog/2021-05-20-faq\u2014ethereum-push-notification-service/index.md","title":"FAQ \u2014 Ethereum Push Notification Service (EPNS)","description":"FAQ \u2014 Ethereum Push Notification Service (EPNS)","date":"2021-05-20T00:00:00.000Z","formattedDate":"May 20, 2021","tags":[{"label":"FAQ","permalink":"/blog/tags/faq"},{"label":"Ethereum","permalink":"/blog/tags/ethereum"},{"label":"Blockchain","permalink":"/blog/tags/blockchain"},{"label":"Announcements","permalink":"/blog/tags/announcements"}],"readingTime":5.183333333333334,"hasTruncateMarker":true,"authors":[{"name":"Push Protocol","url":"https://twitter.com/pushprotocol","imageURL":"/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"faq\u2014ethereum-push-notification-service","title":"FAQ \u2014 Ethereum Push Notification Service (EPNS)","description":"FAQ \u2014 Ethereum Push Notification Service (EPNS)","authors":["push"],"image":"./cover-image.webp","text":"Ethereum Push Notification Service (EPNS) is a platform-agnostic, decentralized notification protocol for Ethereum-based Web 3.0 applications. It enables users to receive notifications for on-chain or off-chain activity.","tags":["FAQ","Ethereum","Blockchain","Announcements"]},"unlisted":false,"prevItem":{"title":"EPNS Community AMA Recap","permalink":"/blog/epns-community-ama-recap"},"nextItem":{"title":"Meet Frens of EPNS \ud83d\udc96\ud83d\udc96\ud83d\udc96","permalink":"/blog/meet-frens-of-epns"}},"content":"import { ImageText } from \'@site/src/css/SharedStyling\';\\n\\n![Cover Image of FAQ \u2014 Ethereum Push Notification Service (EPNS)](./cover-image.webp)\\n\\n\x3c!--truncate--\x3e\\n\\n**Q. What does EPNS do?**\\n-------------------------\\n\\nEthereum Push Notification Service (EPNS) is a platform-agnostic, decentralized notification protocol for Ethereum-based Web 3.0 applications. It enables users to receive notifications for on-chain or off-chain activity. EPNS allows Web3 actors (users, dapps, service providers) to create notifications that are triggered if and when a smart contract reaches certain conditions. Other Web3 participants can search, browse, and subscribe to specific notifications and more confidently interact with dapps. In doing so, EPNS combines the seamless user experience of Web 2.0 apps with the security and power of Web 3.0.\\n\\nQ. What are some of the use cases for EPNS?\\n-------------------------------------------\\n\\nWe believe almost any application in the Web3 ecosystem can benefit from notifications. Some of the highest-impact immediate opportunities are:\\n\\n**DEXes**: DEX users can be notified when the price of a token falls or rises a certain percentage. Users can also set up notifications for when their trades are executed and completed, rather than having to check back to see if trades were completed (especially during times of high network traffic). Users can also set up notifications for when gas prices go down or up to help them decide when to trade.\\n\\n**DeFi**: Lending protocol users can set up notifications to be informed when they are about to be liquidated, rather than needing to check in regularly to ensure. LP providers can also set up notifications about impermanent loss in case they wish to cut their losses short during a volatile market. If DeFi users are interacting with a particularly young or untested protocol, they could set up notifications to inform them if large amounts of funds are being moved around in ways that could signal instability within that dapp.\\n\\n**NFTs and Gaming:** Trading of NFTs or goods on markets or within games can be connected to EPNS to inform users 1) when certain goods go on sale or auction; 2) when auctions go live from crypto-artists; 3) when a bid is accepted or topped; 4) when one\u2019s own NFT (or anyone else\u2019s) sells.\\n\\n**ENS/Consumer Apps:** Apps like the Ethereum Name Service (ENS) and .Crypto can notify users when their subscriptions are about to expire, rather than expecting users to remember or check in regularly to remind themselves of upcoming dates.\\n\\n**Q. Why should I use EPNS?**\\n-----------------------------\\n\\nBecause for so long, as a Web3.0 user, you waited on Twitter or Telegram for important updates and communications from your favorite dApps. Developers suffered while sending necessary information regarding their app or product over social media, hoping for their users to see it. Of course, without certainty. Consequently, users missed out on crucial notifications, alerts, notices, and offers. EPNS solves these, plus incentivizes both senders and receivers with usage rewards.\\n\\n**Q. What are the EPNS Products?**\\n----------------------------------\\n\\nThe EPNS product suite comprises the following elements:\\n\\n1.  **EPNS Protocol:** The main goal of the EPNS Protocol is to make sure all notifications are prepared and sent in compliance with the protocol standards. This will make every notification readily available to be picked up by the PUSH Nodes in charge of dispatching.\\n2.  **PUSH Nodes:** The main goal of the PUSH Nodes is to listen to events in the EPNS protocol smart contracts and dispatch the notifications to the corresponding recipients.\\n3.  **Governance**: Governance is crucial for any decentralized protocol, and EPNS is no exception. We already have introduced liquidity mining and staking along with ROCKSTAR of EPNS NFT and PUSH rewards.\\n4.  **Alpha dApp**: Using the dApp, Subscribers can receive notifications from web browsers, while Channels can send notifications to decentralized carriers.\\n5.  **Mobile App:** The mobile app serves the crucial purpose of sending notifications from decentralized protocols to centralized ecosystems, such as Android, iOS, and so on.\\n6.  **Showrunners**: These are channels through which the EPNS Foundation sends notifications for the benefit of the community. Sending notifications about domain expiry, liquidation, and abnormal gas prices are some of the intended purposes of these channels.\\n7.  **Development SDKs and Documentation**: For developers looking to easily integrate EPNS with partners, we\u2019ll be releasing the following SDKs \u2014 Front-end SDK, Back-end SDK, PUSH Mobile SDK, EPNS Subgraph.\\n\\nLearn more about the EPNS ecosystem and compliments in our [EPNS Roadmap 2021](https://medium.com/ethereum-push-notification-service/epns-roadmap-2021-c4ededc57a12).\\n\\nQ. What are the main components of the EPNS Protocol?\\n-----------------------------------------------------\\n\\nApart from the technological framework, the EPNS protocol consists of Users, who are further divided into Subscribers and Channels.\\n\\n1.  **Service**: Any dApp / smart contract / service / etc. that wishes to send notifications.\\n2.  **Channel**: A service who is sending notifications using EPNS. To ensure their skin-in-the-game, Channels need to stake predetermined fees in pools, which are in turn used for incentivizing usage. Developers and Web3 project owners can create channels using the EPNS dApp, JS Library, or custom libraries.\\n3.  **Subscriber:** A user who subscribes to channels on EPNS for receiving notifications. EPNS adopts the opt-in model for subscriptions, meaning that channels can send notifications only to voluntary participants. Subscriptions can either be direct or indirect, and you can unsubscribe at any time.\\n4.  **Users**: Any user who is present in the protocol registry.\\n\\n**Q. What are the types of Channels on EPNS?**\\n----------------------------------------------\\n\\nChannels on EPNS can be of 3 types (in future can be more)\u2014 Open, Closed, and Mutual. An Open Channel is open to all and anyone can join. In Closed Channels, subscribers can join only on invitation by the channel. Combining these two, a Mutual Channel is such that Subscribers can send requests which the channel has to accept. Apart from these three, there are two special, automated, and opt-in channels \u2014 EPNS Channel and EPNS Alerter Channel. These send notifications to Subscribers and Channels respectively.\\n\\nQ. **How does the EPNS communication layer actually works ?**\\n-------------------------------------------------------------\\n\\nThe communication layer basically can be categorized in two segments:\\n\\n1\\\\. **Sending Notifs**: This layer comprises of smart contracts (and later p2p nodes) that acts like a middleware through which all notifs / communication from a service to their subscribers needs to flow. Having these on L1 and L2 ensures even smart contracts can send notifs out.\\n\\n2. **Receiving and dispersing Notifs:** This layer listens to our middleware smart contracts and then dispatches them forward.\\n\\nThese two segments ensures that communication is standardized, authenticated and can be listened to by any crypto wallet, mobile apps or any other infra service. Detailed read of the protocol can be found here: [https://whitepaper.epns.io](https://whitepaper.epns.io)\\n\\n**Q. How do Channels send notifications?**\\n------------------------------------------\\n\\nEPNS is designed in a way such that Channels send notifications in the form of JSON (JavaScript Object Notation) payloads. This allows for the flexible and streamlined transfer of the notification\u2019s data from a decentralized storage environment. Further, the information is transmitted and recorded on-chain, following due validation. Leveraging EPNS Infra, decentralized protocols can also send notifications to centralized environments. To send notifications, Channels have to bear a fee, payable in ETH or DAI. Apart from directly sending notifications to Subscribers, Channels can also delegate declared wallet addresses to transmit notifications on their behalf. For further details and mathematical expositions, read the [relevant sections from our White Paper](https://whitepaper.epns.io/protocol-specs-section/specifications).\\n\\n**Q. How can I activate or deactivate a Channel?**\\n--------------------------------------------------\\n\\nTo activate a Channel, you need to stake 50 DAI or higher, which adds to the staking pool used for distributing token incentives. You can also deactivate the channel by unstaking, but this involves a penalty of 20 DAI \u2014 half of it remains in the Stake Pool and the rest goes to the Fee Pool. This mechanism minimizes the risks of bad actors getting onboard.\\n\\n**Q. Can I get spammed on EPNS?**\\n---------------------------------\\n\\nIn order to avoid spam, a spam score has been set from 0\u20131. 0 means that the channel has an excellent score while 1 means the channel is unhealthy. The range adjusts based on positive actions such as a higher number of subscribers, with the passing of time while negative actions are higher than usual unsubscribers, higher than usual notifications, etc. This is guided by the protocol and at a certain range, the protocol will start throttling the notifications or even stop them until the score comes back to a healthier range.\\n\\n**Q. What are $PUSH tokens and how can I use them?**\\n----------------------------------------------------\\n\\n$PUSH is a governance token that also carries usage mining incentives and the ability to split the fee pool in the future whenever the community chooses to enable that, it\u2019s designed to incentivize all actors in the ecosystem to participate and check each other! Keeping this short but a much better version of what all things it does and how it ties to the ecosystem can be found here: [https://medium.com/ethereum-push-notification-service/push-token-economics-d7f566c29b1a](https://medium.com/ethereum-push-notification-service/push-token-economics-d7f566c29b1a)\\n\\nQ. What incentive mechanism are currently available?\\n----------------------------------------------------\\n\\nIncentives for participation both in terms of token rewards and otherwise is importance to ensure strong network effects. We already created the following incentives for governance:\\n\\n*   Introduced liquidity mining and staking on [https://incentives.epns.io](https://incentives.epns.io/)\\n*   Introduced $ROCKSTAR of EPNS NFTs and $PUSH rewards to signal gratitude to early community and to reward new community and their participation in the ecosystem. [Read more about it here](https://medium.com/ethereum-push-notification-service/the-first-nft-collection-from-epns-677e23173c95).\\n\\nQ. How can I keep up with EPNS?\\n-------------------------------\\n\\nJoin our [Telegram](https://t.me/epnsproject), follow us on [Twitter](https://twitter.com/epnsproject), and sign up for our 5 minute [weekly product updates](https://epns.substack.com/)."}}')}}]);