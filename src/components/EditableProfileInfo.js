import React, { Component } from "react";
import "./EditableProfileInfo.css";

class EditableProfileInfo extends React.Component {
  constructor(props) {
    super(props);

    let persistState = localStorage.getItem("EditableProfileInfoState");
    let storage = JSON.parse(persistState);
    if (persistState) {
      this.state = {
        title: storage.title,
        subTitle: storage.subTitle,
        description: storage.description,
        profilePicture: storage.profilePicture
      };
    } else {
      this.state = {
        title: "Name",
        subTitle: "",
        description: "",
        profilePicture:
          "http://www.squareglide.com/assets/images/model-profile.png"
      };
    }

    this.handleFileSubmission = this.handleFileSubmission.bind(this);
    this.updateContent = this.updateContent.bind(this);
  }

  handleFileSubmission(event) {
    let userFileList = event.target.files;
    let userFile = userFileList[0];

    if (userFileList && userFile) {
      let reader = new FileReader();

      reader.onload = function(event) {
        //console.log(event.target.result);
        this.setState({
          profilePicture: event.target.result
        });
      }.bind(this);

      reader.readAsDataURL(userFile);
    }
  }

  updateContent(event) {
    if (event.target.name == "sub-title") {
      this.setState({
        subTitle: event.target.value
      });
    }

    if (event.target.name == "description") {
      this.setState({
        description: event.target.value
      });
    }

    if (event.target.tagName == "TEXTAREA") {
      this.setState({
        title: event.target.value
      });
    }
  }

  componentDidUpdate() {
    localStorage.setItem(
      "EditableProfileInfoState",
      JSON.stringify(this.state)
    );
  }

  render() {
    return (
      <div className={this.props.className}>
        <header>
          <textarea onChange={this.updateContent}>{this.state.title}</textarea>
          <input
            value={this.state.subTitle}
            onChange={this.updateContent}
            type="text"
            name="sub-title"
            placeholder="City, State"
          />
          <input
            value={this.state.description}
            onChange={this.updateContent}
            type="text"
            name="description"
            placeholder="About you"
          />
        </header>
      </div>
    );
  }
}

export default EditableProfileInfo;
