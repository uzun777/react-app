import React, { Component } from "react";
import StudentList from "./StudentList";
import ListOfStudents from "../ListOfStudents";
import Button from "./Button";

export default class Body extends Component {
  state = {
    pressed: 0,
    lockAll: false
  };

  render() {
    return (
      <div className="body">
        <h6>Список студентов</h6>
        <StudentList data={ListOfStudents} />
        <Button
          active={this.state.pressed === 0}
          label="Кнопка 1"
          onClick={() =>
            !this.state.lockAll &&
            this.setState({
              pressed: 0
            })
          }
        />

        <Button
          active={this.state.pressed === 1}
          label="Кнопка 2"
          onClick={() =>
            !this.state.lockAll &&
            this.setState({
              pressed: 1
            })
          }
        />

        <Button
          active={this.state.pressed === 2}
          label="Кнопка 3"
          onClick={() =>
            !this.state.lockAll &&
            this.setState({
              pressed: 2
            })
          }
        />

        <Button
          active={this.state.lockAll}
          label="Заблокировать Кнопки"
          onClick={() =>
            this.setState({
              lockAll: !this.state.lockAll,
            })
          }
        />
      </div>
    );
  }
}
