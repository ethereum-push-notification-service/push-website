"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[69580],{496880:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var i=t(617624),a=t(904552);const o={id:"docs-notifications-tutorial-advance-create-channel-and-notif-from-smart-contract",title:"Advance - Create channel and notif from smart contract",hide_title:!0,slug:"./advance-create-channel-and-notif-from-smart-contract",displayed_sidebar:"pushNotificationSidebar",sidebar_position:5,image:"/assets/docs/previews/docs_notifications_tutorial_advance_create_channel_and_notif_from_smart_contract--advance_-_create_channel_and_notif_from_smart_contract.png"},r="Overview",c={id:"notifications/tutorials/docs-notifications-tutorial-advance-create-channel-and-notif-from-smart-contract",title:"Advance - Create channel and notif from smart contract",description:"This tutorial explains how you can create channel and trigger notifications directly from your smart contract by importing Push core and comm smart contract and using its interface.",source:"@site/docs/notifications/04-tutorials/05-Tutorial-Smart-Contract-Channel-And-Notifications.mdx",sourceDirName:"notifications/04-tutorials",slug:"/notifications/tutorials/advance-create-channel-and-notif-from-smart-contract",permalink:"/docs/notifications/tutorials/advance-create-channel-and-notif-from-smart-contract",draft:!1,unlisted:!1,editUrl:"https://github.com/ethereum-push-notification-service/push-website/blob/main/docs/notifications/04-tutorials/05-Tutorial-Smart-Contract-Channel-And-Notifications.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"docs-notifications-tutorial-advance-create-channel-and-notif-from-smart-contract",title:"Advance - Create channel and notif from smart contract",hide_title:!0,slug:"./advance-create-channel-and-notif-from-smart-contract",displayed_sidebar:"pushNotificationSidebar",sidebar_position:5,image:"/assets/docs/previews/docs_notifications_tutorial_advance_create_channel_and_notif_from_smart_contract--advance_-_create_channel_and_notif_from_smart_contract.png"},sidebar:"pushNotificationSidebar",previous:{title:"Token transfer notification from smart contract",permalink:"/docs/notifications/tutorials/token-transfer-notification-from-smart-contract"},next:{title:"Send notification via your subgraph",permalink:"/docs/notifications/tutorials/send-notification-via-subgraph"}},s={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"What&#39;s going to happen",id:"whats-going-to-happen",level:2},{value:"Tutorial time",id:"tutorial-time",level:2},{value:"Code",id:"code",level:3}];function l(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.M)(),...n.components},{Head:t}=e;return t||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(e.p,{children:"This tutorial explains how you can create channel and trigger notifications directly from your smart contract by importing Push core and comm smart contract and using its interface."}),"\n",(0,i.jsxs)(e.p,{children:["We will be creating a simple contract that allows owner to create a channel using ",(0,i.jsx)(e.code,{children:"ipfshash"})," and send notification for this guide."]}),"\n",(0,i.jsx)(t,{children:(0,i.jsx)("title",{children:"Channel Creation and Notification from Smart Contract | Tutorial | Push Notifications | Push Documentation"})}),"\n",(0,i.jsx)(e.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Ensure you have know what is a channel (Don't need to create from dApp as we will be creating it from your smart contract) - ",(0,i.jsx)(e.a,{href:"/docs/notifications/tutorials/create-your-channel/",title:"Guide to create your channel for sending notifications from Push protocol",children:"Creating your channel"})]}),"\n",(0,i.jsxs)(e.li,{children:["Ensure you know types of notifications to know what you want to send - ",(0,i.jsx)(e.a,{href:"/docs/notifications/build/types-of-notification/",title:"Guide explaining the types of notifications",children:"Types of notifications"})]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"whats-going-to-happen",children:"What's going to happen"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"We import interface and function call to create channel function"}),"\n",(0,i.jsx)(e.li,{children:"We import interface and function call to trigger notification"}),"\n",(0,i.jsx)(e.li,{children:"Watch in \ud83d\ude32 as each payment in contract now notifies the wallet address about tokens received"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"tutorial-time",children:"Tutorial time"}),"\n",(0,i.jsx)(e.p,{children:"Along with the UI one can also use contract to contract interaction to create channel as well as send notification."}),"\n",(0,i.jsx)(e.p,{children:"Here is an example of an contract that uses Push Core to create channel and Push communicator to send notification whenever the contract receives fund."}),"\n",(0,i.jsxs)(e.p,{children:["To learn more about how to import interface and the function call of send notification, please see ",(0,i.jsx)(e.a,{href:"/docs/notifications/build/send-notification-via-smart-contract/",title:"Smart contract intergace to send notification",children:"send notification (via smart contract)"}),"."]}),"\n",(0,i.jsx)(e.h3,{id:"code",children:"Code"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-solidity",children:'//SPDX-License-Identifier: UNLICENSED\npragma solidity >0.5.0 <0.9.0;\n\n//EPNS Core Contract Interface\ninterface IEPNSCoreInterface {\n  enum ChannelType {\n    ProtocolNonInterest,\n    ProtocolPromotion,\n    InterestBearingOpen,\n    InterestBearingMutual\n  }\n\n  function createChannelWithFees(\n    ChannelType _channelType,\n    bytes calldata _identity,\n    uint256 _amount\n  ) external;\n\n\n}\n\n//EPNS Comm Contract Interface\ninterface IEPNSCommInterface {\n  function sendNotification(address _channel, address _recipient, bytes memory _identity) external;\n}\n\n//ERC20 Interface to approve sending push\ninterface IERC20Interface {\n  function approve(address spender, uint256 amount) external returns (bool);\n}\n\ncontract Fund  {\n  address public EPNS_CORE_ADDRESS =0x97D7c5f14B8fe94Ef2b4bA589379f5Ec992197dA;\n  address public EPNS_COMM_ADDRESS=0x87da9Af1899ad477C67FeA31ce89c1d2435c77DC;\n  address public PUSH_ADDRESS = 0xf418588522d5dd018b425E472991E52EBBeEEEEE;\n  address payable public owner;\n\n  constructor() {\n    owner = payable(msg.sender);\n  }\n\n  modifier onlyOwner() {\n    require(msg.sender == owner, "Only owner can perform the task");\n    _;\n  }\n\n  //To create channel\n  function createChannelWithEPNS(string memory _ipfsHash) public onlyOwner {\n    IERC20Interface(PUSH_ADDRESS).approve(EPNS_CORE_ADDRESS, 50 ether);\n    IEPNSCoreInterface(EPNS_CORE_ADDRESS).createChannelWithFees(\n      IEPNSCoreInterface.ChannelType.InterestBearingOpen,\n      bytes(string(\n      abi.encodePacked(\n        "2",\n        "+",\n        _ipfsHash\n      )\n    )),\n      50 ether\n    );\n  }\n\n  // To send notification when the contract receives fund\n  receive() external payable {\n    IEPNSCommInterface(EPNS_COMM_ADDRESS).sendNotification(address(this), address(this), bytes(string(\n      // We are passing identity here: https://docs.epns.io/developers/developer-guides/sending-notifications/advanced/notification-payload-types/identity/payload-identity-implementations\n        abi.encodePacked(\n          "0", // this is notification identity: https://docs.epns.io/developers/developer-guides/sending-notifications/advanced/notification-payload-types/identity/payload-identity-implementations\n          "+", // segregator\n          "1", // this is payload type: https://docs.epns.io/developers/developer-guides/sending-notifications/advanced/notification-payload-types/payload (1, 3 or 4) = (Broadcast, targeted or subset)\n          "+", // segregator\n          "Incoming Funds", // this is notification title\n          "+", // segregator\n          "Hooray! Someone sent you some funds!", // notification body\n        )\n    )));\n  }\n\n  function transferFundToOwner() public payable onlyOwner{\n    owner.transfer(address(this).balance);\n  }\n\n  function checkAmount() public view returns(uint){\n    return address(this).balance;\n  }\n}\n'})}),"\n",(0,i.jsx)(e.p,{children:"Note: Make sure you have transferred some $PUSH to the contract address so that later it will used while creating the channel. Some of the constants that would be used throughout the code:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-solidity",children:"  address public EPNS_CORE_ADDRESS =0x97D7c5f14B8fe94Ef2b4bA589379f5Ec992197dA;\n  address public EPNS_COMM_ADDRESS=0x87da9Af1899ad477C67FeA31ce89c1d2435c77DC;\n  address public PUSH_ADDRESS = 0xf418588522d5dd018b425E472991E52EBBeEEEEE;\n"})}),"\n",(0,i.jsxs)(e.p,{children:["The ",(0,i.jsx)(e.code,{children:"createChannelWithEPNS"})," takes in IPFS hash which contains the channel details as per protocol standard. Then the function approves Push Core Contract to spend 50 PUSH. At last, it calls the ",(0,i.jsx)(e.code,{children:"createChannelWithFees"})," of Push Core Contract to create the channel."]}),"\n",(0,i.jsx)(e.p,{children:"After the channel is created, we want to notify all the subscribers whenever funds are sent to the contract. This is where we will use the Push Communicator contract to send notification."}),"\n",(0,i.jsxs)(e.p,{children:["The ",(0,i.jsx)(e.code,{children:"receive"})," function is a special function that gets executed whenever ether is sent to the contract. So, here we are calling the ",(0,i.jsx)(e.code,{children:"sendNotification"})," of the communicator contract. The parameters include channel, recipient and the message body in the form of identity bytes."]}),"\n",(0,i.jsx)(e.p,{children:"That's it! Your channel should now send notification as soon as anyone transfer any ether to your contract \ud83c\udf89\ud83c\udf89\ud83c\udf89!"})]})}function h(n={}){const{wrapper:e}={...(0,a.M)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(l,{...n})}):l(n)}},904552:(n,e,t)=>{t.d(e,{I:()=>c,M:()=>r});var i=t(811504);const a={},o=i.createContext(a);function r(n){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:r(n.components),i.createElement(o.Provider,{value:e},n.children)}}}]);