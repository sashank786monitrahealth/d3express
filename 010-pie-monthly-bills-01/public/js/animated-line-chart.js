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
               
const data = Array(50).fill().map(() => d3.randomUniform(1)());
console.log(data);

const curves = [
                 'curveLinear'
                ,'curveBasis'
                ,'curveBundle'
                ,'curveCardinal'
                ,'curveCatmul1Rom'
                ,'curveMonotoneX'
                ,'curveMonotoneY'
                ,'curveNatural'
                ,'curveStep'
                ,'curveStepAfter'
                ,'curveStepBefore'
                ,'curveBasisClosed'
               ];

const xScale = d3.scaleLinear()
                 .domain([0,data.length-1])
                 .range([0,width]);

const yScale = d3.scaleLinear()
                 .domain(d3.extent(data))
                 .range([height,0]);

const line = d3.line()
               .x((d,i) => xScale(i))
               .y(d => yScale(d))
               .curve(d3[curves[5]]);

const path = svg.append('path')
                .datum(data)
                .attr('d',line)
                .attr('stroke','yellow')
                .attr('stroke-width',2)
                .attr('fill','none');

const totalLength = path.node().getTotalLength();

path
    .attr('stroke-dasharray',`${totalLength} ${totalLength}`)
    .attr('stroke-dashoffset', totalLength)
    .transition().duration(5000)
    .ease(d3['easeQuad'])
    .attr('stroke-dashoffset',0);