import React, { useState, useEffect } from "react";

const getLocalData = (key) => {
  let localData = localStorage.getItem(key);
  if (localData) {
    return localData;
  } else {
    return "";
  }
};

export default function useLocal(key) {
  const [value, setValue] = useState(() => {
    return getLocalData(key);
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value]);

  return [value, setValue];
}
