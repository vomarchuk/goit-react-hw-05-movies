import s from './GenresList.module.css';
const GenresList = ({ genres, title }) => {
  return (
    <>
      <h3>{title}</h3>
      <ul className={s.list}>
        {genres.map(genre => (
          <li key={genre.id} className={s.item}>
            {genre.name}
          </li>
        ))}
      </ul>
    </>
  );
};
export default GenresList;
