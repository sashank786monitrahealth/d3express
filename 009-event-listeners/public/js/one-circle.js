/*
1. SVG
2. cx, cy
3. r
4. fill - red
*/

const svg = d3.select("body")
  .attr("margin",0)
  .append('svg')
  .attr('width',window.innerWidth)
  .attr('height',window.innerHeight);

const circle = svg.append('circle')
                .attr('cx',window.innerWidth/2)
                .attr('cy',window.innerHeight/2)
                .attr('r','100px')
                .style('fill','purple')
                .style('stroke','chartreuse')
                .style('stroke-width',15); // 15 pixels

circle.on('click',function(d,i){
  console.log(this);
  console.log(d3.select(this));
  d3.select(this).transition().duration(2000)
  .attr('r','50px')
})

circle.on('mouseover',function(d,i){
  d3.select(this).style('fill','yellow')
})

circle.on('mouseout',function(d,i){
  d3.select(this).style('fill','purple')
})