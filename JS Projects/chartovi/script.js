/* LINE CHART 

const lineChart = document.getElementById('lineChart');

const labels = [
    '1930. Urugvaj',
    '1934. Italija',
    '1938. Francuska',
    '1950. Brazil',
    '1954. Svajcarska',
    '1958. Svedska',
    '1962. Cile',
    '1966. Engleska',
    '1970. Meksiko',
    '1974. Nemacka',
    '1978. Argentina',
    '1982. Spanija',
    '1986. Meksiko',
    '1990. Italija',
    '1994. USA',
    '1998. Francuska',
    '2002. Japan i J.Koreja',
    '2006. Nemacka',
    '2010. Juzna Afrika',
    '2014. Brazil',
    '2018. Rusija',

];

new Chart(lineChart, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [
            { 
                label: 'Osvajaci po sampionatima',
               data: [1199, 1314, 1147, 1403, 1217, 1015, 1138, 1272, 957, 862, 716, 712, 610, 585, 847, 744, 756, 781],
               // data: ['Urugvaj', 'Italija', 'Italija', 'Urugvaj', 'Nemacka', 'Brazil', 'Brazil', 'Engleska', 'Brazil', 'Nemacka', 'Argentina', 'Italija', 'Argentina', 'Nemacka', 'Brazil', 'Francuska', 'Brazil', 'Italija', 'Spanija', 'Nemacka', 'Francuska'],
                borderColor: 'rgba(66, 138, 245, 1)',
        }
            {
                label: 'Novi pregledi',
                data: [1199, 1314, 1147, 1403, 1217, 1015, 1138, 1272, 957, 862, 716, 712, 610, 585, 847, 744, 756, 781],
                borderColor: 'rgba(235, 134, 52, 1)',
            }
        ]
    }
})
*/
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

/* BAR CHART

const barChart = document.getElementById('barChart');

new Chart(barChart, {
    type: 'bar',
    data: {
        labels: ['Brazil', 'Italija', 'Nemacka', 'Argentina', 'Urugvaj', 'Francuska', 'Spanija', 'Engleska'],
        datasets: [ 
            { 
                label: 'Osvajaci SP u fudbalu',
                data: [5, 4, 4, 2, 2, 2, 1, 1],
                backgroundColor:[
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(155, 159, 64, 1)',
                    'rgba(155, 159, 64, 1)'
                ]
            }    
        ]    
    }
});*/