import fetchStrapi from './strapi.js';
export default function get_plans(){
  return fetchStrapi('/plans')
    .then((res) =>{
      console.log(res.data);
      return res.data
    } );
}