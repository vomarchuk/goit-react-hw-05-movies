import Container from '../Container';
import s from './Section.module.css';

const Section = ({ children }) => {
  return (
    <section className={s.section}>
      <Container>{children}</Container>
    </section>
  );
};
export default Section;
