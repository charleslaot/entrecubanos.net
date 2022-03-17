import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { StaticQuery, graphql } from "gatsby"
import { Button, Form } from "react-bootstrap"
import {
  SiFacebook,
  SiTwitter,
  SiYoutube,
  SiInstagram,
  SiAnchor,
  SiApplepodcasts,
  SiGooglepodcasts,
  SiSpotify,
  SiPocketcasts,
  SiOvercast,
  SiRadiopublic
  } from 'react-icons/si'


const Container = styled.div`
  text-align: center;
  border-radius: 1rem;
  padding: 1rem 2.5rem;
  background-color: white;
`

const OuterContainer = styled.div`
  display: flex;
  margin-top: 3rem;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
              fontFamily: "Tahoma",
            }}
          >
            Entre Cubanos
          </h1>

          <p>Último Episodio</p>
          <iframe
            title="Podcast Player"
            src="https://anchor.fm/entrecubanos/embed/episodes/06--Apple-e1fr4nu"
            height="102px"
            width="400px"
            frameborder="0"
            scrolling="no"
            style={{ width: "100%", marginBottom: "16px" }}
          ></iframe>
          <p>
            Escucha más episodios en <br />
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
              href="https://anchor.fm/entrecubanos"
              target="_blank"
              rel="noreferrer"
            >
              <SiAnchor className="podcast-icon"/>
            </a>
            <a
              href="https://radiopublic.com/entre-cubanos-8g1V2p"
              target="_blank"
              rel="noreferrer"
            >
              <SiRadiopublic className="podcast-icon"/>
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
            className="subscribe-form"
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
          <p>
            Síguenos en <br />
            <a
              href="https://www.youtube.com/channel/UCHnKfWEj6tg35SekKlYF8_Q"
              target="_blank"
              rel="noreferrer"
              >
             <SiYoutube className="podcast-icon"/>
            </a>
            <a
              href="https://www.facebook.com/Entre-Cubanos-101535415829927/"
              target="_blank"
              rel="noreferrer"
              >
             <SiFacebook className="podcast-icon"/>
            </a>
            <a
              href="https://twitter.com/EntreCubanos"
              target="_blank"
              rel="noreferrer"
              >
             <SiTwitter className="podcast-icon"/>
            </a>
            <a
              href="https://www.instagram.com/entrecubanos/"
              target="_blank"
              rel="noreferrer"
              >
             <SiInstagram className="podcast-icon"/>
            </a>
          </p>
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
