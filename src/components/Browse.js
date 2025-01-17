
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from '../components/GptSearch'
import {useSelector} from 'react-redux'

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);


  useNowPlayingMovies();
  usePopularMovies()
  useTopRated()
  useUpcomingMovies()

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};
export default Browse;