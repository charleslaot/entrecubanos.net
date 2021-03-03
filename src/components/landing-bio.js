import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Button, Form } from 'react-bootstrap'

import styled from "@emotion/styled"
import spotify_logo from "../images/spotify@2x.png"
import google_logo from "../images/google_podcasts@2x.png"
import pocketcasts_logo from "../images/pocket_casts@2x.png"
import overcast_logo from "../images/overcast@2x.png"
import radiopublic_logo from "../images/radiopublic@2x.png"
import breaker_logo from "../images/breaker@2x.png"


const Container = styled.div`
  text-align: center;
`

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 78vh;
`

const NameHeader = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 0;
`

const LandingBio = () => (
  <StaticQuery
    query={graphql`
      query LandingSiteTitleQuery {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
      }
    `}
    render={data => (
      <OuterContainer>
        <Container>
          <span class="avatar"><img src="images/avatar.jpg" alt="" /></span>
          <h1 style={{letterSpacing: '1px', fontSize: '64px'}}>Entre Cubanos</h1>
          <p style={{letterSpacing: 'normal'}}>Un podcast de <a href="https://carlostrujillo90.com/" target="_blank" rel="noreferrer" style={{textDecoration: 'underline'}}>Carlos Trujillo</a></p>
          <p>Ultimo Episodio</p>
          <iframe title="Podcast Player" src="https://anchor.fm/entrecubanos/embed" height="102px" width="400px" frameborder="0" scrolling="no" style={{width: '100%', marginBottom: '16px'}}></iframe>
          <p>Escucha mas episodios en <br />
            <a href="https://open.spotify.com/show/7tPegKMaz5ePNDyqEL9z84" target='_blank' rel="noreferrer"><img src={spotify_logo} className="podcast-img" alt="Spotify" style={{ width: '50px',	height: '50px', margin: '12px 4px 0'}}/></a>
            <a href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy8xMmNlNzMzOC9wb2RjYXN0L3Jzcw==" target='_blank' rel="noreferrer"><img src={google_logo} className="podcast-img" alt="Google Podcast" style={{border: '1px solid lightsalmon', borderRadius: '6px', width: '50px',	height: '50px', margin: '12px 4px 0'}} /></a>
            <a href="https://pca.st/b9ue3b66" target='_blank' rel="noreferrer"><img src={pocketcasts_logo} className="podcast-img" alt="Pocketcast" style={{ width: '50px',	height: '50px', margin: '12px 4px 0'}}/></a>
            <a href="https://overcast.fm/itunes1501367579/entre-cubanos" target='_blank' rel="noreferrer"><img src={overcast_logo} className="podcast-img" alt="Overcast" style={{ width: '50px',	height: '50px', margin: '12px 4px 0'}}/></a>
            <a href="https://radiopublic.com/entre-cubanos-8g1V2p" target='_blank' rel="noreferrer"><img src={radiopublic_logo} className="podcast-img" alt="Radio Public" style={{ width: '50px',	height: '50px', margin: '12px 4px 0'}}/></a>								
            <a href="https://www.breaker.audio/entre-cubanos" target='_blank' rel="noreferrer"><img src={breaker_logo} className="podcast-img" alt="Breaker" style={{ width: '50px',	height: '50px', margin: '12px 4px 0'}}/></a>								
          </p>
          <h5 style={{marginBottom: '4px'}}>Suscríbete para recibir actualizaciones</h5>

          <Form action="https://gmail.us1.list-manage.com/subscribe/post?u=faf1f03b14863edbee03848e0&amp;id=502c238860" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" novalidate>
            <Form.Group controlId="formBasicName">              
              <Form.Control type="text" name="FNAME" placeholder="Nombre" style={{width: '60%', margin: '8px 0', paddingLeft: '10px', borderRadius: '8px'}}/>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Control name="EMAIL" type="email" placeholder="Email" style={{width: '60%', margin: '8px 0 16px', paddingLeft: '10px', borderRadius: '8px'}}/>
            </Form.Group>            
            <Button variant="primary" type="submit" name="subscribe" style={{"backgroundColor":"#44c767","borderRadius":"28px","border":"1px solid #18ab29","display":"inline-block","cursor":"pointer","color":"#ffffff","fontFamily":"Arial","fontSize":"17px","padding":"8px 28px","textDecoration":"none","textShadow":"0px 1px 0px #2f6627"}}>
              Suscribir
            </Button>
          </Form>
        </Container>
      </OuterContainer>
    )}
  />
)

NameHeader.propTypes = {
  siteTitle: PropTypes.string,
  subtitle: PropTypes.string,
}

NameHeader.defaultProps = {
  siteTitle: ``,
  subtitle: ``,
}

export default LandingBio
