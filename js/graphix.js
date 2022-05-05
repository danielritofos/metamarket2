const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['+ $1 млн', '- $100 000', '+ $80 000', '- $5 млн', '+ $3.2 млн', '- $2.1 млн', '+ $1 млн', '- $1 млн'],
        datasets: [{
            label: 'Новая стоимость актива',
            data: [0.200, 0.215, 0.210, 0.950, 0.790, 0.685, 0.835, 0.785],
            
            borderColor: [
	            'rgba(214, 0, 226, 1)',
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
	      legend: false
	    },
    },


});