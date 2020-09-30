import React from "react";
import moment from "moment";

const ProjectSummary = ({ project }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p className="card-action black-text">{project.content}</p>
      </div>
      <div className="card-action grey lighten-4 grey-text">
        <div>
          Posted by {project.authorFirstName} {project.authorLastName}
        </div>
        <div>
          {moment(project.createdAt.toDate()).format("DD MMM, YYYY, HH:mm")}
        </div>
      </div>
    </div>
  );
};

export default ProjectSummary;
