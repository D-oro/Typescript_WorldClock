import React from 'react';
import ReactDOM from 'react-dom';

const date = new Date()

const GMT = date.toLocaleTimeString('en-GB', {
    timeZone: 'GMT+0',
    hour:'2-digit', 
    minute:'2-digit'
})

const plusOne = date.toLocaleTimeString('en-GB', {
    timeZone: 'Etc/GMT-1',
    hour:'2-digit', 
    minute:'2-digit'
})

const plusTwo = date.toLocaleTimeString('en-GB', {
    timeZone: 'Etc/GMT-2',
    hour:'2-digit', 
    minute:'2-digit'
})

const plusThree = date.toLocaleTimeString('en-GB', {
    timeZone: 'Etc/GMT-3',
    hour:'2-digit', 
    minute:'2-digit'
})

const plusFour = date.toLocaleTimeString('en-GB', {
    timeZone: 'Etc/GMT-4',
    hour:'2-digit', 
    minute:'2-digit'
})

const plusFive = date.toLocaleTimeString('en-GB', {
    timeZone: 'Etc/GMT-5',
    hour:'2-digit', 
    minute:'2-digit'
})

const plusSix = date.toLocaleTimeString('en-GB', {
    timeZone: 'Etc/GMT-6',
    hour:'2-digit', 
    minute:'2-digit'
})

const plusSeven = date.toLocaleTimeString('en-GB', {
    timeZone: 'Etc/GMT-7',
    hour:'2-digit', 
    minute:'2-digit'
})

const plusEight = date.toLocaleTimeString('en-GB', {
    timeZone: 'Etc/GMT-8',
    hour:'2-digit', 
    minute:'2-digit'
})

const plusNine = date.toLocaleTimeString('en-GB', {
    timeZone: 'Etc/GMT-9',
    hour:'2-digit', 
    minute:'2-digit'
})

const plusTen = date.toLocaleTimeString('en-GB', {
    timeZone: 'Etc/GMT-10',
    hour:'2-digit', 
    minute:'2-digit'
})

const plusEleven = date.toLocaleTimeString('en-GB', {
    timeZone: 'Etc/GMT-11',
    hour:'2-digit', 
    minute:'2-digit'
})

const plusTwelve = date.toLocaleTimeString('en-GB', {
    timeZone: 'Etc/GMT+12',
    hour:'2-digit', 
    minute:'2-digit'
})

const minusEleven = date.toLocaleTimeString('en-GB', {
    timeZone: 'Etc/GMT+11',
    hour:'2-digit', 
    minute:'2-digit'
})

const minusTen = date.toLocaleTimeString('en-GB', {
    timeZone: 'Etc/GMT+10',
    hour:'2-digit', 
    minute:'2-digit'
})

const minusNine = date.toLocaleTimeString('en-GB', {
    timeZone: 'Etc/GMT+9',
    hour:'2-digit', 
    minute:'2-digit'
})

const minusEight = date.toLocaleTimeString('en-GB', {
    timeZone: 'Etc/GMT+8',
    hour:'2-digit', 
    minute:'2-digit'
})

const minusSeven = date.toLocaleTimeString('en-GB', {
    timeZone: 'Etc/GMT+7',
    hour:'2-digit', 
    minute:'2-digit'
})

const minusSix = date.toLocaleTimeString('en-GB', {
    timeZone: 'Etc/GMT+6',
    hour:'2-digit', 
    minute:'2-digit'
})

const minusFive = date.toLocaleTimeString('en-GB', {
    timeZone: 'Etc/GMT+5',
    hour:'2-digit', 
    minute:'2-digit'
})

const minusFour = date.toLocaleTimeString('en-GB', {
    timeZone: 'Etc/GMT+4',
    hour:'2-digit', 
    minute:'2-digit'
})

const minusThree = date.toLocaleTimeString('en-GB', {
    timeZone: 'Etc/GMT+3',
    hour:'2-digit', 
    minute:'2-digit'
})

const minusTwo = date.toLocaleTimeString('en-GB', {
    timeZone: 'Etc/GMT+2',
    hour:'2-digit', 
    minute:'2-digit'
})

const minusOne = date.toLocaleTimeString('en-GB', {
    timeZone: 'Etc/GMT+1',
    hour:'2-digit', 
    minute:'2-digit'
})

ReactDOM.render(
<div>Hello Woooorld. In Glasgow the time is {GMT}.
    <p>Check out some other places around the world:</p>
    <p></p>
    <h1>World Clock</h1>

    <table>
        <tr>
        <th>Location</th>
        <th>-</th>
        <th>Time</th>
        </tr>
        <tr>
            <td>Scotland, Glasgow</td>
            <td> </td>
            <td>{GMT}</td>
        </tr>
        <tr>
            <td>Algeria, Algiers</td>
            <td> </td>
            <td>{plusOne}</td>
        </tr>
        <tr>
            <td>Malawi, Lilongwe</td>
            <td> </td>
            <td>{plusTwo}</td>
        </tr>
        <tr>
            <td>Kenya, Nairobi</td>
            <td> </td>
            <td>{plusThree}</td>
        </tr>
        <tr>
            <td>Georgia, Tbilisi</td>
            <td> </td>
            <td>{plusFour}</td>
        </tr>
        <tr>
            <td>Pakistan, Islamabad</td>
            <td> </td>
            <td>{plusFive}</td>
        </tr>
        <tr>
            <td>Kazakhstan, Astana</td>
            <td> </td>
            <td>{plusSix}</td>
        </tr>
        <tr>
            <td>Vietnam, Hanoi</td>
            <td> </td>
            <td>{plusSeven}</td>
        </tr>
        <tr>
            <td>Malaysia, Kuala Lumpur</td>
            <td> </td>
            <td>{plusEight}</td>
        </tr>
        <tr>
            <td>Japan, Tokyo</td>
            <td> </td>
            <td>{plusNine}</td>
        </tr>
        <tr>
            <td>Papua New Guinea, Port Moresby</td>
            <td> </td>
            <td>{plusTen}</td>
        </tr>
        <tr>
            <td>Micronesia, Palikir</td>
            <td> </td>
            <td>{plusEleven}</td>
        </tr>
        <tr>
            <td>Fiji, Suva</td>
            <td> </td>
            <td>{plusTwelve}</td>
        </tr>
        <tr>
            <td>New Zealand, Wellington</td>
            <td> </td>
            <td>{minusEleven}</td>
        </tr>
        <tr>
            <td>Cook Islands, Rarotonga</td>
            <td> </td>
            <td>{minusTen}</td>
        </tr>
        <tr>
            <td>US, Anchorage</td>
            <td> </td>
            <td>{minusNine}</td>
        </tr>
        <tr>
            <td>US, San Francisco</td>
            <td> </td>
            <td>{minusEight}</td>
        </tr>
        <tr>
            <td>Canada, Inuvik</td>
            <td> </td>
            <td>{minusSeven}</td>
        </tr>
        <tr>
            <td>Mexico, Mexico City</td>
            <td> </td>
            <td>{minusSix}</td>
        </tr>
        <tr>
            <td>Canada, Ottawa</td>
            <td> </td>
            <td>{minusFive}</td>
        </tr>
        <tr>
            <td>Puerto Rico, San Juan</td>
            <td> </td>
            <td>{minusFour}</td>
        </tr>
        <tr>
            <td>Uruguay, Montevideo</td>
            <td> </td>
            <td>{minusThree}</td>
        </tr>
        <tr>
            <td>Sandwich Islands, King Edward Point</td>
            <td> </td>
            <td>{minusTwo}</td>
        </tr>
        <tr>
            <td>Cado Verde, Praia</td>
            <td> </td>
            <td>{minusOne}</td>
        </tr>

    </table>

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
            <th>US, Anchorage -9 </th>
            <th>US, San Francisco -8</th>
            <th>Canada, Inuvik -7</th>
            <th>Mexico, Mexico City -6</th>
            <th>Canada, Ottawa -5</th>
            <th>Puerto Rico, San Juan -4</th>
            <th>Uruguat, Montevideo -3</th>
            <th>Sandwich Islands, King Edward Point -2</th>
            <th>Cado Verde, Praia -1</th>
        </tr>
        <tr>
            <td>{hour}:{twoDigitMinute}</td>
            <td>{hour+1}:{twoDigitMinute}</td>
            <td>{hour+2}:{twoDigitMinute}</td>
            <td>{hour+3}:{twoDigitMinute}</td>
            <td>{hour+4}:{twoDigitMinute}</td>
            <td>{hour+5}:{twoDigitMinute}</td>
            <td>{hour+6}:{twoDigitMinute}</td>
            <td>{hour+7}:{twoDigitMinute}</td>
            <td>{hour+8}:{twoDigitMinute}</td>
            <td>{hour+9}:{twoDigitMinute}</td>
            <td>{hour+10}:{twoDigitMinute}</td>
            <td>{hour+11}:{twoDigitMinute}</td>
            <td>{hour+12}:{twoDigitMinute}</td>

            <td>{hour-11}:{twoDigitMinute}</td>
            <td>{hour-10}:{twoDigitMinute}</td>
            <td>{hour-9}:{twoDigitMinute}</td>
            <td>{hour-8}:{twoDigitMinute}</td>
            <td>{hour-7}:{twoDigitMinute}</td>
            <td>{hour-6}:{twoDigitMinute}</td>
            <td>{hour-5}:{twoDigitMinute}</td>
            <td>{hour-4}:{twoDigitMinute}</td>
            <td>{hour-3}:{twoDigitMinute}</td>
            <td>{hour-2}:{twoDigitMinute}</td>
            <td>{hour-1}:{twoDigitMinute}</td>
        </tr>
    </table> */}

</div>, document.getElementById('root'))

