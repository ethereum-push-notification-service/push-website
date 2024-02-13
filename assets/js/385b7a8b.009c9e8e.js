"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[11880],{694692:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var a=n(617624),s=n(904552),i=n(161268),r=n(787768);const o={id:"docs-chat-develop-all-api-calls",title:"All API Calls",hide_title:!0,slug:"./all-api-calls",displayed_sidebar:"pushChatSidebar",sidebar_position:13,image:"/assets/docs/previews/docs_chat_develop--all_api_calls.png"},l="All API Calls",c={id:"chat/build/docs-chat-develop-all-api-calls",title:"All API Calls",description:"This tutorial is designed to get you up and going by providing a step wise guide to use and explore the Push SDK.",source:"@site/docs/chat/01-build/13-All-API-Calls.mdx",sourceDirName:"chat/01-build",slug:"/chat/build/all-api-calls",permalink:"/docs/chat/build/all-api-calls",draft:!1,unlisted:!1,editUrl:"https://github.com/ethereum-push-notification-service/push-website/blob/main/docs/chat/01-build/13-All-API-Calls.mdx",tags:[],version:"current",sidebarPosition:13,frontMatter:{id:"docs-chat-develop-all-api-calls",title:"All API Calls",hide_title:!0,slug:"./all-api-calls",displayed_sidebar:"pushChatSidebar",sidebar_position:13,image:"/assets/docs/previews/docs_chat_develop--all_api_calls.png"},sidebar:"pushChatSidebar",previous:{title:"Stream Chat",permalink:"/docs/chat/build/stream-chat"},next:{title:"Message Types",permalink:"/docs/chat/message-types"}},u={},d=[{value:"Step 1 - Setup and Installation",id:"step-1---setup-and-installation",level:2},{value:"Step 2 - Initialize User",id:"step-2---initialize-user",level:2},{value:"Step 3 - Navigating User Profile Functionality",id:"step-3---navigating-user-profile-functionality",level:2},{value:"Step 4 - Navigating Chat Functionality",id:"step-4---navigating-chat-functionality",level:2},{value:"Step 5 - Navigating Group Chat Functionality",id:"step-5---navigating-group-chat-functionality",level:2},{value:"Step 6 - Navigating User Encryption Functionality",id:"step-6---navigating-user-encryption-functionality",level:2}];function p(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.M)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"all-api-calls",children:"All API Calls"}),"\n",(0,a.jsx)(t.p,{children:"This tutorial is designed to get you up and going by providing a step wise guide to use and explore the Push SDK."}),"\n",(0,a.jsx)(n,{children:(0,a.jsx)("title",{children:"Push SDK APIs playground tutorial | Push Chat | Push Documentation"})}),"\n","\n","\n",(0,a.jsx)(t.h2,{id:"step-1---setup-and-installation",children:"Step 1 - Setup and Installation"}),"\n",(0,a.jsx)(t.p,{children:"Start by setting up the project environment and installing the SDK and its required peer dependencies ( ethers )."}),"\n",(0,a.jsx)(t.p,{children:"** Note - ** For this tutorial we will be using plain Javascript"}),"\n",(0,a.jsx)(i.c,{className:"codetabs",groupId:"code-examples",children:(0,a.jsx)(r.c,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-zsh",children:"# Create Project Directory\nmkdir push-sdk-tutorial\n\n# Navigate to Project Directory\ncd push-sdk-tutorial\n\n# Initialize Project\nnpm init -y\n\n# Create index.mjs File\ntouch index.mjs\n\n# Install Required Libraries\nnpm install @pushprotocol/restapi@latest @pushprotocol/socket@latest ethers@^5.7\n\n"})})})}),"\n",(0,a.jsx)(t.h2,{id:"step-2---initialize-user",children:"Step 2 - Initialize User"}),"\n",(0,a.jsx)(t.p,{children:"Initialization is a crucial step before utilizing the SDK. It involves creating a Push Profile for new users or re-authenticating and decrypting keys for existing users."}),"\n",(0,a.jsx)(i.c,{className:"codetabs",groupId:"code-examples",children:(0,a.jsx)(r.c,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'// index.mjs\n\nimport { PushAPI, CONSTANTS } from "@pushprotocol/restapi";\nimport { ethers } from "ethers";\n\n/**\n * Private key of the user can be exported from any wallet such as Metamask\n * Note - One should use a .env file to store the private key and make sure it is not committed to the repository\n * Ideal code - const signer = new ethers.Wallet(`0x${prcoess.env.PRIVATE_KEY}`)\n * For this tutorial we will be using a random private key\n */\nconst aliceSigner = new ethers.Wallet.createRandom();\nconst aliceAddress = await aliceSigner.getAddress();\n\nconst bobSigner = new ethers.Wallet.createRandom();\nconst bobAddress = await bobSigner.getAddress();\n\n/** Initialization */\nconst userAlice = await PushAPI.initialize(aliceSigner, { env: "prod" });\nconst userBob = await PushAPI.initialize(bobSigner, { env: "prod" });\n\n/** Get details of the initialized user */\nconst userAliceInfo = await userAlice.info();\n'})})})}),"\n",(0,a.jsx)(t.h2,{id:"step-3---navigating-user-profile-functionality",children:"Step 3 - Navigating User Profile Functionality"}),"\n",(0,a.jsx)(t.p,{children:"Push SDK provides getters and setters related to the user's profile, which can be utilized to display user profile information in your UI and enable users to change their profile information effortlessly."}),"\n",(0,a.jsx)(i.c,{className:"codetabs",groupId:"code-examples",children:(0,a.jsx)(r.c,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"// index.mjs\n...\n...\n\n/**\n * User Profile Functions\n */\n\n/** Get Profile Info such as name, image etc */\nconst userAliceProfileInfo = await userAlice.profile.info()\n\n/** Set Profile Info such as name, image etc */\nconst updatedUserAliceProfileInfo = await userAlice.profile.update({\n  name: 'Alice',\n})\n"})})})}),"\n",(0,a.jsx)(t.h2,{id:"step-4---navigating-chat-functionality",children:"Step 4 - Navigating Chat Functionality"}),"\n",(0,a.jsx)(t.p,{children:"Push SDK provides various functions for sending chat messages, receiving, accepting or rejecting chat invites"}),"\n",(0,a.jsx)(i.c,{className:"codetabs",groupId:"code-examples",children:(0,a.jsx)(r.c,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"// index.mjs\n...\n...\n/**\n * Push Chat Functions\n */\n\n/** Send Chat message to another user */\n// Note - This message will be sent as a request to the receiver who needs to accept or reject it\nconst aliceMessagesBob = await userAlice.chat.send(bobAddress, {\n  content: 'Gm Gm !!!',\n  type: 'Text',\n})\n\n/** Get list of all chats done by user */\nconst userAliceChats = await userAlice.chat.list('CHATS')\n\n/** Get list of all chat requests received by user */\nconst userAliceRequests = await userAlice.chat.list('REQUESTS')\n\n/** Get latest chat message of a specific chat */\nconst aliceLatestChatWithBob = await userAlice.chat.latest(bobAddress)\n\n/** Get historical chat message of a specific chat */\nconst aliceHistoricalChatWithBob = await userAlice.chat.history(bobAddress)\n\n/** Accept chat request */\nconst bobAcceptsAliceChatRequest = await userBob.chat.accept(aliceAddress)\n\n/** Reject chat request */\n// Setup\nconst tempSigner = new ethers.Wallet.createRandom()\nconst tempAddress = await tempSigner.getAddress()\nconst userTemp = await PushAPI.initialize(tempSigner, { env: 'prod' })\nconst tempMessageBob = await userTemp.chat.send(bobAddress, {\n  content: 'Click this link to get scammed',\n  type: 'Text',\n})\n// Reject\nconst bobRejectsChatRequest = await userBob.chat.reject(tempAddress)\n\n/** Block User */\nconst aliceBlocksBob = await userAlice.chat.block([bobAddress])\n\n/** UnBlock User */\nconst aliceUnblocksBob = await userAlice.chat.unblock([bobAddress])\n\n"})})})}),"\n",(0,a.jsx)(t.h2,{id:"step-5---navigating-group-chat-functionality",children:"Step 5 - Navigating Group Chat Functionality"}),"\n",(0,a.jsx)(t.p,{children:"Push SDK provides various functions for creation, updation , adding and removing users from group."}),"\n",(0,a.jsx)(i.c,{className:"codetabs",groupId:"code-examples",children:(0,a.jsx)(r.c,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"// index.mjs\n...\n...\n/**\n * Push Group Chat Functions\n */\n\n/** Create Push Chat Group */\n// Note - By default group creator is the admin of the group\nconst createdGroup = await userAlice.chat.group.create('Sample Grp', {\n  description: 'Same Desc',\n  image: null,\n  members: [],\n  admins: [],\n  private: false,\n})\nconst groupChatId = createdGroup.chatId\n\n/** Update Group Info */\n// Note - Only admin can update group info\nconst updatedGroup = await userAlice.chat.group.update(groupChatId, {\n  description: 'Updated Description',\n})\n\n/** Get Group Info */\nconst groupInfo = await userAlice.chat.group.info(groupChatId)\n\n/** Get group Permissions */\nconst groupPermissions = await userAlice.chat.group.permissions(groupChatId)\n\n/** Add Member to Group */\nconst addMember = await userAlice.chat.group.add(groupChatId, {\n  role: 'MEMBER',\n  accounts: ['0x754E2C9f31D7DB279E9d4A9140e33ad8839E1FAd'],\n})\n\n/** Add Admin to Group */\nconst addAdmin = await userAlice.chat.group.add(groupChatId, {\n  role: 'ADMIN',\n  accounts: [bobAddress],\n})\n\n/** Remove Member from Group */\nconst removeMember = await userAlice.chat.group.remove(groupChatId, {\n  role: 'MEMBER',\n  accounts: ['0x754E2C9f31D7DB279E9d4A9140e33ad8839E1FAd'],\n})\n\n/** Remove Admin from Group */\nconst removeAdmin = await userAlice.chat.group.remove(groupChatId, {\n  role: 'ADMIN',\n  accounts: [bobAddress],\n})\n\n/** Join Group */\n// Note - A user can only join a group if its public or if the user is invited to join the group\nconst joinGrp = await userBob.chat.group.join(groupChatId)\n\n/** Leave Group */\nconst leaveGrp = await userBob.chat.group.leave(groupChatId)\n\n/** Reject a Group Joining Invite */\n// Setup\nconst newGroup = await userAlice.chat.group.create('Tmp Grp', {\n  description: 'Tmp Desc',\n  image: null,\n  members: [bobAddress],\n  admins: [],\n  private: true,\n})\n// Reject\nconst rejectGrpJoiningReq = await userBob.chat.group.reject(newGroup.chatId)\n\n"})})})}),"\n",(0,a.jsx)(t.h2,{id:"step-6---navigating-user-encryption-functionality",children:"Step 6 - Navigating User Encryption Functionality"}),"\n",(0,a.jsx)(t.p,{children:"Push SDK provides functions for getting info related to the encryption of a Push profile and also allow to change encryption of user keys"}),"\n",(0,a.jsx)(i.c,{className:"codetabs",groupId:"code-examples",children:(0,a.jsx)(r.c,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"// index.mjs\n...\n...\n/**\n * Push User Encryption Functions\n */\n\n/** Get User profile encryption info */\nconst encryptionInfo = await userAlice.encryption.info()\n\n/** Update encryption version of Push Profile */\n// Note - This function changes the encryption of push chat encryption keys and need to be called cautiously\nconst PGP_V3 = 'eip191-aes256-gcm-hkdf-sha256'\nconst encryptionUpdate = await userAlice.encryption.update(PGP_V3)\n\n"})})})})]})}function h(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},787768:(e,t,n)=>{n.d(t,{c:()=>r});n(811504);var a=n(934064);const s={tabItem:"tabItem_Ymn6"};var i=n(617624);function r(e){let{children:t,hidden:n,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.c)(s.tabItem,r),hidden:n,children:t})}},161268:(e,t,n)=>{n.d(t,{c:()=>x});var a=n(811504),s=n(934064),i=n(253943),r=n(655592),o=n(495288),l=n(110632),c=n(227128),u=n(821148);function d(e){var t,n;return null!==(t=null===(n=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=null!=t?t:function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:s}}=e;return{value:t,label:n,attributes:a,default:s}}))}(n);return function(e){const t=(0,c.w)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const s=(0,r.Uz)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,l._M)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,i=p(e),[r,l]=(0,a.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const s=null!==(t=a.find((e=>e.default)))&&void 0!==t?t:a[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:i}))),[c,d]=g({queryString:n,groupId:s}),[m,b]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[s,i]=(0,u.IN)(n);return[s,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:s}),f=(()=>{const e=null!=c?c:m;return h({value:e,tabValues:i})?e:null})();(0,o.c)((()=>{f&&l(f)}),[f]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error("Can't select invalid tab value="+e);l(e),d(e),b(e)}),[d,b,i]),tabValues:i}}var b=n(893664);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(617624);function j(e){let{className:t,block:n,selectedValue:a,selectValue:r,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.MV)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),s=o[n].value;s!==a&&(c(t),r(s))},d=e=>{var t;let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var a;const t=l.indexOf(e.currentTarget)+1;n=null!==(a=l[t])&&void 0!==a?a:l[0];break}case"ArrowLeft":{var s;const t=l.indexOf(e.currentTarget)-1;n=null!==(s=l[t])&&void 0!==s?s:l[l.length-1];break}}null===(t=n)||void 0===t||t.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.c)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...i,className:(0,s.c)("tabs__item",f.tabItem,null==i?void 0:i.className,{"tabs__item--active":a===t}),children:null!=n?n:t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:s}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function A(e){const t=m(e);return(0,v.jsxs)("div",{className:(0,s.c)("tabs-container",f.tabList),children:[(0,v.jsx)(j,{...e,...t}),(0,v.jsx)(y,{...e,...t})]})}function x(e){const t=(0,b.c)();return(0,v.jsx)(A,{...e,children:d(e.children)},String(t))}},904552:(e,t,n)=>{n.d(t,{I:()=>o,M:()=>r});var a=n(811504);const s={},i=a.createContext(s);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);