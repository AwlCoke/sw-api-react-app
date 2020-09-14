import React from 'react';
import ItemDetails from '../item-details';
import {Record} from '../item-details/item-details';
import { withSwapiService, compose } from  '../hoc-helpers/';

const PersonDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field='birthYear' label='Birth Year'/>
            <Record field='height' label='height'/>
            <Record field='eyeColor' label='Eye Color'/>
        </ItemDetails>
    )
}

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage,
    }
}


export default compose(
                        withSwapiService(mapMethodsToProps))
                        (PersonDetails);