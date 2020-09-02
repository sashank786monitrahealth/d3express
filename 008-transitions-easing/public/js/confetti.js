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
              .style('background-color','none');

const data = Array(3000).fill().map( _ => {
    return {
        cx: Math.round(Math.random() *width),
        cy: Math.round(Math.random() * height)
    }
});

// colorGenerator - color scale

const colorScale = d3.scaleOrdinal(d3.schemeCategory10)

svg.selectAll('circle')
   .data(data)
   .enter()
   .append("circle")
   .attr('cx', function(d){
       return d.cx;
   })
   .attr('cy',-10)
   .transition().duration(100).delay((d,i) => i*5)
   .attr('cy', function(d){
       return d.cy;
   })
   .attr('r', (d,i) => {
       return i%2 === 0 ? 10 : 5
   })
   .style('fill',(d,i) => colorScale(i))
   .style('stroke','yellow')
   .style('stroke-width','1px');