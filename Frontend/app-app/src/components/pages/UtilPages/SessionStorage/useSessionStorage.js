import { useState, useEffect } from 'react';


// /**************************************WorksCited***************************************** 
//  * Title: "Using Session Storage in React with Hooks"
//  * Author: Nick Scialli 
//  * Date: 3/28/21 (Acccessed 1/10/22)
//  * Code Version: NA
//  * Availabity: https://typeofnan.dev/using-session-storage-in-react-with-hooks/
//  * 
// ******************************************************************************************/

export function getSessionStorageOrDefault(key, defaultValue) {
  const stored = sessionStorage.getItem(key);
  if (!stored) {
    return defaultValue;
  }
  return JSON.parse(stored);
}

export function useSessionStorage(key, defaultValue) {
  const [value, setValue] = useState(
    getSessionStorageOrDefault(key, defaultValue)
  );

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}