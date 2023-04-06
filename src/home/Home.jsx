
import React from 'react';
import {gql, useQuery} from '@apollo/client'
import Card from '../card'

const GET_CHARACTERS = gql`
  {
    characters {
      results {
        name
        id
        image
        status
        origin {
          name
        }
      }
    }
  }
`;

const Home = () => {
    const  {data, loading, error } = useQuery(GET_CHARACTERS)

    if(error) return `Error ${error}`

    return(
      <div className="container w-full mx-auto ">
        <section>
          <header className="text-center text-slate-200 p-6">
              <h1 className="text-3xl">Rick and Marty</h1>
          </header>
          <main className="flex flex-wrap justify-evenly">
          {loading 
            ? (
              <p>...loading</p>
            )
            :(
              data.characters.results.map(({ name, image, status, location, origin, id}) =>  (
                <Card
                  key={id}
                  name={name}
                  image={image}
                  status={status}
                  // location={location.name}
                  origin={origin.name}
                  id={id}
                >
                </Card>
              ))
          )}
          </main>
        </section>
      </div>
    )
}
export default Home;