import React from "react";
import { ReactComponent as IconFacebook } from "./assets/icons/facebook.svg";
import { ReactComponent as IconTwitter } from "./assets/icons/twitter.svg";
import { ReactComponent as IconGithub } from "./assets/icons/github.svg";
import "./App.css";

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div div className="header">
          <div className="social">
            <a
              href="https://www.facebook.com/loadnepalz"
              title="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconFacebook className="icon" />
            </a>
          </div>
        </div>
        <div className="logo">
          <img src="./logo.jpg" />
        </div>

        <div className="content">
          <div className="title-holder">
            <h1>Website Loading Soon... </h1>
            Meanwhile,Shoot us an email if you're curious.
          </div>
          
          <a href="mailto:loadnepal01@gmail.com">
                <div className="cta">Send us an email</div>
              </a>
        </div>



        <div className="footer">
          <h3>All rights Reserved @zerone intertech pvt. ltd</h3>
        </div>
      </div>
    );
  };
}

export default App;
