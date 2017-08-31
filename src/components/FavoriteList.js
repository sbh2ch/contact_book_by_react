/**
 * Created by sonbyeonghwa on 2017. 8. 31..
 */
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import FavoriteItem from './FavoriteItem';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap; /* 공간이 부족하면 다음줄에 보여줌 */
`;

const FavoriteList = ({contacts}) => {
    const favoriteList = contacts
        .filter(contact => contact.favorite)
        .map(contact => (<FavoriteItem key={contact.id} contact={contact}/>));

    return (
        <Wrapper>
            {favoriteList}
        </Wrapper>
    )
};

FavoriteItem.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object)
};

export default FavoriteList;