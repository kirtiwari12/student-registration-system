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

function getData() {
  const localData = localStorage.getItem("studentData");
  // if local data does not exist exist initialize with empty array
  const data = localData ? JSON.parse(localData) : [];

  return data;
}

function initializeLocalStorage() {
  if (localStorage.getItem("studentData") === null) {
    // initialize with dummy data
    localStorage.setItem("studentData", JSON.stringify(testData));
  }
}

function addRowToTable(record) {
  const tableBody = document.querySelector("#studentListTable tbody");
  const allData = getData();

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

  //adding delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.onclick = () => {
    const newStudentData = allData.filter((data) => data.id !== record.id);
    saveData(newStudentData);
    loadInitialDataInTable();
  };
  newRow.appendChild(deleteBtn);

  // appending newly created data row in table body
  tableBody.appendChild(newRow);
}

// function to load the data in table initially
function loadInitialDataInTable() {
  // getting saved data from localstorage
  const allData = getData();

  const tableBody = document.querySelector("#studentListTable tbody");
  tableBody.replaceChildren(); // removing all existing rows

  for (let record of allData) {
    addRowToTable(record);
  }
}

function onLoad() {
  initializeLocalStorage();
  loadInitialDataInTable();
}
onLoad();

// function to save data in localstorage and update table with it
function saveData(data) {
  localStorage.setItem("studentData", JSON.stringify(data));
}

function addRecord(record) {
  const allData = getData(); // getting existing data
  allData.push(record); // adding new record to existing data
  saveData(allData); // updating localstorage and table
}

function submitForm(event) {
  event.preventDefault(); // prevent page reload
  const form = event.target;

  // Get values
  const id = form.studentId.value;
  const name = form.name.value;
  const email = form.email.value;
  const contact = form.contact.value;

  const newRecord = { id, name, email, contact };
  addRecord(newRecord);
  addRowToTable(newRecord);

  event.target.reset(); // clearing out the form after saving values
}
