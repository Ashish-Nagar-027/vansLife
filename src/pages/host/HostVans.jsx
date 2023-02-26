import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const HostVans = () => {
  const [HostVans, setHostVans] = useState(null);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((jsonFile) => jsonFile.json())
      .then((HostVansData) => setHostVans(HostVansData.vans));
  }, []);

  return (
    <div className="Host-van-container">
      <div>
        <h1>Your listed Vans</h1>
        <div className="host-van-list">
          {HostVans ? (
            HostVans.map((hostvan) => {
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
            })
          ) : (
            <h1>Loading . . .</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default HostVans;
