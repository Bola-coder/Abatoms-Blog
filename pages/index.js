import News from "../components/News";
import SideNav from "../components/SideNav";
const Home = () => {
  return (
    <section className="flex flex-row justify_between p-4 w-11/12 sm:p-2">
      <div className="basis-1/6">
        <SideNav />
      </div>
      <div className="basis-5/6 ">
        <News />
      </div>
    </section>
  );
};

export default Home;
