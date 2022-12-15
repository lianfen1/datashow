// 饼图模块
(function() {
    //1.实例化对象
    var myChart = echarts.init(document.querySelector("#pie"));
    //2.指定配置项和数据
    var option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '5%',
            left: 'center'
        },
        series: [{
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            labelLine: {
                show: false
            },
            seriesLayoutBy: 'column',
            data: [
                { value: 45672, name: '类型品类一' },
                { value: 25678, name: '类型品类二' },
                { value: 13456, name: '类型品类三' },
                { value: 13456, name: '类型品类四' },
            ]
        }],
        color: ['#01d6bf', '#01a9a6', '#0282d9', '#4a4fcf'],
    };
    //3.把配置项给实例对象
    myChart.setOption(option);
    //4.让图表跟随屏幕自动去适应
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();
// 折线图模块
(function() {
    //1.实例化对象
    var myChart = echarts.init(document.querySelector(".fold"));
    //2.指定配置项和数据
    let option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    width: 3,
                    color: '#019688',
                },
            },
        },
        grid: {
            left: '4%',
            right: '3%',
            bottom: '3%',
            containLabel: true,
        },
        color: ['#019688', '#119AC2'],
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: ['2020-10-01 12:00:00', '2020-10-01 13:00:00', '2020-10-01 14:00:00', '2020-10-01 15:00:00',
                '2020-10-01 16:00:00', '2020-10-01 17:00:00', '2020-10-01 18:00:00', '2020-10-01 19:00:00',
                '2020-10-01 20:00:00', '2020-10-01 21:00:00', '2020-10-01 22:00:00', '2020-10-01 23:00:00'
            ],
            // axisLabel: {
            //   rotate: 25,
            // },
            splitLine: {
                show: true,
                lineStyle: {
                    width: 1,
                    type: 'solid',
                    color: 'rgba(226,226,226,0.5)',
                },
            },
            axisTick: { // 轴刻度线
                show: false,
            },
        }, ],
        yAxis: [{
                type: 'value',
                name: '浓度数据',
                max: 0.5,
                interval: 0.1,
                axisTick: { // 轴刻度线
                    show: false,
                },
                // 刻度文字颜色
                axisLabel: { color: '#808080' },
                // y轴刻度设置
                axisLine: {
                    lineStyle: {
                        width: 2,
                        color: '#019688',
                    },
                },
                // y轴分隔线设置
                splitLine: {
                    lineStyle: {
                        color: 'rgba(226,226,226,0.5)',
                    },
                },
                // y轴分隔区域设置
                splitArea: {
                    show: true,
                    areaStyle: {
                        color: ['rgba(250,250,250,0.3)', 'rgba(226,226,226,0.3)'],
                    },
                },
            },
            {
                type: 'value',
                name: '测量原始值',
                min: 0,
                max: 10,
                interval: 2,
                axisTick: { // 轴刻度线
                    show: false,
                },
                axisLabel: { color: '#808080' },
                axisLine: {
                    lineStyle: {
                        width: 2,
                        color: '#019688',
                    },
                },
                // y轴分隔线设置
                splitLine: {
                    lineStyle: {
                        color: 'rgba(226,226,226,0.5)',
                    },
                },
                splitArea: {
                    show: true,
                    areaStyle: {
                        color: ['rgba(250,250,250,0.3)', 'rgba(226,226,226,0.3)'],
                    },
                },
            },
        ],
        series: [{
                name: '浓度数据',
                type: 'line',
                data: [0.2, 0.049, 0.07, 0.23, 0.25, 0.07, 0.15, 0.162, 0.32, 0.2, 0.06, 0.33],
                smooth: true,
                symbolSize: 6,
                areaStyle: {},
                itemStyle: {
                    borderWidth: 2,
                },
            },
            {
                name: '测量原始值',
                type: 'line',
                yAxisIndex: 1,
                data: [2.6, 5.9, 9.0, 6.4, 8.7, 0.7, 5.6, 2.2, 0.4, 0.18, 0.24, 0.25],
                smooth: true,
                symbolSize: 6,
                areaStyle: {},
                itemStyle: {
                    borderWidth: 2,
                },
            },
        ],
    };
    //3.把配置项给实例对象
    myChart.setOption(option);
    //4.让图表跟随屏幕自动去适应
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();
// 柱状图模块
(function() {
    //1.实例化对象

    var dataAxis = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月', ];
    var data = [26, 30, 28, 36, 25, 32, 29, 26, 30, 28, 36, 25, 32];
    var getOption = function() {
        var chartOption = {
            tooltip: {
                // 通过坐标轴来触发
                trigger: "axis"
            },
            grid: {
                x: 25,
                x2: 25,
                y: 25,
                y2: 35,
            },
            xAxis: [{
                type: 'category',
                axisLabel: {
                    textStyle: {
                        color: '#757575',
                    },

                },
                offset: 10,
                boundaryGap: false,
                splitLine: {
                    show: false
                },
                data: dataAxis,
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },

            }],
            yAxis: {
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                }
            },
            dataZoom: [{
                type: 'inside'
            }],
            series: [{
                type: 'bar',
                barWidth: 6, //柱图宽度
                itemStyle: {
                    normal: {
                        barBorderRadius: 6,
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: '#f45c3d' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#f9bf6b' // 100% 处的颜色
                            }],
                            globalCoord: true // 缺省为 false
                        },
                        label: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: '#222222'
                            },
                            formatter: function(params) {
                                if (params.value == 0) {
                                    return '';
                                } else {
                                    return params.value;
                                }
                            }
                        },
                    },
                },
                data: data
            }]
        };
        return chartOption;
    };
    var byId = function(id) {
        return document.querySelector(id);
    };
    var lineChart = echarts.init(byId('.column'));
    lineChart.setOption(getOption());

})();
// 折线图模块
(function() {
    //1.实例化对象
    var myChart = echarts.init(document.querySelector(".right-fold"));
    //2.指定配置项和数据
    // (1)准备数据
    var data = {
        year: [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 300, 340],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ],
        quarter: [
            [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
            [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
        ],
        month: [
            [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
            [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
        ],
        week: [
            [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
            [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
        ]
    };
    let option = {
        color: ["#00f2f1", "#ed3f35"],
        tooltip: {
            // 通过坐标轴来触发
            trigger: "axis"
        },
        legend: {
            // 距离容器10%
            right: "10%",
            // 修饰图例文字的颜色
            textStyle: {
                color: "#4c9bfd"
            }
            // 如果series 里面设置了name，此时图例组件的data可以省略
            // data: ["邮件营销", "联盟广告"]
        },
        grid: {
            top: "20%",
            left: "3%",
            right: "4%",
            bottom: "3%",
            show: true,
            borderColor: "#012f4a",
            containLabel: true
        },

        xAxis: {
            type: "category",
            boundaryGap: false,
            data: [
                "1月",
                "2月",
                "3月",
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月"
            ],
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "#4c9bfd"
            },
            // 去除x坐标轴的颜色
            axisLine: {
                show: false
            }
        },
        yAxis: {
            type: "value",
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "#4c9bfd"
            },
            // 修改y轴分割线的颜色
            splitLine: {
                lineStyle: {
                    color: "#012f4a"
                }
            }
        },
        series: [{
                name: "预期销售额",
                type: "line",
                stack: "总量",
                // 是否让线条圆滑显示
                smooth: true,
                data: data.year[0]
            },
            {
                name: "实际销售额",
                type: "line",
                stack: "总量",
                smooth: true,
                data: data.year[1]
            }
        ]
    };
    //3.把配置项给实例对象
    myChart.setOption(option);
    //4.让图表跟随屏幕自动去适应
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();