// Select HTML elements
const inputElement = document.querySelector('#favchap');
const buttonElement = document.querySelector('button');
const list = document.querySelector('#list');

// Add event Listener to the aa chapter button

button.addEventListener('click', function() {

    // Check that the input is not empty
    if (input.value.trim() !== ''){

        // Create list item
        const li = document.createElement('li');
        
        // Create delete button
        const deleteButton = document.createElement('button')
        
        // Set the chapter name
        li.textContent = inputElement.value;

        // Configure delete button
        deleteButton.textContent = '❌';
        deleteButton.setAttribute('aria-label', 'Remove ${input.value}');

        // Add delete button to List item
        li.append(deleteButton);

        // Add List item to the unordered List
        list.append(li);

        // Delete chapter when button is clicked
        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            input.focus();
        });

        // clear the input field
        input.value = '';

        // Return focus to the input field
        input.focus();
    }
    else {
        // Keep the cursor in the input box
        input.focus();
    }
});
