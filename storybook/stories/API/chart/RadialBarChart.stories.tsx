import React from 'react';
import { pageData } from '../../data';
import { RadialBar, RadialBarChart, ResponsiveContainer } from '../../../../src';
import { CategoricalChartProps } from '../props/ChartProps';

export default {
  argTypes: {
    ...CategoricalChartProps,
  },
  component: RadialBarChart,
};

export const Simple = {
  render: (args: Record<string, any>) => {
    const { data } = args;
    return (
      <ResponsiveContainer width="100%" height={400}>
        <RadialBarChart data={data}>
          <RadialBar dataKey="uv" />
        </RadialBarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: pageData,
  },
};
