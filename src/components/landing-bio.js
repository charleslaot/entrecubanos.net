import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { StaticQuery, graphql } from "gatsby"
import { Button, Form } from "react-bootstrap"
import {SiApplepodcasts, SiGooglepodcasts, SiSpotify, SiPocketcasts, SiOvercast, SiRadiopublic, SiBreaker } from 'react-icons/si'


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
    render={(data) => (
      <OuterContainer>
        <Container>
          <span class="avatar">
            <img src="images/avatar.jpg" alt="" />
          </span>
          <h1
            style={{
              letterSpacing: "1px",
              fontSize: "50px",
              fontFamily: "Trebuchet MS",
            }}
          >
            Entre Cubanos
          </h1>

          <p>Ultimo Episodio</p>
          <iframe
            title="Podcast Player"
            src="https://anchor.fm/entrecubanos/embed/episodes/05--Energia--Crisis-en-Texas---ser-Ingeniero-en-EEUU-e1fd5cl"
            height="102px"
            width="400px"
            frameborder="0"
            scrolling="no"
            style={{ width: "100%", marginBottom: "16px" }}
          ></iframe>
          <p>
            Escucha mas episodios en <br />
            <a
              href="https://open.spotify.com/show/7tPegKMaz5ePNDyqEL9z84"
              target="_blank"
              rel="noreferrer"
            >
             <SiSpotify className="podcast-icon"/>
            </a>
            <a
              href="https://podcasts.apple.com/us/podcast/entre-cubanos/id1501367579"
              target="_blank"
              rel="noreferrer"
            >
              <SiApplepodcasts className="podcast-icon"/>
            </a>
            <a
              href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy8xMmNlNzMzOC9wb2RjYXN0L3Jzcw=="
              target="_blank"
              rel="noreferrer"
            >
              <SiGooglepodcasts className="podcast-icon"/>
            </a>
            <a href="https://pca.st/b9ue3b66" target="_blank" rel="noreferrer">
              <SiPocketcasts className="podcast-icon"/>
            </a>
            <a
              href="https://overcast.fm/itunes1501367579/entre-cubanos"
              target="_blank"
              rel="noreferrer"
            >
              <SiOvercast className="podcast-icon"/>
            </a>
            <a
              href="https://radiopublic.com/entre-cubanos-8g1V2p"
              target="_blank"
              rel="noreferrer"
            >
              <SiRadiopublic className="podcast-icon"/>
            </a>
            <a
              href="https://www.breaker.audio/entre-cubanos"
              target="_blank"
              rel="noreferrer"
            >
              <SiBreaker className="podcast-icon"/>
            </a>
          </p>
          <h5 style={{ marginBottom: "4px" }}>
            Suscríbete para recibir actualizaciones
          </h5>

          <Form
            action="https://gmail.us1.list-manage.com/subscribe/post?u=faf1f03b14863edbee03848e0&amp;id=502c238860"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            novalidate
          >
            <Form.Group controlId="formBasicName">
              <Form.Control
                type="text"
                name="FNAME"
                placeholder="Nombre"
                style={{
                  width: "60%",
                  margin: "8px 0",
                  paddingLeft: "10px",
                  border: "1px solid black",
                  borderRadius: "8px",
                }}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                name="EMAIL"
                type="email"
                placeholder="Email"
                style={{
                  width: "60%",
                  margin: "8px 0 16px",
                  paddingLeft: "10px",
                  border: "1px solid black",
                  borderRadius: "8px",
                }}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              name="subscribe"
              className="form-button"
            >
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
