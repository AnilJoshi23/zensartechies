import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer style={{ height: "100%"}} className="nav-footer" id="footer">
          <div className="sitemap">
              <a href="#" className="nav-home">
              <img src="./createBottomTabNavigator · React Navigation_files/spiro_white.svg" alt="React Navigation" width="66" height="58"/>
              </a>
              <div>
                <h5>Docs</h5>
                <a href="">Getting Started</a><a href="https://reactnavigation.org/docs/en/api-reference.html">API Reference</a>
                <a href="#">Building your own Navigator</a><a href="https://reactnavigation.org/docs/en/contributing.html">Contributing</a>
              </div>
              <div>
                <h5>Versions</h5>
                <a href="#">Version 2 docs</a><a href="https://v1.reactnavigation.org/docs/getting-started.html">Version 1 docs</a>
              </div>
              <div>
                <h5>Support</h5>
                <a href="https://discord.gg/4xEK3nD">Chat in our Discord channel</a><a href="https://react-navigation.canny.io/feature-requests">Request a feature on Canny</a><a href="https://github.com/react-navigation/react-navigation/issues">Report a bug on Github</a><a href="https://stackoverflow.com/questions/tagged/react-navigation" target="_blank">Get help on Stack Overflow</a>
              </div>
              <div>
                <h5>More</h5>
                <a href="https://github.com/react-navigation/react-navigation">GitHub</a><span></span>
              </div>
            </div>
      </footer>
    );
  }
}

export default Footer;