import News from "../components/News";
import SideNav from "../components/SideNav";
const Home = () => {
  return (
    <section className="flex flex-row justify_between p-4 w-11/12 md:flex-col">
      <div className="basis-1/6 md:fixed md:bottom-0 ">
        <SideNav />
      </div>
      <div className="basis-5/6  ">
        <News />
      </div>
    </section>
  );
};

export default Home;
