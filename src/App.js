import "./styles.css";
// import "./Desert.jpg";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 2
      };
    });
  }
  render() {
    return (
      <div className="App">
        {/* <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
          onMouseOver={myFunction}
        /> */}
        <p>{this.state.count}</p>
        <br />

        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default App;
