import React from 'react';
import Elections from '../elections/Elections'
import Voters from '../voters/Voters'
function Main() {
    return (
<div className="main">Main
    <br/>
    <form>
        <label>
            <input type="text" name="name" />
        </label>
        <input type="submit" value="search" />
    </form>
    <br/>

    <Elections/>
    <br/>
    <Voters/>
</div>

    )
    
}

export default Main;
