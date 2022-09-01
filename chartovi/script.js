
// PIE CHART

const pieChart = document.getElementById('pieChart');

new Chart(pieChart, {
    type: 'pie',
    data: {
        labels: ['Brazil', 'Italija', 'Nemacka', 'Argentina', 'Urugvaj', 'Francuska', 'Spanija', 'Engleska'],
      
        datasets: [
            {
                label: 'Osvojenih sampionata',
                data: [ 5, 4, 4, 2, 2, 2, 1, 1],
                backgroundColor: [
                    'rgba(52, 235, 143, 1)',
                    'rgba(52, 153, 235, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(235, 201, 52, 1)',
                    'rgba(0, 249, 231, 1)',
                    'rgba(1, 30, 97, 1)',
                    'rgba(157, 4, 4, 1)',
                    'rgba(183, 117, 117, 1)'
                    
                ]
            }
        ]
    }
});

