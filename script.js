// const studentData = [
//   {
//     id: 101,
//     name: "Name 1",
//     email: "test1@email.com",
//     contact: 8773322241,
//   },
//   {
//     id: 102,
//     name: "Name 2",
//     email: "test2@email.com",
//     contact: 8773322242,
//   },
//   {
//     id: 103,
//     name: "Name 3",
//     email: "test3@email.com",
//     contact: 8773322243,
//   },
//   {
//     id: 104,
//     name: "Name 4",
//     email: "test4@email.com",
//     contact: 8773322244,
//   },
//   {
//     id: 105,
//     name: "Name 5",
//     email: "test5@email.com",
//     contact: 8773322245,
//   },
//   {
//     id: 106,
//     name: "Name 6",
//     email: "test6@email.com",
//     contact: 8773322246,
//   },
//   {
//     id: 107,
//     name: "Name 7",
//     email: "test7@email.com",
//     contact: 8773322247,
//   },
//   {
//     id: 108,
//     name: "Name 8",
//     email: "test8@email.com",
//     contact: 8773322248,
//   },
//   {
//     id: 109,
//     name: "Name 9",
//     email: "test9@email.com",
//     contact: 8773322249,
//   },
//   {
//     id: 110,
//     name: "Name 10",
//     email: "test10@email.com",
//     contact: 8773322250,
//   },
// ];
// localStorage.setItem("studentData", JSON.stringify(studentData));

const studentData = JSON.parse(localStorage.getItem("studentData"));
const tableBody = document.querySelector("#studentListTable tbody");

for (let record of studentData) {
  const newRow = document.createElement("tr");

  const id = document.createElement("td");
  id.innerHTML = record.id;
  newRow.appendChild(id);

  const name = document.createElement("td");
  name.innerHTML = record.name;
  newRow.appendChild(name);

  const email = document.createElement("td");
  email.innerHTML = record.email;
  newRow.appendChild(email);

  const contact = document.createElement("td");
  contact.innerHTML = record.contact;
  newRow.appendChild(contact);

  tableBody.appendChild(newRow);
}
