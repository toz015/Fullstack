import Student from "./Compoenets/Student/Students";
import StudentReview from "./Compoenets/Student/StudentReview";
import React from "react";
class MainBody extends React.Component {
  render() {
    const whatWeWillLean = "React JS";
    const lectureCount = 3;

    return (
      <div>
        <p>
          In this course, we will learn {whatWeWillLean} by building TakOpedia!{" "}
          <br />
          Total Lectur - {lectureCount}
        </p>
        <ul>
          <li>Basic Foundation</li>
          <li>Functional and Class Components</li>
        </ul>
        <div>
          Enter Task :{" "}
          <input maxLength={5} readOnly={false} placeholder="Ben"></input>
        </div>
        <div className="row">Student Enrolled</div>

        <Student
          fullName={"Amber"}
          programmingExp={2}
          headshot="https://api.lorem.space/image/face?w=150&h=152"
        >
          <StudentReview />
        </Student>
        <Student
          fullName={"Sum"}
          programmingExp={1}
          headshot="https://api.lorem.space/image/face?w=150&h=150"
        >
          <StudentReview />
        </Student>
        <Student
          fullName={"Ethun"}
          programmingExp={3}
          headshot="https://api.lorem.space/image/face?w=150&h=151"
        >
          {" "}
        </Student>
      </div>
    );
  }
}

export default MainBody;
