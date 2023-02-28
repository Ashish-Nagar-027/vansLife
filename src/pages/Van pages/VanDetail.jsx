import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getVan } from "../../firebase";

const VanDetail = () => {
  const params = useParams();

  console.log();

  const [van, setVan] = useState(null);

  useEffect(() => {
    async function data() {
      let data = await getVan(params.id);
      setVan(data);
    }
    data();
  }, [params]);

  return (
    <div className="vanDetails-container">
      {van ? (
        <div className="van-div van-details-div">
          <Link className="link" to={"/vans"}>
            {" "}
            &#8592; Back to all Vans
          </Link>
          <img src={van.imageUrl} className="van-height" />
          <i className={`van-type ${van.type} `}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price ">
            {van.price} <span>$</span>
          </p>
          <p>{van.description}</p>
          <button className="Btn rent-van-btn">Rent this van</button>
        </div>
      ) : (
        <h1>Loading . . .</h1>
      )}
    </div>
  );
};

export default VanDetail;
