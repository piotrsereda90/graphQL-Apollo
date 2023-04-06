import React from 'react';
import Card from '../card'
import { useParams } from "react-router-dom";
import { useQuery, useLazyQuery, gql } from "@apollo/client";
import EpisodeCard from "../episodeCard";

const GET_CHARACTER = gql`
  query getCharacter($id: ID!) {
    character(id: $id) {
      name
      id
      image
      status
      origin {
        name
      }
    }
  }
`;

const GET_EPISODES = gql`
  query getEpisodes($id: ID) {
    character(id: $id) {
      episode {
        id
        name
      }
    }
  }
`;
const Character = () => {
  const { id } = useParams();
  const { data, loading } = useQuery(GET_CHARACTER, {
    variables: { id },
  });
  const [
    getEpisodes,
    { data: EpisodesData, loading: EpisodesLoading },
  ] = useLazyQuery(GET_EPISODES, {
    variables: { id },
  });

  const dupa = data;
  console.log('character',dupa)
    return(
        <div className="">
        <section className="">
          <h1>Character</h1>
          {loading ? (
            <p>loading</p>
          ) : (
            <>
              <div className="">
                {
                  <Card
                    key={dupa.id}
                    name={dupa.name}
                    image={dupa.image}
                    // location={character.location.name}
                    origin={dupa.origin.name}
                    status={dupa.status}
                    id={id}
                  />
                }
              </div>
            </>
          )}
          <div className="">
            <h2>Episodes</h2>
            <button  onClick={getEpisodes}>
              Load episodes
            </button>
            {EpisodesLoading ? (
              <p>loading</p>
            ) : (
              <>
                {EpisodesData &&
                  EpisodesData.character.episode.map(({ name, id }) => (
                    <EpisodeCard key={dupa.id} name={name} id={id} />
                  ))}
              </>
            )}
          </div>
        </section>
      </div>
    )
}
export default Character