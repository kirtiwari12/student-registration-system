const testData = [
  {
    id: 101,
    name: "Name 1",
    email: "test1@email.com",
    contact: 8773322241,
  },
  {
    id: 102,
    name: "Name 2",
    email: "test2@email.com",
    contact: 8773322242,
  },
  {
    id: 103,
    name: "Name 3",
    email: "test3@email.com",
    contact: 8773322243,
  },
  {
    id: 104,
    name: "Name 4",
    email: "test4@email.com",
    contact: 8773322244,
  },
  {
    id: 105,
    name: "Name 5",
    email: "test5@email.com",
    contact: 8773322245,
  },
];

// getting saved data from localstorage
const localData = localStorage.getItem("studentData");

// if local data does not exist exist initialize with empty array
const studentData = localData ? JSON.parse(localData) : testData;

const tableBody = document.querySelector("#studentListTable tbody");
for (let record of studentData) {
  // creating new data row
  const newRow = document.createElement("tr");

  // adding id in row
  const id = document.createElement("td");
  id.innerHTML = record.id;
  newRow.appendChild(id);

  // adding name in row
  const name = document.createElement("td");
  name.innerHTML = record.name;
  newRow.appendChild(name);

  // adding email in row
  const email = document.createElement("td");
  email.innerHTML = record.email;
  newRow.appendChild(email);

  // adding contact in row
  const contact = document.createElement("td");
  contact.innerHTML = record.contact;
  newRow.appendChild(contact);

  // appending newly created data row in table body
  tableBody.appendChild(newRow);
}
