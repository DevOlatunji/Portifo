// alert("I am working")

// Select Query

async function selectQuery(url, params) {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    params: JSON.stringify(params)
  });
  const data = await response.json();
  return data;
}

// Insert Query

async function insertQuery(url, params) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  });
  
  
//   console.log(response)
  
  const data = await response.json();
  return data;
}

// Delete Query

async function deleteQuery(url, params) {
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  });
  const data = await response.json();
  return data.affectedRows;
}

// Update Query

async function updateQuery(url, params) {
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  });
  const data = await response.json();
  return data.affectedRows;
}

// PUT Query

async function putQuery(url, params) {
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  });
  const data = await response.json();
  return data;
}

// You can use these functions like this:

/*
const url = '(link unavailable)';
const params = { id: 1 };

selectQuery(url, params).then(data => console.log(data));
insertQuery(url, params).then(insertId => console.log(insertId));
deleteQuery(url, params).then(affectedRows => console.log(affectedRows));
updateQuery(url, params).then(affectedRows => console.log(affectedRows));
putQuery(url, params).then(data => console.log(data));
*/