import Layout from "~/components/Layout";
import Up from "~/motions/Up";

const Home = () => {
  return (
    <Layout description="Home">
      <div className="py-10">
        <Up delay={0.2}>
          <h1 className="mb-8 text-4xl font-bold">Michael Lam</h1>
        </Up>
        <Up delay={0.4}>
          <article className="text-zinc-400">
            <p>Hey, I am Michael Lam</p>
          </article>
        </Up>
      </div>
    </Layout>
  );
};

export default Home;
