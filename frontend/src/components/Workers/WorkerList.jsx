import Workercard from "./WorkerCard";
import { BASE_URL } from "../../config";
// import { workers } from "../../assets/data/workers";
import useFetchData from "../../hooks/useFetchData";
import Loader from "../Loader/Loading";
import Error from "../Error/Error";

const WorkerList = () => {
  const { data: workers, loading, error } = useFetchData(`${BASE_URL}/workers`);

  return (
    <>
      {loading && <Loader />}
      {error && <Error />}
      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
          {workers.map((worker) => (
            <Workercard key={worker._id} worker={worker} />
          ))}
        </div>
      )}
    </>
  );
};

export default WorkerList;
