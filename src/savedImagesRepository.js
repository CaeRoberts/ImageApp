const LS_KEY = "savedItems";

export function saveAll(data = {}) {
  localStorage.setItem(LS_KEY, JSON.stringify(data));
}

export function getAll() {
  const currSavedImages = JSON.parse(localStorage.getItem(LS_KEY)) || {};
  return Object.keys(currSavedImages).map((id) => currSavedImages[id]);
}

export function addOne(image) {
  const currentImages = getData();
  currentImages[image.id] = image;
  saveAll(currentImages);
}

export function getData() {
  return JSON.parse(localStorage.getItem(LS_KEY)) || {};
}

export function removeOne(id) {
  const currentImages = getData();
  delete currentImages[id];
  saveAll(currentImages);
}

// Loosly coupled components with High cohesion
// Independent functions that have complete separation from residual code
