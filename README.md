# -CHROME-EXTENSION-FOR-PERSONAL-PRODUCTIVITY-TRACKER

*COMPANY*: CODTECH IT SOLUTIONS

*NAME*: AMISHA CHOUGULE

*INTERN ID*: CT12DL1126

*DOMAIN*: REACT JS WEB DEVELOPMENT

*DURATION*: 12 WEEKS

*MENTOR*: NEELA SANTOSH

*PROJECT DESCRIPTION*: The Chrome Extension: Productivity Tracker is a browser-based tool developed using React.js, JavaScript, and the Chrome Extensions API. The main goal of this project is to help users improve their digital habits by tracking the time they spend on various websites and offering a clear visual representation of their browsing behavior. This extension empowers users to make data-informed decisions to enhance productivity and reduce time spent on distractions.

🎯 Project Objective
The core objective of this project is to build a lightweight and efficient browser extension that automatically tracks website activity in the background and allows users to view summarized productivity reports. Users can set goals, monitor daily habits, and visualize their usage trends, helping them manage their time more effectively.

Technology Stack and Architecture
Frontend: Built using React.js, the extension popup and dashboard are designed with modular components for settings, charts, timers, and summaries.

Chrome APIs: Utilizes Chrome Extension APIs (such as tabs, runtime, and storage) to capture URL visit data, track active tabs, and store usage data locally.

JavaScript and Service Workers: JavaScript is used for background scripts that run independently of the popup UI. These scripts constantly monitor browser activity, detect tab switches, and log time spent on each domain.

Data Storage: Website usage data is stored locally using chrome.storage.local, ensuring fast access and minimal performance overhead.

Visualization: React components render productivity charts using libraries like Chart.js or Recharts, giving users a quick glance at where their time is spent.

Key Features
Automatic Website Tracking:
The extension runs in the background and tracks how long each website is active in the user's browser, recording the duration per domain.

Goal Setting:
Users can set daily usage limits or focus goals. For example, they can aim to spend less than 30 minutes on social media or at least 2 hours on educational platforms.

Visual Analytics:
The extension presents tracked data through bar graphs and pie charts, making it easy to interpret trends over time.

Productivity Scoring:
A basic scoring algorithm is used to rate the user’s productivity each day based on time spent on productive vs. non-productive sites.

Lightweight and User-Friendly Interface:
Designed to be minimalistic and intuitive, the extension popup is responsive and works smoothly across different screen sizes.

Privacy-Respecting Design:
All data remains on the user’s local device. No tracking data is sent to external servers, maintaining complete privacy.

Learning Outcomes and Skills Gained
This project provided extensive exposure to Chrome’s extension architecture and modern front-end development practices. Major skills gained include:

Working with background scripts, manifest files, and content scripts.

Using React inside a Chrome Extension, understanding its limitations and configuration (such as bundling and routing).

Mastering Chrome APIs like chrome.tabs, chrome.runtime, chrome.storage, and chrome.windows.

Implementing state management using React Hooks to ensure real-time updates between background processes and the UI.

#OUTPUT

<img width="1836" height="1022" alt="Image" src="https://github.com/user-attachments/assets/d26c53db-a219-4e7f-93aa-879c90e8b765" />
