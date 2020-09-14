import React, {Component} from "react";
import './people-page.css';
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import SwapiService from "../../services/swapi-service";
import Row from "../row";
import ErrorBoundry from "../error-boundry";

export default class PeoplePage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: 3,
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    }

    render() {

        const itemList = (
            <ItemList getData={this.swapiService.getAllPeople}
                      onItemSelected={this.onPersonSelected}>
                {(person) => (
                        `${person.name} (${person.gender})`
                )}
            </ItemList>
        );

        const personDetaiils = (
            <ItemDetails personId={this.state.selectedPerson}/>
        );

        return (
            <ErrorBoundry>
                <Row left={ itemList }
                     right={ personDetaiils }/>
            </ErrorBoundry>
        )
    }
}