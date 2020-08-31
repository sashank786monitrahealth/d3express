/*
1. SVG
2. data
3. line generator
*/

const width = window.innerWidth;
const height = window.innerHeight;

// set the background
d3.select('body')
  .attr('margin',0)
  .append('svg')
  .attr('width',width)
  .attr('height',height)
  .style('background-color','yellow');