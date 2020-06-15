// eslint-disable-next-line
import config from '../shared/config'

export async function getVoters(address) {
  let url =config.ELECTION_URL + "?key=" +config.API_KEY + "&address="+address
    console.log(`voters url .... ${url}`);

    let data =await fetch(url)
    try {
      const resp = await data.json()
      return resp  
    }catch(exception){
      return exception
    }
    
  }   