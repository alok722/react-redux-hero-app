import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createHero, updateHero } from "../actions/hero";
import HeroService from "../services/HeroService";

const AddHero = (props) => {
  const currentPathId = props.match.params.id;
  const history = useHistory();
  const initialState = {
    id: null,
    name: "",
    realName: "",
    firstAppearance: "",
    publisher: "",
    images: ""
  };
  const [hero, setHero] = useState(initialState);

  const dispatch = useDispatch();

  const getHero = id => {
    HeroService.get(id)
      .then(response => {
        setHero(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.error(e);
      });
  };

  useEffect(() => {
    if (currentPathId) getHero(currentPathId);
  }, [currentPathId]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setHero({ ...hero, [name]: value });
  };

  const saveHero = () => {
    if (currentPathId) {
      dispatch(updateHero(hero.id, hero));
      alert(`Hero updated successfully!`);
    } else {
      const { name, realName, firstAppearance, publisher, images } = hero;
      dispatch(createHero(name, realName, firstAppearance, publisher, images))
      alert(`Hero created successfully!`);
    }
    history.push("/");
  };

  return (
    <div className="submit-form">
      <div className="form-group">
        <label className="form-label mt-4 text-center">{currentPathId ? 'Update' : 'Add'} your super hero 🤓</label>
        <div className="form-floating mb-1">
          <input type="text" className="form-control" id="floatingName" name="name" required value={hero.name} onChange={handleInputChange} placeholder=" " />
          <label htmlFor="floatingName">Hero Name</label>
        </div>
        <div className="form-floating mb-1">
          <input type="text" className="form-control" id="floatingURL" required name="images" value={hero.images} onChange={handleInputChange} placeholder=" " />
          <label htmlFor="floatingURL">Image URL</label>
        </div>
        <div className="form-floating mb-1">
          <input type="text" className="form-control" id="floatingRealName" name="realName" required value={hero.realName} onChange={handleInputChange} placeholder=" " />
          <label htmlFor="floatingRealName">Real Name</label>
        </div>
        <div className="form-floating mb-1">
          <input type="text" className="form-control" id="floatingName" required name="firstAppearance" value={hero.firstAppearance} onChange={handleInputChange} placeholder=" " />
          <label htmlFor="floatingName">First Movie</label>
        </div>
        <div className="form-floating mb-1">
          <input type="text" className="form-control" id="floatingName" required name="publisher" value={hero.publisher} onChange={handleInputChange} placeholder=" " />
          <label htmlFor="floatingName">Book Publisher</label>
        </div>
      </div>
      <button onClick={saveHero} className="btn btn-success mt-2">
        {currentPathId ? 'Update' : 'Add'}
      </button>
    </div>
  );
};

export default AddHero;
