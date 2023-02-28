import React from "react";
import { Link, defer, Await, useLoaderData } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";
import { getHostVans } from "../../components/api";

export function loader() {
  return defer({ vans: getHostVans() });
}

export default function Dashboard() {
  const loaderData = useLoaderData();

  function renderVanElements(vans) {
    const hostVansEls = vans.map((van) => (
      <div className="host-van-single host-van-dim" key={van.id}>
        <img
          src={van.imageUrl}
          className="host-van-img"
          alt={`Photo of ${van.name}`}
        />
        <div className="host-van-info">
          <h3>{van.name}</h3>
          <p>${van.price}/day</p>
        </div>
        <Link className="link" to={`vans/${van.id}`}>
          View
        </Link>
      </div>
    ));

    return (
      <div className="host-vans-list">
        <section>{hostVansEls}</section>
      </div>
    );
  }

  return (
    <div className="host-van-dashboard">
      <section className="host-dashboard-earnings">
        <div className="info">
          <h1>Welcome!</h1>
          <p>
            Income last <span>30 days</span>
          </p>
          <h2>$2,260</h2>
        </div>
        <Link className="link" to="income">
          Details
        </Link>
      </section>
      <section className="host-dashboard-reviews">
        <h2>Review score</h2>

        <BsStarFill className="star" />

        <p>
          <span>5.0</span>/5
        </p>
        <Link className="link" to="reviews">
          Details
        </Link>
      </section>
      <section className="host-dashboard-vans">
        <div className="top">
          <h2>Your listed vans</h2>
          <Link className="link" to="vans">
            View all
          </Link>
        </div>
        <React.Suspense fallback={<h3>Loading...</h3>}>
          <Await resolve={loaderData.vans}>{renderVanElements}</Await>
        </React.Suspense>
      </section>
    </div>
  );
}
