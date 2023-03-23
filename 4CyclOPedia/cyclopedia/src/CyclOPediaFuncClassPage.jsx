import React, { useEffect, useState, useRef } from "react";
import { getRandomUser } from "./Utility/api";
import Instructor from "./Instructor";

const CyclOPediaFuncClassPage = () => {
  const [state, setState] = useState({
    instructor: undefined,
    studentList: [],
    studentCount: 0,
    hideInstructor: false,
  });
  const totalRender = useRef(0);

  const [inputName, setInputName] = useState(() => {
    return "";
  });
  const [inputFeedback, setInputFeedback] = useState(() => {
    return "";
  });

  useEffect(() => {
    totalRender.current = totalRender.current + 1;
    console.log("This will be called on EVERY Render");
  });

  useEffect(() => {
    console.log("This will be called on Initial/first Render/Mount");

    const getUser = async () => {
      const response = await getRandomUser();
      console.log(response);
      setState((prevState) => {
        return {
          ...prevState,
          instructor: {
            name: response.data.first_name + " " + response.data.last_name,
            email: response.data.email,
            phone: response.data.phone_number,
          },
        };
      });
    };
    if (state.hideInstructor) {
      getUser();
    }
  }, [state.hideInstructor]);

  useEffect(() => {
    const getUser = async () => {
      const response = await getRandomUser();
      console.log(response);
      setState((prevState) => {
        return {
          ...prevState,
          studentList: [
            ...prevState.studentList,
            { name: response.data.first_name + " " + response.data.last_name },
          ],
        };
      });
    };
    if (state.studentList.length < state.studentCount) {
      getUser();
    } else if (state.studentList.length > state.studentCount) {
      setState((prevState) => {
        return { ...prevState, studentList: [] };
      });
    }
  }, [state.studentCount]);

  useEffect(() => {
    console.log(
      "This will be called on whenever value of hideInstructor changes"
    );
  }, [inputFeedback]);

  useEffect(() => {
    console.log(
      "This will be called on whenever value of hideInstructor changes"
    );
    return () => {
      console.log("This will be called on when component will be UNMOUNTED");
    };
  }, []);

  // constructor(props) {
  //   super(props);
  //   this.state = JSON.parse(localStorage.getItem("cyclopediaState")) || {
  //     instructor: undefined,
  //     studentList: [],
  //     studentCount: 0,
  //     hideInstructor: false,
  //     inputName: "",
  //     inputFeedback: "",
  //   };
  // }

  // componentDidMount = async () => {
  //   //it is immediately run
  //   console.log("componentDidMount");
  //   if (JSON.parse(localStorage.getItem("cyclopediaState"))) {
  //     // this.setState(JSON.parse(localStorage.getItem("cyclopediaState")));
  //   } else {
  //     const response = await getRandomUser();
  //     console.log(response);
  //     this.setState((prevState) => {
  //       return {
  //         instructor: {
  //           name: response.data.first_name + " " + response.data.last_name,
  //           email: response.data.email,
  //           phone: response.data.phone_number,
  //         },
  //       };
  //     });
  //   }
  // };

  // componentDidUpdate = async (previousProps, previousState) => {
  //   console.log("componentUpdate");
  //   localStorage.setItem("cyclopediaState", JSON.stringify(this.state));
  //   if (previousState.studentCount < this.state.studentCount) {
  //     const response = await getRandomUser();
  //     this.setState((previousState) => {
  //       return {
  //         studentList: [
  //           ...previousState.studentList,
  //           {
  //             name: response.data.first_name + " " + response.data.last_name,
  //           },
  //         ],
  //       };
  //     });
  //   } else if (previousState.studentCount > this.state.studentCount) {
  //     this.setState((previousState) => {
  //       return {
  //         studentList: [],
  //       };
  //     });
  //   }
  // };

  // componentDidWillUnmoint() {
  //   console.log("componentDidWill");
  // }

  const handleAddStudent = () => {
    setState((prevState) => {
      return {
        ...prevState,
        studentCount: prevState.studentCount + 1,
      };
    });
  };

  const handleRemoveAllStudent = () => {
    setState((prevState) => {
      return {
        ...prevState,
        studentCount: 0,
      };
    });
  };

  const handletoggleInstructor = () => {
    setState((prevState) => {
      return {
        ...prevState,
        hideInstructor: !prevState.hideInstructor,
      };
    });
  };

  console.log("Render");
  return (
    <div>
      <div className="p-3">
        <span className="h4 text-success">Instructor</span>
        <i
          className="bi bi-toggle-off btn btn-success btn-sm"
          onClick={handletoggleInstructor}
        ></i>

        {!state.hideInstructor && state.instructor ? (
          <Instructor instructor={state.instructor} />
        ) : null}
      </div>
      <div className="p-3">Total Render: {totalRender.current}</div>
      <div className="p-3">
        <span className="h4 text-success">Feedback</span>
        <br />
        <input
          type="text"
          value={inputName}
          placeholder="Name..."
          onChange={(e) => {
            setInputName(e.target.value);
          }}
        ></input>
        <br />
        <textarea
          value={inputFeedback}
          placeholder="Feedback..."
          onChange={(e) => {
            setInputFeedback(e.target.value);
          }}
        ></textarea>
      </div>

      <div className="p-3">
        <span className="h4 text-success">Instructor</span>
        <div>Student Count: {state.studentCount}</div>
        <button className="btn btn-success btn-sm" onClick={handleAddStudent}>
          Add Student
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={handleRemoveAllStudent}
        >
          Remove All Student
        </button>
        {state.studentList.map((student, index) => {
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
};

export default CyclOPediaFuncClassPage;
