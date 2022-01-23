import React from "react";
import "../assets/css/header.css";
import swap from "../assets/image/swap1.jpeg";
import ankur from "../assets/image/ank1.jpeg";
import hand from "../assets/image/hands.png";
import t1 from "../assets/image/t1.jpeg";
import t2 from "../assets/image/t2.jpeg";
import alley from "../assets/image/alley.jpeg";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { ImMail } from "react-icons/im";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-img-container">
        <div className="image-item">
          <img src={swap} alt="" />
        </div>
        <div className="image-item">
          <img src={hand} alt="" />
        </div>
        <div className="image-item">
          <img src={ankur} alt="" />
        </div>
      </div>
      <div className="header-describe">
        <div className="header-describe-contain">
          <span>Hey Ankur,</span>
          <br></br>
          <br></br>
          Thank you for taking your time and visiting the website.<br></br>
          <br></br>I know you might be wondering, who is this guy? what is this
          website? what does he want?
          <br></br>
          <br></br>
          Below I answer all three questions.
        </div>
      </div>
      <div className="btn-group">
        <button className="btn blue">Who am I </button>
        <button className="btn sky">Epic Back Story</button>
        <button className="btn pink">Epic Perposal</button>
      </div>
      <div className="who-i-am-parent">
        <div className="child-1">
          <span>Who am I?</span> <br></br> <br></br> My name is Swapnasagar and
          I am one of the co-founders of NFT Alley, a multichain NFT
          marketplace.<br></br> <br></br> I have lead multiple technical teams
          over the last 13 years in tech giants such as Nokia, Nasdaq and Visa.
          <br></br> <br></br>
          In short I am passionate about technology and building stuff.
        </div>
        <div className="child-2">
          <a
            href="https://mobile.twitter.com/im_swapnasagar"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaTwitter size="50px" />
          </a>
          <a
            href="https://in.linkedin.com/in/swapnasagar-pradhan-724b2649?trk=author_mini-profile_title"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaLinkedin size="50px" />
          </a>
          <a href="mailto:" target={"_blank"} rel="noreferrer">
            <ImMail size="50px" />
          </a>
        </div>
      </div>
      <div className="who-i-am-parent">
        <div className="epic-child-2">
          <img src={t1} alt="" />
          <img src={t2} alt="" />
        </div>
        <div className="child-1">
          <span>Epic Back story</span> <br></br> <br></br>I have been following
          you for quite some time now. Ever since I co-founded NFT Alley back in{" "}
          {"December 2020"}, you and your start up course have been a great
          influence on my journey.
          <br></br> <br></br>
          Right from formulating the idea, to forming the team to getting the
          funding, at every step of the way you have been a guiding force
          through your courses, tweets, Youtube videos and recently your book Do
          Epic shit.
          <br></br> <br></br>I am also keenly following your tweets about web3
          and NFTs, like the time when you mentioned Shuja(the person who
          created a rap song for you) to create an NFT of the rap song.
          <br></br>
          <br></br>
          So I immediately knew I wanted to work with you since you are
          interested in something I am passionate about.
          <br></br>
          <br></br>
          And when you posted the tweet below, I am like alright, this is my
          chance.
          <br></br>
          <br></br>
          But unfortunately I could not grab your attention. I did try a couple
          more times via twitter but I was lost in the crowd. Then I asked
          myself what Ankur would do in this case?
          <br></br>
          <br></br>
          After a few brainstorming sessions, I decided to approach you via this
          website. So below I have put together a proposal on how NFT Alley and
          I can help you in your web3 and NFT related endeavours.
        </div>
      </div>
      <div className="who-i-am-parent">
        <div className="child-1">
          <span>Epic Proposal</span> <br></br> <br></br> The creator economy is
          booming and in India without a doubt you are one of the front runners.
          I think the next logical move for you would be to move towards
          NFTs(you already know it, obviously!), and lead the path for the mass
          adoption of web3 and the related technologies in the country.<br></br>{" "}
          <br></br> I really liked the way you launched and marketed your first
          book “Do Epic Shit”. Signed copies with hidden easter eggs..that was
          such a hit on Twitter. I'm sure you've considered doing something
          similar with the NFTs already.
          <br></br> <br></br>
          So I invite you to try NFT Alley as the marketplace for minting your
          collection. I have a couple of great ideas for minting your own
          collection with great utilities for each of those NFTs.
        </div>
        <div className="child-2"></div>
      </div>
      <div className="who-i-am-parent">
        <div className="child-1">
          <span>Why NFT Alley?</span> <br></br> <br></br>
          {"->"} NFT Alley is a fully functional multi-chain marketplace. It is
          already live on BSC and Heco chains.
          <br></br> <br></br>
          {"->"} The code base is very flexible and can go live on any EVM
          compatible chain within a matter of days.
          <br></br>
          <br></br>
          {"->"} So whether you want to mint on BSC, Ethereum, Luna or Avalanche
          or any other EVM compatible chain, we can seamlessly do that.
          <br></br>
          <br></br>
          One more key advantage: Partnership with Frameboxx, a pioneer in the
          Indian Animation and Visual Effects industry. Frameboxx students have
          worked with some of the biggest hollywood and bollywood blockbusters.
          <br></br>
          As a result of this partnership, we have access to top tier talent to
          create world class art. So If you have a concept, we have the talent
          to turn it into a work of art.
        </div>
        <div className="child-2">
          <img
            src={alley}
            alt=""
            style={{ width: "600px", marginTop: "60px" }}
          />
        </div>
      </div>
      <div className="who-i-am-parent">
        <div className="child-1">
          So Ankur, let me know what do you think? If you feel this is something
          worth your time exploring, I would love to show you our platform.
          Kindly reply either to my email or connect with me on Twitter.
          <br></br>
          <br></br>
          <br></br>
          Looking forward to hearing from you. <br></br>
          <br></br>Cheers to doing epic shit,<br></br> Swapnasagar,<br></br>{" "}
          NftAlley.io
        </div>
      </div>
    </div>
  );
};

export default Header;
