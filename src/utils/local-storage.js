/**
 * Get local storage data by name
 * 
 * @param {String} name The name tag for the local data
 * @returns Data
 */
 export function getLocalData(name){
    let data = localStorage.getItem(name);
    try {
        return JSON.parse(data);
    } catch (err) {
        return data;
    }
}



/**
 * Method to save data in local storage
 * 
 * @param {String} name The name tag for the local data
 * @param {Object} data Data to be saved locally
 */
export function setLocalData(name, data){
    try {
        localStorage.setItem(name, JSON.stringify(data));
    } catch(err) {
        localStorage.setItem(name, data);
    }
}



/**
 * Method to delete local storage data by name
 */
export function deleteLocalData(name) {
    localStorage.removeItem(name);
}