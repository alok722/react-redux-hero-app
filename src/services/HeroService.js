import http from "../http-common";

const getAll = () => {
  return http.get("/hero");
};

const get = id => {
  return http.get(`/hero/${id}`);
};

const create = data => {
  return http.post("/hero", data);
};

const update = (id, data) => {
  return http.put(`/hero/${id}`, data);
};

const remove = id => {
  return http.delete(`/hero/${id}`);
};

const removeAll = () => {
  return http.delete(`/hero`);
};

const findByName = name => {
  return http.get(`/hero?name=${name}`);
};

const HeroService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByName
};

export default HeroService;
