import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useNavigate,
  useParams,
} from "react-router-dom";

const HostVanDetails = () => {
  const params = useParams();

  const [hostedvan, setHostedVan] = useState(null);

  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((jsonFile) => jsonFile.json())
      .then((HostedVansData) => setHostedVan(HostedVansData.vans));
  }, []);

  if (!hostedvan) {
    return (
      <div style={{ minHeight: "80vh" }}>
        <h1>Loading Van Details ...</h1>
      </div>
    );
  }

  return (
    <>
      <Link
        className="link"
        to=".."
        relative="path"
        style={{ width: "80%", margin: "1rem auto", padding: "2rem" }}
      >
        &#8592; Back to all vans
      </Link>
      <div className="host-van-details-div">
        <div className="host-van-details">
          <div className="host-van-main-details">
            <img
              src={hostedvan.imageUrl}
              className="host-van-img "
              alt="host-van-img"
              style={{ minWidth: "10rem" }}
            />
            <div
              style={{ display: "flex", flexDirection: "column", gap: "5px" }}
            >
              <i className={`van-type ${hostedvan.type} `}>{hostedvan.type}</i>
              <h1>{hostedvan.name}</h1>
              <p>
                ${hostedvan.price}
                <span>/day</span>
              </p>
            </div>
          </div>
          <nav className="host-van-details-nav">
            <NavLink
              end
              className={({ isActive }) =>
                isActive ? "link active-link" : "link"
              }
              to={"."}
            >
              Details
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? "link active-link" : "link"
              }
              to={"pricing"}
            >
              Pricing
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "link active-link" : "link"
              }
              to={"photos"}
            >
              Photos
            </NavLink>
          </nav>
          <div style={{ padding: "1rem" }}>
            <Outlet context={{ hostedvan }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HostVanDetails;
