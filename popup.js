document.addEventListener('DOMContentLoaded', () => {
  chrome.runtime.sendMessage({ type: "getTrackedSites" }, (data) => {
    const siteList = document.getElementById("siteList");
    siteList.innerHTML = "";

    data.forEach(({ site, timeSpent }) => {
      const li = document.createElement("li");
      li.textContent = `${site}: ${timeSpent} seconds`;
      siteList.appendChild(li);
    });
  });
});
