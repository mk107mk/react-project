import React from 'react';
import styled from 'styled-components';
import SearchBox from "../SearchBox";

const Visual = () => {

    return (
        <Container>
            <Content>
                <h1>Unsplash</h1>
                <p>The internet’s source of freely-usable images. <br/>
                    Powered by creators everywhere.</p>
                <SearchBox shape={"square"}/>
            </Content>
        </Container>
    )
}

const Container = styled.div`
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff url("https://images.unsplash.com/photo-1616256074022-3a20e0e8bf1b?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60") 50% 50% / cover no-repeat;

`;

const Content = styled.div`
  flex: 1;
  max-width: 900px;
  h1 {
    font-size: 64px;
    color: #fff;
    font-weight: bold;
    margin-bottom: 15px;
  }

  p {
    font-size: 18px;
    color:#fff;
    font-weight: bold;
    line-height: 1.6;
    margin-bottom: 20px;
  }
`;

export default Visual;