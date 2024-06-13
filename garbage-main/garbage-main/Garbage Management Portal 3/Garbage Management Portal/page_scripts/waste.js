document.getElementById('wasteForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const amount = parseFloat(document.getElementById('amount').value);
    const type = document.getElementById('type').value.trim().toLowerCase(); 

    console.log("Selected type:", type);
    console.log("Input amount:", amount);

    function calculateAmount(wasteType, quantity) {
        switch (wasteType) {
            case "plastic waste":
                return quantity * (150 / 50);
            case "paper waste":
                return quantity * (80 / 50);
            case "organic waste":
                return quantity * (130 / 50);
            case "metal waste":
                return quantity * (200 / 50);
            case "chemical waste":
                return quantity * (120 / 50);
            case "e-waste":
                return quantity * (180 / 50);
            case "other":
                return quantity * (100 / 50);
            default:
                return 0; 
        }
    }

    const totalAmount = calculateAmount(type, amount);

    console.log("Total amount:", totalAmount);

    localStorage.setItem('totalAmount', totalAmount.toFixed(2));

    window.location.href = 'last.html';
});
