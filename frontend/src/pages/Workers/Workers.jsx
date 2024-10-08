import Workercard from "../../components/Workers/WorkerCard";
import Testimonials from "../../components/Testimonial/Testimonials";
import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/useFetchData";
import Loader from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";
import { useEffect, useState } from "react";
const Workers = () => {
  const [query, setQuery] = useState("");
  const [debounceQuery, setDebounceQuery] = useState("");

  const handleSearch = () => {
    setQuery(query.trim());
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceQuery(query);
    }, 700);
    return () => clearTimeout(timeout);
  }, [query]);

  const {
    data: workers,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/workers?query=${debounceQuery}`);
  return (
    <>
      <section className="bg-[#fff9ea]">
        <div className="container text-center">
          <h2 className="heading">Find a Worker</h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
            <input
              id="search-worker"
              type="search"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none
              cursor-pointer placeholder:text-textColor"
              placeholder="Search worker by name or specifications"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              className="btn mt-0 rounded-[0px] rounded-r-md"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          {loading && <Loader />}
          {error && <Error />}
          {!loading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {workers.map((worker) => (
                <Workercard key={worker._id} worker={worker} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section>
        <div className="container">
          <div className="xl:w-[700px] mx-auto">
            <h2 className="heading lg-text-center lg:ml-[60px]">
              What Our Customers Say
            </h2>
            <p className="text__para text-center">
              Discover how WorkMate is transforming the way people find and book
              local workers. Our users share their experiences and how our
              platform has made a difference.
            </p>
          </div>

          <Testimonials />
        </div>
      </section>
    </>
  );
};

export default Workers;
