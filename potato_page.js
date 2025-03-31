 // function navigate(){
    //     window.location.href = "file:///C:/Users/Acer/Desktop/Programming/sih24/payment.html" ;
    // }

    function navigate(formId) {
        // Get the form by its ID
        var form = document.getElementById(formId);

        // Check if all required fields are filled and valid
        if (form.checkValidity()) {
            // If valid, navigate to the payment page
            window.location.href = "payment.html";
        } else {
            // If not valid, highlight the invalid fields
            form.reportValidity();
        }
    }

    // Add event listeners to the submit buttons for all industries
    document.getElementById('industry1Form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        navigate('industry1Form');
    });

    document.getElementById('industry2Form').addEventListener('submit', function(event) {
        event.preventDefault();
        navigate('industry2Form');
    });

    document.getElementById('industry3Form').addEventListener('submit', function(event) {
        event.preventDefault();
        navigate('industry3Form');
    });

    document.getElementById('industry4Form').addEventListener('submit', function(event) {
        event.preventDefault();
        navigate('industry4Form');
    });

    document.getElementById('btn1').addEventListener('click', function() {
        const price = Number(document.getElementById('crop-type-1').value);
        const quantity = Number(document.getElementById('quantity-1').value);
        console.log('Price:', price);
        console.log('Quantity:', quantity);
        event.preventDefault();
        if (!isNaN(quantity) && !isNaN(price) && quantity > 0 && price > 0) {
        const totalCost1 = quantity * price;
        document.getElementById('totalCost1').textContent = totalCost1.toFixed(2);
    } else {
        alert('Please enter valid quantity and price.');
    }
    })

    document.getElementById('btn2').addEventListener('click', function() {
        const price = Number(document.getElementById('crop-type-2').value);
        const quantity = Number(document.getElementById('quantity-2').value);
        console.log('Price:', price);
        console.log('Quantity:', quantity);
        event.preventDefault();
        if (!isNaN(quantity) && !isNaN(price) && quantity > 0 && price > 0) {
        const totalCost2 = quantity * price;
        document.getElementById('totalCost2').textContent = totalCost2.toFixed(2);
    } else {
        alert('Please enter valid quantity and price.');
    }
    })

    document.getElementById('btn3').addEventListener('click', function() {
        const price = Number(document.getElementById('crop-type-3').value);
        const quantity = Number(document.getElementById('quantity-3').value);
        console.log('Price:', price);
        console.log('Quantity:', quantity);
        event.preventDefault();
        if (!isNaN(quantity) && !isNaN(price) && quantity > 0 && price > 0) {
        const totalCost3 = quantity * price;
        document.getElementById('totalCost3').textContent = totalCost3.toFixed(2);
    } else {
        alert('Please enter valid quantity and price.');
    }
    })

    document.getElementById('btn4').addEventListener('click', function() {
        const price = Number(document.getElementById('crop-type-4').value);
        const quantity = Number(document.getElementById('quantity-4').value);
        console.log('Price:', price);
        console.log('Quantity:', quantity);
        event.preventDefault();
        if (!isNaN(quantity) && !isNaN(price) && quantity > 0 && price > 0) {
        const totalCost4 = quantity * price;
        document.getElementById('totalCost4').textContent = totalCost4.toFixed(2);
    } else {
        alert('Please enter valid quantity and price.');
    }
    })

    document.getElementById('proceed').addEventListener(`click`,function(){
        const totalCost1 = Number(document.getElementById('totalCost1').textContent) || 0 ;
        const totalCost2 = Number(document.getElementById('totalCost2').textContent) || 0 ;
        const totalCost3 = Number(document.getElementById('totalCost3').textContent) || 0 ;
        const totalCost4 = Number(document.getElementById('totalCost4').textContent) || 0;
        const totalCost = totalCost1 + totalCost2 + totalCost3 + totalCost4 ;
        console.log(totalCost);
        document.getElementById(`Cost`).textContent = totalCost.toFixed(2);
        event.preventDefault();
        
        // localStorage.setItem('Cost', totalCost.toFixed(2));
        // window.location.href = 'payment.html';
    })
    
    
    
    function pay() {
        const totalCost = document.getElementById('Cost').textContent ;
        sessionStorage.setItem('totalCost',totalCost);
        event.preventDefault();
        window.alert("Are you sure you want to sell your crops");
    }