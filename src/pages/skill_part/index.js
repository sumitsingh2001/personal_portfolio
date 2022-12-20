import React from 'react';
import { HeadTitle, SpanTitle } from '../../components';
import './style.css';
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  LabelList,
  Legend,
  ResponsiveContainer,
} from 'recharts';
const data = [
  {
    name: 'ReactJs',
    uv: 600,
    pv: 200,
    sv: 1200,
    pre: '2018',
    curr: 2022,
    now: 2023,
  },
  {
    name: 'JavaScript',
    uv: 600,
    pv: 200,
    sv: 900,
    pre: 2018,
    curr: 2022,
    now: 2023,
  },
  {
    name: 'GitHub',
    uv: 400,
    pv: 110,
    sv: 1200,
    pre: 2018,
    curr: 2022,
    now: 2023,
  },
  {
    name: 'sass',
    uv: 700,
    pv: 210,
    sv: 1500,
    pre: 2018,
    curr: 2022,
    now: 2023,
  },
  {
    name: 'Html5',
    uv: 1400,
    pv: 500,
    sv: 1700,
    pre: 2018,
    curr: 2022,
    now: 2023,
  },
  {
    name: 'Css3',
    uv: 1800,
    pv: 600,
    sv: 2000,
    pre: 2018,
    curr: 2022,
    now: 2023,
  },
  {
    name: 'Bootstrap',
    uv: 500,
    pv: 200,
    sv: 1600,
    pre: 2018,
    curr: 2022,
    now: 2023,
  },
  {
    name: 'Animation',
    uv: 700,
    pv: 100,
    sv: 1300,
    pre: 2018,
    curr: 2022,
    now: 2023,
  },
  {
    name: 'Wordpress',
    uv: 300,
    pv: 200,
    sv: 400,
    pre: 2018,
    curr: 2022,
    now: 2023,
  },
  {
    name: 'Angular',
    uv: 200,
    pv: 100,
    sv: 400,
    pre: 2018,
    curr: 2022,
    now: 2023,
  },
  {
    name: 'Gulp',
    uv: 400,
    pv: 100,
    sv: 1500,
    pre: 2018,
    curr: 2022,
    now: 2023,
  },
  {
    name: 'UI / UX',
    uv: 900,
    pv: 300,
    sv: 2200,
    pre: 2018,
    curr: 2022,
    now: 2023,
  },
  {
    name: 'Figma',
    uv: 300,
    pv: 100,
    sv: 500,
    pre: 2018,
    curr: 2022,
    now: 2023,
  },
];

// const getIntroOfPage = (label) => {
//   if (label === 'ReactJs') {
//     return "About ReactJs";
//   }
//   if (label === 'Page B') {
//     return "Page B is about women's dress";
//   }
//   if (label === 'Page C') {
//     return "Page C is about women's bag";
//   }
//   if (label === 'Page D') {
//     return 'Page D is about household goods';
//   }
//   if (label === 'Page E') {
//     return 'Page E is about food';
//   }
//   if (label === 'Page F') {
//     return 'Page F is about baby food';
//   }
//   return '';
// };

// const CustomTooltip = ({ active, payload, label }) => {
//   if (active && payload && payload.length) {
//     return (
//       <div className="custom-tooltip">
//         <p className="label">{`${label} : `}</p> {/* ${payload[0].value} */}
//         <p className="intro">{getIntroOfPage(label)}</p>
//         <p className="desc">Anything you want can be displayed here.</p>
//       </div>
//     );
//   }

//   return null;
// };

const Skills = () => {
  return (
    <div className='skill_container'>
      <div className='skill_titles wow fadeInLeft' data-wow-delay='0.3s'>
        <SpanTitle title={'My Skills'} />
        <HeadTitle title={'My Special Skill Field Here.'} />
      </div>

      <div className='skill_chart wow fadeInRight' data-wow-delay='0.3s'>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray='1 1' stroke='#242734' />
            <XAxis
              dataKey='name'
              stroke='#848792'
              axisLine={true}
              tickLine={true}
              tick={{ stroke: '#fff', strokeWidth: 1 }}
            />
            <YAxis hide />
            <Legend />
            {/* <Tooltip content={<CustomTooltip />} /> */}
            <Bar dataKey='pv' name='started' fill='#848792'>
              <LabelList dataKey='pre' stroke='#fff' fontSize={14} />
            </Bar>
            <Bar dataKey='uv' name='Growth' fill='#8884d8'>
              <LabelList dataKey='curr' stroke='#fff' fontSize={15} />
            </Bar>
            <Bar dataKey='sv' name='Professional Experience' fill='#20c997'>
              <LabelList dataKey='now' stroke='#fff' />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Skills;
