import Header from './Header';
import Content from './Content';

const Course = ({ course }) => {
  const { name, parts } = course;

  return (
    <div>
      <Header name={name} />
      <Content parts={parts} />
      <h4>
        Total of {parts.reduce((sum, part) => sum + part.exercises, 0)} exercises
      </h4>
    </div>
  );
}

export default Course;