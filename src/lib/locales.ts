let localesResponseCache = null;

const getLocales = () => {
  if (localesResponseCache) {
    return Promise.resolve(localesResponseCache);
  }

  return fetch(
    `${import.meta.env.CONTENTFUL_LOCALES_ENDPOINT}?access_token=${
      import.meta.env.CONTENTFUL_DELIVERY_TOKEN
    }`
  )
    .then((response) => response.json())
    .then((response) => {
      localesResponseCache = response;
      return localesResponseCache;
    });
};

export default getLocales;
