import { IFooterInteractor } from './interactor';
import { Copyright, Social, ToTopButton } from '@/components/common';
import { Container, IconWrapper } from '@/components/layout';
import { CrownIcon } from '@/components/icons';
import { Link } from '@/components/ui';
import { PagePath } from '@/types';
import styles from './index.module.scss';

export interface IProps {
  interactor: IFooterInteractor;
}

export const FooterRouter: React.FC<IProps> = ({ interactor }) => {
  return (
    <footer id="footer" className={styles.footer}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <div className={styles.logoWrapper}>
              <IconWrapper className={styles.logoIcon}>
                <CrownIcon />
              </IconWrapper>

              <span className={styles.logoLabel}>
                {interactor.content.logo[0]}
                <span>{interactor.content.logo[1]}</span>
              </span>
            </div>

            {!interactor.matches.isDesktop && (
              <span className={styles.description}>{interactor.content.description}</span>
            )}

            <Link fullWidth href={PagePath.ContactUs} className={styles.link}>
              {interactor.content.buttonLabel}
            </Link>
          </div>

          {interactor.matches.isDesktop ? (
            <ul className={styles.navList}>
              {interactor.nav.map(({ label, list }, index) => (
                <li key={index} className={styles.navItem}>
                  <span className={styles.navLabel}>{label}</span>

                  <ul className={styles.navSublist}>
                    {list.map((item, index) => (
                      <li key={index}>
                        <a href={item.url} target={item.target} className={styles.navSublistLink}>
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          ) : (
            <ul className={styles.navSublist}>
              {interactor.nav[1].list.map((item, index) => (
                <li key={index} className={styles.navSublistItem}>
                  <a href={item.url} target={item.target} className={styles.navSublistLink}>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          )}

          <div className={styles.copyWrapper}>
            <Copyright />
            {interactor.matches.isDesktop ? <ToTopButton /> : <Social />}
          </div>
        </div>
      </Container>
    </footer>
  );
};
