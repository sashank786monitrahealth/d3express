const div = d3.select('body')
const margin = {top:200, right:200, bottom:200, left:200};
const width = window.innerWidth - margin.left - margin.right;
const height = window.innerHeight - margin.top - margin.bottom;

const svg = div.append('svg')
               .attr('width',width+margin.left+margin.right)
               .attr('height',height +margin.top + margin.bottom)
               .style('background-color','green')
               .append('g')
               .attr('transform',`translate(${margin.left},${margin.bottom})`);
               
const data = Array(10).fill().map(() => d3.randomUniform(1)());
console.log(data);
