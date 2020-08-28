$(document).ready(function () {

    var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    var audioElement = document.getElementById('audioElement');
    var audioSrc = audioCtx.createMediaElementSource(audioElement);
    var analyser = audioCtx.createAnalyser();
 
    audioSrc.connect(analyser);
    audioSrc.connect(audioCtx.destination);
 
    var frequencyData = new Uint8Array(200);
 
    var svgHeight = '300';
    var svgWidth = '1200';
    var barPadding = '1';
 
    document.querySelector('button').addEventListener('click', function() {
       audioCtx.resume().then(() => {
         console.log('Playback resumed successfully');
       });
    });
 
    function createSvg(parent, height, width) {
       return d3.select(parent).append('svg').attr('height', height).attr('width', width);
    }
 
    var svg = createSvg('body', svgHeight, svgWidth);
 
    svg.selectAll('rect')
       .data(frequencyData)
       .enter()
       .append('rect')
       .attr('x', function (i) {
          return i * (svgWidth / frequencyData.length);
       })
       .attr('width', svgWidth / frequencyData.length * 2.5 - barPadding);
 
    function renderChart() {
       requestAnimationFrame(renderChart);
 
       analyser.getByteFrequencyData(frequencyData);
      //  analyser.getByteTimeDomainData(frequencyData);
 
       svg.selectAll('rect')
          .data(frequencyData)
          .attr('y', function(d) {
             return svgHeight - d;
          })
          .attr('x', function(d) {
             return svgHeight - d;
          })
          .attr('height', function(d) {
             return d;
          })
          .attr('fill', function(d) {
             return 'rgb(0, 0, ' + d + ')';
          });
    }

    console.log(frequencyData)
    renderChart();
   
 });