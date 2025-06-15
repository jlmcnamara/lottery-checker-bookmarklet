// California Lottery 2nd Chance Winner Checker
(function() {
    const YOUR_NAME = "namara";
    
    console.clear();
    console.log("🎰 California Lottery 2nd Chance Winner Checker");
    console.log("=" .repeat(50));
    console.log(`Searching for: ${YOUR_NAME}`);
    console.log("=" .repeat(50));
    
    const nameToSearch = YOUR_NAME.toUpperCase().trim();
    let totalWinsFound = 0;
    let totalPrizeAmount = 0;
    let winDetails = [];
    
    // Find all table rows that might contain winner data
    const allRows = document.querySelectorAll('tr');
    const winnerRows = [];
    
    allRows.forEach(row => {
        const cells = row.querySelectorAll('td');
        if (cells.length >= 2) {
            const firstCell = cells[0].textContent.trim();
            if (firstCell.includes('$')) {
                winnerRows.push(row);
            }
        }
    });
    
    console.log(`Found ${winnerRows.length} winner entries to check...\n`);
    
    // Check each winner row
    winnerRows.forEach((row, index) => {
        const cells = row.querySelectorAll('td');
        const prizeText = cells[0]?.textContent.trim() || '';
        const winnerText = cells[1]?.textContent.trim() || '';
        
        if (winnerText.toUpperCase().includes(nameToSearch)) {
            totalWinsFound++;
            const prizeAmount = parseInt(prizeText.replace(/[$,]/g, '')) || 0;
            totalPrizeAmount += prizeAmount;
            
            console.log(`🎉 WINNER FOUND! 🎉`);
            console.log(`   Prize: ${prizeText}`);
            console.log(`   Name: ${winnerText}`);
            console.log(`   Row #${index + 1}\n`);
            
            winDetails.push({prize: prizeText, name: winnerText});
        }
    });
    
    // Summary
    console.log("=" .repeat(50));
    if (totalWinsFound > 0) {
        console.log(`✅ CONGRATULATIONS! You won ${totalWinsFound} time(s)!`);
        console.log(`💰 Total winnings: $${totalPrizeAmount.toLocaleString()}`);
        console.log(`\n⚠️ IMPORTANT: Contact California Lottery to claim your prize!`);
        console.log(`📞 Call: 1-800-LOTTERY (1-800-568-8379)`);
        console.log(`\n🎊 Your wins:`);
        winDetails.forEach(win => console.log(`   • ${win.prize} - ${win.name}`));
    } else {
        console.log(`❌ No wins found for "${YOUR_NAME}" on this page.`);
        console.log(`\n💡 Tips:`);
        console.log(`   • Make sure the name matches your lottery account exactly`);
        console.log(`   • Check other draw dates using the page navigation`);
        console.log(`   • Try variations of your name (with/without middle name, etc.)`);
    }
    console.log("=" .repeat(50));
    
    // Show current draw info
    const drawInfo = document.querySelector('.entry-deadline, .draw-date');
    if (drawInfo) {
        console.log(`\n📅 Current draw: ${drawInfo.textContent.trim()}`);
    }
    
    // Show other draws available
    const drawLinks = document.querySelectorAll('a[href*="draws-and-winners"]');
    if (drawLinks.length > 0) {
        console.log(`\n📋 Other draws you can check:`);
        const uniqueDraws = new Set();
        drawLinks.forEach(link => {
            if (link.textContent && !link.textContent.includes('Draws and Winners')) {
                uniqueDraws.add(link.textContent.trim());
            }
        });
        uniqueDraws.forEach(draw => console.log(`   • ${draw}`));
    }
    
    console.log(`\n🔄 Run this script on each draw page to check all your entries!`);
})();
