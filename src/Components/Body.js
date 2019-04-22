import React, { Component } from "react";
import ListOfStudents from "../ListOfStudents";
import Button from "./Button/Button";
import PotterStudentList from "./Potter/PotterStudentList";

export default class Body extends Component {
  state = {
    pressed: 0,
    lockAll: false,
    text: "",
    data: [],
    PotterData: [],
    id: null
  };

  ShowRes = event => {
    let value = event.target.value.toLowerCase();
    this.setState({ text: value });
  };

  async componentDidMount() {
    let b = await fetch("https://swapi.co/api/people/").then(r => r.json());
    this.setState({ data: b.results });

    ////// POTTER API
    const url =
      "https://www.potterapi.com/v1/characters?key=$2a$10$i88wqSpidj88VFUYbOlffuOK5tMGI.DU6Zs/h7PLNdKVzNIFTefSq"; //Использование URL?

    let p = await fetch(url).then(r => r.json());
    this.setState({ PotterData: p });
  }

  render() {
    ListOfStudents.filter(
      item => item.Name.toLowerCase().search(this.state.text) !== -1
    );

    return (
      <div className="body">
        <h6>Список студентов</h6>
        <div id="search">
          <input type="text" onChange={this.ShowRes} value={this.state.text} />
          <button
            onClick={() => {
              this.setState({ text: "" });
            }}
          >
            Clear
          </button>
        </div>

        {/* {<StudentList data={this.state.data.filter(
          item => item.name.toLowerCase().search(this.state.text) !== -1
        )} />} */}

        {
          <PotterStudentList
            data={this.state.PotterData.filter(
              item => item.name.toLowerCase().search(this.state.text) !== -1
            )}
            change={id => {
              this.setState({
                id
              });
            }}
            id={this.state.id}
          />
        }

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
              lockAll: !this.state.lockAll
            })
          }
        />
      </div>
    );
  }
}
