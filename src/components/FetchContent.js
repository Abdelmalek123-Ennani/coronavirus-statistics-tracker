import React, { Component } from 'react';
import axios from "axios";
import { Link , BrowserRouter as Router } from 'react-router-dom';
import Spinner from "./Spinner";


class FetchContent extends Component {

    state = {
        data : []
    }

    componentDidMount() {
        axios.get("https://disease.sh/v3/covid-19/countries?yesterday=true&twoDaysAgo=true")
          .then((res) => {
              this.setState({
                  data : res.data
              });
          }).catch(err => {
              throw Error("The request failed");
          })
    }


    render() {

        const styleLik = {
            fontWeight: "600" , 
            color: "currentcolor"       
        }

        return (
            <div>
                { this.state.data.length > 1 ? (
                <div>
             <table>
                     <thead>
                         <tr>
                         <th className="one">country</th>
                         <th>cases</th>
                         <th>todayCases</th>
                         <th>deaths</th>
                         <th>todayDeaths</th>
                         <th>recovered</th>
                         <th>todayRecovered</th>
                         <th>active</th>
                         <th>casesPerOneMillion</th>
                         <th>deathsPerOneMillion</th>
                         <th>tests</th>
                         <th>population</th>
                         </tr>
                     </thead>
                     <tbody>
                { this.state.data.map((el) => ( //Lao People's Democratic Republic
                      <tr key={ el.country }>
                          <td><Link style={styleLik} to={`/more/${el.country}`}>{el.country == "Lao People's Democratic Republic" ? el.country.substring(0 , 23) : el.country }</Link></td>
                          <td>{el.cases}</td>
                          <td>{el.todayCases}</td>
                          <td>{el.deaths}</td>
                          <td>{el.todayDeaths}</td>
                          <td>{el.recovered}</td>
                          <td>{el.todayRecovered}</td>
                          <td>{el.active}</td>
                          <td>{el.casesPerOneMillion}</td>
                          <td>{el.deathsPerOneMillion}</td>
                          <td>{el.tests}</td>
                          <td>{el.population}</td>
                      </tr>
                      )) }
                   </tbody>
                </table>
            </div>
            ) : (
                <Spinner />
            )}
            </div>
        )
    }
}

export default FetchContent