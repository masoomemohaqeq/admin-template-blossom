//utils
// import { valueOrDefault } from "../../../node_modules/chart.js/dist/helpers";

// Adapted from http://indiegamr.com/generate-repeatable-random-numbers-in-js/
var _seed = Date.now();

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const COLORS = [
  "#537bc4",
  "#4dc9f6",
  "#f53794",
  "#00a950",
  "#f67019",
  "#58595b",
  "#acc236",
  "#166a8f",
  "#8549ba",
];

const NAMED_COLORS = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "grey",
];

const Utils = {
  srand: function (seed) {
    _seed = seed;
  },
  rand: function (min, max) {
    min = min || 0;
    max = max || 0;
    _seed = (_seed * 9301 + 49297) % 233280;
    return min + (_seed / 233280) * (max - min);
  },
  numbers: function (config) {
    var cfg = config || {};
    var min = cfg.min || 0;
    var max = cfg.max || 100;
    var from = cfg.from || [];
    var count = cfg.count || 8;
    var decimals = cfg.decimals || 8;
    var continuity = cfg.continuity || 1;
    var dfactor = Math.pow(10, decimals) || 0;
    var data = [];
    var i, value;

    for (i = 0; i < count; ++i) {
      value = (from[i] || 0) + this.rand(min, max);
      if (this.rand() <= continuity) {
        data.push(Math.round(dfactor * value) / dfactor);
      } else {
        data.push(null);
      }
    }

    return data;
  },

  points: function (config) {
    const xs = this.numbers(config);
    const ys = this.numbers(config);
    return xs.map((x, i) => ({ x, y: ys[i] }));
  },

  bubbles: function (config) {
    return this.points(config).map((pt) => {
      pt.r = this.rand(config.rmin, config.rmax);
      return pt;
    });
  },

  labels: function (config) {
    var cfg = config || {};
    var min = cfg.min || 0;
    var max = cfg.max || 100;
    var count = cfg.count || 8;
    var step = (max - min) / count;
    var decimals = cfg.decimals || 8;
    var dfactor = Math.pow(10, decimals) || 0;
    var prefix = cfg.prefix || "";
    var values = [];
    var i;

    for (i = min; i < max; i += step) {
      values.push(prefix + Math.round(dfactor * i) / dfactor);
    }

    return values;
  },

  months: function (config) {
    var cfg = config || {};
    var count = cfg.count || 12;
    var section = cfg.section;
    var values = [];
    var i, value;

    for (i = 0; i < count; ++i) {
      value = MONTHS[Math.ceil(i) % 12];
      values.push(value.substring(0, section));
    }

    return values;
  },

  color: function (index) {
    return COLORS[index % COLORS.length];
  },

  transparentize: function (value, opacity) {
    var alpha = opacity === undefined ? 0.5 : 1 - opacity;
    return value;
  },

  CHART_COLORS: {
    green: "#1BCFB4",
    darkPurple: "#524e83",
    success: "#0D9488",
    blue: "#4BCBEB",
    pink: "#FE9496",
    purple: "#A05AFF",
    grey: "#9E58FF",
  },

  namedColor: function (index) {
    return NAMED_COLORS[index % NAMED_COLORS.length];
  },

  newDate: function (days) {
    return DateTime.now().plus({ days }).toJSDate();
  },

  newDateString: function (days) {
    return DateTime.now().plus({ days }).toISO();
  },

  parseISODate: function (str) {
    return DateTime.fromISO(str);
  },
};

//Sample Line Chart
const lineCtx = document.getElementById("line-chart");
const Line_DATA_COUNT = 7;
const Line_NUMBER_CFG = { count: Line_DATA_COUNT, min: -100, max: 100 };

const LineLabels = Utils.months({ count: 7 });
const lineData = {
  labels: LineLabels,
  datasets: [
    {
      label: "Dataset 1",
      data: Utils.numbers(Line_NUMBER_CFG),
      borderColor: Utils.CHART_COLORS.green,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.green, 0.5),
    },
    {
      label: "Dataset 2",
      data: Utils.numbers(Line_NUMBER_CFG),
      borderColor: Utils.CHART_COLORS.blue,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
    },
  ],
};

new Chart(lineCtx, {
  type: "line",
  data: lineData,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  },
});

//Sample Doughnut Chart
const doughnutCtx = document.getElementById("doughnut-chart");

const Doughnut_DATA_COUNT = 5;
const Doughnut_NUMBER_CFG = { count: Doughnut_DATA_COUNT, min: 0, max: 100 };

const doughnutData = {
  datasets: [
    {
      label: "Dataset 1",
      data: Utils.numbers(Doughnut_NUMBER_CFG),
      backgroundColor: Object.values(Utils.CHART_COLORS),
    },
  ],
  options: {},
};

let doughnutChart = new Chart(doughnutCtx, {
  type: "doughnut",
  data: doughnutData,
  options: {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
    },
  },
});

//Floating Bars
const floatingBarCtx = document.getElementById("floating-bar-chart");

const FLOATING_BAR_DATA_COUNT = 7;
const FLOATING_BAR_NUMBER_CFG = {
  count: FLOATING_BAR_DATA_COUNT,
  min: -100,
  max: 100,
};

const floatingBarLabels = Utils.months({ count: 7 });
const floatingBarData = {
  labels: floatingBarLabels,
  datasets: [
    {
      label: "Dataset 1",
      data: floatingBarLabels.map(() => {
        return [Utils.rand(-100, 100), Utils.rand(-100, 100)];
      }),
      backgroundColor: Utils.CHART_COLORS.green,
    },
    {
      label: "Dataset 2",
      data: floatingBarLabels.map(() => {
        return [Utils.rand(-100, 100), Utils.rand(-100, 100)];
      }),
      backgroundColor: Utils.CHART_COLORS.blue,
    },
  ],
};

new Chart(floatingBarCtx, {
  type: "bar",
  data: floatingBarData,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Floating Bar Chart",
      },
    },
  },
});
