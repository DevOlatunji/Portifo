// const domain = "http://localhost/eduk8-dashboard/"
// Get URL parameters as a JavaScript object
function getUrlParams() {
  const params = {};
  const queryString = window.location.search.slice(1);
  queryString.split("&").forEach(function (part) {
    if (!part) return;
    const [key, value] = part.split("=");
    params[decodeURIComponent(key)] = decodeURIComponent(value || "");
  });
  return params;
}

// 
function printServerResponse(params){
  if (params.status && params.message) {
    if (params.status === "success") {
      toastr.success(params.message);
    } else if (params.status === "error") {
      toastr.error(params.message);
    } else if (params.status === "info") {
      toastr.info(params.message);
    } else if (params.status === "warning") {
      toastr.warning(params.message);
    } else {
      toastr.notify(params.message);
    }
  }

  // Clean the URL
  if (window.history.replaceState) {
    const cleanUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
    window.history.replaceState({}, document.title, cleanUrl);
  }
}


// book request function. This function takes in two values 1. The book_id and the user_id of 
// the person requesting for the book
function requestBook(book_id, user_id){
    let params = {
        "book_id":book_id,
        "user_id":user_id
    };

    let request = insertQuery(domain+"Engine/library/books/request-book.php", params);
    request.then(response => {
        //
        if (response.status === "ok" && response.statusCode === 200) {
            Swal.fire("Success", response.message, "success");
        } else{
            Swal.fire("Error", response.message, "error");
        }
    }) ;
}

// @checkInCheckOut function. Takes the serial key of the card and checks who the card is attached on the platform and
// takes the necessary action of either marking the user present or absent. 
// @checkType refers to the type of action to take which can either be checkin or checkout
function checkInCheckOut(cardNumber, checkType){
    let params = {
        "cardNumber":cardNumber,
        "checkType":checkType
    };

    let request = insertQuery(domain+"Engine/attendance/checkout-checkin.php", params);
    request.then(response => {
        //
        return response;
    }) ;
}

// let actionType = "checkIn"; // Declare global variable

function togglerSwitcher() {
    const switcher = document.getElementById("switcher");

    if (actionType === "checkIn") {
        actionType = "checkOut";
        switcher.textContent = "Check Out";
        switcher.classList.add("btn-danger");  
        switcher.style.transform = "translateX(100px)";  // Adjusted for proper positioning
        focusElement(cardInput);
    } else {
        actionType = "checkIn";
        switcher.classList.remove("btn-danger");
        switcher.textContent = "Check In";
        switcher.style.transform = "translateX(0)";  
        focusElement(cardInput);
    }
}

// function to focus on an element
function focusElement(element){element.focus();}

function cashierMakeOfflinePayment(amount, userID){
    // 
    let params = {
        "amount" : amount,
        "userID" : userID
    };

    let request = insertQuery(domain+"Engine/payments/cashier/accept-payments/make-offline-payment.php", params);
    request.then(response => {
        console.log(response)
    })

}

// library

// payments
function approvePayment(payment_id){
    let params = {"payment_id" : payment_id};
    let request = insertQuery(domain+"Engine/payments/approve-payment.php", params);
    request.then(response => {
        if(response.status === "ok" && response.statusCode === 200){
            Swal.fire("Success", response.message, "success");
            setTimeout(() => {
                window.location.reload();
            }, 2000)
        }else{            
            Swal.fire("Error", response.message, "error");
        }
    })
}

/***********************************
 * SUBJECT FUNCTIONS 
************************************/
function deleteSubject(subjectId){
    let params = {
        "subject_id" : subjectId
    } ;

    console.log(params)

    let request = insertQuery(domain+"Engine/subjects/delete-subject.php", params);
    request.then(response => {
        if(response.status === "ok" && response.statusCode === 200){
            Swal.fire("Success", response.message, "success");
            setTimeout(() => {
                window.location.reload();
            }, 2000)
        }else{            
            Swal.fire("Error", response.message, "error");
        }
    });
}