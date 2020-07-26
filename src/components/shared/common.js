export default function formatAddress(address) {
    const {locationName, line1, city, state, zip} =address
    return `${locationName} ${line1} ${city}, ${state} ${zip}`
    
    }