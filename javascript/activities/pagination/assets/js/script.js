// Display data on the table
const getDoctors = (pageNumber) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {

    if (request.readyState === 4 && request.status === 200) {
      
      const result = JSON.parse(request.responseText);
      let HTML = ``;
      console.log(result);

      for(let index in result.data){
        
        HTML += `
          <tr>
            <td scope="row">${result.data[index].id}</th>
            <td>${result.data[index].title}</td>
            <td>${result.data[index].firstname}</td>
            <td>${result.data[index].lastname}</td>
            <td>${result.data[index].practice_name}</td>
            <td>${result.data[index].contact_number}</td>
            <td>${result.data[index].email}</td>
          </tr>
        `
      }

      document.querySelector('#tbl-body-doctors').innerHTML = HTML;
    } else if (request.readyState === 4) {
      alert("Could not fetch data!");
    }
  });

  request.open("GET", `https://api.mydrsappt.com/api/v1/doctors?page=${pageNumber}`);
  request.send();
};

// Invoke for display
getDoctors();

document.querySelector('#select-page').addEventListener('click', () => {
  let pageNumber = document.querySelector('#select-page').value;
  getDoctors(pageNumber);
});

// EventListener for search keyup
document.querySelector('#input-search').addEventListener('keyup', () => {
  let pageNumber = document.querySelector('#select-page').value;
  filterDoctors(pageNumber);
});

// EventListener for search changing type
document.querySelector('#search-type').addEventListener('change', () => {
  let pageNumber = document.querySelector('#select-page').value;
  filterDoctors(pageNumber);
  console.log('fired');
});

// Function for search display w/ HTTPRequest
const filterDoctors = (pageNumber) => {

  let searchTypeValue = document.querySelector("#search-type").value;
  let filteredSearch = document.querySelector('#input-search').value.toLowerCase();

  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      
      const result = JSON.parse(request.responseText);
      let HTML = ``;
      let docFirstName = "";
      let docLastName = "";
      let position;

      if(!filteredSearch) getDoctors();

      for(let index in result.data){

        if(searchTypeValue === 'firstname'){
          docFirstName = result.data[index].firstname.toLowerCase();
          position = docFirstName.indexOf(filteredSearch);
          console.log('firstname');
        }
        else if(searchTypeValue === 'lastname'){
          docLastName = result.data[index].lastname.toLowerCase();
          position = docLastName.indexOf(filteredSearch);
          console.log('lastname');
        } 

        if(position < 0)
          continue;

        HTML += `
          <tr>
            <td scope="row">${result.data[index].id}</th>
            <td>${result.data[index].title}</td>
            <td>${result.data[index].firstname}</td>
            <td>${result.data[index].lastname}</td>
            <td>${result.data[index].practice_name}</td>
            <td>${result.data[index].contact_number}</td>
            <td>${result.data[index].email}</td>
          </tr>
        `
      }

      document.querySelector('#tbl-body-doctors').innerHTML = HTML;
    } else if (request.readyState === 4) {
      alert("Could not fetch data!");
    }
  });

  request.open("GET", `https://api.mydrsappt.com/api/v1/doctors?page=${pageNumber}`);
  request.send();
};
