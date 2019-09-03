import axios from "axios";
// import filterParams from "./filterParams";

export default {
  // Saves an student data to the json file
  saveStudent: function(studentData) {
    return axios.post("/api/students", studentData);
  }
};
