/*
What are the things we need for drawing a rectangle box?
1. SVG
2. Rectangle
3. x and y coordinate
4. width and height
*/

const svg = d3.select('body')
            .attr('margin',0)
            .append('svg')
            .style('width',window.innerWidth)
            .style('height',window.innerHeight)
            .style('background-color','navy');

let rect = svg.append("rect")
              .attr('x',window.innerWidth/4)
              .attr('y',window.innerHeight/4)
              .attr('width',500)
              .attr('height',"150px")
              .style('fill',"lime")
              .style('stroke',"fuchsia")
              .style('stroke-width',"10px");
            