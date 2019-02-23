import React, { Component } from "react";
import { connect } from "react-redux";
import { sendMessage } from "./chat";

class Chatcontainer extends Component {
  render() {
    const { feed, sendMessage } = this.props;
    return (
      <div>
        <h1>Chat with me </h1>
        <div>
          <ul>
            {feed.map(entry => {
              return <li>{entry.text}</li>;
            })}
          </ul>
          <input
            type="text"
            onKeyDown={e => {
              let result = false;
              if (e.keyCode === 13) {
                sendMessage(e.target.value);
                e.target.value = null;
                result = true;
              }
              return result;
            }}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state is ");
  console.log(state);
  return {
    feed: state
  };
};

export default connect(
  mapStateToProps,
  { sendMessage }
)(Chatcontainer);
