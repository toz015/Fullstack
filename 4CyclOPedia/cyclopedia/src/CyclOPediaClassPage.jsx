import React from "react";
import { getRandomUser } from "./Utility/api";
import Instructor from "./Instructor";
class CyclOPediaClassPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(localStorage.getItem("cyclopediaState")) || {
      instructor: undefined,
      studentList: [],
      studentCount: 0,
      hideInstructor: false,
      inputName: "",
      inputFeedback: "",
    };
  }

  componentDidMount = async () => {
    //it is immediately run
    console.log("componentDidMount");
    if (JSON.parse(localStorage.getItem("cyclopediaState"))) {
      // this.setState(JSON.parse(localStorage.getItem("cyclopediaState")));
    } else {
      const response = await getRandomUser();
      console.log(response);
      this.setState((prevState) => {
        return {
          instructor: {
            name: response.data.first_name + " " + response.data.last_name,
            email: response.data.email,
            phone: response.data.phone_number,
          },
        };
      });
    }
  };

  componentDidUpdate = async (previousProps, previousState) => {
    console.log("componentUpdate");
    localStorage.setItem("cyclopediaState", JSON.stringify(this.state));
    if (previousState.studentCount < this.state.studentCount) {
      const response = await getRandomUser();
      this.setState((previousState) => {
        return {
          studentList: [
            ...previousState.studentList,
            {
              name: response.data.first_name + " " + response.data.last_name,
            },
          ],
        };
      });
    } else if (previousState.studentCount > this.state.studentCount) {
      this.setState((previousState) => {
        return {
          studentList: [],
        };
      });
    }
  };

  componentDidWillUnmoint() {
    console.log("componentDidWill");
  }

  handleAddStudent = () => {
    this.setState((prevState) => {
      return { studentCount: prevState.studentCount + 1 };
    });
  };

  handleRemoveAllStudent = () => {
    this.setState((prevState) => {
      return { studentCount: 0 };
    });
  };

  handletoggleInstructor = () => {
    this.setState((prevState) => {
      return { hideInstructor: !prevState.hideInstructor };
    });
  };

  render() {
    console.log("Render");
    return (
      <div>
        <div className="p-3">
          <span className="h4 text-success">Instructor</span>
          <i
            className="bi bi-toggle-off btn btn-success btn-sm"
            onClick={this.handletoggleInstructor}
          ></i>

          {!this.state.hideInstructor && this.state.instructor ? (
            <Instructor instructor={this.state.instructor} />
          ) : null}
        </div>
        <div className="p-3">
          <span className="h4 text-success">Feedback</span>
          <br />
          <input
            type="text"
            value={this.state.inputName}
            placeholder="Name..."
            onChange={(e) => {
              this.setState({ inputName: e.target.value });
            }}
          ></input>
          <br />
          <textarea
            value={this.state.inputFeedback}
            placeholder="Feedback..."
            onChange={(e) => {
              this.setState({ inputFeedback: e.target.value });
            }}
          ></textarea>
        </div>

        <div className="p-3">
          <span className="h4 text-success">Instructor</span>
          <div>Student Count: {this.state.studentCount}</div>
          <button
            className="btn btn-success btn-sm"
            onClick={this.handleAddStudent}
          >
            Add Student
          </button>
          <button
            className="btn btn-danger btn-sm"
            onClick={this.handleRemoveAllStudent}
          >
            Remove All Student
          </button>
          {this.state.studentList.map((student, index) => {
            return (
              <div className="text-white" key={index}>
                {" "}
                - {student.name}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CyclOPediaClassPage;
