import React, { Component } from "react";
import EditableProfileInfo from "./EditableProfileInfo.js";
import EditableInfoCardList from "./EditableInfoCardList.js";
import EditableList from "./EditableList.js";
import EditableToggleCard from "./EditableToggleCard.js";
import EditableTextLinksList from "./EditableTextLinksList.js";
import ContactComponent from "./ContactComponent.js";
import "../mobile_media_query.css";
class MinimalResume extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="document">
          <table>
            <tbody>
              <tr>
                <th rowSpan="2">
                  <EditableProfileInfo className="header" />
                </th>
              </tr>
            </tbody>
          </table>

          <table>
            <tbody>
              <tr>
                <td>
                  <EditableInfoCardList
                    className="job-component"
                    addCardText="Add Job"
                    deleteCardText="Delete"
                  />
                </td>
                <td>
                  <div className="grid-area-right-column">
                    <EditableList
                      className="skills-component"
                      inputPlaceholder="Enter Skills Here"
                      buttonText="Add Skill"
                    />
                    <EditableToggleCard />
                    <EditableTextLinksList className="text-links-component" />
                    <ContactComponent className="contact-component" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    );
  }
}
export default MinimalResume;
