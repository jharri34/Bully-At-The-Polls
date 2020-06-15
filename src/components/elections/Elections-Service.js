// eslint-disable-next-line
import config from '../shared/config'

export async function getElections() {
    let url =config.ELECTION_URL + "?key="+ config.API_KEY
    console.log(`elections url..... ${url}`)
    let data = await fetch(url)
    try {
      const resp = await data.json()
      return resp  
    }catch(exception){
      return exception
    }
    
  }   