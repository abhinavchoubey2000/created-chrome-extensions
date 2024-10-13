const contactNames = document.getElementById("blurcontactnames");
contactNames.addEventListener("change", async () => {
	// Query the current active tab
	const [tab] = await chrome.tabs.query({
		active: true,
		currentWindow: true,
	});

	// Inject the content script (to ensure it's loaded)
	chrome.scripting.executeScript(
		{
			target: { tabId: tab.id },
			files: ["content.js"],
		},
		() => {
			// After injecting, send a message to the content script
			chrome.tabs.sendMessage(tab.id, {
				action: "blurContacts",
				checked: contactNames.checked,
			});
		}
	);
});

const profilePictures = document.getElementById("blurprofilepictures");
profilePictures.addEventListener("change", async () => {
	// Query the current active tab
	const [tab] = await chrome.tabs.query({
		active: true,
		currentWindow: true,
	});

	// Inject the content script (to ensure it's loaded)
	chrome.scripting.executeScript(
		{
			target: { tabId: tab.id },
			files: ["content.js"],
		},
		() => {
			// After injecting, send a message to the content script
			chrome.tabs.sendMessage(tab.id, {
				action: "blurProfilePictures",
				checked: profilePictures.checked,
			});
		}
	);
});

const contactsAndOuterMSG = document.getElementById("blurcontactsandoutermsg");
contactsAndOuterMSG.addEventListener("change", async () => {
	// Query the current active tab
	const [tab] = await chrome.tabs.query({
		active: true,
		currentWindow: true,
	});

	// Inject the content script (to ensure it's loaded)
	chrome.scripting.executeScript(
		{
			target: { tabId: tab.id },
			files: ["content.js"],
		},
		() => {
			// After injecting, send a message to the content script
			chrome.tabs.sendMessage(tab.id, {
				action: "blurContactsAndOuterMsg",
				checked: contactsAndOuterMSG.checked,
			});
		}
	);
});
