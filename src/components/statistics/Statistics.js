import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import getRandomHexColor from '../../utils/randomColor.js';

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.statList}>
        {stats.map(stat => {
          const color = getRandomHexColor();
          return (
            <li
              className={s.item}
              style={{ backgroundColor: color }}
              key={stat.id}
            >
              <span className={s.label}>{stat.label}</span>
              <span className={s.percentage}>{stat.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
