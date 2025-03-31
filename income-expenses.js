document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('incomeExpenseChart').getContext('2d');
    var incomeExpenseChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
            datasets: [{
                label: 'Income',
                data: [100000, 120000, 150000, 160000, 170000, 200000],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(75, 192, 192, 1)',
                pointBorderColor: '#fff',
                pointBorderWidth: 2
            }, {
                label: 'Expenses',
                data: [60000, 70000, 90000, 95000, 100000, 110000],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(255, 99, 132, 1)',
                pointBorderColor: '#fff',
                pointBorderWidth: 2
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.2)',
                    },
                    ticks: {
                        color: '#333'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.2)',
                    },
                    ticks: {
                        color: '#333'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#333'
                    }
                }
            }
        }
    });
});



let income;
let expenditure;
mySubmit.addEventListener("click",() => {
    income = document.getElementById("inc24").value ;
    expenditure = document.getElementById("exp24").value ;
    document.getElementById("inc24").value = `₹${income}`;
    document.getElementById("exp24").value = `₹${expenditure}`;
}
)