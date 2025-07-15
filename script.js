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

function deleteRecordById(id) {
  const allData = getData();
  const newData = allData.filter((record) => record.id !== id);
  saveData(newData);
  loadInitialDataInTable(newData);
}

function addRowToTable(record) {
  const tableBody = document.querySelector("#studentListTable tbody");

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
  const deleteCell = document.createElement("td");
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = `<i class="fas fa-trash"></i>`;
  deleteBtn.onclick = (e) => {
    e.preventDefault();
    deleteRecordById(record.id);
  };
  deleteCell.appendChild(deleteBtn);
  newRow.appendChild(deleteCell);

  //adding edit button
  const editCell = document.createElement("td");
  const editBtn = document.createElement("button");
  editBtn.innerHTML = `<i class="fas fa-edit"></i>`;
  editBtn.onclick = (e) => {
    e.preventDefault();
    onEditClick(record);
  };
  editCell.appendChild(editBtn);
  newRow.appendChild(editCell);

  // appending newly created data row in table body
  tableBody.appendChild(newRow);
}

// function to load the data in table initially
function loadInitialDataInTable(data) {
  // getting saved data from localstorage
  const allData = data ?? getData();

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

function checkIsExisting(data, id) {
  const index = data.findIndex((record) => record.id === id);
  return { exists: index !== -1, index };
}

function addRecord(record) {
  const allData = getData(); // getting existing data
  const { exists, index } = checkIsExisting(allData, record.id);

  if (!exists) {
    allData.push(record); // adding new record to existing data
  } else {
    allData[index] = record;
  }
  saveData(allData); // updating localstorage and table
  loadInitialDataInTable(allData);
}

function submitForm(event) {
  event.preventDefault(); // prevent page reload
  const form = event.target;

  // Get values
  const id = form.id.value;
  const name = form.name.value;
  const email = form.email.value;
  const contact = form.contact.value;

  const newRecord = { id, name, email, contact };
  addRecord(newRecord);

  form.elements.id.disabled = false; // enabling the input after an edit update
  event.target.reset(); // clearing out the form after saving values
}

function onEditClick(record) {
  const form = document.getElementById("studentForm");

  const hasAnyValue = Array.from(form.elements).some(
    (input) => input.value.trim() !== ""
  );

  if (hasAnyValue) {
    // take user confirmation to edit if form has values
    const proceed = confirm(
      "The current form values will be discarded. Do you want to continue to edit?"
    );
    if (!proceed) {
      return;
    }
  }

  for (const key in record) {
    if (form.elements[key]) {
      form.elements[key].value = record[key];
    }
    if (key === "id") {
      form.elements[key].disabled = true;
    }
  }
}
