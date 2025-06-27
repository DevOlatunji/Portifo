// Initialize an empty array to store the selected values
let selectedValues = [];

// Function to update the array based on the checkbox state
function addToParticipants(checkbox) {
  const value = checkbox.value;

  if (checkbox.checked) {
    // Add the value to the array if checked
    if (!selectedValues.includes(value)) {
      selectedValues.push(value);
    }
  } else {
    // Remove the value from the array if unchecked
    selectedValues = selectedValues.filter(item => item !== value);
  }

  // Update the hidden input field with the selected values
  const participantsInput = document.getElementById("participants");
  if (participantsInput) {
      
      console.log(participantsInput);
      
    participantsInput.value = selectedValues.join(", ");
    console.log("Updated participants input:", participantsInput.value);
  } else {
    console.error("Input field with id 'participants' not found!");
  }
}

// Function to check or uncheck all checkboxes
function toggleAllCheckboxes(selectAllCheckbox) {
  const checkboxes = document.querySelectorAll('.participant-checkbox');
  const selectAllChecked = selectAllCheckbox.checked;

  // Update the state of all checkboxes
  checkboxes.forEach(checkbox => {
    checkbox.checked = selectAllChecked;

    // Update the selectedValues array based on the 'select all' action
    if (selectAllChecked) {
      if (!selectedValues.includes(checkbox.value)) {
        selectedValues.push(checkbox.value);
      }
    } else {
      selectedValues = [];
    }
  });

  // Update the hidden input field with the selected values
  const participantsInput = document.getElementById("participants");
  if (participantsInput) {
    participantsInput.value = selectedValues.join(",");
    console.log("Updated participants input (select all):", participantsInput.value);
  } else {
    console.error("Input field with id 'participants' not found!");
  }
}