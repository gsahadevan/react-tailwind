export const doughnutOptions = {
    data: {
        datasets: [
            {
                data: [40, 28, 32],
                /**
                 * These colors come from Tailwind CSS palette
                 * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
                 */
                backgroundColor: ['#3B82F6', '#EC4899', '#7C3AED'],
                label: 'Dataset 1'
            }
        ],
        labels: ['E-Mail', 'Calls', 'Social']
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '80%'
    },
    legend: {
        display: false
    }
};

export const lineOptions = {
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: '2021',
                backgroundColor: '#EC4899',
                borderColor: '#EC4899',
                tension: 0.4,
                data: [43, 52, 40, 56, 72, 60, 84],
                fill: false
            },
            {
                label: '2020',
                fill: false,
                backgroundColor: '#7C3AED',
                borderColor: '#7C3AED',
                tension: 0.4,
                data: [24, 44, 64, 58, 52, 51, 65]
            }
        ]
    },
    options: {
        animations: {
            radius: {
                duration: 400,
                easing: 'linear',
                loop: (context) => context.active
            }
        },
        responsive: true,
        tooltips: {
            mode: 'index',
            intersect: false
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            x: {
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Month'
                }
            },
            y: {
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Value'
                }
            }
        }
    },
    legend: {
        display: false
    }
};

export const barOptions = {
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: '2021',
                backgroundColor: '#EC4899',
                borderWidth: 1,
                barPercentage: 0.5,
                barThickness: 6,
                maxBarThickness: 8,
                minBarLength: 2,
                data: [-3, 14, 52, 74, 33, 90, 70]
            },
            {
                label: '2020',
                backgroundColor: '#7C3AED',
                borderWidth: 1,
                barPercentage: 0.5,
                barThickness: 6,
                maxBarThickness: 8,
                minBarLength: 2,
                data: [10, 25, 43, 12, 54, 62, 94]
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            xAxes: [{
                barThickness: 2
            }]
        }
    },
    legend: {
        display: false
    }
};
