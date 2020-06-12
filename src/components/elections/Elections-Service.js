// eslint-disable-next-line
import config from '../shared/config'


export async function getElections() {

    
    let data = await (await (fetch(config.CIVIC_URL)
    .then(res => {
      return res.json()
    })
    .catch(err => {
      console.log(`Error: ${err}`)
    })
  ))
  return data   
 
  }