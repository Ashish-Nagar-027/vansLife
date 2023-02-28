import React, { Suspense, useState } from "react";
import { useEffect } from "react";
import {
  Link,
  useSearchParams,
  useLoaderData,
  defer,
  Await,
} from "react-router-dom";

import { getAllVans } from "../../firebase";

export function loader() {
  return defer({ vans: getAllVans() });
}

const Vans = () => {
  const dataPromise = useLoaderData();

  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.getAll("type");

  const [filtered, setFiltered] = useState([]);

  const addFilter = (filterName) => {
    if (filtered.includes(filterName)) {
      setFiltered(filtered.filter((type) => type !== filterName));
    } else {
      setFiltered([...filtered, filterName]);
    }
  };

  useEffect(() => {
    if (filtered.length === 0) {
      setSearchParams({});
    } else {
      let filterParam = filtered.join("&type=");
      setSearchParams("type=" + filterParam);
    }
  }, [filtered]);

  return (
    <div className="vans">
      <h2>Explore our van options</h2>
      <Suspense fallback={<h2>loading vans . . .</h2>}>
        <Await resolve={dataPromise.vans}>
          {(vans) => {
            const VansFilter =
              typeFilter.length !== 0
                ? vans.filter((van) => {
                    return typeFilter.includes(van.type.toLowerCase());
                  })
                : vans;

            return (
              <>
                <div className="vans-filter-links">
                  <button
                    className={`link-btn ${
                      typeFilter.includes("simple") ? "simple" : ""
                    }`}
                    onClick={() => addFilter("simple")}
                  >
                    Simple
                  </button>
                  <button
                    className={`link-btn ${
                      typeFilter.includes("luxury") ? "luxury" : ""
                    }`}
                    onClick={() => addFilter("luxury")}
                  >
                    luxury
                  </button>
                  <button
                    className={`link-btn ${
                      typeFilter.includes("rugged") ? "rugged" : ""
                    }`}
                    onClick={() => addFilter("rugged")}
                  >
                    rugged
                  </button>
                  <button
                    className={`link-btn `}
                    onClick={() => setFiltered([])}
                  >
                    Clear
                  </button>
                </div>
                <div className="van-list">
                  {VansFilter.map((van) => (
                    <div key={van.id} className="van-div">
                      <Link
                        className="link van-div"
                        state={{ search: searchParams.toString() }}
                        to={van.id}
                      >
                        <img src={van.imageUrl} alt="van-image" />
                        <div className="van-details">
                          <h3>{van.name}</h3>
                          <p>
                            {van.price}
                            <span>/day</span>
                          </p>
                        </div>
                        <i className={`van-type ${van.type} `}>{van.type}</i>
                      </Link>
                    </div>
                  ))}
                </div>
              </>
            );
          }}
        </Await>
      </Suspense>
    </div>
  );
};

export default Vans;
