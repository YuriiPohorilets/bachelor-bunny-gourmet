import { useState } from 'react';
import { MotionConfig } from 'motion/react';

import { AccordionItem } from './components';
import { duration, easing } from '@/utils/framer-animation';
import styles from './Accordion.module.scss';

type AccordionItemType = {
  title: string;
  content: string;
};

interface IProps {
  items: AccordionItemType[];
  defaultOpenItems?: number[];
  allowMultiple?: boolean;
}

export const Accordion: React.FC<IProps> = ({
  items,
  allowMultiple = false,
  defaultOpenItems = [],
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>(defaultOpenItems);

  const toggleItem = (index: number) => {
    if (allowMultiple) {
      setOpenIndexes(prevState =>
        prevState.includes(index) ? prevState.filter(i => i !== index) : [...prevState, index]
      );
    } else {
      setOpenIndexes(prevState => (prevState.includes(index) ? [] : [index]));
    }
  };

  return (
    <MotionConfig transition={{ duration: duration.sm, ease: easing.common }}>
      <ul className={styles.list}>
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            onClick={() => toggleItem(index)}
            isOpen={openIndexes.includes(index)}
          >
            {item.content}
          </AccordionItem>
        ))}
      </ul>
    </MotionConfig>
  );
};
