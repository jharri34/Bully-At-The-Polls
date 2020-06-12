// eslint-disable-next-line
import config from '../shared/config'

export async function getVoters() {
    
    let data =await fetch(config.VOTER_URL)
    try {
      const resp = await data.json()
      return resp  
    }catch(exception){
      return exception
    }
    
  }   