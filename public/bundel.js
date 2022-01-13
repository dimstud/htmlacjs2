/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const createHeaderProfileTemplate = () => {
  return (
    `<section class="header__profile profile">
    <p class="profile__rating">Movie Buff</p>
    <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
    </section>`
  );
};

const createMainMavigationTemplate = () => {
  return (
    `<nav class="main-navigation">
    <div class="main-navigation__items">
      <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
      <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">13</span></a>
      <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">4</span></a>
      <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">8</span></a>
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
    </nav>`
  );
};

const createSortTemplate = () => {
  return (
    `<ul class="sort">
    <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
    <li><a href="#" class="sort__button">Sort by date</a></li>
    <li><a href="#" class="sort__button">Sort by rating</a></li>
  </ul>`
  );
};

const createFilmTemplate = () => {
  return (
    `<section class="films">
    </section>`
  );
};

const createFilmListTemplate = () => {
  return (
    `<section class="films-list">
      <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
      <div class="films-list__container">
      </div>
    </section>`
  );
};

const createFilmCardTemplate = (title, rating, year, duration, genre, poster, description, commentsCount) => {
  return (
    `<article class="film-card">
    <h3 class="film-card__title">${title}</h3>
    <p class="film-card__rating">${rating}</p>
    <p class="film-card__info">
      <span class="film-card__year">${year}</span>
      <span class="film-card__duration">${duration}</span>
      <span class="film-card__genre">${genre}</span>
    </p>
    <img src="./images/posters/${poster}" alt="${title}" class="film-card__poster">
    <p class="film-card__description">${description}</p>
    <a class="film-card__comments">${commentsCount} comments</a>
    <div class="film-card__controls">
      <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
      <button class="film-card__controls-item button film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
      <button class="film-card__controls-item button film-card__controls-item--favorite" type="button">Mark as favorite</button>
    </div>
  </article>`
  );
};

const createFilmBtnShowTemplate = () => {
  return (
    `<button class="films-list__show-more">Show more</button>`
  );
};

const createFilmslistExtraTemplate = (title) => {
  return (
    `<section class="films-list films-list--extra">
      <h2 class="films-list__title">${title}</h2>
      <div class="films-list__container">
      </div>
    </section>`
  );
};

const createStatisticsCountTemplate = (count) => {
  return (
    `<p>${count} movies inside</p>`
  );
};


const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};


const siteHeader = document.querySelector('.header');
const siteMain = document.querySelector('.main');
const siteFooter = document.querySelector('.footer');


render(siteHeader, createHeaderProfileTemplate(), 'beforeend');
render(siteMain, createMainMavigationTemplate(), 'afterbegin');
render(siteMain, createSortTemplate(), 'beforeend');
render(siteMain, createFilmTemplate(), 'beforeend');

const siteFilms = siteMain.querySelector('.films');
render(siteFilms, createFilmListTemplate(), 'beforeend');

const siteFilmListContainer = siteFilms.querySelector('.films-list__container');
render(siteFilmListContainer, createFilmCardTemplate('The Dance of Life', '8.3', '1929', '1h 55m', 'Musical', 'the-dance-of-life.jpg', 'Burlesque comic Ralph "Skid" Johnson (Skelly), and specialty dancer Bonny Lee King (Carroll), end up together on a cold, rainy night at a tr…', '5'), 'beforeend');
render(siteFilmListContainer, createFilmCardTemplate('Sagebrush Trail', '3.2', '1933', '54m', 'Western', 'sagebrush-trail.jpg', 'Sentenced for a murder he did not commit, John Brant escapes from prison determined to find the real killer. By chance Brant\'s narrow escap…', '89'), 'beforeend');
render(siteFilmListContainer, createFilmCardTemplate('The Man with the Golden Arm', '9.0', '1955', '1h 59m', 'Drama', 'the-man-with-the-golden-arm.jpg', 'Frankie Machine (Frank Sinatra) is released from the federal Narcotic Farm in Lexington, Kentucky with a set of drums and a new outlook on…', '18'), 'beforeend');
render(siteFilmListContainer, createFilmCardTemplate('Santa Claus Conquers the Martians', '2.3', '1964', '1h 21m', 'Comedy', 'santa-claus-conquers-the-martians.jpg', 'The Martians Momar ("Mom Martian") and Kimar ("King Martian") are worried that their children Girmar ("Girl Martian") and Bomar ("Boy Marti…', '465'), 'beforeend');
render(siteFilmListContainer, createFilmCardTemplate('Popeye the Sailor Meets Sindbad the Sailor', '6.3', '1936', '16m', 'Cartoon', 'popeye-meets-sinbad.png', 'In this short, Sindbad the Sailor (presumably Bluto playing a "role") proclaims himself, in song, to be the greatest sailor, adventurer and…', '0'), 'beforeend');

const siteFilmsList = siteFilms.querySelector('.films-list');
render(siteFilmsList, createFilmBtnShowTemplate(), 'beforeend');

render(siteFilms, createFilmslistExtraTemplate('Top rated'), 'beforeend');
render(siteFilms, createFilmslistExtraTemplate('Most commented'), 'beforeend');

const siteFilmsListExtraContainer = siteFilms.querySelectorAll('.films-list--extra .films-list__container');
render(siteFilmsListExtraContainer[0], createFilmCardTemplate('The Man with the Golden Arm', '9.0', '1955', '1h 59m', 'Drama', 'the-man-with-the-golden-arm.jpg', 'Frankie Machine (Frank Sinatra) is released from the federal Narcotic Farm in Lexington, Kentucky with a set of drums and a new outlook on…', '18'), 'beforeend');
render(siteFilmsListExtraContainer[0], createFilmCardTemplate('The Great Flamarion', '8.9', '1945', '1h 18m', 'Mystery', 'the-great-flamarion.jpg', 'The film opens following a murder at a cabaret in Mexico City in 1936, and then presents the events leading up to it in flashback. The Grea…', '12'), 'beforeend');

render(siteFilmsListExtraContainer[1], createFilmCardTemplate('Santa Claus Conquers the Martians', '2.3', '1964', '1h 21m', 'Comedy', 'santa-claus-conquers-the-martians.jpg', 'The Martians Momar ("Mom Martian") and Kimar ("King Martian") are worried that their children Girmar ("Girl Martian") and Bomar ("Boy Marti…', '465'), 'beforeend');
render(siteFilmsListExtraContainer[1], createFilmCardTemplate('Made for Each Other', '5.8', '1939', '1h 32m', 'Comedy', 'made-for-each-other.png', 'John Mason (James Stewart) is a young, somewhat timid attorney in New York City. He has been doing his job well, and he has a chance of bei…', '56'), 'beforeend');

const siteFooterStatistics = siteFooter.querySelector('.footer__statistics');
render(siteFooterStatistics, createStatisticsCountTemplate('130 291'), 'beforeend');


/***/ })

/******/ });
//# sourceMappingURL=bundel.js.map