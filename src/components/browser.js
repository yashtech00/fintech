import FDcard from "./FDcard";
import Header from "./Header";
import Timeline from "./timeline";
import Notification from "./Notification";
import PieChartComponent from "./piechart";

const Browse = () => {
  return (
    <div className="">
      <Header />
      <div className="">
        <span className="text-3xl my-6 p-4">Welcome, Johan paul</span>
        <div className="flex justify-evenly  mt-4 ml-3   ">
          <div className="  w-[32%] h-auto  shadow-md mx-2">
            <PieChartComponent />
          </div>
          <div className="shadow-md mx-2 w-[68%] h-auto">
            <Timeline />
          </div>
        </div>
        <div className="flex m-2 ">
          <div>
            <FDcard />
          </div>
          <div className="">
            <Notification />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Browse;
