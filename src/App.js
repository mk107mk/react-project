import React from 'react';
import styled from 'styled-components';
import {GlobalStyle} from "./styled/GlobalStyle";
import {Route, Switch} from 'react-router-dom';
import Main from "./views/pages/Main";
import Header from "./views/components/Header";
import Search from "./views/pages/Search";

const App = () => {

    return (
        <Container>
            <GlobalStyle/>
            <Header/>
            <Switch>
                <Route exact path={"/"} component={Main}/>
                <Route path={"/search/:category/:query"} component={Search}/>

            </Switch>
        </Container>
    )
}

const Container = styled.div`

`;

export default App;