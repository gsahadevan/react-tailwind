export const doughnutOptions = {
    data: {
        datasets: [
            {
                data: [33, 33, 33],
                /**
                 * These colors come from Tailwind CSS palette
                 * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
                 */
                backgroundColor: ['#0694a2', '#1c64f2', '#7e3af2'],
                label: 'Dataset 1'
            }
        ],
        labels: ['Shoes', 'Shirts', 'Bags']
    },
    options: {
        responsive: true,
        cutout: '45%'
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
                /**
                 * These colors come from Tailwind CSS palette
                 * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
                 */
                backgroundColor: '#EC4899',
                borderColor: '#EC4899',
                tension: 0.4,
                data: [43, 48, 40, 54, 67, 73, 70],
                fill: false
            },
            {
                label: '2020',
                fill: false,
                /**
                 * These colors come from Tailwind CSS palette
                 * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
                 */
                backgroundColor: '#7C3AED',
                borderColor: '#7C3AED',
                tension: 0.2,
                data: [24, 50, 64, 74, 52, 51, 65]
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
