import React,{useState,useEffect} from 'react';
import styled, { css } from 'styled-components';
import {Section, SectionFS,SectionHero, SectionFSHero, Content, Item, ItemH, A,LI,ItemBreak, WaveOuter, WaveInner, Arc, H1, H2, H3, Image, P, Span, Anchor, Button, Showoff, FormSubmision, Input, TextField,DottedSection} from 'components/SharedStyling';
import Wave from 'react-wavify';
import Medium from 'components/Medium';

import ScrollTrigger from 'react-scroll-trigger';
import Carousel from 'react-elastic-carousel';

import { FaCheckCircle, FaSeedling } from 'react-icons/fa';
import { IoMdRocket } from 'react-icons/io';
import { BsChevronExpand, BsChevronUp, BsChevronDown } from 'react-icons/bs';
import { VscClose } from 'react-icons/vsc';
import { RiHeartsFill } from 'react-icons/ri';
import { GiReceiveMoney } from 'react-icons/gi';

import {MdPersonPin} from 'react-icons/md';
import './carousel.css';

const Gov=()=>{
// for checking2

  const valuee=document.getElementsByClassName('Roles');
  console.log("valuee",valuee)
  const [showAnswers, setShowAnswers] = React.useState([]);
  const [width, setWidth] = useState(window.screen.availWidth);
  console.log(width);
  useEffect(() => {
    setWidth(window.screen.availWidth);
    console.log(width);
  });
  React.useEffect(() => {
  });

  const toggleShowAnswer = (id) => {
    let newShowAnswers = [...showAnswers];
    newShowAnswers[id] = !newShowAnswers[id];

    setShowAnswers(newShowAnswers);
  }
  const pushDeligatees=[
    {
      name:"Name Here"
    },
    {
      name:"Name Here"
    },
    {
      name:"Name Here"
    }
  ]
  const FAQS = [
    {
      question: "WHAT ARE PUSH DELEGATES?",
      renderAnswer: () => (
        <Answer>
          <Span>Ethereum Push Notification Service (EPNS) is a decentralized protocol allowing Ethereum users to receive notifications for on-chain or off-chain activity.</Span>
          <Span>EPNS allows Web3 actors (users, dapps, service providers) to create notifications that are can be based on any off chain or on chain logic that can be triggered via smart contract, backend or dApps. These come from open communciation network (push nodes) and are tied to wallet addresses allowing any crypto wallet, frontend or infra service to display it to Web3 users.</Span>
        </Answer>
      )
    },
   
      {
        question: "WHAT ARE PUSH NOMINEES?",
        renderAnswer: () => (
          <Answer>
            <Span>Ethereum Push Notification Service (EPNS) is a decentralized protocol allowing Ethereum users to receive notifications for on-chain or off-chain activity.</Span>
            <Span>EPNS allows Web3 actors (users, dapps, service providers) to create notifications that are can be based on any off chain or on chain logic that can be triggered via smart contract, backend or dApps. These come from open communciation network (push nodes) and are tied to wallet addresses allowing any crypto wallet, frontend or infra service to display it to Web3 users.</Span>
          </Answer>
        )
      },

      {
        question: "HOW CAN I BECOME A PUSH NOMINEE?",
        renderAnswer: () => (
          <Answer>
            <Span>Ethereum Push Notification Service (EPNS) is a decentralized protocol allowing Ethereum users to receive notifications for on-chain or off-chain activity.</Span>
            <Span>EPNS allows Web3 actors (users, dapps, service providers) to create notifications that are can be based on any off chain or on chain logic that can be triggered via smart contract, backend or dApps. These come from open communciation network (push nodes) and are tied to wallet addresses allowing any crypto wallet, frontend or infra service to display it to Web3 users.</Span>
          </Answer>
        )
      },

      {
        question: "WHAT IF DON'T WISH TO BE A PUSH NOMINEE?",
        renderAnswer: () => (
          <Answer>
            <Span>Ethereum Push Notification Service (EPNS) is a decentralized protocol allowing Ethereum users to receive notifications for on-chain or off-chain activity.</Span>
            <Span>EPNS allows Web3 actors (users, dapps, service providers) to create notifications that are can be based on any off chain or on chain logic that can be triggered via smart contract, backend or dApps. These come from open communciation network (push nodes) and are tied to wallet addresses allowing any crypto wallet, frontend or infra service to display it to Web3 users.</Span>
          </Answer>
        )
      },

      {
        question: "WHERE SHOULD I START?",
        renderAnswer: () => (
          <Answer>
            <Span>Ethereum Push Notification Service (EPNS) is a decentralized protocol allowing Ethereum users to receive notifications for on-chain or off-chain activity.</Span>
            <Span>EPNS allows Web3 actors (users, dapps, service providers) to create notifications that are can be based on any off chain or on chain logic that can be triggered via smart contract, backend or dApps. These come from open communciation network (push nodes) and are tied to wallet addresses allowing any crypto wallet, frontend or infra service to display it to Web3 users.</Span>
          </Answer>
        )
      }
     

   ]

   const [classShow, setClassShow] = React.useState("Show");

   const handleScroll = React.useCallback((event) => {
     let scrollTop = window.scrollY;
     console.log(scrollTop,"classShow");
       //console.log(scrollTop );  //1,2,...100,...200...etc (in px)
 
       if (scrollTop >=5100 ) {
         setClassShow("");
       }
       else setClassShow("Show");
 });
 
 
 const [animateHero, setAnimateHero] = React.useState(true);


   React.useEffect(() => {
     window.addEventListener("scroll", handleScroll);
    
     return () => {
       window.removeEventListener("scroll", handleScroll, false);
     };
   }, [classShow]);
    return(
        <>
        <ScrollTrigger onEnter={() => {setAnimateHero(true)}} onExit={() => {setAnimateHero(false)}}>
           <SectionHero padding="50px 0px 80px 0px">
        {/* <SectionFSHero id="hero" padding="15px 0px 0px 0px"> */}
        <Content className="contentBox">
          <Item margin="0px 20px">
            <H1>Governance</H1>
            <Span color="#fff" margin="-20px 0 0 0" size="1rem">Defines Governance</Span>
          </Item>
        </Content>
        <WaveOuter>
            


            <WaveInner>
              <Wave fill='#e20880'
                paused={!animateHero}
                options={{
                  height: 20,
                  amplitude: 35,
                  speed: 0.25,
                  points: 3
                }}
              />
            </WaveInner>
            <WaveInner>
              <Wave fill='#35c5f3'
                paused={!animateHero}
                options={{
                  height: 40,
                  amplitude: 30,
                  speed: 0.35,
                  points: 3
                }}
              />
            </WaveInner>
           
          </WaveOuter>
          {/* </SectionFSHero> */}
      </SectionHero>
      </ScrollTrigger>
    
          {/* Start What is Governance */}
          <Section id="featured" theme="#e20880" gradient="linear-gradient(0deg, #674c9f 0%, rgba(226,8,128,1) 100%)" padding="0px 0px 80px 0px" >
          
      
          
      <GovernanceSection id="governance"  style={{background:"linear-gradient(180deg, #35C5F3 0%, #674C9F 100%)"}}>

        
         
        <GovernanceHeading >
        <item style={{margin:"0"}}><h4 style={{color:"#fff"}}><GovernanceSpan style={{background:"black"}}>WHAT IS </GovernanceSpan>GOVERNANCE?</h4></item>
        <item>
            <p style={{color:"#fff"}}>WHAT IS GOVERNANCE</p>
        </item>            
        </GovernanceHeading>
        <Content className="contentBox" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <DottedSection>
        TO Give the community a sense of ownership and responsibility which comes with governance. It’s not just a mere tool, it's an ideology which we support and want to implement
        </DottedSection>
       
        </Content>
        <GovernanceHeading flex="flex-end">
        <item><h4 style={{color:"#fff"}}><GovernanceSpan style={{background:"black"}}>WHY </GovernanceSpan>GOVERNANCE?</h4></item>
        <item>
            <p style={{color:"#fff"}}>WHY GOVERNANCE</p>
        </item>            
        </GovernanceHeading>
       
        <Content className="contentBox" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <DottedSection>
        Give the community a sense of ownership and responsibility which comes with governance. It’s not just a mere tool, it's an ideology which we support and want to implement.

        </DottedSection>
       
        </Content>
        
      </GovernanceSection>
         

          <WaveOuter>
          <WaveInner>
            <Wave fill='#fff'
              paused={true}
              options={{
                height: 20,
                amplitude: 30,
                speed: 0.35,
                points: 3
              }}
            />
          </WaveInner>
        </WaveOuter>
         
          </Section>

          {/* End What is Governance */}
          {/* Start Future Governance */}
          <Section theme="#fff" padding="0px 0px 50px 0px">
              
        
          <GovernanceSection id="governance"  >
          <Content className="contentBox" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <GovernanceImgFixed src='/governance/Group 6 (1).png' alt=""/>
              </Content>
         
            
              <GovernanceHeading >
        <item style={{margin:"0"}}><h4 style={{color:"black"}}><GovernanceSpan style={{background:"#674C9F"}}>FUTURE </GovernanceSpan> OF GOVERNANCE?</h4></item>
        <item>
            <p style={{color:"gray"}}>WAY TO PROGRESSIVE DECENTRALIZATION
</p>
        </item>            
        </GovernanceHeading>
        {/* <GovernanceHeading >
        <item><h4><GovernanceSpan style={{background:"#674C9F"}}>FUTURE  </GovernanceSpan> OF GOVERNANCE?</h4></item>
        <item>
            <p>WAY TO PROGRESSIVE DECENTRALIZED </p>
        </item>            
        </GovernanceHeading> */}
        <Content className="contentBox" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
              <GovernanceImg src='/governance/Vectorcurve.png' alt=""/>
        </Content>
      </GovernanceSection>
          </Section>
          {/* End Future Governance */}



         {/* Start process Governance */}
           



      <Section id="solution"  padding="20px 0px 0px 0px" theme="#fff">
      <Section id="solution" theme="#fff"  padding="20px 0px 0px 0px" overflow="hidden" margin="0px 40px 120px">

                
      <GovernanceHeading >
        <item><h4>GOVERNANCE<GovernanceSpan  style={{background:"#e20880"}}>PROCESS </GovernanceSpan>  </h4></item>
        <item>
            <p>POPOSAL.DISCUSSION.GOVERNANCE</p>
        </item>              
        </GovernanceHeading>

     

        <Content >
          <Item align="stretch" justify="flex-start" margin="0px 20px">
            {/* THE PROBLEM */}

            




            {/* <Item align="flex-start" padding="0px 0px 40px 0px">
              <Item align="stretch" justify="flex-start" margin="0px 0px 20px 0px">
                <H2 textTransform="uppercase" spacing="0.1em">
                  <Span weight="200">GOVERNANCE </Span><Span bg="#e20880" color="#fff" weight="600" padding="0px 8px">PROCESS</Span>
                </H2>
                <H3 maxWidth="400px">PROPOSAL.DISCUSSION.GOVERNANCE</H3>
              </Item>
              </Item> */}
           
              <Solution margin="0px 0px">
               

                <ItemH margin="-20px" align="stretch" columnGap="40px" rowGap="0px">


                 
                <EmphasisBlock margin="10px 10px">

                  <Content className="contentBox" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                          <ProposalImage src='/governance/proposal.png' alt=""/>
                    </Content>

                  <EmphasisText>
                   PROPOSAL
                  </EmphasisText>
                  <EmphasisTextSmall>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</EmphasisTextSmall>
                </EmphasisBlock>




                <EmphasisBlock margin="10px 10px">

                  <Content className="contentBox" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                          <DisImage src='/governance/discuss1.svg' alt=""/>
                    </Content>

                  <EmphasisText>
                   DISCUSSION
                  </EmphasisText>
                  <EmphasisTextSmall>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</EmphasisTextSmall>
                </EmphasisBlock>




                <EmphasisBlock margin="10px 10px">

                  <Content className="contentBox" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                          <GovImage src='/governance/governance1.svg' alt=""/>
                    </Content>

                  <EmphasisText>
                   GOVERNANCE
                  </EmphasisText>
                  <EmphasisTextSmall>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</EmphasisTextSmall>
                </EmphasisBlock>




                </ItemH>

              </Solution>
            </Item>
        </Content>
        </Section>

        <WaveOuter>
          <WaveInner>
            <Wave fill='#e20880'
              paused={true}
              options={{
                height: 20,
                amplitude: 30,
                speed: 0.35,
                points: 3
              }}
            />
          </WaveInner>
        </WaveOuter>


      </Section>

          {/* End process Governance */}




         {/* Start Learnmore Governance */}
         <Section theme="#e20880" padding="0px 0px 80px 0px" >

         <WaveOuter>
          <WaveInner>
            <Wave fill='#fff'
              paused={true}
              options={{
                height: 20,
                amplitude: 30,
                speed: 0.35,
                points: 3
              }}
            />
          </WaveInner>
        </WaveOuter>
         

        <Section id="solution"   padding="20px 0px 0px 0px" overflow="hidden" margin="40px">

        

<GovernanceHeading >
  <item><h4><GovernanceSpan  style={{background:"#000"}}>LEARN MORE </GovernanceSpan> <GovernanceSpan>ABOUT GOVERNANCE!</GovernanceSpan>  </h4></item>

  <H3 color="#fff" margin="0px 0px 0px 0px">MEDIUM ARTICLES</H3>             
  </GovernanceHeading>


        <ContentMore>


          <Item align="stretch" justify="flex-start" margin="0px 0px">
            {/* <Item align="stretch" justify="flex-start" margin="0px 0px 60px 0px">
              <H2 textTransform="uppercase" spacing="0.1em">
              <Span bg="#000" color="#fff" weight="600" padding="0px 8px">LEARN MORE</Span><Span weight="200" color="#fff">ABOUT GOVERNANCE</Span>
              </H2>
              <H3 color="#fff">MEDIUM ARTICLES</H3>
            </Item> */}


            <Medium numberOfPosts={3} />


            <Item margin="0px 0px 40px 0px" align="flex-end" justify="space-between">
              <Anchor
                href="https://medium.com/ethereum-push-notification-service"
                target="_blank"
                title="Read Medium Blog of Ethereum Push Notification Service"
                bg="#000"
                color="#fff"
                spacing="0.2em"
                size="0.8rem"
                margin="10px 0px"
                radius="4px"
              >
                Read More
              </Anchor>
            </Item>
            

          </Item>
        </ContentMore>
        </Section>

      </Section>


         
          <Section theme="#fff" padding="0px 0px 50px 0px" className="RolesContainer">
          
          <GovernanceSection id="governance"  >
        
         
       
          <GovernanceHeading >
         
          
        <item><h4> GOVERNANCE <GovernanceSpan  style={{background:"#35C5F3"}}>ROLES  </GovernanceSpan> </h4></item>
        <item>
            <p>LOREM IPSUM </p>
           
        </item>   
              
        </GovernanceHeading>
        
      </GovernanceSection>
      
       
          </Section>



          <Section theme="#F4F4F4" padding="0px 0px 50px 0px">
          <WaveOuter bottom="auto" top="70px">
          <WaveInner transform="rotate(180deg)">
            <Wave fill='#fff'
              paused={true}
              options={{
                height: 20,
                amplitude: 30,
                speed: 0.35,
                points: 3
              }}
            />
          </WaveInner>
        </WaveOuter>
          </Section>



          {/* End Learnmore Governance */}

        
         {/* Start pushDeligatees Governance */}
         <Section theme="#F4F4F4" padding="0px 0px 50px 0px">
          
         <WaveOuter>
          <WaveInner>
            <Wave fill='#fff'
              paused={true}
              options={{
                height: 20,
                amplitude: 30,
                speed: 0.35,
                points: 3
              }}
            />
          </WaveInner>
        </WaveOuter>
          <GovernanceSection id="governance" style={{display:"flex",margin:"0",padding:"5rem 2rem",alignItems:"center"}}   >
        
         
        <GovernanceHeading >
        <item><h4> MEET OUR  <GovernanceSpan  style={{background:"#674C9F"}}>PUSH DELEGATEES  </GovernanceSpan> </h4></item>
        <item>
            <p>Active community members who have at least 75,000 $PUSH delegated to them. They will be able to create proposals on Snapshot that are approved on the forum </p>
        </item>            
        </GovernanceHeading>
        {/* <Content className="contentBox" style={{display:"flex",margin:"0",padding:"0",alignItems:"center"}}> */}
        <Carousel itemsToShow={width < 500 ? 1 : 4}>
            {
              pushDeligatees.map(({name})=>(
                <SliderCard>
              <div className='img'/>
              <div className='text'>{name}</div>
            </SliderCard>
              ))
            }
          </Carousel>
          <NomineeButton>Submit Your Nomination <img src="/governance/arrow_right.png" style={{height:"10px"}}/> </NomineeButton>
        {/* </Content> */}
      </GovernanceSection>
      
       
          </Section>
          {/* End pushDeligatees Governance */}



             {/* Start faq Governance */}


             




             <Section theme="#fff">


             <Section id="solution"   padding="20px 0px 20px 0px" overflow="hidden" margin="40px">

<GovernanceHeading >
  <item><h4><GovernanceSpan>FAQs</GovernanceSpan>  </h4></item>

  <H3 color="#858585" margin="0px 0px 0px 0px">LOREM IPSUM</H3>             
  </GovernanceHeading>



             <Section margin="0px 0px 0px 30px">
        <Content>
        
          {/* <Item align="stretch" justify="flex-start" margin="0px 20px 40px 20px">
            <Item align="stretch" align="flex-start" margin="0px 0px 20px 0px">
              <H2 textTransform="uppercase" spacing="0.1em">
                <Span bg="#e20880" color="#fff" weight="600" padding="0px 8px">FAQs</Span>
              </H2>
              <H3>LOREM IPSUM</H3>
            </Item> */}

            {/* Questions and answers */}
            <Item align="stretch" margin="0px 0px 0px 0px">
              {
                FAQS.map(({question, renderAnswer}, index) => (
                  <QnAItem key={index}>
                    <Question
                      onClick={() => {toggleShowAnswer(index)}}
                      hover="#e20880"
                    >
                      <Span>
                        {question}
                      </Span>
                      <BsChevronExpand size={20} color={"#ddd"}/>
                    </Question>

                    {showAnswers[index] &&
                      renderAnswer()
                    }
                  </QnAItem>
                ))
              }
            </Item>
            {/* Questions and answers */}
          {/* </Item> */}
        </Content>
        </Section>
        </Section>
        
      </Section>


          {/* End faq Governance */}
       
        </>

    )
}



const SliderCard=styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    min-width: 310px;
    margin: 2rem;
    min-height:400px;
    background-image: linear-gradient(360deg,#E20880,#674C9F,#35C5F3);
    border-radius: 8px;
    .img{
      border-radius: 8px;
      margin: 10px;
      flex:7;
      background-color: white;
      width: 94%;
      height: 100%;
    }
    .text{
      flex:1;
      font-size:1.2rem;
      font-family: Sourcs sans pro;
      color: white;
      font-weight: bolder;
    }
`;
const GovernancePushNomineeCard=styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    background-image: linear-gradient(to bottom,#35C5F3,#E20880);
    min-width: 250px;
    min-height: 300px;

    h4{
      letter-spacing: 0.3rem;
      font-family: Sourcs sans pro;
    }
`;

const GovernanceRolesSection=styled.div`
  display: flex;
  width: 80%;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  & ${Item}{
    align-items:flex-start;
    justify-content:center;
    padding: 0 0 0 5rem;
    
    flex:2;
    background-image: linear-gradient(to bottom,#35C5F3 6.48%,#E20880 106.48%);
    align-self:content;
    min-height: 300px;
    display: flex;

    :after {
    content: '';
    position: absolute;
    bottom: -3rem; left: -2.4rem;
    border-radius:50%;
    border-top: 80px solid white;
    border-left: 80px solid white;
    width: 0;
  }
    :before {
    content: '';
    position: absolute;
    top: -2rem; left: -2.4rem;
    border-radius:50%;
    border-top: 80px solid white;
    border-left: 80px solid white;
    width: 0;
  
  }
  }
  & ${GovernancePushNomineeCard}{
    flex:1.3;
    background: black;
    position: relative;
    /* -webkit-clip-path: polygon(83% 0, 100% 13%, 100% 83%, 87% 100%, 0 100%, 0% 60%, 0 0); */
    :after {
    content: '';
    position: absolute;
    bottom: -3rem; right: -2.4rem;
    border-radius:50%;
    border-top: 80px solid white;
    border-left: 80px solid white;
    width: 0;
  }
    :before {
    content: '';
    position: absolute;
    top: -2rem; right: -2.4rem;
    border-radius:50%;
    border-top: 80px solid white;
    border-left: 80px solid white;
    width: 0;
  
  }
  
  h2{
    color:'#E20880';
    font-size: 1.5rem;
    font-family: Sourcs sans pro;

  }

  p{
    font-size:1.2rem;
    font-family: Sourcs sans pro;
  }

  @media(max-width:600px){
    flex-direction: column;
  }
`;
const GovernanceImg=styled.img`
   height: auto;
   width: auto;
   padding: 2rem;

   @media(max-width:600px){
     height: 15rem;
     width: 15rem;
     padding:3rem 0;
   }
`;
const GovernanceImgFixed=styled(GovernanceImg)`
   height: 20rem;
   width: 20rem;
   padding: 5rem;

   @media(max-width:600px){
     padding: 3rem 0;
   }
`;
const GovernanceHeading=styled.div`
  display: flex;
  padding: 2rem;
  justify-content:  ${props => props.flex || 'flex-start'};
  align-items:  ${props => props.flex || 'flex-start'};
  flex-direction: column;
  
  h4{
    color:black;
    font-size: 40px;
    font-family: Sourcs sans pro;
    font-weight:400px;
    margin: 15px 0px 15px 0;
    @media(max-width:600px){
     font-size:1.2rem;
   }
  }
  p{
    color: gray;
    font-size:1.5rem;
    margin:0;
    font-family: Sourcs sans pro;
    @media(max-width:600px){
     font-size:1.2rem;
   }
  }
`;

const GovernanceSection=styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 2rem 2rem;
`;

const GovernanceItem=styled.div`
  display: flex;
  align-self:stretch;
  justify-content: center;
  align-items: center;
  padding:2rem;
  width: 100%;
`;

const GovernanceSomethingBox=styled.div`
  display: flex;
  background:#C4C4C4;
  justify-content: center;
  align-items:center;
  height: 25rem;
  width: 80%;
`;

const GovernanceSpan=styled.span`
    background:${props => props.backgroundColor || '#E20880'} ;
    padding: 10px;
    font-family:Sourcs sans pro;;
    color:white;
    margin: 0 1rem 0 0.21rem;
    font-weight:450px ;

    @media(max-width:600px){
     font-size:1.2rem;
   }
`;





const Solution = styled(ItemH)`
  @media (max-width: 940px) {
    flex-direction: column;

    ${Item} {
      padding:0px 20px;
    }
  }

  @media (max-width: 768px) {
    ${Item} {
      padding: 0px;
    }
  }
`

const ShadowBox = styled(Item)`
  border-radius: 12px;
  border: ${props => props.border || '0px solid transparent'};
  min-width: 280px;
  overflow: hidden;
`



// FAQs Styling



const NomineeButton=styled(Button)`
  align-items:stretch;
  background: black;
  color: white;
  width: 350px;
  font-size:1.3rem;
  margin-top:2rem;
  display: flex;
  border-radius:10px;
  align-items:center;
  justify-content:space-around;
  `;
const Question = styled(Button)`
  align-items: stretch;
  align-self: stretch;
`

const Answer = styled(Item)`
  align-items: stretch;
  align-self: stretch;

`

const QnAItem = styled(Item)`
  align-items: stretch;
  align-self: stretch;
  margin: 15px 0px;
  border: 1px solid #fafafa;
  border-radius: 10px;
  box-shadow: 0px 5px 20px -10px rgb(0 0 0 / 0.20);
  overflow: hidden;

  & ${Question} {
    background: transparent;
    justify-content: flex-start;

    & ${Span} {
      font-weight: 400;
      font-family: Sourcs sans pro;
      letter-spacing: 0.2em;
      margin-left: 10px;
      flex: 1;
    }

    &:hover {
      & ${Span} {
        color: #fff;
      }
    }
  }

  & ${Answer} {
    border: 1px solid #e6e6e6;
    border-top: 1px solid #e6e6e6;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 10px 15px;
    align-items: flex-start;
    background: rgb(31,23,47);
    background: linear-gradient(283deg,rgba(31,23,47,1) 0%,rgba(62,9,40,1) 45%,rgba(17,58,72,1) 100%);

    & ${Span} {
      line-height: 1.5em;
      margin: 10px;
      color: #fff;
      font-size: 1.05em;
    }
  }
`

const AMod = styled(A)`
  color: #fff;
  font-weight: 400;
  font-family: Sourcs sans pro;
  text-decoration: underline;
`

const LIMod = styled(LI)`
  color: white;
`

const BoldText = styled.span`
  font-weight: bold;
  font-family: Sourcs sans pro;
`;



// emphasis block


const ProposalImage=styled.img`
   height: auto;
   width: auto;

   @media(max-width:600px){
     height: 15rem;
     width: 15rem;
   }
`;



const DisImage=styled.img`
   height: auto;
   width: auto;

   @media(max-width:600px){
     height: 15rem;
     width: 15rem;
   }
`;


const GovImage=styled.img`
   height: auto;
   width: auto;

   @media(max-width:600px){
     height: 15rem;
     width: 15rem;
   }
`;






const EmphasisBlock = styled(Item)`
align: center;
  min-width: 280px;

`

const EmphasisImage = styled(Item)`
  padding: 20px;
  margin: 20px 0px 20px;
`

const EmphasisText = styled(Span)`
  font-size: 1.1rem;
  font-family: Sourcs sans pro;
  font-weight: 400;
  text-align: center;
  padding: 0px 20px;
`

const EmphasisTextSmall = styled(Span)`
  width: 17vw;
  margin-top: 20px;
  font-size: 1.0rem;
  font-family: Sourcs sans pro;
  font-weight: 250;
  text-align: center;
  padding: 0px 20px;
`



const ContentMore = styled(Span)`
  margin: 35px;
  font-family: Sourcs sans pro;
`


// 





// 

export default Gov;