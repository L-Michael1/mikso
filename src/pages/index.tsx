import Link from "next/link";
import Layout from "~/components/Layout";
import Up from "~/motions/Up";

const Home = () => {
  return (
    <Layout description="Home">
      <Up delay={0.2}>mikso</Up>
      <Up delay={0.4}>
        <Link href="/about">About</Link>
      </Up>
    </Layout>
  );
};

export default Home;
