import Link from "next/link";
import Layout from "~/components/Layout";

const Home = () => {
  return (
    <Layout description="Home">
      mikso
      <Link href="/about">About</Link>
    </Layout>
  );
};

export default Home;
