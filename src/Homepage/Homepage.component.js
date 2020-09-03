import React, { Component } from "react";

import "./Homepage.styles.css";
import { CardList } from "../Card-list/Card-list.component";

class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      yearsList: [
        "2006",
        "2007",
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
      ],
      values: ["true", "false"],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.getAllData();
  }

  getAllData() {
    fetch("https://api.spacexdata.com/v3/launches?limit=50")
      .then((res) => res.json())
      .then((data) => this.setState({ data, isLoading: false }));
  }

  yearsClicked = (ev) => {
    let year = ev.target.dataset.value;
    fetch(
      `https://api.spacexdata.com/v3/launches?limit=50&amp;launch_success=true&amp;land_success=true&amp&launch_year=${year}`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  };

  sucessLaunch = (ev) => {
    let value = ev.target.dataset.value;
    fetch(
      `https://api.spacexdata.com/v3/launches?limit=50&amp&launch_success=${value}`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  };

  sucessLanding = (ev) => {
    let value = ev.target.dataset.value;
    fetch(
      `https://api.spacexdata.com/v3/launches?limit=100&amp&land_success=${value}`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  };

  render() {
    const { data, yearsList, values, isLoading } = this.state;
    return (
      <div className="page-style">
        <h1 className="header-text">SpaceX Launch Programs</h1>
        <div className="home-style">
          <div style={{ margin: "0px 10px" }}>
            <div className="card" style={{ width: " 17rem" }}>
              <div className="card-body">
                <h5 className="card-title">Filter:</h5>
                <hr />
                <div className="row">
                  <div>
                    {yearsList.map((years, i) => (
                      <button
                        type="button"
                        className="btn btn-success btn-sm btn-style"
                        key={i}
                        data-value={years}
                        onClick={this.yearsClicked}
                      >
                        {years}
                      </button>
                    ))}
                  </div>
                  <div style={{ marginTop: "15px" }}>
                    <h6>Successful Launch</h6>
                    <hr></hr>
                    <div>
                      {values.map((value, i) => (
                        <button
                          type="button"
                          className="btn btn-success btn-sm btn-values"
                          key={i}
                          data-value={value}
                          onClick={this.sucessLaunch}
                        >
                          {value}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div style={{ marginTop: "15px" }}>
                    <h6>Successful Landing</h6>
                    <hr></hr>
                    <div>
                      {values.map((value, i) => (
                        <button
                          type="button"
                          className="btn btn-success btn-sm btn-values"
                          key={i}
                          data-value={value}
                          onClick={this.sucessLanding}
                        >
                          {value}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {isLoading ? (
            <div
              className="d-flex justify-content-center"
              style={{ margin: "auto auto" }}
            >
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <CardList data={data} />
          )}
        </div>
      </div>
    );
  }
}

export default Homepage;
