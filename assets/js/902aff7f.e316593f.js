"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[79580],{13483:e=>{e.exports=JSON.parse('{"title":"Introducing Push Protocol v1.5 \ud83c\udf8a","description":"Cover image of Introducing Push Protocol v1.5 \ud83c\udf8a","frontMatter":{"slug":"introducing-push-protocol-v1-5","title":"Introducing Push Protocol v1.5 \ud83c\udf8a","authors":["push"],"image":"./cover-image.webp","text":"Push Protocol is elated to announce the successful completion of the security audit of our smart contracts v1.5 with Chainsafe.","tags":["Web3","Blockchain Technology","Blockhain Development","Push Notification","Communication Tools"]},"content":{"id":"introducing-push-protocol-v1-5","metadata":{"permalink":"/blog/introducing-push-protocol-v1-5","source":"@site/blog/2022-12-13-push-protocol-v1-5/index.md","title":"Introducing Push Protocol v1.5 \ud83c\udf8a","description":"Cover image of Introducing Push Protocol v1.5 \ud83c\udf8a","date":"2022-12-13T00:00:00.000Z","formattedDate":"December 13, 2022","tags":[{"label":"Web3","permalink":"/blog/tags/web-3"},{"label":"Blockchain Technology","permalink":"/blog/tags/blockchain-technology"},{"label":"Blockhain Development","permalink":"/blog/tags/blockhain-development"},{"label":"Push Notification","permalink":"/blog/tags/push-notification"},{"label":"Communication Tools","permalink":"/blog/tags/communication-tools"}],"readingTime":4.713333333333333,"hasTruncateMarker":true,"authors":[{"name":"Push Protocol","url":"https://twitter.com/pushprotocol","imageURL":"/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"introducing-push-protocol-v1-5","title":"Introducing Push Protocol v1.5 \ud83c\udf8a","authors":["push"],"image":"./cover-image.webp","text":"Push Protocol is elated to announce the successful completion of the security audit of our smart contracts v1.5 with Chainsafe.","tags":["Web3","Blockchain Technology","Blockhain Development","Push Notification","Communication Tools"]},"unlisted":false,"prevItem":{"title":"Push and Tollan Worlds Partner to Level Up Communication With Gamers","permalink":"/blog/push-and-tollan-worlds-partner-to-level-up-communication-with-gamers"},"nextItem":{"title":"Developer DAO x Push \u2014 Enhancing UX Through Web3 Communication Tools","permalink":"/blog/developer-dao-x-push-enhancing-ux-through-web3-communication-tools"}},"content":"![Cover image of Introducing Push Protocol v1.5 \ud83c\udf8a](./cover-image.webp)\\n\\n\x3c!--truncate--\x3e\\n\\n\x3c!--customheaderpoint--\x3e\\n\\n# We\u2019re proud to announce ChainSafe has successfully completed its audit of Push Smart Contracts v1.5! Here\u2019s what to expect from the update.<br/>\\n\\nPush Protocol is elated to announce the successful completion of the [security audit of our smart contracts v1.5](https://github.com/ChainSafe/audits/blob/main/EPNS/epns-protocol-11-2022.pdf) with Chainsafe.\\n\\nThe completion of this audit was one of the most significant roadmap items for this year. We couldn\u2019t be happier to share with you all that our version 1.5 of Core and Communicator smart contracts have been successfully audited by Chainsafe.\\n\\nOur [initial plan](https://medium.com/push-protocol/epns-contract-v2-features-e7887fac72a6) was to release Push v2 all at once in 2022. However, we decided to split up the upgrade into v1.5 and v2 in order to ensure adequate time for development, testing, and auditing. The decision allowed us to drive forward with this launch of v1.5 while continuing to build v2\\n\\nVersion 1.5 of Push smart contracts includes imperative functionalities that will provide better features to users and also improve the overall utility of the PUSH token. Below, we recap six of the most critical new functionalities of the Push Core and Communicator smart contracts in v1.5.\\n\\nLet\u2019s dive in!\\n\\n<center><b>.  .  .</b></center>\\n\\n## 1) Enhancing the PUSH token utility through channel creation\\n\\nOne of the most significant modifications in v1.5 of the Push smart contract can be found in the channel creation procedure. In v1 of the core contract design, channel creators were required to deposit DAI to launch a channel. In v1.5, the protocol removes the need to deposit DAI. <b>Instead, all channels will now be created using PUSH</b>.\\n\\nAdditionally, v1.5 of Push smart contracts will also deprecate the use of AAVE, which was previously used to deposit DAI tokens and earn interests.\\n\\nAll crucial transactions of core smart contracts like <i>channel creations, channel reactivation or deactivation, and channel details modifications</i> will require PUSH with the launch of v1.5.\\n\\n## 2) Incentivizing the network with the PUSH Protocol Fee Pool\\n\\nVersion 1.5 of Push smart contracts will introduce the concept of <b>Protocol Fee Pool</b>. So, what exactly is a Protocol Fee Pool?\\n\\nThe protocol fee is a small fee amount deducted by the core smart contract for any imperative transaction like channel creation, channel reactivation, channel detail modification, and others.\\n\\nAs of now, the protocol fee is set to be equal to <b>10 PUSH tokens</b>. This value, however, can be changed by the community later using on-chain governance.\\n\\n<b>Note for Channel Creators:</b>\\n\\nIt must be noted that this is not an additional fee that is charged on top of channel creation fees. Instead, the protocol fee is simply deducted from the same amount that a channel creator chooses to stake in the protocol. For example, if you chose to stake 50 PUSH during channel creation, 10 of those 50 PUSH tokens go into Protocol Fee Pool, while the remaining goes into Channel Pool Funds that are claimable by channel owners anytime they choose to deactivate their channel.\\n\\nThe Protocol Fee Pool is going to play an imperative role in the incentivization mechanism of the core smart contracts, which will allow PUSH holders and users of the protocol to also earn incentives from the protocol in the form of PUSH.\\n\\nSince the incentives will be directly tied to the protocol\u2019s fee pool, this would mean that the more the protocol expands its boundaries, the better the incentives for users that they can claim from the contracts.\\n\\n## 3) Enabling more flexibility and customization with time-bound channels\\n\\nWith this new version of smart contracts, v1.5 will introduce another amazing feature that allows users to create time-bound channels.<b>Time-bound channels</b> are the ones that can be created for a specific duration of time and can easily be removed once the duration is over.\\n\\nDiving a bit deeper into this function: while the underlying channel creation procedure is similar, this feature allows users to pass an additional parameter \u2014 the date of expiry of the channel \u2014 to the already existing channel creation function. This is what indicates that a time-bound channel with a predefined expiration date is to be created. Once the channel\u2019s duration is over, the channel creator can destroy the channel and get the staked tokens back.\\n\\nFinally, the original creator can recreate the channel using the same address after destroying the previous time-bound channel. This was not possible till now with permanent channels.\\n\\n## 4) Allowing for upgrades and adjustments with channel edit features\\n\\nV1.5 brings with it a much-awaited feature: the ability to modify your channel details! Descriptions, logo, information, etc.\\n\\nWhile editing channels is a simple feature, there were a specific set of reasons why this wasn\u2019t made available until v1.5.\\n\\nIdeally, modifying channel details repeatedly is not a behaviour that is encouraged. Editing and modifying channel details could allow a malicious channel owner to update details and confuse subscribers, impersonating important DeFi or governance channels, for example.\\n\\nHowever, since this feature was an important one for the community and users, we included this feature in v1.5 of the smart contracts along with the crucial steps to avoid the above-mentioned scenario.\\n\\n<b>\ud83d\udcb0 Channel Edit Fees \ud83d\udcb0:</b>\\n\\nEditing channel details requires fees to be deposited. This fee shall keep increasing if the channel owner repeatedly updates their channel name, logo, description, etc.\\n\\n<b>\u26a0\ufe0f Warning Sign \u26a0\ufe0f:</b>\\n\\nWhenever a channel owner modifies any specific detail about their channel on the protocol, the channel shall appear with an additional note/warning in the dApp UI. This note will inform the rest of the users as well as subscribers about the channel\u2019s old name or description.\\n\\n## 5) Enabling notifications using The Graph subgraph\\n\\nPush has developed an in-house helper function specifically for The Graph protocol that allows you to read events from the subgraph and define notifications accordingly. Once defined, they will be stored on the Subgraph in a \u201clong string\u201d format.\\n\\nThis function shall simply allow users to pass subGraph data, in the form of bytes, which is basically a combination of the Subgraph ID and Poll Interval. It emits out the event with the msg.sender and the bytes value.\\n\\nThe function shall only be accessible by the activated channels in the protocol.\\n\\n## 6) Including of EIP-1271 in the Push Communicator contract\\n\\nAlright, now that we have talked about quite a few new features in the Push Core smart contracts, it\u2019s time to discuss the Push Communicator smart contract.\\n\\nAlthough the communicator contract doesn\u2019t have a lot of new features in this version, it has one major feature worth discussing. The v1.5 of Push Communicator smart contract implements <b>EIP-1271</b>.\\n\\n<b>What is EIP-1271?</b>\\n\\nIn very simpler terms, EIP 1271 provides a standard to verify signatures that come from the account which is a smart contract address instead of an EOA address.\\n\\nWhile externally-owned accounts (EOA) can easily sign messages with their associated private keys, smart contracts can\u2019t do the same (since they don\u2019t have any private keys). However, with the help of the EIP-1271 standard, we have an effective mechanism by which a contract can indicate whether a given signature is valid or not on its behalf. Read more about EIP-1271 [here](https://eips.ethereum.org/EIPS/eip-1271).\\n\\nSome of the crucial features of the Push Protocol communicator contract are now carried out off-chain. For example, opting in or opting out of a channel or sending notifications are now fairly easy procedures as all you need to do is sign a message using your EOA.\\n\\nHowever, now with EIP-1271 implementation in the communicator contract, it shall be fairly simple for wallets like Argent wallet, multi-sigs like Gnosis safe, or smart contracts to validate signatures on their behalf and use these features as well.\\n\\n<b>Preparing for the future with Push v1.5</b>\\n\\nA lot of development has gone into reaching this moment with Push v1.5. We\u2019re thrilled by all the support from the community. V1.5 is one of the most important upgrades the protocol has undergone. Updates to channel creation and fees create more nuanced utility for the PUSH token and ecosystem. Time-bound and editable channels deliver much-requested customization to users. The integration with The Graph and EIP-1271 demonstrate Push\u2019s commitment to best-in-class technology standards and partners. We\u2019re thrilled for the Push community to welcome v1.5 soon, while we continue to build out Push v2 and deliver that to the community in the near future!\\n\\n<b>Note:</b>\\n\\nThe Push Core and Communicator smart contracts will be upgraded to version 1.5 by January 2023. All the above-mentioned modifications and new features will come into effect post the upgrade."}}')}}]);