var options = {
    series: [{
        name: 'المنتجات المتوفرة',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }, {
        name: 'الشحنات لليوم',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    }, {
        name: 'الارباح الشهرية',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    }],
    chart: {
        type: 'bar',
        height: 350
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '55%',
            borderRadius: 5,
            borderRadiusApplication: 'end'
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    yaxis: {
        title: {
            text: '$ (دولار)'
        }
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return "$ " + val + " دولار"
            }
        }
    }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();






var options = {
    series: [44, 55, 13, 43, 22],
    chart: {
        width: 500,
        type: 'pie',
    },
    labels: ['الصف الاول', 'الصف الثاني', 'الصف الثالث', 'الصف الرابع', 'الصف الخامس'],
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 350
            },
            legend: {
                position: 'bottom'
            }
        }
    }]
};

var chart = new ApexCharts(document.querySelector("#chart1"), options);
chart.render();
