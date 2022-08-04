import api from '../services/api'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

type Episode = {
  id: string,
  title: string
}

type HomeProps = {
  episodes:Episode[]
}

const Home: NextPage<HomeProps> = ({episodes}: HomeProps) => {
  // console.log(episodes);
  return (
    <>
      {/* {episodes.map((episode) =>{
        return <h2>{episode.title}<h2/>
      })} */}
      <h1>Agora Vai!!!!</h1>
    </>
  );
}


export async function getStaticProps() {
  const { data } = await api.get('http://localhost:3333/episodes',{
    //limitar numeros de elementos das minha busca
    params: {
      _limit: 5,
    },
  });


// export async function getServerSideProps() {
//   const { data } = await api.get('http://localhost:3333/episodes',{
//     //limitar numeros de elementos das minha busca
//     params: {
//       _limit: 5,
//     },
//   });

  

  const episodes = data.map((episode: Episode) => {
    return {
      id: episode.id,
      title: episode.title
    }
  });

  return {
    props: {
      episodes,
    },
    revalidate: 30,
  };
}

export default Home
