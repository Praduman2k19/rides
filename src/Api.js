import axios from "axios"
// let API_BASE_URL="https://assessment.api.vweb.app/rides";
const API_BASE_URL=axios.create({ baseURL: 'https://assessment.api.vweb.app/rides' });
// let api='https://jsonplaceholder.typicode.com/posts'

let response=''
let prequeryString=""
export function apiGet(queryString){
      console.log(response)
      console.log(prequeryString)

      if(response!='' && prequeryString===queryString)
      return response
      
      prequeryString=queryString  

      response =fetch(`${queryString}`).then(r=>r.json())
      return response
}
