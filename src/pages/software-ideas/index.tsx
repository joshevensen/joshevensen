import softwareIdeas from "@/data/content/softwareIdeas";
import PageContainer from "@/layout/PageContainer";
import PageHero from "@/layout/PageHero";
import Head from "next/head";

const IdeasPage: React.FC = () => {
  const software = softwareIdeas;
  console.log("softwareIdeas", softwareIdeas);

  return (
    <>
      <Head>
        <title>Josh Evensen | Software Ideas</title>
      </Head>

      <PageHero heading="There are more software ideas in heaven and earth...">
        So I might as well add even more to the mix. Here are some of my ideas I
        don't have time to build myself.
      </PageHero>

      <PageContainer>
        {softwareIdeas.map((idea) => (
          <div className="prose">
            <h3>{idea.title}</h3>
            <div>Possible Names: {idea.possibleNames}</div>

            <h4>Tables</h4>
            <ul>
              {idea.tables.map((table) => (
                <li className="m-0">
                  <p className="m-0">{table.name}</p>
                  <ul className="m-0 pl-3">
                    {table.rows.map((row) => (
                      <li className="m-0">
                        <b>{row.name}</b> - {row.type}
                        {row.isNullable && <span> (isNullable)</span>}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </PageContainer>
    </>
  );
};

export default IdeasPage;
