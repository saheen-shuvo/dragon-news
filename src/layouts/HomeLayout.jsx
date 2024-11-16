import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/layoutComponent/LeftNavbar";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div className="font-roboto">
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
            <LatestNews></LatestNews>
        </section>
      </header>
      <nav>
      <section className="w-11/12 mx-auto py-2">
            <Navbar></Navbar>
        </section>
      </nav>
      <main className="w-11/12 mx-auto pt-5 grid grid-cols-12">
      <aside className="left col-span-3">
        <LeftNavbar></LeftNavbar>
      </aside>
      <section className="col-span-6">Main Content</section>
      <aside className="col-span-3">Right nav bar</aside>
      </main>
    </div>
  );
};

export default HomeLayout;
