/**
 * Helper for all DOM node creation or selection,alway start ans finish by lower case char
 */


/**
 * Helper for create element
 * @param {String} tag name of html markup you want to create
 * @returns {Function} native javascript function create element
 */
export function dCrEl(tag) {
  return document.createElement(tag)
}

/**
 * Helper for targeted element by ID
 * @param {String} id - id of the targeted element
 * @returns {Function}
 */
export function dGEBId(id) {
  return document.getElementById(id)
}

/**
 * Helper for sellected one element by css selector
 * @param {String} tag - name of the selector css
 * @returns {Function}
 */
export function dQySr(tag) {
  return document.querySelector(tag)
}

/**
 * Helper for sellected many elements by css selctor
 * @param {String} tag - name of the selector css
 * @returns {Function}
 */
export function dQySrAl(tag) {
  return document.querySelectorAll(tag)
}

export function dGEBCNa(name) {
  return document.getElementsByClassName(name)
}

export function dGEBNa(name) {
  return document.getElementsByName(name)
}

/**
 * This onr have two args more
 * @param {Element} from - DOM element from who you want to insert
 * @param {String} where - localisation of the insert (afterbegin, beforeend, etc...look at https://developer.mozilla.org/fr/docs/Web/API/Element/insertAdjacentHTML#param%C3%A8tres)
 * @param {String} tag - HTMLElement you want to insert
 * @returns 
 */
export function isAdHl(from, where, tag) {
  return from.insertAdjacentHTML(where, tag)
}
