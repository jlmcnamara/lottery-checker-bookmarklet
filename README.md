California Lottery 2nd Chance Winner Checker
This is a simple browser utility script to quickly check for a specific winner's name on the California Lottery's 2nd Chance draws and winners page. It runs directly in your browser as a bookmarklet, requires no complex installation, and provides a clear summary of any wins found on the page.

Features
Automated Name Search: Scans the winners table for a pre-defined name.
Win Calculation: Automatically calculates the total number of wins and the sum of all prize money found on the page.
Smart Navigation: The bookmarklet is smart enough to know if you're on the correct lottery page. If not, it takes you there first.
Contextual Information: Pulls the current draw date and lists links to other available draws for easy navigation.
Zero Installation: Runs entirely within your browser's developer console without needing any software or extensions.
Installation: Creating the Bookmarklet
To "install" this script, you simply create a new bookmark in your browser with the special code below.

Step 1: Get the Bookmarklet Code
Copy the entire block of code below. Make sure you select everything from javascript: to the very end.

JavaScript

javascript:(function()%7Bconst%20TARGET_URL%3D'https%3A%2F%2Fwww.calottery.com%2Fscratchers%2F2nd-chance%2Fdraws-and-winners'%3Bif(window.location.href.startsWith(TARGET_URL))%7Bconst%20YOUR_NAME%3D%22namara%22%3Bconsole.clear()%3Bconsole.log(%22%F0%9F%8E%B0%20Running%20CA%20Lottery%20Winner%20Check...%22)%3Bconsole.log(%22%3D%22.repeat(50))%3Bconsole.log(%60Searching%20for%3A%20%24%7BYOUR_NAME%7D%60)%3Bconsole.log(%22%3D%22.repeat(50))%3Bconst%20nameToSearch%3DYOUR_NAME.toUpperCase().trim()%3Blet%20totalWinsFound%3D0%3Blet%20totalPrizeAmount%3D0%3Blet%20winDetails%3D%5B%5D%3Bconst%20allRows%3Ddocument.querySelectorAll('tr')%3Bconst%20winnerRows%3D%5B%5D%3BallRows.forEach(row%3D%3E%7Bconst%20cells%3Drow.querySelectorAll('td')%3Bif(cells.length%3E%3D2)%7Bconst%20firstCell%3Dcells%5B0%5D.textContent.trim()%3Bif(firstCell.includes('$'))%7BwinnerRows.push(row)%7D%7D%7D)%3Bconsole.log(%60Found%20%24%7BwinnerRows.length%7D%20winner%20entries%20to%20check...%5Cn%60)%3BwinnerRows.forEach((row,index)%3D%3E%7Bconst%20cells%3Drow.querySelectorAll('td')%3Bconst%20prizeText%3Dcells%5B0%5D%3F.textContent.trim()%7C%7C''%3Bconst%20winnerText%3Dcells%5B1%5D%3F.textContent.trim()%7C%7C''%3Bif(winnerText.toUpperCase().includes(nameToSearch))%7BtotalWinsFound%2B%2B%3Bconst%20prizeAmount%3DparseInt(prizeText.replace(%2F%5B%24%2C%5D%2Fg,''))%7C%7C0%3BtotalPrizeAmount%2B%3DprizeAmount%3Bconsole.log(%60%F0%9F%8E%89%20WINNER%20FOUND!%20%F0%9F%8E%89%60)%3Bconsole.log(%60%C2%A0%20%C2%A0Prize%3A%20%24%7BprizeText%7D%60)%3Bconsole.log(%60%C2%A0%20%C2%A0Name%3A%20%24%7BwinnerText%7D%60)%3Bconsole.log(%60%C2%A0%20%C2%A0Row%20%23%24%7Bindex%2B1%7D%5Cn%60)%3BwinDetails.push(%7Bprize%3AprizeText,name%3AwinnerText%7D)%7D%7D)%3Bconsole.log(%22%3D%22.repeat(50))%3Bif(totalWinsFound%3E0)%7Bconsole.log(%60%E2%9C%85%20CONGRATULATIONS!%20You%20won%20%24%7BtotalWinsFound%7D%20time(s)!%60)%3Bconsole.log(%60%F0%9F%92%B0%20Total%20winnings%3A%20%24%24%7BtotalPrizeAmount.toLocaleString()%7D%60)%3Bconsole.log(%22%5Cn%E2%9A%A0%EF%B8%8F%C2%A0%20IMPORTANT%3A%20Contact%20California%20Lottery%20to%20claim%20your%20prize!%22)%3Bconsole.log(%22%F0%9F%93%9E%20Call%3A%201-800-LOTTERY%20(1-800-568-8379)%22)%3Bconsole.log('%5Cn%F0%9F%8E%8A%20Your%20wins%3A')%3BwinDetails.forEach(win%3D%3Econsole.log(%60%C2%A0%20%C2%A0%E2%80%A2%20%24%7Bwin.prize%7D%20-%20%24%7Bwin.name%7D%60))%7Delse%7Bconsole.log(%60%E2%9D%8C%20No%20wins%20found%20for%20%22%24%7BYOUR_NAME%7D%22%20on%20this%20page.%60)%3Bconsole.log('%5Cn%F0%9F%92%A1%20Tips%3A')%3Bconsole.log('%C2%A0%20%C2%A0%E2%80%A2%20Make%20sure%20the%20name%20matches%20your%20lottery%20account%20exactly')%3Bconsole.log('%C2%A0%20%C2%A0%E2%80%A2%20Check%20other%20draw%20dates%20using%20the%20page%20navigation')%3Bconsole.log('%C2%A0%20%C2%A0%E2%80%A2%20Try%20variations%20of%20your%20name%20(with%2Fwithout%20middle%20name,%20etc.)')%7Dconsole.log(%22%3D%22.repeat(50))%3Bconst%20drawInfo%3Ddocument.querySelector('.entry-deadline,%20.draw-date')%3Bif(drawInfo)%7Bconsole.log(%60%5Cn%F0%9F%93%85%20Current%20draw%3A%20%24%7BdrawInfo.textContent.trim()%7D%60)%7Dconst%20drawLinks%3Ddocument.querySelectorAll('a%5Bhref*%3D%22draws-and-winners%22%5D')%3Bif(drawLinks.length%3E0)%7Bconsole.log('%5Cn%F0%9F%93%8B%20Other%20draws%20you%20can%20check%3A')%3Bconst%20uniqueDraws%3Dnew%20Set()%3BdrawLinks.forEach(link%3D%3E%7Bif(link.textContent&&!link.textContent.includes('Draws%20and%20Winners'))%7BuniqueDraws.add(link.textContent.trim())%7D%7D)%3BuniqueDraws.forEach(draw%3D%3Econsole.log(%60%C2%A0%20%C2%A0%E2%80%A2%20%24%7Bdraw%7D%60))%7Dconsole.log('%5Cn%F0%9F%94%84%20Run%20this%20script%20on%20each%20draw%20page%20to%20check%20all%20your%20entries!')%7Delse%7Bwindow.location.href%3DTARGET_URL%7D%7D)()%3B
Step 2: Create the Bookmark in Your Browser
Make sure your bookmarks bar is visible. If not, press Cmd+Shift+B (on Mac) or Ctrl+Shift+B (on Windows).
Right-click on the bookmarks bar.
Select Add Page... (in Chrome/Firefox) or Add new bookmark....
A dialog box will appear. Fill it out as follows:
Name: Give it a short, memorable name. For example: CA Lottery Check.
URL / Address: Delete anything that is currently in this field. Then, paste the bookmarklet code you copied from Step 1.
Click Save. You will now have a new bookmark in your toolbar.
How to Use
This is a "smart" bookmarklet that requires two clicks to work.

FIRST CLICK (Navigate):

Click the CA Lottery Check bookmarklet from any website.
The script will see you are not on the lottery page and will automatically redirect you.
Wait for the official CA Lottery winners page to fully load.
SECOND CLICK (Execute):

Once the lottery page is loaded, click the exact same CA Lottery Check bookmarklet again.
This time, the script will run its search.
VIEW THE RESULTS:

The script prints its findings to the Developer Console. To view the console, press:
Mac: Cmd + Option + J
Windows / Linux: Ctrl + Shift + J
Customization: Changing the Name
The script is currently hard-coded to search for the name "namara". To change this, you have two options.

Method 1: The Easy Way
Before you create the bookmark, paste the bookmarklet code into any text editor. Find the part of the code that says YOUR_NAME="namara" and change "namara" to the name you want to search for, keeping the quotation marks. Then, copy the modified code and use it in Step 2 of the installation.

Method 2: The Advanced Way
For more significant changes, you should edit the source code.

Open the checker.js file in this repository.
Find the line: const YOUR_NAME = "namara";
Change "namara" to your desired name.
To use your changes as a bookmarklet, you would need to "minify" the edited script (i.e., convert it back into a compressed one-liner). There are many free online tools that can do this for you.
Source Code
The file checker.js in this repository contains the clean, human-readable version of the script with comments. This is the master version that should be used for any future modifications or improvements.

Disclaimer
This is an unofficial tool created for convenience. It is not affiliated with or endorsed by the California Lottery. Always verify winning numbers and prize claims through the official California Lottery website or authorized retailers. The creator of this script is not responsible for any errors or inaccuracies.
