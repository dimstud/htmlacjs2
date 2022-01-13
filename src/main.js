import {createProfileRating} from "./view/profile-rating.js";
import {createMenuAndStats} from "./view/menu.js";
import {createFilmsList} from "./view/fillm-list.js";
import {createFilmcard} from "./view/film-card.js";
import {createShowMoreButton} from "./view/show-more-button.js";
import {createFilmsListExtra} from "./view/film-list-extra.js";
import {createSort} from "./view/sort.js";

const FILM_COUNT = 5;
const EXTRA_FILM_COUNT = 2;

const render = (container, element, place) => {
  container.insertAdjacentHTML(place, element);
};

const profileHeader = document.querySelector(`.header`);
const main = document.querySelector(`.main`);

render(profileHeader, createProfileRating(), `beforeend`);
render(main, createMenuAndStats(), `afterbegin`);
render(main, createSort(), `beforeend`);
render(main, createFilmsList(), `beforeend`);

const filmsSection = document.querySelector(`.films`);
const filmsList = filmsSection.querySelector(`.films-list`);
const filmsListContainer = document.querySelector(`.films-list__container`);

for (let i = 0; i<FILM_COUNT; i++) {
  render(filmsListContainer, createFilmcard(), `beforeend`)
}

render(filmsList, createShowMoreButton(), `beforeend`);
render(filmsSection, createFilmsListExtra(`Top rated`), `beforeend`);
render(filmsSection, createFilmsListExtra(`Most commented`), `beforeend`);

const filmsListExtra = document.querySelectorAll(`.films-list--extra`);

filmsListExtra.forEach((element) => {
  const filmsListExtraContainer = element.querySelector(`.films-list__container`);

  for (let i = 0; i < EXTRA_FILM_COUNT; i++) {
    render(filmsListExtraContainer, createFilmcard(), `beforeend`);
  }
});
