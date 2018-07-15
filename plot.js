CHART = document.getElementById('chart');

Plotly.plot( CHART, [{
    x: [1, 2, 3, 4, 5],
    y: [1, 2, 4, 8, 16] }],
    type: surface { 
    margin: { t: 0 } } );

/* Current Plotly.js version */
console.log( Plotly.BUILD );a