chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.action === "blurContacts") {
		// Select all contact elements by the class name "_ak8q"
		const contacts = document.getElementsByClassName("_ak8q");

		if (request.checked) {
			// Apply the blur effect to each contact
			for (let i = 0; i < contacts.length; i++) {
				contacts[i].style.filter = "blur(5px)";
			}
			sendResponse({ status: "contacts blurred" });
		} else {
			for (let i = 0; i < contacts.length; i++) {
				contacts[i].style.filter = "none";
			}
		}
	}

	if (request.action === "blurProfilePictures") {
		const contacts = document.getElementsByClassName("xww2gxu");

		// Apply the blur effect to each contact
		if (request.checked) {
			for (let i = 0; i < contacts.length; i++) {
				contacts[i].style.filter = "blur(5px)";
			}
			sendResponse({ status: "Profile Pitures Blurred!!!" });
		} else {
			for (let i = 0; i < contacts.length; i++) {
				contacts[i].style.filter = "none";
			}
		}
	}

	if (request.action === "blurContactsAndOuterMsg") {
		const contacts = document.getElementsByClassName("x1iyjqo2");

		// Apply the blur effect to each contact
		if (request.checked) {
			for (let i = 0; i < contacts.length; i++) {
				contacts[i].style.filter = "blur(5px)";
			}
			sendResponse({ status: "Contacts and Outer Messages Blurred!!!" });
		} else {
			for (let i = 0; i < contacts.length; i++) {
				contacts[i].style.filter = "none";
			}
		}
	}
});
