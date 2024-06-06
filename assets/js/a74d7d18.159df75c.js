"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[10153],{587453:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>h});var o=t(474848),n=t(28453);const s={slug:"my-app-would-like-to-send-you-push-notifications",title:"\u2018My App\u2019 Would Like to Send You Push Notifications",authors:["push"],image:"./cover-image.webp",text:"It is hard to imagine modern mobile devices without push notifications. The first push service was launched by Apple in June 2009, the Apple Push Notification Service (APNs). After that, Google followed with a service of their own, Google Cloud to Device Messaging (C2DM). Both companies have led efforts to enhance the push notification technology to where it is today.",tags:["Pn101","Push Notification","Technology","Blockchain","Web3"]},a="An Introduction to Push Notification: Part 1.1",r={permalink:"/blog/my-app-would-like-to-send-you-push-notifications",source:"@site/blog/2022-08-26-app-would-like-to-send-notifications/index.md",title:"\u2018My App\u2019 Would Like to Send You Push Notifications",description:"Cover image of \u2018My App\u2019 Would Like to Send You Push Notifications",date:"2022-08-26T00:00:00.000Z",formattedDate:"August 26, 2022",tags:[{label:"Pn101",permalink:"/blog/tags/pn-101"},{label:"Push Notification",permalink:"/blog/tags/push-notification"},{label:"Technology",permalink:"/blog/tags/technology"},{label:"Blockchain",permalink:"/blog/tags/blockchain"},{label:"Web3",permalink:"/blog/tags/web-3"}],readingTime:3.66,hasTruncateMarker:!0,authors:[{name:"Push Protocol",url:"https://twitter.com/pushprotocol",imageURL:"/assets/blog/authors/authorpush.png",key:"push"}],frontMatter:{slug:"my-app-would-like-to-send-you-push-notifications",title:"\u2018My App\u2019 Would Like to Send You Push Notifications",authors:["push"],image:"./cover-image.webp",text:"It is hard to imagine modern mobile devices without push notifications. The first push service was launched by Apple in June 2009, the Apple Push Notification Service (APNs). After that, Google followed with a service of their own, Google Cloud to Device Messaging (C2DM). Both companies have led efforts to enhance the push notification technology to where it is today.",tags:["Pn101","Push Notification","Technology","Blockchain","Web3"]},unlisted:!1,prevItem:{title:"EPNS Monthly Blocks",permalink:"/blog/epns-monthly-blocks-august"},nextItem:{title:"BUIDLing the Future of Web3 Communication With EPNS at ETHOnline 2022",permalink:"/blog/buid-ling-the-future-of-web3-communication-with-epns-at-eth-online-2022"}},c={image:t(81599).A,authorsImageUrls:[void 0]},h=[{value:"An Overview of Push Notifications",id:"an-overview-of-push-notifications",level:2},{value:"An example with Discord",id:"an-example-with-discord",level:3},{value:"Push Notification Providers",id:"push-notification-providers",level:2},{value:"Using Push Notifications",id:"using-push-notifications",level:2},{value:"Next-generation Push Notifications",id:"next-generation-push-notifications",level:2}];function l(e){const i={a:"a",h2:"h2",h3:"h3",img:"img",p:"p",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.p,{children:(0,o.jsx)(i.img,{alt:"Cover image of \u2018My App\u2019 Would Like to Send You Push Notifications",src:t(428843).A+"",width:"1100",height:"578"})}),"\n",(0,o.jsx)(i.p,{children:"It is hard to imagine modern mobile devices without push notifications. The first push service was launched by Apple in June 2009, the Apple Push Notification Service (APNs). After that, Google followed with a service of their own, Google Cloud to Device Messaging (C2DM). Both companies have led efforts to enhance the push notification technology to where it is today."}),"\n",(0,o.jsx)(i.p,{children:"Push notifications are a type of message that can be presented in an alert-based format, such as message alerts, pop-ups, and banners. They serve as a mechanism that informs users about all kinds of information. Today, push notifications have dynamic traits with app components directly built into the notification delivery scheme."}),"\n",(0,o.jsx)(i.p,{children:"Before the implementation of push notifications, different methods were used to send messages to apps, like maintaining a permanent open TCP/IP connection to a web server to receive real-time notifications (isn\u2019t efficient and not practical for modern devices) and polling, which requires a real-time request to prompt a notification (polling follows the request/response model)."}),"\n",(0,o.jsx)(i.h2,{id:"an-overview-of-push-notifications",children:"An Overview of Push Notifications"}),"\n",(0,o.jsx)(i.p,{children:"Messages allow for the transferability of information over the internet and are integral to communication among networks. In traditional client-server models, there are two types of messages: requests and responses. Push notifications are a type of response message from the server side, known as a server push. The server push requires a network request and is often event-driven, as in, if event \u201cn\u201d happens, trigger a response that pushes message \u201cm\u201d to the client."}),"\n",(0,o.jsx)(i.p,{children:"The majority of applications provide responses to the user based on the actions they take on the application. For instance, if a user tries to log into a social media account but enters the wrong credentials, the server may prompt a message \u201cser, wrong password, account locked forever.\u201d A notification example that shows asynchronous messaging is a user who has a sports app on their device and receives real-time game updates about professional sports games being played simultaneously."}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.img,{alt:"Notification",src:t(560447).A+"",width:"1088",height:"760"})}),"\n",(0,o.jsx)(i.h3,{id:"an-example-with-discord",children:"An example with Discord"}),"\n",(0,o.jsxs)(i.p,{children:["Take the case of using Discord to keep up with all of your favorite crypto projects. Assuming you have allowed for notifications (1,2) if someone from the ",(0,o.jsx)(i.a,{href:"https://discord.gg/YVPB99F9W5",children:"EPNS Discord"})," server sends a message to a channel (3), the Discord server informs the push server of the availability of the new message (4). The server uses a unique ID associated with your device to push the new message as a notification (5). The push mechanism is not used when the Discord app is open on your device, as messages are sent directly from Discord\u2019s server to your account. The way your device receives the notification in real-time is by retaining a single connection (like a WLAN connection) whenever you close Discord. This method is used as opposed to each app on your device having its own connection. Note: this is a simplified version of how notifications [can] work on Discord."]}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.img,{alt:"Architecture",src:t(950846).A+"",width:"1100",height:"684"})}),"\n",(0,o.jsx)(i.p,{children:"To receive server pushes, a client must first subscribe to information channels provided by the server. This requires permission on the client side. When subscribed to push notifications, a publisher can push information. This is known as the publish/subscriber model. In general, the publish/subscribe mechanism includes peers who congregate around a topic they are interested in which lives on a central server, and these peers are said to be subscribed to that topic. Whenever new content is available on one of the information channels, the server pushes that information out to the client. Typically, push notifications are pushed to a client app that a user is using from an application server. Server pushes work because of a continuously open connection between a client device or interface, and the push service. A server provided by the operating system developer acts as middleware between the service and the client device by curating the communication with the device. The device registers on the push server with a unique ID to send the right messages to the right device. Thus, push technology can be considered a type of communication protocol with a centralized service provider."}),"\n",(0,o.jsx)(i.h2,{id:"push-notification-providers",children:"Push Notification Providers"}),"\n",(0,o.jsx)(i.p,{children:"Push notification providers allow apps to send notifications to their users. This is where APNs and C2DM would fall under. As an app publisher, the app can easily send messages, and these messages take different forms. A push notification provider gives you a platform on which you can create, schedule, and deliver messages to users and allow apps to compose, target, and execute message campaigns. Today, push notifications are not only a way to provide information, but have become a standard for communication."}),"\n",(0,o.jsx)(i.h2,{id:"using-push-notifications",children:"Using Push Notifications"}),"\n",(0,o.jsx)(i.p,{children:"Beyond the examples we gave, push notifications have a ton of use cases and can certainly enhance application experience, engagement, and general communication. The obvious is that users can obtain information in real-time about [almost] anything. In general, apps can establish direct communication channels that operate in an asynchronous format, engage users with curated content, and drive application traffic, all while ensuring users are up-to-date and informed of future events/changes."}),"\n",(0,o.jsx)(i.p,{children:"Outside of messaging notifications, push notifications are often unfavorable based on their usage for marketing and advertising. The frequency of notifications is also challenging to figure out. In addition, knowledge resources and assets are completely controlled by service providers who have the ability to generate narratives; they are the source of truth for the messages that are pushed."}),"\n",(0,o.jsx)(i.h2,{id:"next-generation-push-notifications",children:"Next-generation Push Notifications"}),"\n",(0,o.jsx)(i.p,{children:"How do we take push technology to the next level? By taking the service away from the service provider; from client/server to peers. Peers can facilitate messages as they wish. There is more data integrity within the resources that are pushed to peers as the peers are able to control the data."}),"\n",(0,o.jsx)(i.p,{children:"Many networks are already building the next generation of the internet, aka web3. However, the user experience in web3 is still mediocre and lacks the characteristics of seamless interactions and communication as found in the current web model. Along with many yet-to-be components, there is a critical piece missing: notifications. Users using web3 applications are forced to manually keep up-to-date with everything they are interacting with, manually conduct activities on their account, and operate in isolation. Bringing push notifications to web3 not only addresses some of the current pitfalls of push notifications but fundamentally improves the web3 user experience to a level capable of bringing on mass adoption."}),"\n",(0,o.jsx)(i.p,{children:"In the coming articles, we\u2019ll explore how push notifications fit in web3 and dive into the key concepts mentioned earlier."}),"\n",(0,o.jsx)("i",{children:"By Danny Salman"})]})}function u(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},81599:(e,i,t)=>{t.d(i,{A:()=>o});const o=t.p+"assets/images/cover-image-9617fd669d678e51571270e2a096a53c.webp"},428843:(e,i,t)=>{t.d(i,{A:()=>o});const o=t.p+"assets/images/cover-image-9617fd669d678e51571270e2a096a53c.webp"},560447:(e,i,t)=>{t.d(i,{A:()=>o});const o=t.p+"assets/images/image-1-45d1b6bb959290faf64daadc9b2589f7.webp"},950846:(e,i,t)=>{t.d(i,{A:()=>o});const o=t.p+"assets/images/image-2-d3cebfff00e686b09201ee56e4edac03.webp"},28453:(e,i,t)=>{t.d(i,{R:()=>a,x:()=>r});var o=t(296540);const n={},s=o.createContext(n);function a(e){const i=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),o.createElement(s.Provider,{value:i},e.children)}}}]);