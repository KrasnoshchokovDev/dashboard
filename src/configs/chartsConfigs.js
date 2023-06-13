import { faker } from '@faker-js/faker'

const violatingRepeatsLabels = ['v1', 'v2', 'v3', 'v4', 'v5', 'v6', 'v7', 'v8', 'v9', 'v10']
const historyLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May']

const chartsConfigs = [
  {
    id: 'history',
    title: 'Historical trend',
    chart:{
      type: 'bar',
      title: '',
      isLegend: true,
      data: {
        labels: historyLabels,
        datasets: [
          {
            label: 'Compliant',
            data: historyLabels.map(() => faker.number.int({ min: 0, max: 100 })),
            borderRadius: 10,
            backgroundColor: '#23A698',
            stack: 'Stack 0',
          },
          {
            label: '',
            data: historyLabels.map(() => 4),
            borderRadius: 10,
            backgroundColor: 'transparent',
            stack: 'Stack 0',
          },
          {
            label: 'Non-compliant',
            data: historyLabels.map(() => faker.number.int({ min: 0, max: 100 })),
            borderRadius: 10,
            backgroundColor: '#FF708B',
            stack: 'Stack 0',
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        barPercentage: 0.15,
        plugins: {
          legend: {
            display: false
          },
          title: {
            display: false
          },
        },
        scales: {
          y: {
            stacked: true,
            grid: {
              display: false
            },
          },
        },
      },
    },
    description: null,
  },
  {
    id: 'violatingBusiness',
    title: 'Top violating businesses',
    chart: {
      type: 'doughnut',
      title: 'Analysis',
      isLegend: false,
      data: {
        labels: null,
        datasets: [
          {
            label: 'Business 1',
            data: 10,
            backgroundColor: '#23A698',
          },
          {
            label: 'Business 2',
            data: 20,
            backgroundColor: '#383874',
          },
          {
            label: 'Business 3',
            data: 15,
            backgroundColor: '#DBDFF1',
          },
          {
            label: 'Business 4',
            data: 25,
            backgroundColor: '#7BC9C1',
          },
          {
            label: 'Business 5',
            data: 30,
            backgroundColor: '#7E7E8F',
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            display: false
          },
          title: {
            display: false
          },
        },
      },
    },
    description: {
      title: 'Key findings',
      points: [
        'The Subclause <b>#2 has been the leading violation type over the past 6 months</b>, driven mainly by Business #1, Business #2, and Business #3.',
        'The top contributing Amanas to Subclause #2 <b>are Riyadh, Jeddah, and Makkah.</b>',
        'Given the current trajectory of the latest violations, <b>Subclause #5 will be the leading violation factor in June 2023.</b>'
      ],
    }
  },
  {
    id: 'violatingRepeats',
    title: 'Repeat violation analysis',
    chart: {
      type: 'bar',
      title: 'Top 10 repeating violations',
      isLegend: false,
      data: {
        labels: violatingRepeatsLabels,
        datasets: [
          {
            label: 'Dataset 1',
            data: violatingRepeatsLabels.map(() => faker.number.int({ min: 0, max: 1000 })),
            borderRadius: 100,
            backgroundColor: '#23A698',
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        barPercentage: 0.15,
        plugins: {
          legend: {
            display: false
          },
          title: {
            display: false
          },
        },
        scales: {
          y: {
            stacked: true,
            grid: {
              display: false
            },
          },
        },
      },
    },
    description: null,
  },
  {
    id: 'totalViolations',
    title: '',
    chart: {
      type: 'scatter',
      title: 'Total number of Violations vs % of violations repeat',
      isLegend: false,
      data: {
        datasets: [
          {
            label: 'Dataset 1',
            data: Array.from({ length: 50 }, () => ({
              x: faker.number.int({ min: 0, max: 50 }),
              y: faker.number.int({ min: 0, max: 50 }),
            })),
            innerWidth: '8px',
            backgroundColor: '#23A698',
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            display: false
          },
          title: {
            display: false
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              display: false
            },
          },
        },
      },
    },
    description: null,
  },
]

export default chartsConfigs
