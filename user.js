const mainDiv = document.getElementById('main');

mainDiv.style.backgroundColor = 'orange';

mainDiv.classList = ['main-container']

const table = document.createElement('table');

mainDiv.appendChild(table);

const tableHead = document.createElement('thead');

const tableBody = document.createElement('tbody');

table.appendChild(tableHead);

table.appendChild(tableBody);


for (let i = 0; i < 100; i++) {
    const tr = document.createElement('tr');

    tableBody.appendChild(tr);

    for (let j = 0; j < 20; j++) {
        const td = document.createElement('td');
        td.innerHTML = "Piyush";
        tr.appendChild(td);

    }
}