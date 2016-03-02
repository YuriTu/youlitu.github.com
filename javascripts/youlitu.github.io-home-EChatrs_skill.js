
// 技能树文字云 来自ECharts
 


function createRandomItemStyle() {
    return {
        normal: {
            color: 'rgb(' + [
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160)
            ].join(',') + ')'
        }
    };
}

var myChart = echarts.init(document.getElementById('EChatrs_skill'))

var option = {
    title: {
        text: 'Yuri\'s skill',
        link: 'https://youlitu.github.io/'
    },
    tooltip: {
        show: true
    },
    series: [{
        name: 'Google Trends',
        type: 'wordCloud',
        size: ['80%', '80%'],
        textRotation : [0, 45, 90, -45],
        textPadding: 0,
        autoSize: {
            enable: true,
            minSize: 14
        },
        data: [
            {
                name: "HTML",
                value: 10000,
                itemStyle: {
                    normal: {
                        color: 'black'
                    }
                }
            },
            {
                name: "CSS",
                value: 8181,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "Javascripts",
                value: 7386,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "JQuery",
                value: 7005,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "AJAX",
                value: 5467,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "SASS",
                value: 5244,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "JavaWeb",
                value: 3898,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "servlet",
                value: 3484,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "Linux",
                value: 2112,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "CentOS",
                value: 1965,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "Bootstrap",
                value: 5847,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "Git ",
                value: 882,
                itemStyle: createRandomItemStyle()
            },
            {
                name:"Photoshop",
                value: 5555,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "premiere",
                value: 5550,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "JSP",
                value: 3462,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "Subline Text",
                value: 366,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "тпр-4",
                value: 360,
                itemStyle: createRandomItemStyle()
            }
            
        ]
    }]
};

myChart.setOption(option);
                    