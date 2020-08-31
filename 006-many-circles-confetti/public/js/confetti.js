/*
1. SVG
2. Data Set
3. cx, cy
4. r

*/

const width = window.innerWidth;
const height = window.innerHeight;

const svg = d3.select('body')
              .attr('margin',0)
              .append('svg')
              .style('width',window.innerWidth)
              .style('height', window.innerHeight)
              .style('background-color','navy');

const data = Array(3000).fill().map( _ => {
    return {
        cx: Math.round(Math.random() *width),
        cy: Math.round(Math.random() * height)
    }
});

svg.selectAll('circle')
   .data(data)
   .enter()
   .append("circle")
   .attr('cx', function(d){
       return d.cx;
   })
   .attr('cy', function(d){
       return d.cy;
   })
   .attr('r', '10px')
   .style('fill','pink');