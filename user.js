const mainDiv = document.getElementById('root');

mainDiv.style.backgroundColor = 'orange';

mainDiv.classList = ['main-container']

const table = document.createElement('table');

mainDiv.appendChild(table);

const tableHead = document.createElement('thead');

const tableBody = document.createElement('tbody');

table.appendChild(tableHead);

table.appendChild(tableBody);


fetch('http://localhost:5000/user').then((response) => {
	return response.json();
}).then( (users) => {
	console.log(users);

    for (let user of users) {
        const tr = document.createElement('tr');
    
        tableBody.appendChild(tr);
    
       

        for (let key in user) {
            const td = document.createElement('td');
            td.innerHTML = user[key]
            tr.appendChild(td);
    
        }
    }

    const tr = document.createElement('tr');
    
    tableHead.appendChild(tr);

    for (let key in users[0]) {
        const th = document.createElement('th');
        th.innerHTML = key
        tableHead.appendChild(th);
    }




}).catch( (err) => {
	console.warn('Something went wrong.', err);
});


