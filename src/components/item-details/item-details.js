import React, {Children, cloneElement, Component} from 'react';

import './item-details.css';
import SwapiService from "../../services/swapi-service";

const Record = ({item, field, label}) => {
    return (<li className="list-group-item">
        <span className="term">{ label }:</span>
        <span>{item[field]}</span>
    </li>)
};

export {
    Record
}

export default class ItemDetails extends Component {

    swapiService = new SwapiService();

    state = {
        item: null,
        image: null
    };

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.id !== prevProps.id ||
            this.props.getData !== prevProps.getData ||
            this.props.getImageUrl !== prevProps.getImageUrl) {

            this.updateItem();
        }
    }

    updateItem() {
        const {id, getData, getImageUrl } = this.props;
        if (!id) {
            return;
        }
        getData(id)
            .then(item => {
                this.setState({
                    item,
                    image: getImageUrl(item)
                })
            })
    }

    render() {

        if (!this.state.item) return <span>Select a person from the list</span>

        const { image,
                item } = this.state;

        return (
            <div className="person-details card">
                <img className="person-image"
                     src={image} />

                <div className="card-body">
                    <h4>{item.name}</h4>
                    <ul className="list-group list-group-flush">
                        {
                            Children.map(this.props.children, child => {
                                return cloneElement(child, {item})
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
