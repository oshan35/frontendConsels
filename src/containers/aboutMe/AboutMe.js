import React from "react";
import Footer from "../footer/Footer";
import NavigationBar from "../../components/navbar/navbar";
import "mdbreact/dist/css/mdb.css";
import "./AboutMe.css";
import { Card, Avatar } from "antd";
import myPhoto from "../../assets/myPhoto.jpeg";
import {RiLinkedinFill} from "react-icons/ri"
import { Button } from "antd";

function AboutMe() {
  return (
    <>
      <NavigationBar />

      <div className="bodyWrapper">
        <div className="cardContainer">
          <Card
            title={
              <div className="avatar">
                <Avatar
                  size={100}
                  style={{
                    border: "solid 1px #8f96a3",
                    margin: "auto",
                  }}
                  src={myPhoto}
                />
              </div>
            }
            style={{ width: 360, boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",background: "var(--gradient-text)", }}
          >
            <div className="cardDetails">
              <h3> Lehindu Atapattu</h3>

              <p>
                Hello everyone..... I’m Lehindu Atapattu, a final year student
                following BSc (Hons) Business Information Systems degree
                (University of Westminster) at Informatics Institute of
                technology. Conseils is my final year project. I came up with
                this idea as I have seen many students struggling and not
                enjoying what they’re learning at the university. I sincerely
                hope my solution will be helpful to students all around Sri
                Lanka.
              </p>

              <Button
                type="primary"
                shape="circle"
                icon={<RiLinkedinFill />}
                onClick={() => window.open("https://www.linkedin.com/in/lehinduatapattu/")}
                size={"large"}
                style={{
                  background: "var(--gradient-text)",
                  borderColor: "var(--gradient-text)",
                  marginLeft: "20px",
                  width: "50px",
                  height: "50px",
                }}
              >
                {""}
              </Button>
            </div>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutMe;
