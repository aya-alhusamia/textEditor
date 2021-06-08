import React, { Component } from "react";
import "./App.css";

const styles = {
  bold: {
    fontWeight: "bold",
    backgroundColor: "#d4c1ac",
    cursor: "pointer",
    border: "none",
    padding: "8px 16px",
  },

  italic: {
    fontStyle: "italic",
    backgroundColor: "#d4c1ac",
    border: "none",
    cursor: "pointer",
    padding: "8px 16px",
  },
  underline: {
    textDecorationLine: "underline",
    backgroundColor: "#d4c1ac",
    border: "none",
    cursor: "pointer",
    padding: "8px 16px",
  },
};

const stylings = ["bold", "italic", "underline"];

const colors = ["yellow", "blue", "red", "black", "purple"];

class App extends Component {
  state = {
    bold: false,
    italic: false,
    underline: false,
    curcolor: "black",
    bold_btn: false,
    italic_btn: false,
    underline_btn: false,
  };
  changeColor = (color) => {
    this.setState({ curcolor: color });
  };

  changeStyle = (style) => {
    this.setState({
      [style]: !this.state[style],
      [`${style}_btn`]: !this.state[`${style}_btn`],
    });
  };
  render() {
    const { active } = this.state;
    const stylingBoxes = stylings.map((style) => (
      <div className="animation-button">
        <button
          className={`${this.state[`${style}_btn`] ? "active_btn" : ""} ${
            this.state[style]
          }`}
          style={styles[style]}
          key={style}
          onClick={() => this.changeStyle(style)}
        >
          {style}
        </button>
      </div>
    ));

    const colorBoxes = colors.map((color) => {
      const isCurrentColor = color === this.state.curcolor;
      const size = isCurrentColor ? 40 : 30;

      return (
        <button
          style={{
            backgroundColor: color,
            height: size,
            width: size,
            borderRadius: 10,
            cursor: "pointer",
            padding: "8px 16px",
          }}
          key={color}
          onClick={() => this.changeColor(color)}
        />
      );
    });

    return (
      <div className={`${active ? "" : ""} "App"`}>
        <div className="styling">{stylingBoxes}</div>
        <textarea
          className="textarea"
          style={{
            fontStyle: this.state.italic ? "italic" : "",
            color: this.state.curcolor,
            fontWeight: this.state.bold ? "bold" : "",
            textDecorationLine: this.state.underline ? "underline" : "",
          }}
        />
        <div className="btm-color">{colorBoxes}</div>
      </div>
    );
  }
}

export default App;
