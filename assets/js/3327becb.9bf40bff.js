"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[34616],{226899:e=>{e.exports=JSON.parse('{"title":"Staking & Migration Guide for PushV2 Rewards Program\ud83d\udcdc","description":"Cover image of Staking & Migration Guide for PushV2 Rewards Program\ud83d\udcdc","frontMatter":{"slug":"staking-and-migration-guide-for-push-v2-rewards-program","title":"Staking & Migration Guide for PushV2 Rewards Program\ud83d\udcdc","authors":["push"],"image":"./cover-image.webp","text":"We recently released an article extensively discussing the details of our new staking programs of the Push V2 Rewards Program including\u2026","tags":["Push Protocol","Web3","Yield Farming","Liquidity Mining","Liquidity Pool"]},"content":{"id":"staking-and-migration-guide-for-push-v2-rewards-program","metadata":{"permalink":"/blog/staking-and-migration-guide-for-push-v2-rewards-program","source":"@site/blog/2023-08-03-staking-and-migration/index.md","title":"Staking & Migration Guide for PushV2 Rewards Program\ud83d\udcdc","description":"Cover image of Staking & Migration Guide for PushV2 Rewards Program\ud83d\udcdc","date":"2023-08-03T00:00:00.000Z","formattedDate":"August 3, 2023","tags":[{"label":"Push Protocol","permalink":"/blog/tags/push-protocol"},{"label":"Web3","permalink":"/blog/tags/web-3"},{"label":"Yield Farming","permalink":"/blog/tags/yield-farming"},{"label":"Liquidity Mining","permalink":"/blog/tags/liquidity-mining"},{"label":"Liquidity Pool","permalink":"/blog/tags/liquidity-pool"}],"readingTime":4.906666666666666,"hasTruncateMarker":true,"authors":[{"name":"Push Protocol","url":"https://twitter.com/pushprotocol","imageURL":"/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"staking-and-migration-guide-for-push-v2-rewards-program","title":"Staking & Migration Guide for PushV2 Rewards Program\ud83d\udcdc","authors":["push"],"image":"./cover-image.webp","text":"We recently released an article extensively discussing the details of our new staking programs of the Push V2 Rewards Program including\u2026","tags":["Push Protocol","Web3","Yield Farming","Liquidity Mining","Liquidity Pool"]},"unlisted":false,"prevItem":{"title":"July Monthly Recap\u2728","permalink":"/blog/july-monthly-recap"},"nextItem":{"title":"New Push Yield Farming Rewards: Full Details\ud83e\ude99","permalink":"/blog/new-push-yield-farming-rewards-full-details"}},"content":"import { ImageText, VideoContainer } from \'@site/src/css/SharedStyling\';\\n\\n![Cover image of Staking & Migration Guide for PushV2 Rewards Program\ud83d\udcdc](./cover-image.webp)\\n\\n\x3c!--truncate--\x3e\\n\\n<i>\\n    A walkthrough on how to stake, harvest, and migrate your $PUSH tokens.\\n</i>\\n\\nWe recently released an [article](https://push-protocol.medium.com/new-push-yield-farming-rewards-full-details-4a9ff473226d) extensively discussing the details of our new staking programs of the Push V2 Rewards Program including\u2026\\n\\n\\n1. <b>UNI-V2 LP Token Staking</b>: Similar to v1 incentive program, this procedure allows users to stake their UNI-V2 LP tokens in our staking contract and earn $PUSH tokens as a reward.\\n2. <b>Push Fee Pool Staking</b>: The second procedure is the new staking feature of the Push Core V2 smart contract that allows users to directly stake in the core contract itself and earn rewards in $PUSH Tokens generated from the Fee Pool.\\n\\nIn this article, we will now walk you through the specific steps for both the UNI-V2 LP pool and the Push Fee Staking pool:\\n\\n- <i>How to Stake and Unstake Tokens</i>\\n- <i>How to Harvest your rewards</i>\\n- How to Migrate your tokens (from the Old Staking pools to the New V2 Rewards Program, with just one click)\\n\\nFor each of these steps, we will first talk about the \ud83d\udd34 <b>Push Fee Staking Pool</b> and then the \ud83d\udfe3 <b>UNI-V2 LP Token Staking Pool</b>\\n\\n\\n## How to Stake & Unstake Tokens\\n### \ud83d\udd34 PUSH Fee Staking Pool\\n### Staking $PUSH Tokens\\nPush Fee Staking Pool allows you to stake your PUSH tokens directly in the [Push Core contract](https://etherscan.io/address/0x66329Fdd4042928BfCAB60b179e1538D56eeeeeE) itself.\\n\\n<VideoContainer>\\n<iframe width=\\"100%\\" height=\\"100%\\" style={{ borderRadius: \\"32px\\" }} src=\\"https://www.youtube.com/embed/eRm-tp6SLVg\\" title=\\"Push V2 Fee Staking Pool Tutorial | $PUSH\\" frameborder=\\"0\\" allow=\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\\" allowfullscreen></iframe>\\n</VideoContainer>\\n\\nFollow the simple steps below to Stake to Push Fee Staking Pool:\\n\\n1. Go to Yield Farming v2 Page on PUSH Dapp \ud83d\udc49 https://app.push.org/yieldv2\\n2. Go to the left-hand part of the UI that displays the <b>PUSH Fee Staking Pool</b>.\\n3. Click on the <b>Stake PUSH</b> button\\n4. Once you click on stake, you will be prompted to enter the PUSH token amount you wish to stake. \ud83d\udc47\\n\\n![Prompt to enter the PUSH token amount Image](./staking-pool.webp)\\n\\n5. Then, simply click on <b>Approve PUSH</b> button to approve the transfer of your tokens.\\n\\n6. Once completed, you should have the option to click on the <b>Deposit</b> button right away.\\n\\n7. After successful execution of your transaction, you should see the right staked amount in the UI.\\n\\n![Right staked amount in the UI Image](./staking-pool2.webp)\\n\\n### Unstaking $PUSH Tokens\\n1. Simply click on the <b>Unstake PUSH</b> button to unstake from the staking pool.\\n2. After successful execution of your transaction, your tokens should be unstaked from the contract and transferred back to your wallet.\\n\\n<b>Important considerations for the unstaking procedure in Push Fee Staking Pool:</b>\\n\\n- The pool <b>doesn\u2019t impose any lock-in period</b>. This means holders are free to stake or un-stake whenever they wish.\\n- While no lock-in period is imposed, <b>there is a delay period of at least one epoch before a user can withdraw or harvest</b>. This means that any stake (within the current epoch) will require the user to wait T+1 epoch before they can claim rewards or withdraw their harvest. 1 epoch is 21 days long.\\nUnstaking tokens in this pool will automatically harvest and transfer any pending reward tokens to your wallet as well.\\n\ud83d\udfe3 UNI-V2 LP Staking Pool\\nThe UNI-V2 LP staking pool allows you to stake your LP tokens and earn yields for the same.\\n\\n<blockquote>\\n<i>\\n    <b>Note:</b> In order to participate in this pool, providing liquidity to the PUSH/ETH Uniswap pool is the first step. To do that, simply:\\n</i>\\n</blockquote>\\n\\n<VideoContainer>\\n<iframe width=\\"100%\\" height=\\"100%\\" style={{ borderRadius: \\"32px\\" }} src=\\"https://www.youtube.com/embed/lqMuOlOGP0s\\" title=\\"Push Uniswap V2 LP Staking Pool | $PUSH\\" frameborder=\\"0\\" allow=\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\\" allowfullscreen></iframe>\\n</VideoContainer>\\n\\n1. Go to the [PUSH/ETH V2 pool on Uniswap](https://app.uniswap.org/#/add/v2/ETH/0xf418588522d5dd018b425E472991E52EBBeEEEEE)  (Remember to navigate to Uniswap V2 pool and not V3 pool).\\n2. Add liquidity into the pool with both $PUSH and $ETH.\\n3. Once added, you should receive UNI-V2 LP tokens in your wallet.\\n4. You are now ready to stake to these LP tokens into for Push V2 reward program.\\n### Staking UNI-V2 LP tokens\\n1. Go to Yield Farming v2 Page on PUSH Dapp \ud83d\udc49 https://app.push.org/yieldv2\\n2. Go to the right-hand part of the UI that displays <b>Uniswap v2 LP Staking Pool.</b>\\n3. Click on the <b>Stake $UNI-V2 LP Tokens</b> button\\n\\n![Click on the \'Stake $UNI-V2 LP Tokens\' button Image](./staking-pool3.webp)\\n\\n4. Enter the amount of LP tokens to be staked, and click on <b>Approve Uni-V2</b>\\n\\n5. Once approved, simply click on the <b>Deposit</b> button.\\n\\n![Click on the \'Deposit\' button](./staking-pool4.webp)\\n\\n6. After successful execution of your transaction, you should the right staked amount in the UI.\\n\\n### Unstaking UNI-V2 LP Tokens\\n1. Click on <b>Unstake UNI-V2</b> button.\\n2. This will trigger a metamask Pop-UP. Once confirmed you should simply be able to unstake your LP tokens from the pool.\\n\\n## How to Claim Rewards\\nClaiming rewards for both the pools is fairly similar.\\n\\n1. Go to the respective pool on [Push Dapp Yield Farming V2 page](https://app.push.org/yieldv2).\\n2. Click on the <b>Claim Rewards</b> button of the PUSH Fee Staking Pool or UNI-V2 Staking Pool.\\n3. Confirm the transaction and rewards will be transferred to your wallet.\\n\\nHowever, there are a couple of considerations to keep in mind related when harvesting rewards.\\n\\n### \ud83d\udd34 Harvesting in PUSH Fee Staking Pool\\nThe very first claim reward procedure for this pool shall include two transactions:\\n\\n- 1st Transaction is <b>to Set Holder Delegation for the Push Core Contract address.</b>\\n- 2nd transaction is to trigger the <b>primary harvest function of the Push core contract</b> to release the rewards.\\n\\n<b>What exactly is Setting Holder Delegation?</b>\\n\\n- The $PUSH token has a time-weightage feature within itself which allows the contract to calculate the holder weight of a $PUSH token holder based on how long he/she has been holding the token.\\n- During the harvest, the core contract is designed to be capable of updating the holder weight of the caller to the latest block.\\n- Therefore, this <b>set holder delegation</b>transaction approves the main Push Core contract to be capable of updating holder weight whenever needed.\\n- It should be noted that this permission can be revoked anytime by the user.\\n\\n<blockquote>\\n<i>\\n    <b>Note:</b> The setting holder delegation is a one-time process and only takes place during the very first instance of claiming rewards.\\n</i>\\n</blockquote>\\n\\n### \ud83d\udfe3 Harvesting in UNI-V2 LP Staking Pool\\n- The steps for harvesting in UNI-V2 LP Staking Pool are identical to that of harvesting in the PUSH Fee Staking Pool\\n- Go to the UNI-V2 LP Pool on [Push Dapp Yield Farming V2 page](https://app.push.org/yieldv2).\\n- Click on the Claim Rewards button of the UNI-V2 Staking Pool.\\n- Confirm the transaction and rewards will be transferred to your wallet.\\n\\n## How to migrate from the old staking pool to the new pool?\\nIf you\u2019re an early holder of $PUSH, chances are you\u2019ve staked in the first rewards program.\\n\\nIf that\u2019s the case for you, the migration feature is specifically designed to provide you with a smooth and easy procedure to shift from the old staking pool to the new v2 staking pool.\\n\\n<VideoContainer>\\n<iframe width=\\"100%\\" height=\\"100%\\" style={{ borderRadius: \\"32px\\" }} src=\\"https://www.youtube.com/embed/a3QDLsT0VRM\\" title=\\"Push Migration Guide | $PUSH\\" frameborder=\\"0\\" allow=\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\\" allowfullscreen></iframe>\\n</VideoContainer>\\n\\nMigration from old to new pools requires 3 simple transactions:\\n\\n1. <b>Unstaking from old contracts:</b> This transaction withdraws your staked tokens from the old contracts.\\n2. <b>Approval of tokens:</b> This ensures you approve the new staking pool contracts.\\n3. <b>Staking into new pool:</b> The final transaction ensures a successful deposit of your tokens to the new staking pools.\\n\\nIn order to perform the migration procedure, please follow the steps below:\\n\\n1. Go to Yield Farming v2 Page on PUSH Dapp \ud83d\udc49 https://app.push.org/yieldv2\\n2. Go to the <b>Yield Farming V1 (Deprecated)</b> section.\\n\\n\\n![Yield Farming V1 (Deprecated) Image](./staking-pool5.webp)\\n\\n### \ud83d\udd34 For Push Staking Pool Migration\\n1. Simply go to the Push Staking Pool section\\n2. Click on <b>Migrate to PUSH Fee Pool</b> button\\n3. After the above-mentioned 3 transactions, your staked tokens will be migrated from the previous $PUSH Token staking contract to the new $PUSH Fee Staking Pool <b><i>(which essentially is the main Push Core contract itself).</i></b>\\n### \ud83d\udfe3 For UNI V2 Staking Pool\\n1. The procedure remains the same as mentioned above.\\n2. However, in this migration, your tokens will be staked in the new UNI-V2 Staking Pool.\\n\\n<blockquote>\\n<i>\\n<b>Note:</b> Unstaking tokens from old staking contracts doesn\u2019t ensure the claiming of pending rewards. Make sure you claim pending rewards (if any) from old staking pools after the migration is completed.\\n\\nIn order to claim any available pending reward from your previous pools, you can click on the Claim Rewards button of that respective pool in the Yield Farming V1 section.\\n</i>\\n</blockquote>"}}')}}]);