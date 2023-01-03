import React from 'react';
import ReactDOM from 'react-dom';

let hour: number = new Date().getHours()
let minutes: number = new Date().getMinutes()

ReactDOM.render(
<div>Hello Woooorld. 
    {/* <table>
        <tr>
            <th>Scotland, Glasgow 0</th>
            <th>Algeria, Algiers +1</th>
            <th>Malawi, Lilongwe +2</th>
            <th>Kenya, Nairobi +3</th>
            <th>Georgia, Tbilisi +4</th>
            <th>Pakistan, Islamabad +5</th>
            <th>Kazakhstan, Astana +6</th>
            <th>Vietnam, Hanoi +7</th>
            <th>Malaysia, Kuala Lumpur +8</th>
            <th>Japan, Tokyo, 9+</th>
            <th>Papua New Guinea, Port Moresby +10</th>
            <th>Micronesia, Palikir, +11</th>
            <th>Fiji, Suva +12</th>
            <th>New Zealand, Wellington -11</th>
            <th>Cook Islands, Rarotonga -10</th>
            <th>Sri Lanka, Sri Jayawardenepura Kotte -9</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th> */}
    <h1>wowza!</h1>
    <h2>{hour}:{minutes}</h2>
</div>, document.getElementById('root'))

