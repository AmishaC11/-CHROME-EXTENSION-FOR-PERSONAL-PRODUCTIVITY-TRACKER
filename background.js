let trackedSites = {};

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url?.startsWith("http")) {
    const site = new URL(tab.url).hostname;
    if (!trackedSites[site]) trackedSites[site] = 0;
    trackedSites[site] += 1; 
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "getTrackedSites") {
    const result = Object.entries(trackedSites).map(([site, timeSpent]) => ({
      site,
      timeSpent
    }));
    sendResponse(result);
  }
});
