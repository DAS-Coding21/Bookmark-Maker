
const bookmarkFormEl = document.getElementById("bookmarkForm");

const siteNameInputEl = document.getElementById("siteNameInput");
const siteNameErrMsgEl = document.getElementById("siteNameErrMsg");

const siteUrlInputEl = document.getElementById("siteUrlInput");
const siteUrlErrMsgEl = document.getElementById("siteUrlErrMsg");

const submitBtnEl = document.getElementById("submitBtn");

const bookmarksListEl = document.getElementById("bookmarksList");

function validateSiteName() {
    if (siteNameInputEl.value === "") {
        siteNameErrMsgEl.textContent = "Required*";
        siteNameErrMsgEl.classList.add("error-msg");
    } else {
        siteNameErrMsgEl.textContent = "";
    }
}

siteNameInputEl.addEventListener("change", validateSiteName);

function validateSiteUrl() {
    if (siteUrlInputEl.value === "") {
        siteUrlErrMsgEl.textContent = "Required*";
        siteUrlErrMsgEl.classList.add("error-msg");
    } else {
        siteUrlErrMsgEl.textContent = "";
    }
}

siteUrlInputEl.addEventListener("change", validateSiteUrl);

function createBookmarksList() {
    let siteNameVal = siteNameInputEl.value;
    let siteUrlVal = siteUrlInputEl.value;

    let anchorEl = document.createElement("a");
    anchorEl.setAttribute("href", siteUrlVal);
    anchorEl.setAttribute("target", "_blank");
    anchorEl.textContent = siteUrlVal;

    let listEl = document.createElement("li");
    listEl.textContent = siteNameVal;
    listEl.classList.add("bookmark-list", "d-flex", "flex-column",);
    listEl.appendChild(anchorEl);

    bookmarksListEl.classList.add("bookmark-list-conatiner");
    bookmarksListEl.appendChild(listEl);
}

bookmarkFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    validateSiteName();
    validateSiteUrl();
    createBookmarksList();
});