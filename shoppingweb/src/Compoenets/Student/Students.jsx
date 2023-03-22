import { faker } from "@faker-js/faker";
import React from "react";

class Student extends React.Component {
  render() {
    return (
      <div className="col-4 p-4">
        <div className="row border">
          <div className="col-2">
            <img
              src={this.props.headshot} //反引号，option+～，ps. 英文模式下;faker.image.avatar() 随机图片的另一种选择
              className="w-100"
            ></img>
          </div>
          <div className="col-8">
            {this.props.fullName}
            <br />
            Programming Experience {this.props.programmingExp} years
          </div>
          <div className="col-2">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
export default Student;
