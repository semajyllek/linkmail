// Functionality to display the email on hover
document.addEventListener('mouseover', function(event) {
	const target = event.target;
	
	// Check if the hovered element is a link and if it contains a 'mailto:' href
	if (target.tagName === 'A' && target.href.startsWith('mailto:')) {
	  const email = target.href.replace('mailto:', '');
	  
	  // Create a tooltip element
	  const tooltip = document.createElement('div');
	  tooltip.innerText = email;
	  tooltip.style.position = 'absolute';
	  tooltip.style.backgroundColor = '#333';
	  tooltip.style.color = '#fff';
	  tooltip.style.padding = '5px';
	  tooltip.style.borderRadius = '5px';
	  tooltip.style.zIndex = '1000';
	  
	  // Position the tooltip near the cursor
	  tooltip.style.left = `${event.pageX + 10}px`;
	  tooltip.style.top = `${event.pageY + 10}px`;
	  
	  // Add the tooltip to the page
	  document.body.appendChild(tooltip);
  
	  // Remove the tooltip when the mouse leaves the link
	  target.addEventListener('mouseleave', function() {
		tooltip.remove();
	  }, { once: true });
	}
  });
  
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
  