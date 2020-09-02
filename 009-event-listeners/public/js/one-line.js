/*
1. SVG
2. data
3. line generator
*/

const width = window.innerWidth;
const height = window.innerHeight;

// set the background
const svg = d3.select('body')
  .attr('margin',0)
  .append('svg')
  .attr('width',width)
  .attr('height',height)
  .style('background-color','yellow');

  // coordinates is an array of objects
  const coordinates = [
      {x:width/4, y : height/2},
      {x:(width/4)*3, y:height/2}
  ];

  // we just want a straight line accross the screen
  // begin: this is a line generator
  const line = d3.line()
                 .x(function(d){
                     return d.x;
                 })
                 .y(d => d.y);

  const path = svg.append('path')
                  .datum(coordinates)
                  .attr('d',line)
                  .style('fill','none')
                  .style("stroke","blue")
                  .style("stroke-width","5px");