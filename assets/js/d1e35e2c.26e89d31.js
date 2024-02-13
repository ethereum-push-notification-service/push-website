"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[29704],{811464:e=>{e.exports=JSON.parse('{"title":"Accelerating DeFi with EPNS","description":"Accelerating DeFi with EPNS","frontMatter":{"slug":"accelerating-defi-with-epns","title":"Accelerating DeFi with EPNS","description":"Accelerating DeFi with EPNS","authors":["push"],"image":"./cover-image.webp","text":"The EPNS team is excited to announce our initial DEX offering (IDO) for the $PUSH token on Polkastarter. Soon, we will be releasing another post with information about the sale date and instructions for how to whitelist prior to the sale.","tags":["Uniswap","Ethereum","Defi","Announcements","Protocol"]},"content":{"id":"accelerating-defi-with-epns","metadata":{"permalink":"/blog/accelerating-defi-with-epns","source":"@site/blog/2021-03-29-accelerating-defi-with-epns/index.md","title":"Accelerating DeFi with EPNS","description":"Accelerating DeFi with EPNS","date":"2021-03-29T00:00:00.000Z","formattedDate":"March 29, 2021","tags":[{"label":"Uniswap","permalink":"/blog/tags/uniswap"},{"label":"Ethereum","permalink":"/blog/tags/ethereum"},{"label":"Defi","permalink":"/blog/tags/defi"},{"label":"Announcements","permalink":"/blog/tags/announcements"},{"label":"Protocol","permalink":"/blog/tags/protocol"}],"readingTime":2.6033333333333335,"hasTruncateMarker":true,"authors":[{"name":"Push Protocol","url":"https://twitter.com/pushprotocol","imageURL":"/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"accelerating-defi-with-epns","title":"Accelerating DeFi with EPNS","description":"Accelerating DeFi with EPNS","authors":["push"],"image":"./cover-image.webp","text":"The EPNS team is excited to announce our initial DEX offering (IDO) for the $PUSH token on Polkastarter. Soon, we will be releasing another post with information about the sale date and instructions for how to whitelist prior to the sale.","tags":["Uniswap","Ethereum","Defi","Announcements","Protocol"]},"unlisted":false,"prevItem":{"title":"PUSH Token Economics","permalink":"/blog/push-token-economics"},"nextItem":{"title":"EPNS Announces IDO on Polkastarter","permalink":"/blog/epns-announces-ido-on-polkastarter"}},"content":"import { ImageText } from \'@site/src/css/SharedStyling\';\\n\\n![Cover Image of Accelerating DeFi with EPNS](./cover-image.webp)\\n\\n\x3c!--truncate--\x3e\\n\\nThe DeFi ecosystem is a landscape of constant innovation. In the last year alone, we have seen an unprecedented amount of on-chain activity, prompting acute needs from users to keep on top of what is happening. EPNS is poised to accelerate the adoption of the DeFi ecosystem to meet the needs of users and dapps to keep up with rapid innovation.\\n\\nTowards this effort, we are excited to announce that we are working with Uniswap to develop the core [EPNS](http://epns.io) protocol. [Uniswap](https://uniswap.org/) is among the strongest teams and protocols in the Web3 space, and we are looking forward to working with the team to refine the EPNS protocol to create sustainable, decentralized notifications.\\n\\nIn May 2020, Uniswap launched V2 of its protocol. The launch required a significant communications and ecosystem management effort, as the successful launch of the V2 AMM required the migration of liquidity providers (LPs) from V1 to V2. The migration of LPs was successful due to Uniswap\u2019s clear information and community visibility \u2014 but it still took months to happen.\\n\\nRetrospectively, Uniswap\u2019s V2 migration could have been aided by a notification service, which would have provided both Uniswap and LPs a single source for information and communication. Instead of relying on tweets, Telegram messages, and blog posts to get in front of LPs, Uniswap would be able to identify just the V1 LP wallets of the need to migrate to V2. At the time, there existed no native, on-chain way to inform specific eligible wallets. With EPNS, Uniswap could have enabled notifications to be sent to eligible wallets to better ensure communication and engagement around the migration. We are working with the Uniswap team to build out the core EPNS protocol to deliver decentralized notifications to Web3 users. Among those possible notifications, we anticipate enabling a notification system for future versions of Uniswap.\\n\\nDuring our \u201cpilot program\u201d collaboration with Uniswap, we will build a channel for them with EPNS (see our [litepaper](https://github.com/ethereum-push-notification-service/epns-whitepaper/blob/master/Ethereum%20Push%20Notification%20Service%20Litepaper.pdf) for definitions of channels, services, and more). Anyone can subscribe to the Uniswap channel and begin receiving notifications to their wallets immediately. The notifications are customizable, and can include letting users know when their transactions have been approved, warning them about gas costs, notifying them of impermanent loss, and much more. By building this channel in collaboration with the Uniswap team, we will also have the opportunity to better understand precisely what dapps want from the EPNS protocol.\\n\\nIn the future, we anticipate a few trends that will increase the need for decentralized notifications.\\n\\n1.  **The DeFi ecosystem will continue to grow and innovate.** In the last year alone, the ecosystem has seen the rise of governance tokens and the blending of DeFi and NFTs. This sort of novelty will not only continue, it will accelerate.\\n2.  **Uniswap will continue to play a critical role in the evolution of the DeFi space.** Uniswap has been a tremendous steward among blue chip DeFi projects, and will continue to be at the forefront of innovation in DeFi. As the DeFi ecosystem continues to grow, we anticipate Uniswap to be at the forefront of much of that innovation.\\n3.  **Other protocols will follow suit and innovate on their own.** DeFi is highly collaborative, and protocols are quick to adopt the behaviors that have proven successful for other dapps. We anticipate a successful innovation pioneered by one company to be swiftly adopted by others.\\n\\nAltogether, the growing DeFi ecosystem we envision needs a way for users to separate the signal from the noise. EPNS is that solution. We are humbled and grateful to be collaborating with one of the brightest teams in the space to build precisely what the ecosystem needs: a decentralized notification service optimized to connect Web3 users and dapps.\\n\\n**_Pilot Program Updates_**  **_as of June 24th, 2021_**\\n\\nWith Uniswap we implemented EPNS decentralized notifications to let users know when a new proposal is submitted.\\n\\n![First Image of Accelerating DeFi with EPNS](./image-1.gif)\\n\\nBy making use of the Call to Action feature users will be able to go directly to the proposal with 1 click.\\n\\nIn this case we hooked directly with Uniswap\u2019s V2 contracts.\\n\\nCurrently, we are exploring implementing EPNS for more use cases available with V3 including sending notifs when the LP provider range of trading curve goes out, ie: they are unable to earn any fees.\\n\\n**About Uniswap**\\n\\nUniswap is a protocol on Ethereum for swapping ERC20 tokens without the need for buyers and sellers to create demand. The protocol facilitates automated transactions between cryptocurrency tokens on the Ethereum blockchain through the use of smart contracts.\\n\\nStay in touch! [Website](https://uniswap.org/), [Twitter](https://twitter.com/Uniswap), [Discord](https://discord.com/invite/FCfyBSbCU5)"}}')}}]);