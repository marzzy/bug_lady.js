import Head from 'next/head';
import { siteMeta, myInfo, homeSectionsIds } from 'components/constants';
import { TitleSection, AboutMeSection, SideProjectsSection } from 'components/home';

const {
  title, description, logoLight, favicon,
} = siteMeta;
const {
  sideProjects, articles, constactPoints,
} = myInfo;

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" href={favicon} />
        <meta
          name="description"
          content={description}
        />
        <meta
          property="og:image"
          content={logoLight}
        />
        <meta name="og:title" content={title} />
        <meta name="twitter:card" content={logoLight} />
        <title>{title}</title>
      </Head>
      <body>
        <main>
          <TitleSection sectionId={homeSectionsIds[0]} />
          <AboutMeSection sectionId={homeSectionsIds[1]} />
          <SideProjectsSection sectionId={homeSectionsIds[2]} />
          <section>
            <h4>My articles</h4>
            <ul>
              {articles.map((article) => {
                const {
                  metaName, title: articleTitle, coverImage, link, summary,
                } = article;

                return (
                  <a href={link}>
                    <li key={metaName}>
                      <article>
                        <img src={coverImage} alt={metaName} />
                        <p>
                          {summary}
                        </p>
                        <h5>
                          {articleTitle}
                        </h5>
                      </article>
                    </li>
                  </a>
                );
              })}
            </ul>
          </section>
          <footer>
            <h4>
              You can reach Marzzy at
            </h4>

            <address>
              {constactPoints.map((contactPoint) => {
                const { href, label, iconName } = contactPoint;

                return (
                  // eslint-disable-next-line react/jsx-no-target-blank
                  <a href={href} target="_blank" title={label}>
                    <i className={`icon-${iconName}`}>
                      <span className="path1" />
                      <span className="path2" />
                    </i>
                  </a>
                );
              })}
            </address>

          </footer>
        </main>
      </body>
    </div>
  );
}
