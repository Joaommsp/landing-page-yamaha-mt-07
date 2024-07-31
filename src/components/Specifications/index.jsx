import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Icons } from "../../assets/images/svg/icons/icons";
import Gallery from "../../assets/images/gellery/exportGallery";
import MtLogo from "../../assets/images/mtLogo.png";

import {
  SpecificationElement,
  SpecificationTextContent,
  Title,
  BikeName,
  VersionSellectButtons,
  SpecificationsBtn,
  GalleryContainer,
  BikeData,
} from "./styles";

gsap.registerPlugin(ScrollTrigger);

function Specifications() {
  useEffect(() => {
    gsap.utils.toArray(".title, .bikeDataTitle").forEach((item) => {
      gsap.fromTo(
        item,
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: "top 40%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  useEffect(() => {
    gsap.utils.toArray(".statValue").forEach((item) => {
      gsap.fromTo(
        item,
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <>
      <SpecificationElement>
        <SpecificationTextContent>
          <Title className="title">MASTER OF TORQUE</Title>
          <BikeName>MT-07</BikeName>
          <VersionSellectButtons>
            <button className="versionBtn">2024</button>
            <button className="versionBtn slect">2025</button>
          </VersionSellectButtons>
          <SpecificationsBtn>
            <span>view specifications</span>
            <img src={Icons.ArrowRightShort} alt="" />
          </SpecificationsBtn>
        </SpecificationTextContent>
        <GalleryContainer>
          <div className="gallery">
            <img className="galleryImage" src={Gallery.image02} alt="" />
            <img className="galleryImage" src={Gallery.image03} alt="" />
            <img className="galleryImage" src={Gallery.image01} alt="" />
          </div>
        </GalleryContainer>
      </SpecificationElement>
      <BikeData>
        <div className="bikeDataText">
          <h2 className="bikeDataTitle">
            FIND YOUR<strong> MYSTERIOUS SIDE</strong> MT-07
          </h2>
          <p className="bikeDataDescription">
            MT-07 Since its launch, with over 160,000 units sold, the MT-07
            ranks number 1 in its class. With a 690cc CP2 engine, generous
            torque, compact and nimble chassis and excellent flexibility, it`s
            impossible not to fall in love with Yamaha`s best-selling Hyper
            Naked model. Show less
          </p>
          <div className="statsContainer">
            <div className="stat">
              <span className="statValue">689cc</span>
              <span className="statName">Capacity</span>
            </div>
            <div className="stat">
              <span className="statValue">74.8</span>
              <span className="statName">Horse Power</span>
            </div>
            <div className="stat">
              <span className="statValue">6.9</span>
              <span className="statName">kgf.m</span>
            </div>
          </div>
        </div>
        <div className="logoMtContainer">
          <img className="logoMT" src={MtLogo} alt="Logo Master of Torque" />
        </div>
      </BikeData>
    </>
  );
}

Specifications.propTypes = {};

export default Specifications;
