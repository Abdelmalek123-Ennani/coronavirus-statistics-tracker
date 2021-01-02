import React, { Component } from 'react';
import chemistry from "../svgs/chemistry.svg";
import calendar from "../svgs/calendar.svg";
import death from "../svgs/death.svg";
import overpopulation from "../svgs/overpopulation.svg";
import recovered from "../svgs/recovered.svg";
import safetysuit from "../svgs/safetysuit.svg";
import fever from "../svgs/fever.svg";
import patient from "../svgs/patient.svg";
import continent from "../svgs/continent.svg";
import deathTwo from "../svgs/deathTwo.svg";

import Spinner from "./Spinner";

import axios from "axios";

export default class CoutryData extends Component {

    state = {
        coutryName : this.props.match.params.id,
        data : []
    }

    componentDidMount() {
        axios.get(`https://disease.sh/v3/covid-19/countries/${this.state.coutryName}?strict=true`)
          .then((res) => {
              this.setState({
                  data : res.data
              })
          })
    }

    

    render() {

        if ( Object.entries(this.state.data).length > 0 ) {
            console.log(this.state.data.countryInfo.flag );
        }

        return (
            <div className="country-details">
               { Object.entries(this.state.data).length > 0 ? (
                  <>
                  <div className="top-img">
                      <h5> <img src={ this.state.data.countryInfo.flag  } alt="flag" /></h5>
                      <h3>&lt;{ this.state.data.country } /&gt;</h3>
                  </div>
                  <div className="cards">
                      <div>
                          <p>Cases</p>
                          <h4>{ this.state.data.cases }</h4>
                          <p><img src={fever} alt="cases" /> </p>
                      </div>
                      <div>
                          <p>Deaths</p>
                          <h4>{ this.state.data.deaths }</h4>
                          <p><img src={death} alt="cases image" /></p>
                      </div>
                      <div>
                          <p>today Cases</p>
                          <h4>{ this.state.data.todayCases }</h4>
                          <p><img src={calendar} alt="cases image" /></p>
                      </div>
                      <div>
                          <p>today Deaths</p>
                          <h4>{ this.state.data.todayDeaths }</h4>
                          <p><img src={deathTwo} alt="tody death"  /></p>
                      </div> 
                      <div>
                          <p>recovered</p>
                          <h4>{ this.state.data.recovered }</h4>
                          <p><img src={safetysuit} alt="safetysuit" /> </p>
                      </div>
                      <div>
                          <p>today Recovered</p>
                          <h4>{ this.state.data.todayRecovered }</h4>
                          <p><img src={recovered} alt="Recoverd" /> </p>
                      </div>
                      <div>
                          <p>active</p>
                          <h4>{ this.state.data.active }</h4>
                          <p><img src={patient} alt="Active pic" /> </p>
                      </div>
                      <div>
                          <p>tests</p>
                          <h4>{ this.state.data.tests }</h4>
                          <p><img src={chemistry} alt="tests image" /></p>
                      </div>
                      <div>
                          <p>population</p>
                          <h4>{ this.state.data.population }</h4>
                          <p><img src={overpopulation} alt="overpopulation" /> </p>
                      </div>
                      <div>
                          <p>continent</p>
                          <h4>{ this.state.data.continent }</h4>
                          <p><img src={continent} alt="continent" /> </p>
                      </div>
                  </div>
                  </>
               ) : (
                  <Spinner />
               )}
            </div>
        )
    }
}
