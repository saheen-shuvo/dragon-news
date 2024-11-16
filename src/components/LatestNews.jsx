import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex gap-2 items-center bg-base-200 p-2 my-3">
            <p className="bg-[#D72050] text-white px-3 py-1">Latest</p>
            <Marquee pauseOnHover={true} speed={90} className="space-x-10">
            <Link to="/news">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, temporibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatum?dfyhcfjdchyuhscducyhdfgyugct8tg8.dcdshicdhihfhuihg8ayg9gnb
            </Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;