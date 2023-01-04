import React from 'react';
import ReactDOM from 'react-dom';

const date = new Date()

const GMT: string = date.toLocaleTimeString('en-GB', {
    timeZone: 'GMT+0',
    hour:'2-digit', 
    minute:'2-digit'
})

const plusOne: string = date.toLocaleTimeString('en-GB', {
    timeZone: 'Etc/GMT-1',
    hour:'2-digit', 
    minute:'2-digit'
})

const plusTwo: string = date.toLocaleTimeString('en-GB', {
    timeZone: 'Etc/GMT-2',
    hour:'2-digit', 
    minute:'2-digit'
})

const plusThree: string = date.toLocaleTimeString('en-GB', {
    timeZone: 'Etc/GMT-3',
    hour:'2-digit', 
    minute:'2-digit'
})

const plusFour: string = date.toLocaleTimeString('en-GB', {
    timeZone: 'Etc/GMT-4',
    hour:'2-digit', 
    minute:'2-digit'
})

const plusFive: string = date.toLocaleTimeString('en-GB', {
    timeZone: 'Etc/GMT-5',
    hour:'2-digit', 
    minute:'2-digit'
})

const plusSix: string = date.toLocaleTimeString('en-GB', {
    timeZone: 'Etc/GMT-6',
    hour:'2-digit', 
    minute:'2-digit'
})

const plusSeven: string = date.toLocaleTimeString('en-GB', {
    timeZone: 'Etc/GMT-7',
    hour:'2-digit', 
    minute:'2-digit'
})

const plusEight: string = date.toLocaleTimeString('en-GB', {
    timeZone: 'Etc/GMT-8',
    hour:'2-digit', 
    minute:'2-digit'
})

const plusNine: string = date.toLocaleTimeString('en-GB', {
    timeZone: 'Etc/GMT-9',
    hour:'2-digit', 
    minute:'2-digit'
})

const plusTen: string = date.toLocaleTimeString('en-GB', {
    timeZone: 'Etc/GMT-10',
    hour:'2-digit', 
    minute:'2-digit'
})

const plusEleven: string = date.toLocaleTimeString('en-GB', {
    timeZone: 'Etc/GMT-11',
    hour:'2-digit', 
    minute:'2-digit'
})

const plusTwelve: string = date.toLocaleTimeString('en-GB', {
    timeZone: 'Etc/GMT+12',
    hour:'2-digit', 
    minute:'2-digit'
})

const minusEleven: string = date.toLocaleTimeString('en-GB', {
    timeZone: 'Etc/GMT+11',
    hour:'2-digit', 
    minute:'2-digit'
})

const minusTen: string = date.toLocaleTimeString('en-GB', {
    timeZone: 'Etc/GMT+10',
    hour:'2-digit', 
    minute:'2-digit'
})

const minusNine: string = date.toLocaleTimeString('en-GB', {
    timeZone: 'Etc/GMT+9',
    hour:'2-digit', 
    minute:'2-digit'
})

const minusEight: string = date.toLocaleTimeString('en-GB', {
    timeZone: 'Etc/GMT+8',
    hour:'2-digit', 
    minute:'2-digit'
})

const minusSeven: string = date.toLocaleTimeString('en-GB', {
    timeZone: 'Etc/GMT+7',
    hour:'2-digit', 
    minute:'2-digit'
})

const minusSix: string = date.toLocaleTimeString('en-GB', {
    timeZone: 'Etc/GMT+6',
    hour:'2-digit', 
    minute:'2-digit'
})

const minusFive: string = date.toLocaleTimeString('en-GB', {
    timeZone: 'Etc/GMT+5',
    hour:'2-digit', 
    minute:'2-digit'
})

const minusFour: string = date.toLocaleTimeString('en-GB', {
    timeZone: 'Etc/GMT+4',
    hour:'2-digit', 
    minute:'2-digit'
})

const minusThree: string = date.toLocaleTimeString('en-GB', {
    timeZone: 'Etc/GMT+3',
    hour:'2-digit', 
    minute:'2-digit'
})

const minusTwo: string = date.toLocaleTimeString('en-GB', {
    timeZone: 'Etc/GMT+2',
    hour:'2-digit', 
    minute:'2-digit'
})

const minusOne: string = date.toLocaleTimeString('en-GB', {
    timeZone: 'Etc/GMT+1',
    hour:'2-digit', 
    minute:'2-digit'
})

const reload = () => {
    window.location.reload();
}

ReactDOM.render(
<div>
    <h2>Hello World!</h2> 
    <p>In Glasgow the time is {GMT}.</p>
    <p>Check out some other places around the world:</p>

    <h1>World Clock</h1>
    <p>
    <button onClick={reload}>Get current time</button>
    </p>
    <table>
        <tr>
        <th>Location</th>
        <th> </th>
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

</div>, document.getElementById('root'))

