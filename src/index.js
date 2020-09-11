$(document).ready(function () {

    var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    var audioElement = document.getElementById('audioElement');
    var audioSrc = audioCtx.createMediaElementSource(audioElement);
    var analyser = audioCtx.createAnalyser();
 
    audioSrc.connect(analyser);
    audioSrc.connect(audioCtx.destination);
 
    var frequencyData = new Uint8Array(400);
 
   //  var svgHeight = '300';
   //  var svgWidth = '1200';
    var svgHeight = window.innerHeight * 0.88;
    var svgWidth = window.innerWidth;
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
       .attr('width', svgWidth / frequencyData.length - barPadding);
 
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
             return (svgWidth - d) * Math.random();
          })
          .attr('width', function(d) {
             return (svgWidth - d) / frequencyData.length;
          })
          .attr('height', function(d) {
             return svgHeight - d;
          })
          .attr('fill', function(d) {
            return "rgb(" + d + "," + 0 + "," + (570 - d) + ")";
          });
    }

    console.log(frequencyData)
    renderChart();
   
 });