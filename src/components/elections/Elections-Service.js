// eslint-disable-next-line
import config from '../shared/config'

export async function getElections() {
   
    let data = await fetch(config.ELECTION_URL)
    try {
      const resp = await data.json()
      return resp  
    }catch(exception){
      return exception
    }
    
  }   