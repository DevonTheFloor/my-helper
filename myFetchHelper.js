/**
 * All CRUD query with asynchronous fetch, you acn have on json,xml or text. Replace format by response.json() or 'response.xml()' or 'response.text()
 * @param {*} url String to url data
 * @param {*} init Object for config post request
 * @returns JSON, XML or Text
 */
export async function myPost(url, init, format) {

  let response = await fetch(url, init, format);
  if (!response.ok) {
    throw new Error(`Erreur transmission requête. Statut : ${response.status}`)
  }
  return await format;
};

export async function myGet(url, format) {
  let response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Erreur transmission requête. Statut : ${response.status}`)
  }
  return await format;
};

