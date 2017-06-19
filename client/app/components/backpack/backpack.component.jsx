import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ItemCard from '../itemCard/itemCard.component';
import './backpack.scss';

class Backpack extends Component {
    render() {
        return (
            <div className='backpack'>
                {
                    this.props.items.map((item, i) => (
                        <div className='card-wrapper' key={ 'item_' + i }>
                            <ItemCard
                                item={ item }
                                typeColor={ this.props.mapItemTypeColor(item.type.title) } />
                        </div>
                    ))
                }
                <div className='card-wrapper'>
                    <div className='item-wrapper'>
                        <div className={ 'item-card blue'}>
                            <div className='request-item'>
                                <i className='fa fa-plus' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Backpack.propTypes = {
    items: PropTypes.array.isRequired,
    mapItemTypeColor: PropTypes.func.isRequired
};

export default Backpack;