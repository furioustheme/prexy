(function ($) {
var options = {
    series: [{
    name: 'Total Balance',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }],
    chart: {
    type: 'line',
    height: 350,
      zoom: {
          enabled: false
      },

      toolbar: {
          show: false,
      }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  colors: ['#5848bb'],
  // stroke: {
  //   show: true,
  //   width: 2,
  //   colors: ['#ddd']
  // },
  grid: {
      show: false,
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    axisBorder: {
          show: false
      },
  },
  fill: {
    opacity: 1
  },
  };


var chart = new ApexCharts(document.querySelector("#chart-bitcoin"), options);
chart.render();


})(jQuery);

(function ($) {
var options = {
    series: [{
    name: 'Total Balance',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }],
    chart: {
    type: 'bar',
    height: 350,
      zoom: {
          enabled: false
      },

      toolbar: {
          show: false,
      }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  colors: ['#5848bb'],
  // stroke: {
  //   show: true,
  //   width: 2,
  //   colors: ['#ddd']
  // },
  grid: {
      show: false,
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    axisBorder: {
          show: false
      },
  },
  fill: {
    opacity: 1
  },
  };


var chart = new ApexCharts(document.querySelector("#chart-litecoin"), options);
chart.render();


})(jQuery);