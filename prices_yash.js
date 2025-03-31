// JavaScript for handling crop clicks and showing prices
function showPrices(crop) {
    const prices = {
        'Rice': {
            'Delhi': '₹58/kg',
            'Mumbai': '₹60/kg',
            'Chennai': '₹55/kg',
            'Kolkata': '₹57/kg'
        },
        'Wheat': {
            'Delhi': '₹40/kg',
            'Mumbai': '₹42/kg',
            'Chennai': '₹38/kg',
            'Kolkata': '₹41/kg'
        },
        'Barley': {
            'Delhi': '₹32/kg',
            'Mumbai': '₹34/kg',
            'Chennai': '₹31/kg',
            'Kolkata': '₹33/kg'
        },
        'Maize': {
            'Delhi': '₹25/kg',
            'Mumbai': '₹27/kg',
            'Chennai': '₹24/kg',
            'Kolkata': '₹26/kg'
        },
        'Tomato': {
            'Delhi': '₹58/kg',
            'Mumbai': '₹60/kg',
            'Chennai': '₹55/kg',
            'Kolkata': '₹57/kg'
        },
        'Potato': {
            'Delhi': '₹30/kg',
            'Mumbai': '₹32/kg',
            'Chennai': '₹28/kg',
            'Kolkata': '₹29/kg'
        },
        'Onion': {
            'Delhi': '₹40/kg',
            'Mumbai': '₹42/kg',
            'Chennai': '₹38/kg',
            'Kolkata': '₹41/kg'
        },
        'Carrot': {
            'Delhi': '₹50/kg',
            'Mumbai': '₹52/kg',
            'Chennai': '₹48/kg',
            'Kolkata': '₹51/kg'
        },
        'Spinach': {
            'Delhi': '₹20/kg',
            'Mumbai': '₹22/kg',
            'Chennai': '₹18/kg',
            'Kolkata': '₹19/kg'
        },
        'Cabbage': {
            'Delhi': '₹25/kg',
            'Mumbai': '₹27/kg',
            'Chennai': '₹23/kg',
            'Kolkata': '₹24/kg'
        },
        'Peas': {
            'Delhi': '₹70/kg',
            'Mumbai': '₹72/kg',
            'Chennai': '₹68/kg',
            'Kolkata': '₹71/kg'
        },
        'Broccoli': {
            'Delhi': '₹120/kg',
            'Mumbai': '₹125/kg',
            'Chennai': '₹115/kg',
            'Kolkata': '₹118/kg'
        }
    };

    // // Get the crop prices
    // const cropPrices = prices[crop];

    // // Set crop name in the prices section
    // document.getElementById('crop-name').innerText = `${crop} Prices in Different Cities`;

    // // Get the price list element
    // const priceList = document.getElementById('price-list');
    // priceList.innerHTML = ''; // Clear the existing prices

    // // Populate the prices list with cities and prices
    // for (const city in cropPrices) {
    //     const priceItem = document.createElement('li');
    //     priceItem.innerHTML = `<strong>${city}:</strong> ${cropPrices[city]}`;
    //     priceList.appendChild(priceItem);
    // }

    // // Display the prices section
    // document.getElementById('prices-section').style.display = 'block';
}
