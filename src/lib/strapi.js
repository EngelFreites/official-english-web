const VITE_STRAPI_HOST = import.meta.env.VITE_STRAPI_HOST;
const VITE_STRAPI_TOKEN = import.meta.env.VITE_STRAPI_TOKEN;

export default function fetchStrapi(url) {
  console.log(VITE_STRAPI_HOST)
  return fetch(`${VITE_STRAPI_HOST}/api${url}`, {
    headers: {
      Authorization: `Bearer ${VITE_STRAPI_TOKEN}`,
    },
  }).then((res) => res.json());
}