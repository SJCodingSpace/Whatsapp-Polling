// Sample poll options
const pollOptions = ["Option 1", "Option 2", "Option 3"];

// Object to store the counts of selected options
const selectedCounts = {};

// Display poll options
const optionsContainer = document.getElementById('options');
pollOptions.forEach(option => {
    selectedCounts[option] = 0; // Initialize count to 0
    const optionElement = document.createElement('div');
    optionElement.classList.add('option');
    optionElement.innerHTML = `
        <label>
            <input type="checkbox" name="option" value="${option}">
            ${option} <span class="count">(0)</span>
        </label>
    `;
    optionsContainer.appendChild(optionElement);
});

// Update counts and display them
function updateCounts() {
    const selectedOptions = Array.from(document.querySelectorAll('input[name="option"]:checked')).map(option => option.value);
    // Reset counts
    Object.keys(selectedCounts).forEach(option => selectedCounts[option] = 0);
    // Update counts based on selected options
    selectedOptions.forEach(option => selectedCounts[option]++);
    // Update the count display in the DOM
    Object.keys(selectedCounts).forEach(option => {
        const countSpan = optionsContainer.querySelector(`input[value="${option}"] + .count`);
        countSpan.textContent = `(${selectedCounts[option]})`;
    });
}

// Vote button click event
document.getElementById('voteBtn').addEventListener('click', () => {
    const selectedOptions = Array.from(document.querySelectorAll('input[name="option"]:checked')).map(option => option.value);
    if (selectedOptions.length > 0) {
        alert(`You voted for: ${selectedOptions.join(', ')}`);
        // Here you can send the vote data to a server if needed
    } else {
        alert('Please select at least one option to vote');
    }
});

// Update counts when checkboxes are clicked
optionsContainer.addEventListener('click', updateCounts);
