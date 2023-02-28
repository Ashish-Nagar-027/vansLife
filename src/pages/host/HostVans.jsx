import React, { Suspense } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, defer, useLoaderData, Await } from "react-router-dom";
import { getHostVans } from "../../firebase";

export function loader() {
  return defer({ HostVans: getHostVans() });
}

const HostVans = () => {
  const loaderData = useLoaderData();

  return (
    <div className="Host-van-container">
      <div>
        <h1>Your listed Vans</h1>
        <div className="host-van-list">
          <Suspense
            fallback={<h2 className="fallback-h2">loading vans data . . .</h2>}
          >
            <Await resolve={loaderData.HostVans}>
              {(HostVans) => {
                return HostVans.map((hostvan) => {
                  return (
                    <Link
                      key={hostvan.id}
                      className="link host-vans-links"
                      to={hostvan.id}
                    >
                      <div key={hostvan.id} className="host-van-div">
                        <img className="host-van-img" src={hostvan.imageUrl} />
                        <div>
                          <h2>{hostvan.name}</h2>
                          <p>
                            ${hostvan.price}
                            <span>/day</span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                });
              }}
            </Await>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default HostVans;
