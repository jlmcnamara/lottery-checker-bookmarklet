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
javascript:(function()%7Bconst%20TARGET_URL%3D'https%3A%2F%2Fwww.calottery.com%2Fscratchers%2F2nd-chance%2Fdraws-and-winners'%3Bif(window.location.href.startsWith(TARGET_URL))%7Bconst%20YOUR_NAME%3D%22namara%22%3Bconsole.clear()%3Bconsole.log(%22%F0%9F%8E%B0%20Running%20CA%20Lottery%20Winner%20Check...%22)%3Bconsole.log(%22%3D%22.repeat(50))%3Bconsole.log(%60Searching%20for%3A%20%24%7BYOUR_NAME%7D%60)%3Bconsole.log(%22%3D%22.repeat(50))%3Bconst%20nameToSearch%3DYOUR_NAME.toUpperCase().trim()%3Blet%20totalWinsFound%3D0%3Blet%20totalPrizeAmount%3D0%3Blet%20winDetails%3D%5B%5D%3Bconst%20allRows%3Ddocument.querySelectorAll('tr')%3Bconst%20winnerRows%3D%5B%5D%3BallRows.forEach(row%3D%3E%7Bconst%20cells%3Drow.querySelectorAll('td')%3Bif(cells.length%3E%3D2)%7Bconst%20firstCell%3Dcells%5B0%5D.textContent.trim()%3Bif(firstCell.includes('$'))%7BwinnerRows.push(row)%7D%7D%7D)%3Bconsole.log(%60Found%20%24%7BwinnerRows.length%7D%20winner%20entries%20to%20check...%5Cn%60)%3BwinnerRows.forEach((row,index)%3D%3E%7Bconst%20cells%3Drow.querySelectorAll('td')%3Bconst%20prizeText%3Dcells%5B0%5D%3F.textContent.trim()%7C%7C''%3Bconst%20winnerText%3Dcells%5B1%5D%3F.textContent.trim()%7C%7C''%3Bif(winnerText.toUpperCase().includes(nameToSearch))%7BtotalWinsFound%2B%2B%3Bconst%20prizeAmount%3DparseInt(prizeText.replace(%2F%5B%24%2C%5D%2Fg,''))%7C%7C0%3BtotalPrizeAmount%2B%3DprizeAmount%3Bconsole.log(%60%F0%9F%8E%89%20WINNER%20FOUND!%20%F0%9F%8E%89%60)%3Bconsole.log(%60%C2%A0%20%C2%A0Prize%3A%20%24%7BprizeText%7D%60)%3Bconsole.log(%60%C2%A0%20%C2%A0Name%3A%20%24%7BwinnerText%7D%60)%3Bconsole.log(%60%C2%A0%20%C2%A0Row%20%23%24%7Bindex%2B1%7D%5Cn%60)%3BwinDetails.push(%7Bprize%3AprizeText,name%3AwinnerText%7D)%7D%7D)%3Bconsole.log(%22%3D%22.repeat(50))%3Bif(totalWinsFound%3E0)%7Bconsole.log(%60%E2%9C%85%20CONGRATULATIONS!%20You%20won%20%24%7BtotalWinsFound%7D%20time(s)!%60)%3Bconsole.log(%60%F0%9F%92%B0%20Total%20winnings%3A%20%24%24%7BtotalPrizeAmount.toLocaleString()%7D%60)%3Bconsole.log(%22%5Cn%E2%9A%a0%EF%B8%8F%C2%A0%20IMPORTANT%3A%20Contact%20California%20Lottery%20to%20claim%20your%20prize!%22)%3Bconsole.log(%22%F0%9F%93%9E%20Call%3A%201-800-LOTTERY%20(1-800-568-8379)%22)%3Bconsole.log('%5Cn%F0%9F%8E%8A%20Your%20wins%3A')%3BwinDetails.forEach(win%3D%3Econsole.log(%60%C2%A0%20%C2%A0%E2%80%A2%20%24%7Bwin.prize%7D%20-%20%24%7Bwin.name%7D%60))%7Delse%7Bconsole.log(%60%E2
