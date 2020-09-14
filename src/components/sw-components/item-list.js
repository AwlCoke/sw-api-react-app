import React from "react";
import ItemList from "../item-list/item-list";
import { withData, withSwapiService, withChildFunction, compose} from "../hoc-helpers";

const renderPersonInfo = ({name, birthYear}) => <span>{ name } ({ birthYear })</span>;
const renderPlanetInfo = ({name, population}) => <span>{ name } ({ population })</span>;
const renderStarshipInfo = ({name, model}) => <span>{ name } ({ model })</span>;

const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    };
};

const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    };
};

const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    };
};

const PersonList = compose(
                            withSwapiService(mapPersonMethodsToProps),
                            withData,
                            withChildFunction(renderPersonInfo))
                            (ItemList);
const PlanetList = compose(
                            withSwapiService(mapPlanetMethodsToProps),
                            withData,
                            withChildFunction(renderPlanetInfo))
                            (ItemList);

const StarshipList = compose(
                            withSwapiService(mapStarshipMethodsToProps),
                            withData,
                            withChildFunction(renderStarshipInfo))
                            (ItemList);

export {
    PersonList,
    PlanetList,
    StarshipList
}