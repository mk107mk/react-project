import React ,{useEffect} from 'react';
import styled from 'styled-components';
import PhotoList from "../components/List/PhotoList";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../redux/photos/redux";


const PhotoListContainer = () => {

    const dispatch = useDispatch();

    const state= useSelector(state => state);

    const getPhotos = () => {
     dispatch(Action.Creators.getPhotos())
    }

    useEffect( () => {
        getPhotos();
    })

    return (
        <Container>
           <PhotoList data={state.photoList}/>
        </Container>
    )
}

const Container = styled.div`

`;

export default PhotoListContainer;