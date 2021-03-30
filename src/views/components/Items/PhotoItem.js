import React from 'react';
import styled from 'styled-components';
import {IconDownload, IconHeart, IconPlus} from "../../../icons";

const PhotoItem = ({urls , user}) => {

    return (
        <Container>
            <Thumb>
                <img src={urls.regular} alt=""/>
            </Thumb>
            <Desc>
                <Head>
                    <Icons>
                        <IconButton>
                            <IconHeart/>
                        </IconButton>
                        <IconButton>
                            <IconPlus/>
                        </IconButton>
                    </Icons>
                </Head>
                <Footer>
                    <Author>
                        <Avatar>
                            <img src={user.profile_image.medium} alt=""/>
                        </Avatar>
                        <Info>
                            <h3>{user.name}</h3>
                            <p></p>
                        </Info>
                    </Author>
                    <Icons>
                            <IconButton>
                                <IconDownload>

                                </IconDownload>
                            </IconButton>
                    </Icons>
                </Footer>
            </Desc>
        </Container>
    )
}

const Container = styled.div`
  position: relative;
  
  
`;

const Thumb = styled.div`

`;

const Desc = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3);
  opacity: 0;
  transition:opacity 0.4s;
  &:hover{
    opacity: 1;
    
  }
`;

const Head = styled.div`

`;

const Icons = styled.div`

`;

const Author = styled.div`

`;

const Avatar = styled.div`

`;

const Info = styled.div`

`;

const IconButton = styled.div`

`;

const Footer = styled.div`

`;


export default PhotoItem;