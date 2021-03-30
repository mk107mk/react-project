import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useDispatch} from "react-redux";
import {Action} from "../../redux/search/redux";

const SearchContainer = () => {


    const dispatch= useDispatch();

    useEffect( () => {
        searchPhotos();
    }, [])

    const searchPhotos = () =>{
        dispatch(Action.Creators.searchPhotos({
            query: '',
            client_id: 'ZepPXzFL3PNNTm3dBXoI6Bq3sWMu_hCFYdxDjF7jV2M'
        }));
    }

    return (
        <Container>
            SearchContainer
        </Container>
    )
}

const Container = styled.div`

`;

export default SearchContainer;