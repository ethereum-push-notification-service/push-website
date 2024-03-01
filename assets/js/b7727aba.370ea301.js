"use strict";(self.webpackChunkpush_website=self.webpackChunkpush_website||[]).push([[4270],{679081:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(474848),s=n(28453);n(411470),n(119365);const i={id:"aave-settings-with-showrunners-example",title:"Aave Channel with Channel Settings",hide_title:!0,slug:"./aave-with-showrunners-example",displayed_sidebar:"pushNotificationSidebar",sidebar_position:9,image:"/assets/docs/previews/aave_settings_with_showrunners_example--aave_channel_with_channel_settings.png"},r="Channel Settings using Showrunners",o={id:"notifications/showrunners-scaffold/Examples/aave-settings-with-showrunners-example",title:"Aave Channel with Channel Settings",description:"{AAVE with Showrunners tutorial | Push Notification | Push Documentation}",source:"@site/docs/notifications/03-showrunners-scaffold/03-Examples/10-Showrunner-Example-Aave.mdx",sourceDirName:"notifications/03-showrunners-scaffold/03-Examples",slug:"/notifications/showrunners-scaffold/Examples/aave-with-showrunners-example",permalink:"/docs/notifications/showrunners-scaffold/Examples/aave-with-showrunners-example",draft:!1,unlisted:!1,editUrl:"https://github.com/ethereum-push-notification-service/push-website/blob/main/docs/notifications/03-showrunners-scaffold/03-Examples/10-Showrunner-Example-Aave.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{id:"aave-settings-with-showrunners-example",title:"Aave Channel with Channel Settings",hide_title:!0,slug:"./aave-with-showrunners-example",displayed_sidebar:"pushNotificationSidebar",sidebar_position:9,image:"/assets/docs/previews/aave_settings_with_showrunners_example--aave_channel_with_channel_settings.png"},sidebar:"pushNotificationSidebar",previous:{title:"Price Tracker Channel",permalink:"/docs/notifications/showrunners-scaffold/Examples/price-tracker-with-showrunners-example"},next:{title:"Tutorials",permalink:"/docs/notifications/tutorials"}},l={},c=[{value:"Inside Aave&#39;s Channel Settings.",id:"inside-aaves-channel-settings",level:2},{value:"Pre-requisites",id:"pre-requisites",level:3},{value:"Perform following steps to get started with Channel Settings.",id:"perform-following-steps-to-get-started-with-channel-settings",level:3}];function u(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n,{children:(0,a.jsx)("title",{children:"AAVE with Showrunners tutorial | Push Notification | Push Documentation"})}),"\n","\n","\n",(0,a.jsx)(t.h1,{id:"channel-settings-using-showrunners",children:"Channel Settings using Showrunners"}),"\n",(0,a.jsx)(t.h2,{id:"inside-aaves-channel-settings",children:"Inside Aave's Channel Settings."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"The Aave Channel supports both versions of Aave i.e Aave v2 and v3."}),"\n",(0,a.jsx)(t.li,{children:"Need of the channel : To alert the user of his health factor before Liquidation of his assets starts."}),"\n",(0,a.jsx)(t.li,{children:"You can select a range of Health Factor and if your health factor falls in that range then a notification about your health factor will be sent."}),"\n",(0,a.jsx)(t.li,{children:"Eg : Only send me notification if my health factor is in range of 1.2 to 1.5.\n-Every 3 hours , Aave channel will check for your health factor on both versions and then send/not send notification."}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"In this tutorial, we will only understand the logic part of Aave i.e how Notifications are being triggered in Aave."}),"\n",(0,a.jsx)(t.li,{children:'For step-by-step tutorial of Channel Settings,please refer "Eth Tracker Tutorial(Link here)".'}),"\n",(0,a.jsx)(t.li,{children:'Subscribe to this channel Address [Aave Channel]("app.push.org/channels?channel=0xAA940b3501176af328423d975C350d0d1BaAae50","Aave channel on Push")'}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"perform-following-steps-to-get-started-with-channel-settings",children:"Perform following steps to get started with Channel Settings."}),"\n",(0,a.jsxs)(t.p,{children:['Step 1 : Create a Position on [Aave V3/V2[Mainnet]]("',(0,a.jsx)(t.a,{href:"https://app.aave.com/%22,%22Aave",children:'https://app.aave.com/","Aave'}),' V3 channel on Mainnet") by Supplying and borrowing against some asset.\nStep 2: You should be able to see some health Factor like 1.5 or 1.8.\nStep 3:']}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Create a function called ",(0,a.jsx)(t.code,{children:"getUserSetings()"})," which will have main logic part."]}),"\n",(0,a.jsxs)(t.li,{children:["This function will do following things :","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Fetch Notification setting set by the user."}),"\n",(0,a.jsx)(t.li,{children:'If Channel Settings exist and is enabled by the user then get the "lower" and "upper" range values set by the user and pass the values to the "checkHealthFactor" function with susbcriber\'s address.'}),"\n",(0,a.jsx)(t.li,{children:'If Channel Settings exists but are turned off i.e disabled by the user then pass dummy values of lower and upper values to the "checkHealthFactor" function.\n(Fun Fact : If you have just supplied assets on Aave and have not borrowed against it then you would have a crazy Health Factor > 3 due to which no notifications will be sent.).'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:'while (true) {\n  const userData: any = await userAlice.channel.subscribers({\n    page: i,\n    limit: 30,\n    setting: true,\n  });\n  if (userData.itemcount != 0) {\n    i++;\n    userData.subscribers.map((subscriberObj) => {\n      const userSettings = JSON.parse(subscriberObj.settings);\n      if (userSettings !== null) {\n        status = false;\n        // this.logInfo("User Info" + JSON.stringify(userSettings[0]));\n        userSettings.map(async (settings) => {\n          if (settings.index == 1 && settings.enabled == true) {\n            // Aave user settings Enabled.\n            let temp = userSettings[0];\n            let lowerLimit = JSON.stringify(temp.user.lower);\n            let upperLimit = JSON.stringify(temp.user.upper);\n            this.checkHealthFactor(subscriberObj.subscriber, Number(lowerLimit), Number(upperLimit), simulate);\n          }\n          else if (settings.index == 1 && settings.enabled == false) {\n            //If User settings Exist but is disabled by the user => send normal notification.\n            this.checkHealthFactor(subscriberObj.subscriber, 0, 3, simulate)\n          }\n          // Supply APY code goes here --\x3e\n          //Borrow APY code goes here --\x3e\n        });\n      }\n    })}else{\n      i=1;\n      break;\n    }\n}\n'})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"If Channel Settings dosen't exist then we would just send a normal notification if there Health Factor is in range of 0 to 3."}),"\n",(0,a.jsx)(t.li,{children:"Here if you are wondering why i have set the range as 0 to 3 then the reason is that if you don't borrow against your asset then your asset is completely safe and you need not to worry about anything but if you have borrowed against youe assets then you need to worry about liquidation og your assets."}),"\n",(0,a.jsx)(t.li,{children:"Generally if you borrow then your health decreases and comes in range of 1 to 3 and if your health factor reaches 1 then your assets can get liquidated."}),"\n",(0,a.jsx)(t.li,{children:"In this step we will fetch the Channel Settings of our channel's subscribers."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Step 4:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"In this step we check the health factor of Channel subscribers and then trigger notification on the basis of their upper and lower values set by the user."}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"  public async checkHealthFactor(userAddress, lowerLimit, upperLimit, simulate) {\n    try {\n      const logicOverride =\n        typeof simulate == 'object'\n          ? simulate.hasOwnProperty('logicOverride') && simulate.logicOverride.mode\n            ? simulate.logicOverride.mode\n            : false\n          : false;\n      const simulateApplyToAddr =\n        logicOverride && simulate.logicOverride.hasOwnProperty('applyToAddr')\n          ? simulate.logicOverride.applyToAddr\n          : false;\n      const simulateAaveNetwork =\n        logicOverride && simulate.logicOverride.hasOwnProperty('aaveNetwork')\n          ? simulate.logicOverride.aaveNetwork\n          : false;\n\n      if (!userAddress) {\n        if (simulateApplyToAddr) {\n          userAddress = simulateApplyToAddr;\n        } else {\n          // this.logDebug('userAddress is not defined');\n        }\n      }\n    } catch (err) {\n      this.logError('An error occured while checking health factor');\n      this.logError(err);\n    }\n    try{\n    let aaveV2 = await this.getContract(\n      aaveSettings.aaveLendingPoolDeployedContractMainnet,\n      JSON.stringify(aaveLendingPoolDeployedContractABI),\n    );\n    let aaveV3 = await this.getContract(\n      aaveSettings.aaveV3PoolContractMainnet,\n      JSON.stringify(aaveLendingPoolDeployedContractABI),\n    );\n    // console.log(\"User Address\"+userAddress);\n    //simulate object settings END\n    const aaveV2UserData = await aaveV2?.contract.getUserAccountData(userAddress);\n    const aaveV3UserData = await aaveV3?.contract.getUserAccountData(userAddress);\n    let healthFactorV2 = ethers.utils.formatEther(aaveV2UserData.healthFactor);\n    let healthFactorV3 = ethers.utils.formatEther(aaveV3UserData.healthFactor);\n    // console.log(`HF of ${userAddress} is ${healthFactorV3}`)\n    // this.logInfo('For wallet: %s, Health Factor: %o', userAddress, healthFactor);\n    if (Number(healthFactorV2).toFixed(2) >= lowerLimit && Number(healthFactorV2).toFixed(2) <= upperLimit) {\n      //  this.logInfo(\"Aave v2 Notification sending to \" + userAddress);\n      const precision = CUSTOMIZABLE_SETTINGS.precision;\n      const newHealthFactor = parseFloat(healthFactorV2).toFixed(precision);\n      const title = 'Aave V2 Liquidation Alert!';\n      const message =\n        userAddress +\n        ' your account has healthFactor ' +\n        newHealthFactor +\n        '. Maintain it above 1 to avoid liquidation.';\n      const payloadTitle = 'Aave V2 Liquidity Alert!';\n      const payloadMsg = `Your account on Aave V2 has healthFactor [d:${newHealthFactor}] . Maintain it above 1 to avoid liquidation.`;\n      const notificationType = 3;\n      const tx = await this.sendNotification({\n        recipient: userAddress,\n        title: title,\n        message: message,\n        payloadTitle: payloadTitle,\n        payloadMsg: payloadMsg,\n        notificationType: notificationType,\n        cta: 'https://app.aave.com/#/dashboard',\n        image: null,\n        simulate: simulate,\n      });\n    }\n    if (Number(healthFactorV3).toFixed(2) >= lowerLimit && Number(healthFactorV3).toFixed(2) <= upperLimit) {\n      this.logInfo(\"Aave v3 Notification sending to \" + userAddress);\n      const precision = CUSTOMIZABLE_SETTINGS.precision;\n      const newHealthFactor = parseFloat(healthFactorV3).toFixed(precision);\n      const title = 'Aave V3 Liquidation Alert!';\n      const message =\n        userAddress +\n        ' your account has healthFactor ' +\n        newHealthFactor +\n        '. Maintain it above 1 to avoid liquidation.';\n      const payloadTitle = 'Aave V3 Liquidity Alert!';\n      const payloadMsg = `Your account on Aave V3 has healthFactor [d:${newHealthFactor}] . Maintain it above 1 to avoid liquidation.`;\n      const notificationType = 3;\n      const tx = await this.sendNotification({\n        recipient: userAddress,\n        title: title,\n        message: message,\n        payloadTitle: payloadTitle,\n        payloadMsg: payloadMsg,\n        notificationType: notificationType,\n        cta: 'https://app.aave.com/#/dashboard',\n        image: null,\n        simulate: simulate,\n      });\n    } else {\n      //  this.logInfo(`[Wallet: ${userAddress} is SAFE with Health Factor:: ${healthFactor}`);\n    }\n    return true;\n  }catch(e){\n    this.logInfo(\"Error occured in Aave Liquidity Alert\")\n  }\n}\n"})}),"\n",(0,a.jsx)(t.p,{children:"Step 5 : Our second goal is to give notification about APYs for assets that can be borrowed or supplied to on aave."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"So first we will start by getting all the addresses of assets available on Aave."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:'In the below code,we are quering the addresses of the assets using "getAllReservesTokens" method, it returns a array in which each element is a array itself with two values i.e [assetName,assetAdderss].'}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:'Up next,we have a for loop in which we are quering the data of APR about each asset using "getReserveData" method.\n(APR : It is the rate of interest you get on your asset on yearly basis.\nAPY : It is the compounded rate of interest you get on your assets on yearly basis. )'}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:'let status:boolean = false;\nstatus = await this.getData();\n\npublic async getData(){\n  let aaveV3 = await this.getContract(\n    aaveSettings.aaveV3PoolDataProvider,\n    JSON.stringify(aavePoolDataProviderAbi),\n  );\n  //Re-settings Arrays\n  this.tokens.length = 0;\n  this.supplyApy.length = 0;\n  this.borrowApy.length = 0;\n  let aaveV3Tokens = await aaveV3?.contract.getAllReservesTokens();\n  let RAY = 10 ** 27 // 10 to the power 27\n  let SECONDS_PER_YEAR = 31536000\n\n  for(let i=0;i<aaveV3Tokens.length;i++){\n\n    let aaveV2APR = await aaveV3?.contract.getReserveData(aaveV3Tokens[i][1]);\n    let depositAPR = (aaveV2APR[5] / RAY)\n    let variableBorrowAPR = (aaveV2APR[6] / RAY)\n\n    let depositAPY = (((1 + (depositAPR / SECONDS_PER_YEAR)) ** SECONDS_PER_YEAR) - 1) * 100\n    let variableBorrowAPY = (((1 + (variableBorrowAPR / SECONDS_PER_YEAR)) ** SECONDS_PER_YEAR) - 1) * 100\n    this.tokens.push(aaveV3Tokens[i][0]);\n    this.supplyApy.push((depositAPY).toFixed(2));\n    this.borrowApy.push(variableBorrowAPY.toFixed(2));\n\n    //  console.log(aaveV3Tokens[i][0] + "[" + depositAPY.toFixed(2) + "," + variableBorrowAPY.toFixed(2) + "]");\n\n  }\n\n  return true;\n}\n'})}),"\n",(0,a.jsx)(t.p,{children:"-Aave uses RAY for storing it's numbers and for more precision,as eth uses wei to store decimal and normal values with 18 digits precision,RAY has 27 digit precision due to which we will first convert it into normal format and then perform operations on it."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Next,we are finding the APYs of each assets and pushing it into different arrays which we will use in later stages(Tokens,supplyApy,borrowApy)."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Step 6 : Filtering APYs on the basis of channel settings and send notification."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Let's go back in Step 1 where we were querying Channel Settings and add our logic for getting the Channel setting for Supply APY selected by the user."}),"\n",(0,a.jsx)(t.li,{children:"The Channel setting for Supply Apy will be a number like 1.5 or 2 ."}),"\n",(0,a.jsx)(t.li,{children:"further We will compare APY of an asset with the number opted by the user and if the APY is greater than the user's number then we will add that asset with it's APY in the payload for notification."}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:'if (settings.index == 2 && settings.enabled == true) {\n  let k = 0;\n  let loopCounter = 0;\n  let title = "Aave v3 supply APYs are here!";\n  let message = "Here is a List of Assets that you can supply to on Aave v3";\n  let payloadTitle = "Aave V3 Supply APY Alert!";\n  let payloadMsg = ``;\n  let notificationType = 3;\n  this.supplyApy.map(async (apy) => {\n    //  console.log(apy);\n    if (Number(apy) >= Number(JSON.stringify(settings.user))) {\n      if (loopCounter % 2 == 0 && loopCounter != 1) {\n        let sentence = `${this.tokens[k]}\'s APY :[d:${apy}]%\\t\\t`;\n        payloadMsg += sentence;\n      } else {\n        let sentence = `${this.tokens[k]}\'s APY :[d:${apy}]%\\n`;\n        payloadMsg += sentence;\n      }\n      loopCounter++;\n    }\n    k++;\n  });\n  // console.log("Payload " + payloadMsg)\n  const tx = await this.sendNotification({\n    recipient: subscriberObj.subscriber,\n    title: title,\n    message: message,\n    payloadTitle: payloadTitle,\n    payloadMsg: payloadMsg,\n    notificationType: notificationType,\n    cta: "https://app.aave.com/#/dashboard",\n    image: null,\n    simulate: simulate,\n  });\n}\n'})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"We are using a similar logic for Borrow APY too which can be decoded easily."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:['I hope you enjoyed this tutotial,reach out to [Push Discord]("',(0,a.jsx)(t.a,{href:"https://discord.gg/pushprotocol%22,%22Push",children:'https://discord.gg/pushprotocol","Push'}),' Discord Link") if you stuck somehwere or have any doubts.']}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},119365:(e,t,n)=>{n.d(t,{A:()=>r});n(296540);var a=n(618215);const s={tabItem:"tabItem_Ymn6"};var i=n(474848);function r(e){let{children:t,hidden:n,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(s.tabItem,r),hidden:n,children:t})}},411470:(e,t,n)=>{n.d(t,{A:()=>x});var a=n(296540),s=n(618215),i=n(823104),r=n(956347),o=n(300205),l=n(757485),c=n(231682),u=n(289466);function h(e){var t,n;return null!==(t=null===(n=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=null!=t?t:function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:s}}=e;return{value:t,label:n,attributes:a,default:s}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const s=(0,r.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,l.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,i=d(e),[r,l]=(0,a.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const s=null!==(t=a.find((e=>e.default)))&&void 0!==t?t:a[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:i}))),[c,h]=f({queryString:n,groupId:s}),[g,v]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[s,i]=(0,u.Dv)(n);return[s,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:s}),b=(()=>{const e=null!=c?c:g;return p({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{b&&l(b)}),[b]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error("Can't select invalid tab value="+e);l(e),h(e),v(e)}),[h,v,i]),tabValues:i}}var v=n(992303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=n(474848);function w(e){let{className:t,block:n,selectedValue:a,selectValue:r,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),s=o[n].value;s!==a&&(c(t),r(s))},h=e=>{var t;let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var a;const t=l.indexOf(e.currentTarget)+1;n=null!==(a=l[t])&&void 0!==a?a:l[0];break}case"ArrowLeft":{var s;const t=l.indexOf(e.currentTarget)-1;n=null!==(s=l[t])&&void 0!==s?s:l[l.length-1];break}}null===(t=n)||void 0===t||t.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:h,onClick:u,...i,className:(0,s.A)("tabs__item",b.tabItem,null==i?void 0:i.className,{"tabs__item--active":a===t}),children:null!=n?n:t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:s}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function A(e){const t=g(e);return(0,m.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,m.jsx)(w,{...e,...t}),(0,m.jsx)(y,{...e,...t})]})}function x(e){const t=(0,v.A)();return(0,m.jsx)(A,{...e,children:h(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var a=n(296540);const s={},i=a.createContext(s);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);