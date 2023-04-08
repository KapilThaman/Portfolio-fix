import React from "react";
import { makeStyles } from "@mui/styles";
import { useState } from "react";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import "../App.css";
import { Button } from "@mui/material";
import Canvas from "./Canvas";
import Bloody from "./Bloody";
import ImageParticles from "./ImageParticles";

export default function Introduction() {
  
  const useStyles = makeStyles(() => ({
    maindiv: {
      width: "100vw",
      height: "100vh",
      backgroundColor: "black",
      position: "relative",
    },
    ptag1: {
      textAlign: "left",
      position: "relative",
      top: "-100%",
      fontSize: "1rem",
      paddingTop: "20px",
      color: "#FFD700!important",
      marginBottom: "0px",
    },
    ptag1more: {
      textAlign: "left",
      fontSize: "1rem",
      paddingTop: "20px",
      color: "#FFD700!important",
      marginBottom: "0px",
    },
    buttonimp: {
      position: "absolute",
      top: "20px",
      right: "1vw",
    },
    ptag2: {
      marginLeft: "20px",
      marginTop: "0px!important",
    },
    ptag2black: {
      marginLeft: "20px",
      transformStyle: "preserve-3d",
      marginTop: "0px!important",
      color: "black",
    },
    ptag3: {
      width: "100px",
      marginBottom: "0px",
      fontSize: "1rem",
      color: "#FFD700!important",
    },
    closeh1: {
      display: "flex",
      transformStyle: "preserve-3d",
    },
    closedh1: {
      height: "50px",
      display: "flex",
      alignItems: "end",
      color: "#FFD700!important",
      fontSize: "1rem",
    },
    
    seconddiv: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "start",
      alignItems: "flex-start",
    },
    hi: {
      color: "#FFD700!important",
      fontSize: "85px",
      margin: "0",
      fontWeight: "10000",
      animation: "bounce infinte",
    },
    hiblack: {
      fontSize: "85px",
      margin: "0",
      fontWeight: "10000",
      transformStyle: "preserve-3d",
      animation: "bounce infinte",
      color: "black",
    },
    heading2: {
      fontSize: "1rem",
      color: "#FFD700!important",
      marginTop: "66px",
      marginBottom: 0,
      paddingTop: "100px",
    },
    heading2black: {
      marginTop: "66px",
      marginBottom: 0,
      paddingTop: "100px",
      fontSize: "1rem",
      transformStyle: "preserve-3d",
      color: "black",
    },
    keepleft: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      position: "relative",
      top: "-100%",
      height: "60%",
    },
    heading21: {
      fontSize: "1rem",
      color: "#FFD700!important",
      margin: 0,
      textAlign: "left",
    },
    heading21black: {
      fontSize: "1rem",
      color: "black!important",
      transformStyle: "preserve-3d",
      margin: 0,
      textAlign: "left",
    },
    formmove: {
      textAlign: "left",
      marginTop: "30px",
    },
    addButton: {
      border: "1px solid #0AFDD8!important",
      backgroundColor: "none!important",
      paddingLeft: "30px!important",
      paddingRight: "30px!important",
    },
    addButtonblack: {
      border: "1px solid black!important",
      backgroundColor: "none!important",
      paddingLeft: "30px!important",
      paddingRight: "30px!important",
    },
    btnname: {
      color: "white",
    },
    btnnameblack: {
      color: "black",
    },
    hoverbtn: {
      backgroundColor: "red",
    },
    scroll: {
      color: "#FFD700",
      transformOrigin: "0 0",
      transform: "rotate(90deg)",
    },
    scrollblack: {
      color: "black",
      transformOrigin: "0 0",
      transform: "rotate(90deg)",
    },
    scrolldiv: {
      paddingTop: "30px",
      fontSize: "0.6rem",

      textAlign: "left",
    },
    data: {
      letterSpacing: "1px",
    },
    arrow: {
      marginTop: "102px",
      fontSize: "1rem",
      position: "absolute",
      top: "737px",
      color: "#FFD700",
      transformOrigin: "0 0",
      transform: "rotate(90deg)",
    },
    arrowblack: {
      marginTop: "102px",
      fontSize: "1rem",
      position: "absolute",
      top: "737px",
      color: "black",
      transformOrigin: "0 0",
      transform: "rotate(90deg)",
    },
    projects: {
      height: "100vh",
      width: "100%",
    },
    projectscontainer: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      gap: "90px",
      backgroundColor: "black",
    },
    projectscontainer1: {
      width: "100%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      flexWrap: "wrap",
      backgroundColor: "#F1DC7D",
      gap: "90px",
    },
    div12: {
      height: "327px",
      width: "200px",
      flexBasis: "24%",
      border: "1px solid yellow",
    },
    div111: {
      height: "327px",
      width: "200px",
      flexBasis: "24%",
      border: "1px solid black",
    },
    div2: {
      height: "200px",
      width: "200px",
      flexBasis: "24%",
      border: "1px solid black",
    },
    div3: {
      height: "200px",
      width: "200px",
      flexBasis: "24%",
      border: "1px solid black",
    },
    div4: {
      height: "200px",
      width: "200px",
      flexBasis: "24%",
      border: "1px solid black",
    },
    div5: {
      height: "200px",
      width: "200px",
      flexBasis: "24%",
      border: "1px solid black",
    },
    div6: {
      height: "200px",
      width: "200px",
      flexBasis: "24%",
      border: "1px solid black",
    },
    div7: {
      height: "200px",
      width: "200px",
      flexBasis: "24%",
      border: "1px solid black",
    },
    div8: {
      height: "200px",
      width: "200px",
      flexBasis: "24%",
      border: "1px solid black",
    },
    light1: {
      backgroundColor: "#F1DC7D",
    },
    buttondark: {
      backgroundColor: "black",
      color: "yellow!important",
      border: "1px solid yellow!important",
      position: "absolute",
      transformStyle: "preserve-3d",
      top: "-50px",
      right: "-87vw",
    },
    buttonlight: {
      backgroundColor: "black!important",
      color: "white!important",
      border: "1px solid black!important",
      position: "absolute",
      transformStyle: "preserve-3d",
      top: "-50px",
      right: "-87vw",
      zIndex: 1,
    },

    dark: {
      backgroundColor: "black",
    },
    ptagblack: {
      color: "black",
      transformStyle: "preserve-3d",
    },
    image1: {
      width: "100%",
      height: "100%",
    },
    headingportfolio: {
      justifyContent: "flex-start",
      alignItems: "flex-start",
      display: "flex",
      flexDirection: "column",
    },
    h2main: {
      textAlign: "initial!important",
      color: "#00000!important",
      margin: 0,
    },
    h2main1: {
      textAlign: "initial!important",
      color: "#FFD700!important",
      margin: 0,
    },
    headingportfolio: {
      backgroundColor: "#1D1D1D",
      height: "200px",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      gap: "10px",
    },
    headingportfolio1: {
      height: "200px",
      display: "flex",
      backgroundColor: "#F1DC7D",
      justifyContent: "center",
      flexDirection: "column",
      gap: "10px",
      marginTop: 20,
    },
    projects: {
      backgroundColor: "#1d1d1d",
    },
    h2main2: {
      textAlign: "initial!important",
      color: "#00000!important",
      margin: 0,
      fontSize: "15px",
    },
    h2main3: {
      textAlign: "initial!important",
      color: "#FFD700!important",
      margin: 0,
      fontSize: "15px",
    },
    light2: {
      display: "none",
    },
    footerdark: {
      width: "100%",
      height: "55vh",

      backgroundColor: "black",
    },
    dark2: {
      display: "none!important",
    },
    projects123: {
      backgroundColor: "black!important",
      textAlign: "center",
      paddingBottom: "100px",
      paddingTop: "100px",
    },
    projects1234: {
      backgroundColor: "F1DC7D!important",
      textAlign: "center",
      paddingBottom: "100px",
      paddingTop: "100px",
    },
    buttonlight: {
      backgroundColor: "black!important",
      color: "white!important",
      border: "1px solid black!important",
      position: "absolute",
      transformStyle: "preserve-3d",
      top: "-50px",
      right: "-87vw",
      zIndex: 1,
    },
    projectsh1: {
      color: "#FFD700!important",
    },
    projectsh12: {
      color: "#FFD700!important",
    },
    title1: {
      textAlign: "center",
      marginTop: "15px",
      color: "black",
      fontSize: "20px",
      fontWeight: 400,
      fontFamily: "Lato",
    },
    glassBox__title: {
      textAlign: "center",
      marginTop: "15px",
      color: "white",
      fontSize: "20px",
      fontWeight: 400,
      fontFamily: "Lato",
    },
    glassBox__content: {
      position: "absolute",
      right: "15px",
      bottom: "15px",
      left: "15px",
      textAlign: "center",
      color: "white",
      fontSize: "14px",
      fontFamily: "Lato",
      letterSpacing: ".1em",
    },
    content1: {
      position: "absolute",
      right: "15px",
      bottom: "15px",
      left: "15px",
      textAlign: "center",
      color: "black",
      fontSize: "14px",
      fontFamily: "Lato",
      letterSpacing: ".1em",
    },

    CircularProgressbar: {
      width: "10%",
      backgroundColor: "black",
      display: "flex",
      flexDirection: "column",
    },
  }));

  const classes = useStyles();
  const [firstname, setswitches] = useState("");
  const [bgcolor, hoverbtn] = useState(classes.addButton);
  let [light, setlight] = useState(false);

  const percentage = 66;

  const heading = async (e) => {
    setswitches(true);
    const heading = {
      firstname,
    };
  };

  const btncontact = async (e) => {
    hoverbtn = classes.hoverbtn;
  };

  var hr = new Date().getHours();
  var day = false;
  var raat = false;
  hr > 20 || hr < 7 ? (raat = true) : (day = true);

  const clicked = ()=>{
    
  }

  return (
    <>
      <div
        className={`${classes.maindiv} ${
          light ? classes.light1 : classes.dark
        }`}
      >
        <div className={light ? "world" : classes.dark2}>
          <div className="sunset">
            <div className="sun"></div>
            <div className="bg">
              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>
            </div>
          </div>
          <div className="sea"></div>
          <div className="sky"></div>
          <div className="horizon"></div>
          <div className="birdposition">
            <div className="bird">
              <div className="wing -left"></div>
              <div className="wing -right"></div>
            </div>
          </div>
          <div className="birdposition">
            <div className="bird">
              <div className="wing -left"></div>
              <div className="wing -right"></div>
            </div>
          </div>
          <div className="birdposition">
            <div className="bird">
              <div className="wing -left"></div>
              <div className="wing -right"></div>
            </div>
          </div>
          <div className="birdposition">
            <div className="bird">
              <div className="wing -left"></div>
              <div className="wing -right"></div>
            </div>
          </div>
          <div className="birdposition">
            <div className="bird">
              <div className="wing -left"></div>
              <div className="wing -right"></div>
            </div>
          </div>
          <div className="birdposition">
            <div className="bird">
              <div className="wing -left"></div>
              <div className="wing -right"></div>
            </div>
          </div>
          <div className="birdposition">
            <div className="bird">
              <div className="wing -left"></div>
              <div className="wing -right"></div>
            </div>
          </div>
          <div className="birdposition">
            <div className="bird">
              <div className="wing -left"></div>
              <div className="wing -right"></div>
            </div>
          </div>
          <div className="birdposition">
            <div className="bird">
              <div className="wing -left"></div>
              <div className="wing -right"></div>
            </div>
          </div>
          <div className="birdposition">
            <div className="bird">
              <div className="wing -left"></div>
              <div className="wing -right"></div>
            </div>
          </div>
          <div className="birdposition">
            <div className="bird">
              <div className="wing -left"></div>
              <div className="wing -right"></div>
            </div>
          </div>
          <div className="birdposition">
            <div className="bird">
              <div className="wing -left"></div>
              <div className="wing -right"></div>
            </div>
          </div>
          <div className="birdposition">
            <div className="bird">
              <div className="wing -left"></div>
              <div className="wing -right"></div>
            </div>
          </div>
          <div className="birdposition">
            <div className="bird">
              <div className="wing -left"></div>
              <div className="wing -right"></div>
            </div>
          </div>
        </div>

        <div className={light ? classes.light2 : "night"}>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
        </div>

        <div className={light ? classes.light2 : "night1"}>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
        </div>

        <div className={light ? classes.light2 : "night2"}>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
        </div>

        {light ? (
          <div className={`${light ? classes.ptag1 : classes.ptag1more}`}>
            <p className={`${light ? classes.ptagblack : classes.ptag3}`}>
              &lt;html&gt;
            </p>
            <p className={`${light ? classes.ptag2black : classes.ptag2}`}>
              &lt;body&gt;
            </p>
            <Button
              className={`${light && classes.buttondark && "buttondark2"}`}
              onClick={() => setlight(!light)}
            >
              MAKE IT Dark
            </Button>
          </div>
        ) : (
          <div className={`${light ? classes.ptag1 : classes.ptag1more}`}>
            <p className={`${light ? classes.ptagblack : classes.ptag3}`}>
              &lt;html&gt;
            </p>
            <p className={`${light ? classes.ptag2black : classes.ptag2}`}>
              &lt;body&gt;
            </p>
            <Button
              className={`${!light && classes.buttondark && "buttondark1"}`}
              onClick={() => setlight(!light)}
            >
              MAKE IT LIGHT
            </Button>
          </div>
        )}

        <div className={`${light ? classes.keepleft : classes.keepleftdark}`}>
          <div className={classes.seconddiv}>
            <p
              className={`${light ? classes.heading2black : classes.heading2}`}
            >
              &lt;h1&gt;
            </p>{" "}
            <h1 className={`${light ? classes.hiblack : classes.hi} hi1 `}>
              Hi,
            </h1>{" "}
            <h1 className={`${light ? classes.hiblack : classes.hi} hi2`}>
              I'm Kapil,
            </h1>
          </div>

          <div className={classes.closeh1}>
            <h1 className={`${light ? classes.hiblack : classes.hi} hi3`}>
              developer
            </h1>

            <p
              className={`${light ? classes.closedh1black : classes.closedh1}`}
            >
              &lt;/h1&gt;
            </p>
          </div>
          <p
            className={`${light ? classes.heading21black : classes.heading21}`}
          >
            &lt;p&gt;
          </p>
          <p
            className={`${light ? classes.heading21black : classes.heading21}`}
          >
            {" "}
            Full Stack web and mobile application developer{" "}
          </p>
          <p
            className={`${light ? classes.heading21black : classes.heading21}`}
          >
            &lt;/p&gt;
          </p>
          <div className={classes.formmove}>
            
            <Button
              onMouseEnter={btncontact}
              onClick={clicked}
              className={`${
                light ? classes.addButtonblack : classes.addButton
              }`}
            >
               
              <span
                className={`${light ? classes.btnnameblack : classes.btnname}`}
              >
                {" "}
                Contact me!{" "}
              </span>
              
              
              
            </Button>
          </div>
          <div className={classes.scrolldiv}>
            <div className={classes.data}>
              {" "}
              <p className={`${light ? classes.scrollblack : classes.scroll}`}>
                scroll down{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.projects}>
        <div
          className={`${
            light ? classes.headingportfolio1 : classes.headingportfolio
          }`}
        >
          <p className={`${light ? classes.h2main : classes.h2main1}`}>
            &lt;h2&gt;
          </p>
          <h1 className={`${light ? classes.h2main : classes.h2main1}`}>
            My Portfolio
          </h1>
          <p className={`${light ? classes.h2main : classes.h2main1}`}>
            &lt;/h2&gt;
          </p>

          <p className={`${light ? classes.h2main : classes.h2main1}`}>
            &lt;p&gt;
          </p>
          <h1 className={`${light ? classes.h2main2 : classes.h2main3}`}>
            Its a small gallery of my projects. I have worked on all these
            projects some i have full made and in some, i have been a part of.{" "}
          </h1>
          <p className={`${light ? classes.h2main : classes.h2main1}`}>
            &lt;/p&gt;
          </p>
        </div>
        <div className={!light ? classes.projects123 : classes.projects1234}>
          <h1 className={!light ? classes.projectsh1 : classes.projectsh12}>
            PROJECTS
          </h1>
        </div>
        <div
          className={`${
            light ? classes.projectscontainer1 : classes.projectscontainer
          }`}
        >
          <div className="glassBox">
            <div className="glassBox__imgBox">
              <img
                className="image1234"
                src={require("../images/phonemedico.png")}
                alt="Medico Phone"
              ></img>
              <h3 className={light ? classes.title1 : classes.glassBox__title}>
                Medico APP
              </h3>
            </div>
            <div
              className={light ? classes.content1 : classes.glassBox__content}
            >
              Medico is a secure mobile application that bridges patient to
              doctors to reduce wait time.
            </div>
          </div>

          <div className="glassBox">
            <div className="glassBox__imgBox">
              <img
                className="image1256"
                src={require("../images/youtube.png")}
                alt="youtube"
              ></img>
              <h3 className={light ? classes.title1 : classes.glassBox__title}>
                Youtube
              </h3>
            </div>
            <div
              className={light ? classes.content1 : classes.glassBox__content}
            >
              It's a youtube clone that works like youtube to search any vedio
              as in Youtube.
            </div>
          </div>

          <div className="glassBox">
            <div className="glassBox__imgBox">
              <img
                className="image1256"
                src={require("../images/goalsetter.png")}
                alt="taskmanager"
              ></img>
              <h3 className={light ? classes.title1 : classes.glassBox__title}>
                Task Manager
              </h3>
            </div>
            <div
              className={light ? classes.content1 : classes.glassBox__content}
            >
              It is a full stack Task Manager application with MongoDB as
              databse made with react and express.
            </div>
          </div>

          <div className="glassBox">
            <div className="glassBox__imgBox">
              <img src={require("../images/firstwebsite.png")} alt=""></img>
              <h3 className={light ? classes.title1 : classes.glassBox__title}>
                HHCIC
              </h3>
            </div>
            <div
              className={light ? classes.content1 : classes.glassBox__content}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
              sunt veniam adipisci fugit qui quaerat!
            </div>
          </div>

          <div className="glassBox">
            <div className="glassBox__imgBox">
              <img src={require("../images/secondwebsite.png")} alt=""></img>
              <h3 className={light ? classes.title1 : classes.glassBox__title}>
                IMS.MediaMonkey
              </h3>
            </div>
            <div
              className={light ? classes.content1 : classes.glassBox__content}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
              sunt veniam adipisci fugit qui quaerat!
            </div>
          </div>

          <div className="glassBox">
            <div className="glassBox__imgBox">
              <img src={require("../images/thirdwebsite.png")} alt=""></img>
              <h3 className={light ? classes.title1 : classes.glassBox__title}>
                GreenStone Immigration
              </h3>
            </div>
            <div
              className={light ? classes.content1 : classes.glassBox__content}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
              sunt veniam adipisci fugit qui quaerat!
            </div>
          </div>
        </div>

        <div className={!light ? classes.projects123 : classes.projects1234}>
          <h1 className={!light ? classes.projectsh1 : classes.projectsh12}>
            PATENTS
          </h1>
        </div>
        <div
          className={`${
            light ? classes.projectscontainer1 : classes.projectscontainer
          }`}
        >
          <div className="glassBox">
            <div className="glassBox__imgBox">
              <img
                className="image1234"
                src={require("../images/patent1.png")}
                alt="Medico Phone"
              ></img>
              <h3 className={light ? classes.title1 : classes.glassBox__title}>
                Dual Security For Windows
              </h3>
            </div>
            <div
              className={light ? classes.content1 : classes.glassBox__content}
            >
              Its is a desktop based software for windows to not to allow
              unwanted users to access data.
            </div>
          </div>

          <div className="glassBox">
            <div className="glassBox__imgBox">
              <img
                className="image1256"
                src={require("../images/patent2.png")}
                alt="youtube"
              ></img>
              <h3 className={light ? classes.title1 : classes.glassBox__title}>
                Online Voting System
              </h3>
            </div>
            <div
              className={light ? classes.content1 : classes.glassBox__content}
            >
              Its an idea to vote online so as to remove chances of fake votes
              as votes will be connected through biometric.
            </div>
          </div>

          <div className="glassBox">
            <div className="glassBox__imgBox">
              <img
                className="image1256"
                src={require("../images/patent3.png")}
                alt="taskmanager"
              ></img>
              <h3 className={light ? classes.title1 : classes.glassBox__title}>
                Transportation Manager
              </h3>
            </div>
            <div
              className={light ? classes.content1 : classes.glassBox__content}
            >
              Its an idea to improve transportation based system to low down the
              percentage of accidents.
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "60px",
            backgroundColor: "black",
          }}
        >
          <h1 style={{ color: "#FFD700", backgroundColor: "black" }}>Skills</h1>
        </div>
        <div className="detailsmain">
          {/* <div style={{flex:1.7}}> */}

          {/* </div> */}
          <div className="details1">
            <div className={classes.CircularProgressbar}>
              <CircularProgressbar
                styles={buildStyles({
                  pathColor: "#FFD700",
                  textColor: "#FFD700",
                })}
                value={75}
                text={`${75}%`}
              />
              <h6
                style={{
                  color: "#FFD700",
                  textAlign: "center",
                  lineHeight: "20px",
                }}
              >
                REACT{" "}
              </h6>
            </div>
            <div className={classes.CircularProgressbar}>
              <CircularProgressbar
                styles={buildStyles({
                  pathColor: "#FFD700",
                  textColor: "#FFD700",
                })}
                value={70}
                text={`${70}%`}
              />
              <h6 style={{ color: "#FFD700", textAlign: "center" }}>
                REACT NATIVE
              </h6>
            </div>
            <div className={classes.CircularProgressbar}>
              <CircularProgressbar
                styles={buildStyles({
                  pathColor: "#FFD700",
                  textColor: "#FFD700",
                })}
                value={50}
                text={`${50}%`}
              />
              <h6
                style={{
                  color: "#FFD700",
                  textAlign: "center",
                  lineHeight: "20px",
                }}
              >
                THREE JS
              </h6>
            </div>
            <div className={classes.CircularProgressbar}>
              <CircularProgressbar
                styles={buildStyles({
                  pathColor: "#FFD700",
                  textColor: "#FFD700",
                })}
                value={65}
                text={`${65}%`}
              />
              <h6 style={{ color: "#FFD700", textAlign: "center" }}>
                Native Android
              </h6>
            </div>
            <div className={classes.CircularProgressbar}>
              <CircularProgressbar
                styles={buildStyles({
                  pathColor: "#FFD700",
                  textColor: "#FFD700",
                })}
                value={65}
                text={`${65}%`}
              />
              <h6 style={{ color: "#FFD700", textAlign: "center" }}>
                Native IOS
              </h6>
            </div>
            <div className={classes.CircularProgressbar}>
              <CircularProgressbar
                styles={buildStyles({
                  pathColor: "#FFD700",
                  textColor: "#FFD700",
                })}
                value={75}
                text={`${75}%`}
              />
              <h6
                style={{
                  color: "#FFD700",
                  textAlign: "center",
                  lineHeight: "20px",
                }}
              >
                Node JS
              </h6>
            </div>
            <div className={classes.CircularProgressbar}>
              <CircularProgressbar
                styles={buildStyles({
                  pathColor: "#FFD700",
                  textColor: "#FFD700",
                })}
                value={70}
                text={`${70}%`}
              />
              <h6 style={{ color: "#FFD700", textAlign: "center" }}>MongoDB</h6>
            </div>
            <div className={classes.CircularProgressbar}>
              <CircularProgressbar
                styles={buildStyles({
                  pathColor: "#FFD700",
                  textColor: "#FFD700",
                })}
                value={70}
                text={`${70}%`}
              />
              <h6 style={{ color: "#FFD700", textAlign: "center" }}>
                EXPRESS JS
              </h6>
            </div>
          </div>
        </div>

        <div className="detailsmain">
          <div className={`${light ? "h1canvaslight" : "h1canvas"}`}>
            {" "}
            <h1 style={{ color: "#FFD601", padding: "20px" }}>
              CANVAS ATOM SMASHER
            </h1>
          </div>

          <div className={`${light ? "details2" : "details1"}`}>
            <Canvas />
          </div>

          <div className={`${light ? "h1canvaslight" : "h1canvas"}`}>
            {" "}
            <h1 style={{ color: "#FFD601", padding: "20px" }}>
              Bloody Particles 
            </h1>
          </div>

          <div className={`${light ? "details2" : "details1"}`}>
            <Bloody/>
          </div>

          <div className={`${light ? "h1canvaslight" : "h1canvas"}`}>
            {" "}
            <h1 style={{ color: "#FFD601", padding: "20px" }}>
              Image Particles 
            </h1>
          </div>

          <div className={`${light ? "details2" : "details1"}`}>
            <ImageParticles/>
          </div>

          <div className={`${light ? "h1canvaslight" : "h1canvas"}`}>
            {" "}
            <h1 style={{ color: "#FFD601", padding: "20px" }}>
             MADE BY : KAPIL THAMAN 
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
