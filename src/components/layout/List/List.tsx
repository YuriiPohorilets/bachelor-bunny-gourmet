import clsx from 'clsx';
import styles from './List.module.scss';

interface IProps<T> {
  items: T[];
  renderItem: (item: T, index: number, array: T[]) => React.ReactNode;
  className?: string | string[];
}

export const List = <T extends { id: string }>({ items, renderItem, className }: IProps<T>) => {
  return (
    <ul className={clsx(styles.list, className)}>
      {items.map((item, index, array) => (
        <li key={`${index}_${item.id}`}>{renderItem(item, index, array)}</li>
      ))}
    </ul>
  );
};
