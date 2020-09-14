import React from 'react';
import ItemDetails from '../item-details';
import { withSwapiService, compose } from '../hoc-helpers/';
import { Record } from '../item-details/item-details';

const StarshipDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field='model' label='Model'/>
            <Record field='crew' label='Crew'/>
            <Record field='passengers' label='Passengers'/>
        </ItemDetails>
    )
}

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getStarship,
        getImageUrl: swapiService.getStarshipImage,
    }
}

export default compose(
                        withSwapiService(mapMethodsToProps))
                        (StarshipDetails);