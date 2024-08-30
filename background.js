chrome.runtime.onInstalled.addListener(() => {
	chrome.contextMenus.create({
	  id: "copyEmail",
	  title: "Copy Recipient Email Address",
	  contexts: ["link"],
	  targetUrlPatterns: ["mailto:*"]
	});
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
	if (info.menuItemId === "copyEmail" && info.linkUrl) {
	  const email = info.linkUrl.replace("mailto:", "");
  
	  // Send a message to the content script to copy the email address
	  chrome.tabs.sendMessage(tab.id, { action: "copyEmail", email: email });
	}
  });