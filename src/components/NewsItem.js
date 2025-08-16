import React, { Component } from "react";

export class App extends Component {
  render() {
    let { title, description, imgurl, url, author, time } = this.props;

    return (
      <>
        <div className="container row">
          <div className="card col-md-4" style={{ width: "20rem" }}>
            <img src={imgurl} className="card-img-top my-1" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text small fst-italic">
                by {author} on {new Date(time).toGMTString()}
              </p>
              <a href={url} className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
