// Listener to handle messages from background.js for copying email addresses
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.action === "copyEmail" && request.email) {
	  // Use the Clipboard API to write the email to the clipboard
	  navigator.clipboard.writeText(request.email).then(() => {
		alert('Email address copied to clipboard: ' + request.email);
	  }).catch(err => {
		console.error('Failed to copy email address:', err);
		alert('Failed to copy email address');
	  });
	}
});
