"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[26602],{43208:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>d,toc:()=>u});var s=i(474848),n=i(28453),o=i(113490),r=i(334837);const c={id:"docs-notifications-push-smart-contracts-section",title:"Push Smart Contracts",hide_title:!0,slug:"./push-smart-contracts",displayed_sidebar:"pushNotificationSidebar",sidebar_position:107,image:"/assets/docs/previews/docs_notifications__section--push_smart_contracts.png"},a="Push Smart Contracts Overview",d={id:"notifications/docs-notifications-push-smart-contracts-section",title:"Push Smart Contracts",description:"This is an advance concept section. You will be interacting mostly with Push SDK to do everything, all of which is gasless with only smart contracts native notifications relying on some of these concepts.",source:"@site/docs/notifications/107-Push-Smart-Contracts-Section.mdx",sourceDirName:"notifications",slug:"/notifications/push-smart-contracts",permalink:"/docs/notifications/push-smart-contracts",draft:!1,unlisted:!1,editUrl:"https://github.com/ethereum-push-notification-service/push-website/blob/main/docs/notifications/107-Push-Smart-Contracts-Section.mdx",tags:[],version:"current",sidebarPosition:107,frontMatter:{id:"docs-notifications-push-smart-contracts-section",title:"Push Smart Contracts",hide_title:!0,slug:"./push-smart-contracts",displayed_sidebar:"pushNotificationSidebar",sidebar_position:107,image:"/assets/docs/previews/docs_notifications__section--push_smart_contracts.png"},sidebar:"pushNotificationSidebar",previous:{title:"Notification Standards (Advance)",permalink:"/docs/notifications/notification-standards/notification-standards-advance"},next:{title:"Push Core Contract",permalink:"/docs/notifications/push-smart-contracts/core-smart-contract"}},l={},u=[];function h(t){const e={admonition:"admonition",h1:"h1",p:"p",strong:"strong",...(0,n.R)(),...t.components},{Head:i}=e;return i||function(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"push-smart-contracts-overview",children:"Push Smart Contracts Overview"}),"\n",(0,s.jsxs)(e.admonition,{type:"important",children:[(0,s.jsx)(e.p,{children:"This is an advance concept section. You will be interacting mostly with Push SDK to do everything, all of which is gasless with only smart contracts native notifications relying on some of these concepts."}),(0,s.jsxs)(e.p,{children:["All smart contracts related to Push protocol are hosted at ",(0,s.jsx)(o.Yo,{href:"https://github.com/ethereum-push-notification-service/push-smart-contracts",title:"Review Push protocol github repo",children:"Push protocol github repo"})]})]}),"\n",(0,s.jsx)(i,{children:(0,s.jsx)("title",{children:"Push smart contracts section | Push Notifications | Push Documentation"})}),"\n","\n",(0,s.jsx)(e.p,{children:"In order for the protocol to be chain-agnostic as well as truly decentralized, Push smart contracts play a major role."}),"\n",(0,s.jsxs)(e.p,{children:["The Push smart contracts are divided into two different smart contracts \u2014 ",(0,s.jsx)(e.strong,{children:"Push Core & Push Communicator"}),"."]}),"\n","\n","\n",(0,s.jsx)(r.A,{})]})}function m(t={}){const{wrapper:e}={...(0,n.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(h,{...t})}):h(t)}},334837:(t,e,i)=>{i.d(e,{A:()=>x});i(296540);var s=i(618215),n=i(884142),o=i(175489),r=i(721312),c=i(320053);const a={cardContainer:"cardContainer_VPOR",cardTitle:"cardTitle_deVx",cardDescription:"cardDescription_crxe"};var d=i(474848);function l(t){let{href:e,children:i}=t;return(0,d.jsx)(o.A,{href:e,className:(0,c.default)("card padding--lg",a.cardContainer),children:i})}function u(t){let{href:e,icon:i,title:s,description:n}=t;return(0,d.jsxs)(l,{href:e,children:[(0,d.jsxs)("h2",{className:(0,c.default)("text--truncate",a.cardTitle),title:s,children:[i," ",s]}),n&&(0,d.jsx)("p",{className:(0,c.default)("text--truncate",a.cardDescription),title:n,children:n})]})}function h(t){var e;let{item:i}=t;return(0,d.jsx)(u,{icon:"\ud83d\uddc3\ufe0f",title:i.label,description:null!==(e=i.description)&&void 0!==e?e:(0,r.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:i.items.length})})}function m(t){var e,i;let{item:s}=t;const o=(0,n.cC)(null!==(e=s.docId)&&void 0!==e?e:void 0);return(0,d.jsx)(u,{href:s.href,icon:"",title:s.label,description:null!==(i=s.description)&&void 0!==i?i:null==o?void 0:o.description})}function p(t){let{item:e}=t;switch(e.type){case"link":return(0,d.jsx)(m,{item:e});case"category":return(0,d.jsx)(h,{item:e});default:throw new Error("unknown item type "+JSON.stringify(e))}}function f(t){let{className:e}=t;const i=(0,n.$S)();return(0,d.jsx)(x,{items:i.items,className:e})}function x(t){const{items:e,className:i}=t;if(!e)return(0,d.jsx)(f,{...t});const o=(0,n.d1)(e);return(0,d.jsx)("section",{className:(0,s.A)("row",i),children:o.map(((t,e)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(p,{item:t})},e)))})}},28453:(t,e,i)=>{i.d(e,{R:()=>r,x:()=>c});var s=i(296540);const n={},o=s.createContext(n);function r(t){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(n):t.components||n:r(t.components),s.createElement(o.Provider,{value:e},t.children)}}}]);