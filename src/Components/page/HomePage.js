import TrendingList from '../TrendingList/TrendingList';
function HomePage({ listMovie }) {
  return (
    <>
      <h1>Trending today</h1>
      {listMovie && <TrendingList listMovie={listMovie} />}
    </>
  );
}

export default HomePage;
