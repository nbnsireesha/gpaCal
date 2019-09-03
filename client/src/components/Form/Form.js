import React from "react";

const Form = props => (
  <form>
    <div className="form-group">
      <input
        className="form-control"
        id="name"
        type="text"
        value={props.q}
        placeholder="Name"
        name="name"
        onChange={props.handleInputChange}
        required
      />
      <input
        className="form-control"
        id="math"
        type="number"
        value={props.math}
        placeholder="Math"
        name="math"
        onChange={props.handleInputChange}
        required
      />
      <input
        className="form-control"
        id="history"
        type="number"
        value={props.history}
        placeholder="History"
        name="history"
        onChange={props.handleInputChange}
        required
      />
      <input
        className="form-control"
        id="science"
        type="number"
        value={props.science}
        placeholder="Science"
        name="science"
        onChange={props.handleInputChange}
        required
      />
      <input
        className="form-control"
        id="english"
        type="number"
        value={props.english}
        placeholder="English"
        name="english"
        onChange={props.handleInputChange}
        required
      />
    </div>
    <div className="pull-center">
      <button
        onClick={props.handleFormSubmit}
        type="submit"
        className="btn btn-lg btn-danger"
      >
        Submit
      </button>
    </div>
  </form>
);

export default Form;
