"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[28432],{4532:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=n(617624),s=n(904552),r=n(161268),i=n(787768);const l={id:"docs-notifications-quickstart",title:"Quickstart",hide_title:!1,slug:"./quickstart",displayed_sidebar:"pushNotificationSidebar",sidebar_position:2,image:"/assets/docs/previews/docs_notifications--quickstart.png"},o="Quickstart",c={id:"notifications/docs-notifications-quickstart",title:"Quickstart",description:"Everything you will need to get up and running in 2 mins or less!",source:"@site/docs/notifications/02-Quickstart-Push-Notification.mdx",sourceDirName:"notifications",slug:"/notifications/quickstart",permalink:"/docs/notifications/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/ethereum-push-notification-service/push-website/blob/main/docs/notifications/02-Quickstart-Push-Notification.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"docs-notifications-quickstart",title:"Quickstart",hide_title:!1,slug:"./quickstart",displayed_sidebar:"pushNotificationSidebar",sidebar_position:2,image:"/assets/docs/previews/docs_notifications--quickstart.png"},sidebar:"pushNotificationSidebar",previous:{title:"Intro to Push Notification",permalink:"/docs/notifications/"},next:{title:"Important Concepts",permalink:"/docs/notifications/important-concepts"}},u={},d=[{value:"Installation",id:"installation",level:3},{value:"Import libraries",id:"import-libraries",level:3},{value:"Initialize User",id:"initialize-user",level:3},{value:"Send Notifcation",id:"send-notifcation",level:3},{value:"Stream / Real time updates / Socket",id:"stream--real-time-updates--socket",level:3}];function h(e){const t={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,s.M)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"quickstart",children:"Quickstart"}),"\n",(0,a.jsx)(t.p,{children:"Everything you will need to get up and running in 2 mins or less!"}),"\n",(0,a.jsx)(n,{children:(0,a.jsx)("title",{children:"Quickstart | Push Notifcation | Push Documentation"})}),"\n","\n","\n",(0,a.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,a.jsxs)(r.c,{className:"codetabs",groupId:"code-examples",children:[(0,a.jsx)(i.c,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-zsh",children:"# Install Libraries\nnpm install @pushprotocol/restapi@latest ethers@^5.7\n"})})}),(0,a.jsx)(i.c,{value:"react",attributes:{className:"codetab react"},default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-zsh",children:"# Install Libraries\nnpm install @pushprotocol/restapi@latest ethers@^5.7\n"})})}),(0,a.jsx)(i.c,{value:"reactnative",attributes:{className:"codetab reactnative"},default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-zsh",children:"# Install Libraries\nnpm install @pushprotocol/restapi@latest ethers@^5.7\n"})})})]}),"\n",(0,a.jsx)(t.h3,{id:"import-libraries",children:"Import libraries"}),"\n",(0,a.jsxs)(r.c,{className:"codetabs",groupId:"code-examples",children:[(0,a.jsx)(i.c,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'// Import restapi for function calls\nimport { PushAPI, CONSTANTS } from "@pushprotocol/restapi";\n\n// Ethers or Viem, both are supported\nimport { ethers } from "ethers";\n'})})}),(0,a.jsx)(i.c,{value:"react",attributes:{className:"codetab react"},default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'// Import restapi for function calls\nimport { PushAPI, CONSTANTS } from "@pushprotocol/restapi";\n\n// Ethers or Viem, both are supported\nimport { ethers } from "ethers";\n'})})}),(0,a.jsx)(i.c,{value:"reactnative",attributes:{className:"codetab reactnative"},default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'// Import restapi for function calls\nimport { PushAPI, CONSTANTS } from "@pushprotocol/restapi";\n\n// Ethers or Viem, both are supported\nimport { ethers } from "ethers";\n'})})})]}),"\n",(0,a.jsx)(t.h3,{id:"initialize-user",children:"Initialize User"}),"\n",(0,a.jsxs)(r.c,{className:"codetabs",groupId:"code-examples",children:[(0,a.jsx)(i.c,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"// Creating a random signer from a wallet, ideally this is the wallet you will connect\nconst signer = ethers.Wallet.createRandom();\n\n// Initialize wallet user\n// 'CONSTANTS.ENV.PROD' -> mainnet apps | 'CONSTANTS.ENV.STAGING' -> testnet apps\nconst userAlice = await PushAPI.initialize(signer, { env: CONSTANTS.ENV.STAGING });\n"})})}),(0,a.jsx)(i.c,{value:"react",attributes:{className:"codetab react"},default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"// Creating a random signer from a wallet, ideally this is the wallet you will connect\nconst signer = ethers.Wallet.createRandom();\n\n// Initialize wallet user\n// 'CONSTANTS.ENV.PROD' -> mainnet apps | 'CONSTANTS.ENV.STAGING' -> testnet apps\nconst userAlice = await PushAPI.initialize(signer, { env: CONSTANTS.ENV.STAGING });\n"})})}),(0,a.jsx)(i.c,{value:"reactnative",attributes:{className:"codetab reactnative"},default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"// Creating a random signer from a wallet, ideally this is the wallet you will connect\nconst signer = ethers.Wallet.createRandom();\n\n// Initialize wallet user\n// 'CONSTANTS.ENV.PROD' -> mainnet apps | 'CONSTANTS.ENV.STAGING' -> testnet apps\nconst userAlice = await PushAPI.initialize(signer, { env: CONSTANTS.ENV.STAGING });\n"})})})]}),"\n",(0,a.jsx)(t.h3,{id:"send-notifcation",children:"Send Notifcation"}),"\n",(0,a.jsxs)(r.c,{className:"codetabs",groupId:"code-examples",children:[(0,a.jsx)(i.c,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'// Requires user to have a channel, see Create Channel section for more info\n// [\'*\'] sends to all wallets who have opted in to your channel\nconst response = await userAlice.channel.send(["*"], {\n  notification: {\n    title: "You awesome notification",\n    body: "from your amazing protocol",\n  },\n});\n'})})}),(0,a.jsx)(i.c,{value:"react",attributes:{className:"codetab react"},default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'// Requires user to have a channel, see Create Channel section for more info\n// [\'*\'] sends to all wallets who have opted in to your channel\nconst response = await userAlice.channel.send(["*"], {\n  notification: {\n    title: "You awesome notification",\n    body: "from your amazing protocol",\n  },\n});\n'})})}),(0,a.jsx)(i.c,{value:"reactnative",attributes:{className:"codetab reactnative"},default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'// Requires user to have a channel, see Create Channel section for more info\n// [\'*\'] sends to all wallets who have opted in to your channel\nconst response = await userAlice.channel.send(["*"], {\n  notification: {\n    title: "You awesome notification",\n    body: "from your amazing protocol",\n  },\n});\n'})})})]}),"\n",(0,a.jsx)(t.h3,{id:"stream--real-time-updates--socket",children:"Stream / Real time updates / Socket"}),"\n",(0,a.jsxs)(r.c,{className:"codetabs",groupId:"code-examples",children:[(0,a.jsx)(i.c,{value:"js",attributes:{className:"codetab js"},default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"// To listen to real time notifications\nconst stream = await userAlice.initStream([CONSTANTS.STREAM.NOTIF]);\n\n// Setup event handling\nstream.on(CONSTANTS.STREAM.NOTIF, (data) => {\n  console.log(data);\n});\n\n// Connect stream but only after setting all event handling\nstream.connect();\n"})})}),(0,a.jsx)(i.c,{value:"react",attributes:{className:"codetab react"},default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"// To listen to real time notifications\nconst stream = await userAlice.initStream([CONSTANTS.STREAM.NOTIF]);\n\n// Setup event handling\nstream.on(CONSTANTS.STREAM.NOTIF, (data) => {\n  console.log(data);\n});\n\n// Connect stream but only after setting all event handling\nstream.connect();\n"})})}),(0,a.jsx)(i.c,{value:"reactnative",attributes:{className:"codetab reactnative"},default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"// To listen to real time notifications\nconst stream = await userAlice.initStream([CONSTANTS.STREAM.NOTIF]);\n\n// Setup event handling\nstream.on(CONSTANTS.STREAM.NOTIF, (data) => {\n  console.log(data);\n});\n\n// Connect stream but only after setting all event handling\nstream.connect();\n"})})})]})]})}function p(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},787768:(e,t,n)=>{n.d(t,{c:()=>i});n(811504);var a=n(934064);const s={tabItem:"tabItem_Ymn6"};var r=n(617624);function i(e){let{children:t,hidden:n,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.c)(s.tabItem,i),hidden:n,children:t})}},161268:(e,t,n)=>{n.d(t,{c:()=>S});var a=n(811504),s=n(934064),r=n(253943),i=n(655592),l=n(495288),o=n(110632),c=n(227128),u=n(821148);function d(e){var t,n;return null!==(t=null===(n=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=null!=t?t:function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:s}}=e;return{value:t,label:n,attributes:a,default:s}}))}(n);return function(e){const t=(0,c.w)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const s=(0,i.Uz)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,o._M)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(s.location.search);t.set(r,e),s.replace({...s.location,search:t.toString()})}),[r,s])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,r=h(e),[i,o]=(0,a.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const s=null!==(t=a.find((e=>e.default)))&&void 0!==t?t:a[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:r}))),[c,d]=m({queryString:n,groupId:s}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[s,r]=(0,u.IN)(n);return[s,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:s}),v=(()=>{const e=null!=c?c:f;return p({value:e,tabValues:r})?e:null})();(0,l.c)((()=>{v&&o(v)}),[v]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error("Can't select invalid tab value="+e);o(e),d(e),b(e)}),[d,b,r]),tabValues:r}}var b=n(893664);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var N=n(617624);function g(e){let{className:t,block:n,selectedValue:a,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.MV)(),u=e=>{const t=e.currentTarget,n=o.indexOf(t),s=l[n].value;s!==a&&(c(t),i(s))},d=e=>{var t;let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var a;const t=o.indexOf(e.currentTarget)+1;n=null!==(a=o[t])&&void 0!==a?a:o[0];break}case"ArrowLeft":{var s;const t=o.indexOf(e.currentTarget)-1;n=null!==(s=o[t])&&void 0!==s?s:o[o.length-1];break}}null===(t=n)||void 0===t||t.focus()};return(0,N.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.c)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,N.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>o.push(e),onKeyDown:d,onClick:u,...r,className:(0,s.c)("tabs__item",v.tabItem,null==r?void 0:r.className,{"tabs__item--active":a===t}),children:null!=n?n:t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:s}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,N.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function x(e){const t=f(e);return(0,N.jsxs)("div",{className:(0,s.c)("tabs-container",v.tabList),children:[(0,N.jsx)(g,{...e,...t}),(0,N.jsx)(j,{...e,...t})]})}function S(e){const t=(0,b.c)();return(0,N.jsx)(x,{...e,children:d(e.children)},String(t))}},904552:(e,t,n)=>{n.d(t,{I:()=>l,M:()=>i});var a=n(811504);const s={},r=a.createContext(s);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);