import { StarIcon } from '@/components/icons';
import styles from './Rating.module.scss';

interface IProps {
  rate: number;
}

export const Rating: React.FC<IProps> = ({ rate }) => {
  const getRatingArray = (rating: number) => {
    const result: number[] = [];
    const wholePart = Math.floor(rating);
    const fractionalPart = rating % 1;

    for (let i = 0; i < 5; i += 1) {
      if (i < wholePart) {
        result.push(1);
      } else if (i === wholePart && fractionalPart > 0) {
        result.push(fractionalPart);
      } else {
        result.push(0);
      }
    }

    return result;
  };

  return (
    <ul className={styles.list}>
      {getRatingArray(rate).map((item, index) => (
        <li key={index} className={styles.item}>
          <StarIcon key={index} offset={item} />
        </li>
      ))}
    </ul>
  );
};
