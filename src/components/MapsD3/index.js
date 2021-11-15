import React, {useEffect, useRef} from 'react';
import {select} from 'd3';
import * as d3 from 'd3-geo';

function MapsD3({mapData}) {
    const map = useRef(null);

    useEffect(() => {
        renderMap();
    }, [mapData]);

    const onMouseOver = (node, data) => {
        select(node).style('fill-opacity', 0.9);
    };

    const onMouseOut = (node, data) => {
        select(node).style('fill-opacity', 1);
    };

    const renderMap = () => {
        const node = map.current;

        const projection = () => {
            return d3.geoMercator().center([51, 10]).scale(1800).translate([1500, 1800]);
        };

        select(node).append('g').classed('countries', true);

        const countries = select('g').selectAll('path').data(mapData);

        countries
            .enter()
            .append('path')
            .classed('country', true)
            .attr('stroke', '#9370db')
            .attr('strokeWidth', 0.25)
            .style('fill', '#663399')
            .on('mouseover', function (e, d) {
                onMouseOver(this, d);
            })
            .on('mouseout', function (e, d) {
                onMouseOut(this, d);
            })
            .each(function (d, i) {
                select(this).attr('d', d3.geoPath().projection(projection())(d));
            });
    };

    return (
        <>
            <svg width="480" height="480" ref={map} />
        </>
    );
}

export default MapsD3;
