/**
* 图表渲染
*/
define( function(  ){

    var Chart = function(){

    };
    Chart.prototype = {
        init : function(module,type){
            // console.log("进入init函数");
            //调用绘制
            return this.drawCharts(module,type);
        },
        data :function(){
            return{
                xAxis:xAxis,
                series: series,
                title:title,
                titleTop:top,
                subtit:subtit,
                seriesData:data,
                seriesName:name,
                // tadayNum:12,
                yesterdayNum:number,
                labFormat:labFormat,

            }
        },
        drawCharts : function(module,type){
            var _this=this;
            var subtit = this.data.subtit || ' '  ;
            var titleTop = this.data.titleTop || 0 ;
            // console.log("进入draw");
            if( !$('#'+module ).get(0) ){ return; }
            var _type = 'line';
            // var _data = data;
            //处理X轴上数据的显示
            var X_num = _this.data.xAxis.length;
            // console.log(X_num);
            if(X_num<6){
                X_num = 1;
            }else{
                X_num = Math.floor((X_num  )/6)
            }
            if( type ){ _type = type; }
            // console.log("画图开始");
            $('#'+module).highcharts({

                chart: {
                    type: 'line',  //图表类型
                    // height: 134,
                    // reflow: false,
                    height: 184,
                     // panning: false
                    marker: {
                            radius: 3,  //曲线点半径，默认是4
                            // symbol: 'diamond' //曲线点类型："circle", "square", "diamond", "triangle","triangle-down"，默认是"circle"
                        },
                },
                colors : [ '#ffa466','#ededed'],
                exporting: {
                    enabled:false
                },
                title: {
                    text: this.data.title,
                    align: 'left',
                    // verticalAlign: 'center',
                     x: 15,
                     y:titleTop,
                     margin: 15,
                     // y: 60,
                     style: {
                        color: '#333333',
                        fontWeight: 'bold',
                        fontSize: '14px',
                        lineHeight: '22px',
                        fontFamily: 'PingFangSC-Regular',
                    }
                },
                subtitle: {                 //副标题
                    align: 'left',
                    // verticalAlign: 'top',
                     x: 15,
                     // y: 60,
                     style: {
                        fontSize: '10px',
                        color: '#999999',
                    },
                    text: subtit     //'社区消费会员总数 / 社区消费会员总数 × 100%'
                },
                credits: {       //禁用图表链接
                    enabled: false
                },
                // tooltip: {
                //     enabled: false
                // },
                xAxis: {
                    categories:this.data.xAxis,
                    tickInterval: X_num,
                    lineWidth: 1,
                    // tickPixelInterval: 50 ,   //每个刻度宽度
                    // tickPositions: [0, 1, 2, 4, 8]
                    tickWidth: 0, //不显示刻度线
                    labels: {
                        align: 'right',
//                         formatter: function(){　　//坐标轴格式化回调函数
// 　　　　　　              return this.value
// 　　　　　　            }
                     }
　　　　　　      },
                yAxis: {
                    min : 0,
                    title: {
                        text: ''
                    },
                    labels: {
                        formatter:function(){
                          // if(this.value <=1000) {
                          //   return this.value
                          // }else if(this.value >100 && this.value <=200) {
                          //   return this.value
                          // }else {
                          //   return this.value
                          // }
                          return this.value
                        }
                    }
                },
                legend: {
                    layout: 'vertical',
                    backgroundColor: '#FFFFFF',
                    floating: false,
                    // align: 'right',
                    verticalAlign: 'top',
                    x: 300,
                    // y: -5,
                    // labelFormat: '<span style="display:inline-block;width: 50px;padding-right:10px;color:#FFA466">今日'+_this.data.tadayNum+' </span>   <span style="display:inline-block;width: 50px;padding-right:10px"> 昨日12</span>'
                    labelFormat: this.data.labFormat,
                },
                plotOptions: {
                    line  :  {
                        lineWidth: 1.5,//粗细：lineWidth  默认值为2
                        fillOpacity: 0.1,
                        marker   : {
                            enabled :false,
                            states: {
                                hover: {
                                    enabled: true,
                                    radius: 5,
                                    lineWidthPlus: 5,
                                }
                            }
                        }
                    },
                    series: {
                        events: {
                            // legendItemClick: function(e) {
                            //     var series = chart.series;
                            //     var count = 0;
                            //     for(var i=0;i<series.length;i++) {
                            //         if(series[i].visible) {
                            //             count ++;
                            //         }
                            //     }
                            //     // 计算图例点击事件执行后的数量
                            //     if(this.visible) {
                            //         count --;
                            //     } else {
                            //         count ++;
                            //     }
                            //     // alert(count);
                            // }
                                legendItemClick: function (event){
                                    return false; //return  true 则表示允许切换
                                }
                        },
                        marker: {
                            radius: 3,  //曲线点半径，默认是4
                            // symbol: 'diamond' //曲线点类型："circle", "square", "diamond", "triangle","triangle-down"，默认是"circle"
                        },
                        hover: {
                            enabled: false,
                            radius: 16,
                            lineWidthPlus: 16,
                        }
                    }
                },
                allowDecimals:false, //不显示小数
                // series: this.data.series,
                series: [{
                        name: this.data.seriesName,
                        // data: [257, 50.5, 80.4, 78.2, 132.0, 134.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4, 80.2, 89],
                        data: this.data.seriesData,
                        // showInLegend: false,  隐藏图列
                        lineWidth:1,               //曲线宽度
                        marker: {
                        radius:0,
                        lineWidth: 2,
                        },
                    },]
            },function(c) {
                chart = c;
            }

        );
        // console.log("绘制结束");

        }
    };
    Chart.prototype.data={};
    // Chart.prototype.data.xAxis=


    return Chart;


});

