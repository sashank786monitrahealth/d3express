d3.csv('/data/bills.csv').then(data=>{
    const div = d3.select('body');
    const width = window.innerWidth;
    const height = window.innerHeight;
    const radius = Math.min(width,height)/2;

    const colorScale = d3.scaleOrdinal(['#7326AB','#2A59A9','#E5A1D4','#00A0B0','#1C9FE9']);
    //const colorScale = d3.scaleOrdinal(['purple','navy','pink','chartreuse','dodgerblue']);

    const svg = div.append('svg')
                   .attr('width',width)
                   .attr('height',height)
                   .append('g')
                   .attr('transform',`translate(${width/2}, ${height/2})`);

    const pie = d3.pie().value(d => d.cost_percent).sort(null);
    const arc = d3.arc().innerRadius(0).outerRadius(radius * 1);

    const g = svg.selectAll('.arc')
                 .data(pie(data))
                 .enter()
                 .append('g')
                 .attr('class','arc');

    g.append('path')
     .attr('d',arc)
     .attr('class','arc')
     .style('fill', (d,i) => colorScale(i))
     .style('fill-opacity',0.8)
     .style('stroke','#OEOB16')
     .style('stroke-width','10px')
     .style('text-shadow','2px 2px #0E0B16');

    g.append('text')
     .attr('transform', d => `translate(${arc.centroid(d)})`)
     .text(d => `${d.data.type} ${d.data.cost_percent}%`)
     .style('font-size','14px')
     .style('fill','#FFF')
     .style('text-anchor','middle')

})