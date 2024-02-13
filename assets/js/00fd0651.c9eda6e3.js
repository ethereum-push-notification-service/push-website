"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[58044],{281684:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var s=t(617624),a=t(904552),r=t(161268),o=t(787768);const l={id:"docs-notifications-push-sdk-playground",title:"Push SDK Playground",hide_title:!0,slug:"./push-sdk-playground",displayed_sidebar:"pushNotificationSidebar",sidebar_position:1,image:"/assets/docs/previews/docs_notifications--push_sdk_playground.png"},i="Push SDK playground",u={id:"notifications/playground/docs-notifications-push-sdk-playground",title:"Push SDK Playground",description:"This tutorial is designed to get you up and going by providing playground containing all API calls coverage for Push SDK. Checkout Push SDK example that utlizes @pushprotocol/restapi and @pushprotocol/socket for more info!",source:"@site/docs/notifications/02-playground/01-Playground-Push-SDK-APIs-Playground.mdx",sourceDirName:"notifications/02-playground",slug:"/notifications/playground/push-sdk-playground",permalink:"/docs/notifications/playground/push-sdk-playground",draft:!1,unlisted:!1,editUrl:"https://github.com/ethereum-push-notification-service/push-website/blob/main/docs/notifications/02-playground/01-Playground-Push-SDK-APIs-Playground.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"docs-notifications-push-sdk-playground",title:"Push SDK Playground",hide_title:!0,slug:"./push-sdk-playground",displayed_sidebar:"pushNotificationSidebar",sidebar_position:1,image:"/assets/docs/previews/docs_notifications--push_sdk_playground.png"},sidebar:"pushNotificationSidebar",previous:{title:"Playground",permalink:"/docs/notifications/playground"},next:{title:"Push SDK React Playground",permalink:"/docs/notifications/playground/push-react-component-playground-example"}},d={},c=[{value:"Step 1: Clone the Push SDK Repository",id:"step-1-clone-the-push-sdk-repository",level:2},{value:"Step 2: Install Dependencies",id:"step-2-install-dependencies",level:2},{value:"Step 3: Setup Push SDK Playground",id:"step-3-setup-push-sdk-playground",level:2},{value:"Step 4: Setup Environment Variables",id:"step-4-setup-environment-variables",level:2},{value:"Step 5: Run Playground Examples",id:"step-5-run-playground-examples",level:2},{value:"Expected Output",id:"expected-output",level:3}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,a.M)(),...e.components},{Head:l}=n;return l||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"push-sdk-playground",children:"Push SDK playground"}),"\n",(0,s.jsxs)(n.p,{children:["This tutorial is designed to get you up and going by providing playground containing all API calls coverage for Push SDK. Checkout ",(0,s.jsx)(n.a,{href:"https://github.com/ethereum-push-notification-service/push-sdk/tree/main/packages/examples/sdk-backend-node",children:"Push SDK example"})," that utlizes ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/@pushprotocol/restapi",children:"@pushprotocol/restapi"})," and ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/@pushprotocol/socket",children:"@pushprotocol/socket"})," for more info!"]}),"\n",(0,s.jsx)(l,{children:(0,s.jsx)("title",{children:"Push SDK APIs playground tutorial | Push Notifcation | Push Documentation"})}),"\n","\n","\n",(0,s.jsx)(n.h2,{id:"step-1-clone-the-push-sdk-repository",children:"Step 1: Clone the Push SDK Repository"}),"\n",(0,s.jsx)(n.p,{children:"Download the Push SDK repository to your local machine."}),"\n",(0,s.jsx)(r.c,{className:"codetabs",groupId:"code-examples",children:(0,s.jsx)(o.c,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-zsh",children:"git clone https://github.com/ethereum-push-notification-service/push-sdk.git\n"})})})}),"\n",(0,s.jsx)(n.h2,{id:"step-2-install-dependencies",children:"Step 2: Install Dependencies"}),"\n",(0,s.jsx)(n.p,{children:"Navigate to the SDK directory and install required dependencies."}),"\n",(0,s.jsx)(r.c,{className:"codetabs",groupId:"code-examples",children:(0,s.jsx)(o.c,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-zsh",children:"cd push-sdk\nyarn install\n"})})})}),"\n",(0,s.jsx)(n.h2,{id:"step-3-setup-push-sdk-playground",children:"Step 3: Setup Push SDK Playground"}),"\n",(0,s.jsx)(n.p,{children:"Navigate to the directory and install required dependencies."}),"\n",(0,s.jsx)(r.c,{className:"codetabs",groupId:"code-examples",children:(0,s.jsx)(o.c,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-zsh",children:"cd packages/examples/sdk-backend-node\nyarn install\n"})})})}),"\n",(0,s.jsx)(n.h2,{id:"step-4-setup-environment-variables",children:"Step 4: Setup Environment Variables"}),"\n",(0,s.jsxs)(n.p,{children:["Create a ",(0,s.jsx)(n.code,{children:".env"})," file and add values to it according to the given ",(0,s.jsx)(n.code,{children:".env.sample"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"})," - It is possible to run a bare minimum examples without ",(0,s.jsx)(n.code,{children:".env"}),". All other examples will be skipped."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-zsh",children:"# WALLET PRIVATE KEY\nWALLET_PRIVATE_KEY=your_channel_private_key\n\n# ENVIRONMENT OF PUSH NETWORK - prod, staging OR dev\nPUSH_NODE_NETWORK=staging\n\n# TO ENABLE API RESPONSES TO BE SHOWN OR HIDDEN - true OR false\nSHOW_API_RESPONSE=false\n\n# NFT CONTRACT ADDRESS\nNFT_CONTRACT_ADDRESS_1=your_nft_contract_address\n\n# NFT CHAIN ID\nNFT_CHAIN_ID_1=your_nft_chain_id\n\n# NFT TOKEN ID\nNFT_TOKEN_ID_1=your_nft_token_id\n\n# NFT HOLDER WALLET PRIVATE KEY\nNFT_HOLDER_WALLET_PRIVATE_KEY_1=your_nft_holder_wallet_private_key\n\n# NFT PROFILE WALLET PASSWORD\nNFT_PROFILE_PASSWORD_1=your_nft_profile_password\n\n# NFT CONTRACT ADDRESS\nNFT_CONTRACT_ADDRESS_2=your_nft_contract_address\n\n# NFT CHAIN ID\nNFT_CHAIN_ID_2=your_nft_chain_id\n\n# NFT TOKEN ID\nNFT_TOKEN_ID_2=your_nft_token_id\n\n# NFT HOLDER WALLET PRIVATE KEY\nNFT_HOLDER_WALLET_PRIVATE_KEY_2=your_nft_holder_wallet_private_key\n\n# NFT PROFILE WALLET PASSWORD\nNFT_PROFILE_PASSWORD_2=your_nft_profile_password\n\n# VIDEO CHAIN ID\nVIDEO_CHAIN_ID=your_video_chain_id\n\n# VIDEO SENDER ADDRESS\nVIDEO_SENDER_ADDRESS=your_video_sender_address\n\n# VIDEO RECIPEINT ADDRESS\nVIDEO_RECIPEINT_ADDRESS=your_video_recipient_address\n\n# VIDEO CHAT ID\nVIDEO_CHAT_ID=your_video_chat_id\n"})}),"\n",(0,s.jsx)(r.c,{className:"codetabs",groupId:"code-examples",children:(0,s.jsx)(o.c,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-zsh",children:"# Create .env file\ntouch .env\n\n# Add different key values according to .env.sample\n"})})})}),"\n",(0,s.jsx)(n.h2,{id:"step-5-run-playground-examples",children:"Step 5: Run Playground Examples"}),"\n",(0,s.jsx)(r.c,{className:"codetabs",groupId:"code-examples",children:(0,s.jsx)(o.c,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-zsh",children:"yarn start\n"})})})}),"\n",(0,s.jsx)(n.h3,{id:"expected-output",children:"Expected Output"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"&quot;Push SDK API Playground&quot;",src:t(875628).c+"",title:"Example of how the playground will look like if setup properly",width:"1114",height:"627"})})]})}function h(e={}){const{wrapper:n}={...(0,a.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},787768:(e,n,t)=>{t.d(n,{c:()=>o});t(811504);var s=t(934064);const a={tabItem:"tabItem_Ymn6"};var r=t(617624);function o(e){let{children:n,hidden:t,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.c)(a.tabItem,o),hidden:t,children:n})}},161268:(e,n,t)=>{t.d(n,{c:()=>E});var s=t(811504),a=t(934064),r=t(253943),o=t(655592),l=t(495288),i=t(110632),u=t(227128),d=t(821148);function c(e){var n,t;return null!==(n=null===(t=s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))||void 0===t?void 0:t.filter(Boolean))&&void 0!==n?n:[]}function p(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=null!=n?n:function(e){return c(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:a}}=e;return{value:n,label:t,attributes:s,default:a}}))}(t);return function(e){const n=(0,u.w)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.Uz)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,i._M)(r),(0,s.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,r=p(e),[o,i]=(0,s.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:s}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+s.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const a=null!==(n=s.find((e=>e.default)))&&void 0!==n?n:s[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[u,c]=g({queryString:t,groupId:a}),[f,m]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[a,r]=(0,d.IN)(t);return[a,(0,s.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),_=(()=>{const e=null!=u?u:f;return h({value:e,tabValues:r})?e:null})();(0,l.c)((()=>{_&&i(_)}),[_]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error("Can't select invalid tab value="+e);i(e),c(e),m(e)}),[c,m,r]),tabValues:r}}var m=t(893664);const _={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(617624);function b(e){let{className:n,block:t,selectedValue:s,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.MV)(),d=e=>{const n=e.currentTarget,t=i.indexOf(n),a=l[t].value;a!==s&&(u(n),o(a))},c=e=>{var n;let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var s;const n=i.indexOf(e.currentTarget)+1;t=null!==(s=i[n])&&void 0!==s?s:i[0];break}case"ArrowLeft":{var a;const n=i.indexOf(e.currentTarget)-1;t=null!==(a=i[n])&&void 0!==a?a:i[i.length-1];break}}null===(n=t)||void 0===n||n.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.c)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>i.push(e),onKeyDown:c,onClick:d,...r,className:(0,a.c)("tabs__item",_.tabItem,null==r?void 0:r.className,{"tabs__item--active":s===n}),children:null!=t?t:n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:a}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function x(e){const n=f(e);return(0,v.jsxs)("div",{className:(0,a.c)("tabs-container",_.tabList),children:[(0,v.jsx)(b,{...e,...n}),(0,v.jsx)(y,{...e,...n})]})}function E(e){const n=(0,m.c)();return(0,v.jsx)(x,{...e,children:c(e.children)},String(n))}},875628:(e,n,t)=>{t.d(n,{c:()=>s});const s=t.p+"assets/images/sdk-playground-0fa0602e82747a6f27c8686d2ab85015.png"},904552:(e,n,t)=>{t.d(n,{I:()=>l,M:()=>o});var s=t(811504);const a={},r=s.createContext(a);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);