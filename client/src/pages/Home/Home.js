import React, { Component } from 'react';
import data from '../../data.json'
import Form from '../../components/Form';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import API from "../../utils/API";

export class Home extends Component {
  state = {
      students: [],
      data,
      name: "",
      math: "",
      history: "",
      science: "",
      english: "",
      gpa: "",
      gpaArray: []
  }
  componentWillMount() {
      this.calculateGpa();
  }  
  handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
  };
  handleFormSubmit = event => {
      event.preventDefault();
      this.grabData();
  };
  grabData = () => {
      var newStudent = {
          name: this.state.name,
          math: this.state.math,
          history: this.state.history,
          science: this.state.science,
          english: this.state.english
      }
      data.push(newStudent);
      this.setState({
          data: data
      })
      // also add to data.json file
      API.saveStudent(newStudent);
    
      this.calculateGpa();
  }
  calculateGpa = () => {
      var gpaCal;
      console.log("gpa calculator");
      for(var i=0; i<data.length; i++){
          var total = data[i].math + data[i].history + data[i].science + data[i].english;
          gpaCal = total/4;
          data[i].gpa = gpaCal;
          console.log("gpa of " +i +" is : " +gpaCal );
          // pushing all the gpas into gpaArray
          this.state.gpaArray.push(gpaCal);
          this.setState({
            gpaArray: this.state.gpaArray
          })
          console.log("gpa array: " +this.state.gpaArray);
      }  
      this.displayDataInTable();
      this.setState({
          data: data
      })
      // calculate high and low values in gpaArray
  }
  displayDataInTable = () => {
      console.log("display data in Table");
      for(var i=0; i<this.state.data.length; i++){
          console.log(this.state.data[i]);
      }
  }
  render() {
    const columns = [
      {
          Header: 'Name',
          accessor: 'name'
      },
      {
          Header: 'Math',
          accessor: 'math'
      },
      {
          Header: 'History',
          accessor: 'history'
      },
      {
          Header: 'Science',
          accessor: 'science'
      },
      {
          Header: 'English',
          accessor: 'english'
      },
      {
          Header: 'GPA',
          accessor: 'gpa'
      }

  ]
  return (
      <div className="container">
          <h1>Student GPA calculator</h1>
          <div className="row">
              <div className="md-6">
                  <Form
                      handleInputChange={this.handleInputChange}
                      handleFormSubmit={this.handleFormSubmit}
                      name={this.state.name}
                      math={this.state.math}
                      history={this.state.history}
                      science={this.state.science}
                      english={this.state.english}
                  />
                  
              </div>
              <div className="md-6">
                  <ReactTable 
                      columns={columns}
                      data={this.state.data}
                  >

                  </ReactTable>
              </div>
          </div>
      </div>
    )
  }
}

export default Home;
