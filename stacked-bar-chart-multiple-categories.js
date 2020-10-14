// let chartWidth =
//   document.getElementById("vis-stacked-bar-multiple-categories").offsetWidth > 600
//     ? 600
//     : document.getElementById("vis-stacked-bar-multiple-categories").offsetWidth;

Highcharts.chart('vis-stacked-bar-multiple-categories', {
  chart: {
      type: 'bar',
      width: chartWidth, 
      height: 900 // comment out if not necessary
  },
  title: {
      text: 'Osoby pozitivní na covid-19 podle zaměstnání', 
      useHTML: true,
  },
  subtitle: {
      useHTML: true,
      text: 'Data k 10.10.2020' + '<br><span style="color: #fff">.</span>'
  },
  credits: {
    href : '',
    text : 'Zdroj: ÚZIS, ISIN - Informanční systém Infekční nemoci'
  },
  xAxis: {
      categories: ['Žák, student, učeň', 
        'Starobní důchodce',
        'Administrativa',
        'Pedagog, školství',
        'Strojírenství, elektro',
        'OSVČ',
        'Zdravotní sestra',
        'Nepracující',
        'Management',
        'Dítě',
        'Jiný zdrav. prac.',
        'Mateřská dovolená',
        'Lékař',
        'Dělnické profese, agenturní prac.',
        'Řemeslník',
        'Jiný potravinář',
        'Řidič',
        'Pracovník v IT',
        'Sociální pracovník',
        'Prodavač(ka)',
        'Hornictví',
        'Ostatní VŠ',
        'Invalidní důchodce',
        'Pracovník ve službách',
        'Policista / zaměstnanaec MV',
        'Sportovní aktivity',
        'Skladník, logistika',
        'Stavebnictví',
        'Gastronomie',
        'Voják',
        'Divadlo, hudba, tanec',
        'Úklidové služby',
        'V domácnosti',
        'Hasič / Záchranář',
        'Laboratorní pracovník ve zdrav.',
        'Farmaceut, lékárník',
        'Zemědělství',
        'Pendler',
        'Pošta, doručovací služba',
        'Zaměstnanec vězeňské služby',
        'Veterinář, pracujicí se zvířaty',
        'Církev',
        'Bezdomovec',
        'Jiné povolání',
        'Nezjištěno'
      ]
  },
  yAxis: {
      title: false,
      // title: {
      //     text: 'nepovolené jízdy za návěstidla'
      // },
      max: 100, 
      // showFirstLabel: false,
      labels: {
        formatter: function() {
        //   if (this.isLast) {
        //     return this.value + '<br>' +
        //                 '<span class="light-gray-text">jízd za</span>' + '<br>' +
        //                 '<span class="light-gray-text">návěstidla</span>'
        //   } else {
            return this.value + 'osob'
        //   }
        } 
      }
  }, 
  tooltip: {
    valueSuffix: ' osob',
    shared: true
  },
  exporting: {
      enabled: false
  },
  legend: {
    reversed: true  
  },
  plotOptions: {
      bar: {
          dataLabels: {
              enabled: false
          },
          enableMouseTracking: true,
          pointPadding: 0.1,
          groupPadding: 0.15,
          borderWidth: 0,
          stacking: 'normal'
      }
  },
  series: [
  /*{ Mockup
    name: 'název řady',
    data: [44, 38, 48, 42, 69, 79, 88, 80, 58, 43, 49, 50],
    color: colors.avg,  // pokud chceš nastavit spešl barvu pro sérii dat
    lineWidth: 2, 
    dashStyle: 'ShortDash',
    zIndex: 8000,
    marker: {
      symbol: 'circle', 
      radius: 2
    }
  },*/
  {
    name: 'pozitivní',
    data :[7635,      
      7149,
      2121,
      2050,
      1746,
      1355,
      1862,
      800,
      963,
      987,
      1256,
      610,
      978,
      466,
      484,
      533,
      436,
      349,
      600,
      340,
      23,
      351,
      373,
      256,
      387,
      243,
      328,
      243,
      201,
      232,
      189,
      168,
      177,
      149,
      190,
      145,
      73,
      44,
      62,
      54,
      37,
      34,
      3,
      4713,
      16776],

    color: colors['2018']
  },
  {
    name: 'vyléčení',
    data :[11083,
      5765,
      2965,
      2433,
      2160,
      1891,
      1161,
      1643,
      1485,
      1189,
      890,
      1017,
      551,
      897,
      782,
      630,
      577,
      644,
      377,
      619,
      910,
      505,
      455,
      582,
      451,
      579,
      477,
      515,
      521,
      259,
      285,
      293,
      229,
      154,
      104,
      80,
      151,
      117,
      91,
      61,
      67,
      66,
      16,
      9050,
      118],

    color: colors['2016']
    
  },
  {
    name: 'zemřelí',
    data :[0,
      853,
      3,
      0,
      3,
      2,
      1,
      8,
      2,
      0,
      2,
      0,
      1,
      3,
      0,
      0,
      2,
      1,
      1,
      0,
      2,
      1,
      21,
      0,
      0,
      0,
      3,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      16,
      4],

    color: colors['2020']
    // color: colors[function() { console.log(this); return '2020' }()]
  },
]
});