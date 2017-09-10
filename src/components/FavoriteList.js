/**
 * Created by sonbyeonghwa on 2017. 8. 31..
 */
import React from 'react';
import styled from 'styled-components';
import FavoriteItem from './FavoriteItem';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap; /* 공간이 부족하면 다음줄에 보여줌 */
`;

const FavoriteList = ({contacts}) => {
    const favoriteList = contacts
        .filter(contact => contact.get('favorite'))
        .map(contact => (<FavoriteItem key={contact.get('id')} contact={contact}/>));

    return (
        <Wrapper>
            {favoriteList}
        </Wrapper>
    )
};

FavoriteItem.propTypes = {
    contacts: ImmutablePropTypes.listOf(
        ImmutablePropTypes.mapContains({
            id: PropTypes.string,
            name: PropTypes.string,
            phone: PropTypes.string,
            color: PropTypes.string,
            favorite: PropTypes.bool
        })
    )
};

export default FavoriteList;