import React from "react";

export default class AddUrl extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
          <label htmlFor=""></label>
        <input type="url" placeholder="https://example.com" />
        <button type="submit">Submit</button>
      </div>
    );
  }
}
