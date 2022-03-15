/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  retrieveHero,
  deleteHero,
  findHeroByName,
} from "../actions/hero";
import { Link } from "react-router-dom";

const TutorialsList = () => {
  const [searchName, setSearchName] = useState("");

  const hero = useSelector(state => state.hero);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveHero());
  }, []);

  const findByName = () => {
    if (searchName.length === 0) {
      alert("Please enter a name");
      return;
    }
    dispatch(findHeroByName(searchName));
  };

  const handleDelete = (id) => {
    dispatch(deleteHero(id));
    alert("Hero deleted successfully!");
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="input-group mb-2 p-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Name"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByName}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="row">
          {hero &&
            hero.map((elem, index) => (
              <div className="col-xs-6 col-sm-4 col-lg-3" key={index}>
                <div className="card mb-2">
                  <h5 className="card-header text-center text-primary">{elem.name}</h5>
                  <img src={elem.images} alt="hero-avatar" />
                  <div className="card-body">
                    <p className="card-text">My full name is <b>{elem.realName}</b>. I appeared in <b>{elem.firstAppearance}</b> for the first time. My Publisher is <b>{elem.publisher}</b></p>
                  </div>
                  <div className="card-body">
                    <span className="card-link text-danger delete-btn" onClick={() => handleDelete(elem.id)}>Delete</span>
                    <Link to={`/hero/${elem.id}`} className="card-link text-primary">
                      Edit
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TutorialsList;
