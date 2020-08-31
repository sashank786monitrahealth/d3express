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
            