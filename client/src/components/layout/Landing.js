import React, { Component } from "react";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Tribe</h1>
                <p className="lead">
                  {" "}
                  Tribe : A group of friends that becomes your family. The
                  people that will be there for you no matter what and who
                  you're guaranteed to have a good time with. Although people
                  may not understand how close they are and their relationships
                  with each other, it doesn't matter because they all understand
                  it and love each other...
                </p>
                <hr />
                <a href="register.html" className="btn btn-lg btn-info mr-2">
                  Sign Up
                </a>
                <a href="login.html" className="btn btn-lg btn-light">
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
