"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[50188],{53084:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>n,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var s=t(617624),d=t(904552);const o={id:"docs-video-develop-request-video-call",title:"Request Video Call",hide_title:!0,slug:"./request-video-call",displayed_sidebar:"pushVideoSidebar",sidebar_position:6,image:"/assets/docs/previews/docs_video_develop--request_video_call.png"},r="Request video call",l={id:"video/build/docs-video-develop-request-video-call",title:"Request Video Call",description:"This section covers everything you need to do to request video calls.",source:"@site/docs/video/01-build/06-Develop-Request-Video-Call.mdx",sourceDirName:"video/01-build",slug:"/video/build/request-video-call",permalink:"/docs/video/build/request-video-call",draft:!1,unlisted:!1,editUrl:"https://github.com/ethereum-push-notification-service/push-website/blob/main/docs/video/01-build/06-Develop-Request-Video-Call.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"docs-video-develop-request-video-call",title:"Request Video Call",hide_title:!0,slug:"./request-video-call",displayed_sidebar:"pushVideoSidebar",sidebar_position:6,image:"/assets/docs/previews/docs_video_develop--request_video_call.png"},sidebar:"pushVideoSidebar",previous:{title:"Initializing Video",permalink:"/docs/video/build/initializing-video"},next:{title:"Manage Video Call",permalink:"/docs/video/build/manage-video-call"}},n={},c=[{value:"Request video call API",id:"request-video-call-api",level:2},{value:"Request video call parameters",id:"request-video-call-parameters",level:3}];function a(e){const i={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.M)(),...e.components},{Head:t}=i;return t||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"request-video-call",children:"Request video call"}),"\n",(0,s.jsx)(i.p,{children:"This section covers everything you need to do to request video calls."}),"\n",(0,s.jsx)(t,{children:(0,s.jsx)("title",{children:"Request Video Call | Push Video | Push Documentation"})}),"\n",(0,s.jsx)(i.h2,{id:"request-video-call-api",children:"Request video call API"}),"\n",(0,s.jsxs)(i.p,{children:["When a user requests a video call, the stream emits ",(0,s.jsx)(i.code,{children:"CONSTANTS.VIDEO.EVENT.REQUEST"})," event on the receiver's end which can be used to display a modal to accept/deny the call."]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-typescript",children:"// aliceVideoCall.request(recipients[], options?);\nawait aliceVideoCall.request([recipient]);\n"})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"request-video-call-parameters",children:"Request video call parameters"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Property"}),(0,s.jsx)(i.th,{children:"Type"}),(0,s.jsx)(i.th,{children:"Sub Type"}),(0,s.jsx)(i.th,{children:"Description"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.em,{children:(0,s.jsx)(i.code,{children:"recipients"})})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"string[]"})}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsxs)(i.td,{children:["Wallet address or addresses of the recipient(s). Number of different ",(0,s.jsx)(i.a,{href:"/docs/chat/supported-wallet-standards",title:"Push Chat support wallet standards",children:"wallet standards"})," are suppported."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"options?"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"VideoInitializeOptions"})}),(0,s.jsx)(i.td,{children:"-"}),(0,s.jsx)(i.td,{children:"-"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"options.rules.access.type"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"string"})}),(0,s.jsxs)(i.td,{children:["Identifier for Push Video or Space. We use ",(0,s.jsx)(i.code,{children:"VIDEO_NOTIFICATION_ACCESS_TYPE.PUSH_CHAT"})," from ",(0,s.jsx)(i.code,{children:"@pushprotocol/restapi"})," here for Push Video"]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"options.rules.access.data.chatId?"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"string"})}),(0,s.jsx)(i.td,{children:"Unique identifier for every push chat, here, the one between the alice and the bob"})]})]})]}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:["Note: Parameters ",(0,s.jsx)(i.em,{children:(0,s.jsx)(i.code,{children:"in this style"})})," are mandatory."]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,d.M)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},904552:(e,i,t)=>{t.d(i,{I:()=>l,M:()=>r});var s=t(811504);const d={},o=s.createContext(d);function r(e){const i=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),s.createElement(o.Provider,{value:i},e.children)}}}]);