import styles from './List.module.scss';

type PropsType<T> = {
  items: T[];
  renderItem: (item: T, index: number, array: T[]) => React.ReactNode;
};

export const List = <T extends { id: string }>({ items, renderItem }: PropsType<T>) => {
  return (
    <ul className={styles.list}>
      {items.map((item, index, array) => (
        <li key={`${index}_${item.id}`}>{renderItem(item, index, array)}</li>
      ))}
    </ul>
  );
};
