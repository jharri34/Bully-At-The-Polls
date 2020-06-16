// eslint-disable-next-line
import config from '../shared/config'

export async function getElections() {
    let url =config.ELECTION_URL + config.QUERY_KEY + config.API_KEY
    console.log(url)
    let data = await fetch(url)
    try {
      console.log(url)
      const resp = await data.json()
      return resp  
    }catch(exception){
      return exception
    }
    
  }   