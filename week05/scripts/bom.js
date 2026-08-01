// Select HTML elements
const inputElement = document.querySelector('#favchap');
const buttonElement = document.querySelector('button');
const list = document.querySelector('#list');

// Get chapters from local storage
let chaptersArray = getChapterList() || [];

// Display saved chapters on page load
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

// Add event Listener to the aa chapter button

buttonElement.addEventListener("click", () => {

    if (inputElement.value.trim() !== "") {

        displayList(inputElement.value);

        chaptersArray.push(inputElement.value);

        setChapterList();

        inputElement.value = "";

        inputElement.focus();
    }

});

// Display a chapter
function displayList(item) {

    const li = document.createElement("li");
    const deleteButton = document.createElement("button");

    li.textContent = item;

    deleteButton.textContent = "❌";
    deleteButton.classList.add("delete");
    deleteButton.setAttribute("aria-label", `Remove ${item}`);

    li.append(deleteButton);

    list.append(li);

    deleteButton.addEventListener("click", () => {
        list.removeChild(li);
        deleteChapter(li.textContent);
        inputElement.focus();
    });
}

// Save chapters
function setChapterList() {
    localStorage.setItem(
        "myFavBOMList",
        JSON.stringify(chaptersArray)
    );
}

// Load chapters
function getChapterList() {
    return JSON.parse(
        localStorage.getItem("myFavBOMList")
    );
}

// Delete a chapter
function deleteChapter(chapter) {

    chapter = chapter.slice(0, chapter.length - 1);

    chaptersArray = chaptersArray.filter(item => item !== chapter);

    setChapterList();
}