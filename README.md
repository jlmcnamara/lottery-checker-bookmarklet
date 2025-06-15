# California Lottery 2nd Chance Winner Checker

This is a simple browser utility script to quickly check for a specific winner's name on the California Lottery's 2nd Chance draws and winners page. It runs directly in your browser as a bookmarklet, requires no complex installation, and provides a clear summary of any wins found on the page.

## Features

* **Automated Name Search:** Scans the winners table for a pre-defined name.
* **Win Calculation:** Automatically calculates the total number of wins and the sum of all prize money found on the page.
* **Smart Navigation:** The bookmarklet is smart enough to know if you're on the correct lottery page. If not, it takes you there first.
* **Contextual Information:** Pulls the current draw date and lists links to other available draws for easy navigation.
* **Zero Installation:** Runs entirely within your browser's developer console without needing any software or extensions.

## Installation: Creating the Bookmarklet

To "install" this script, you simply create a new bookmark in your browser with the special code below.

### Step 1: Get the Bookmarklet Code

Click inside the box below and copy the entire block of code (e.g., press `Cmd+A` or `Ctrl+A` to select all). A scrollable text box is used here because it handles the single long line of code much better than a standard code block.

<textarea readonly style="width: 100%; height: 120px; font-family: monospace; white-space: pre; background-color: #f6f8fa; border: 1px solid #d0d7de; border-radius: 6px; padding: 16px; resize: vertical;">
javascript:(function()%7Bconst%20TARGET_URL%3D'https%3A%2F%2Fwww.calottery.com%2Fscratchers%2F2nd-chance%2Fdraws-and-winners'%3Bif(window.location.href.startsWith(TARGET_URL))%7Bconst%20YOUR_NAME%3D%22namara%22%3Bconsole.clear()%3Bconsole.log(%22%F0%9F%8E%B0%20Running%20CA%20Lottery%20Winner%20Check...%22)%3Bconsole.log(%22%3D%22.repeat(50))%3Bconsole.log(%60Searching%20for%3A%20%24%7BYOUR_NAME%7D%60)%3Bconsole.log(%22%3D%22.repeat(50))%3Bconst%20nameToSearch%3DYOUR_NAME.toUpperCase().trim()%3Blet%20totalWinsFound%3D0%3Blet%20totalPrizeAmount%
