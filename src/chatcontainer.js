import React, { Component } from "react";
import { connect } from "react-redux";
import { sendMessage } from "./chat";
import "./chatcontainer.css";
import { Button, Image, Item } from "semantic-ui-react";

class Chatcontainer extends Component {
  renderClass = entry => {
    console.log("this.props ");
    console.log(entry);
    if (typeof entry != "undefined") {
      if (entry.sender === "user") {
        return "left floated right aligned six wide column";
      } else {
        return "right floated left aligned six wide column";
      }
    }
  };

  render() {
    const { feed, sendMessage } = this.props;

    return (
      <div>
        <h1>Chat with me! </h1>
        <div class="ui segment">
          <ul>
            {feed.map(entry => {
              console.log("rendered class " + this.renderClass());

              return (
                <div>
                  <div className="ui right aligned grid">
                    <div className="row">
                      <div className={this.renderClass(entry)}>
                        <div className="ui segment">{entry.text}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
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
  return {
    feed: state
  };
};

export default connect(
  mapStateToProps,
  { sendMessage }
)(Chatcontainer);
