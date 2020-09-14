import React, {Component} from 'react';
import { SwapiServiceProvider } from "../swapi-service-context";
import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import Row from "../row";
import ErrorBoundry from "../error-boundry";
import {PersonDetails, PersonList, PlanetDetails, PlanetList, StarshipDetails, StarshipList} from "../sw-components";
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-services";

export default class App extends Component {

    state = {
        swapiService: new SwapiService()
    }

    onServiceChange = () => {
        console.log('Change Context');
        this.setState(({swapiService}) => {
            const Service = swapiService instanceof SwapiService ?
                                        DummySwapiService : SwapiService;
            return {
                swapiService: new Service,
            };
        })
    }

    render() {
        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <div className='stardb-app'>
                        <Header onServiceChange={this.onServiceChange}/>
                        <RandomPlanet />
                         <Row right={<PersonDetails id={11}/>}
                              left={<PersonList/>}/>
                         <div style={{height: 20}}/>
                        <Row right={<PlanetDetails id={11}/>}
                             left={<PlanetList/>}/>
                         <div style={{height: 20}}/>
                        <Row right={<StarshipDetails id={11}/>}
                             left={<StarshipList/>}/>
                     </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }

};
