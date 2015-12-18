$( document ).ready(function() {

  var connectedLink = "http://serket.uk/badges/badgelist"

  $.getJSON(connectedLink, function showData(data){

// First chart
    
    var dataTrue = trueSales(data)

    countsForAll = numberOfSalesByPeriod(data, "month")
    countsForAllTrue = numberOfSalesByPeriod(dataTrue, "month")

    valuesAll = vals(countsForAll);
    valuesAllTrue = vals(countsForAllTrue);
    percentage1 = listOfPercentage(valuesAll, valuesAllTrue)

    var dataForFirstChart = {
      labels: Object.keys(countsForAll),
      datasets: [
          {
              label: "My First dataset",
              fillColor: "rgba(220,220,220,0.2)",
              strokeColor: "rgba(220,220,220,1)",
              pointColor: "rgba(220,220,220,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(220,220,220,1)",
              data: valuesAll
          },
          {
              label: "My Second dataset",
              fillColor: "rgba(100,220,220,0.2)",
              strokeColor: "rgba(220,220,220,1)",
              pointColor: "rgba(220,220,220,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(220,220,220,1)",
              data: valuesAllTrue
          },
      ]
    };
  
    var optionsForFirstChart = optionsForChart(percentage1)

    var ctx = document.getElementById("myChart").getContext("2d");
    var myLineChart = new Chart(ctx).Bar(dataForFirstChart, optionsForFirstChart);


// Second chart

    var sept = extractMonth(data, "09")
    
    var septTrue = trueSales(sept)

    countsForSept = numberOfSalesByPeriod(sept, "day")
    countsForSeptTrue = numberOfSalesByPeriod(septTrue, "day")

    console.log(countsForSept)
    console.log(countsForSeptTrue)

    valuesSept = vals(countsForSept);
    valuesSeptTrue = vals(countsForSeptTrue);
    percentage2 = listOfPercentage(valuesSept, valuesSeptTrue)

    var dataForSecondChart = {
      labels: Object.keys(countsForSept),
      datasets: [
          {
              label: "My First dataset",
              fillColor: "rgba(220,220,220,0.2)",
              strokeColor: "rgba(220,220,220,1)",
              pointColor: "rgba(220,220,220,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(220,220,220,1)",
              data: valuesSept
          },
                   {
              label: "My Second dataset",
              fillColor: "rgba(100,220,220,0.2)",
              strokeColor: "rgba(220,220,220,1)",
              pointColor: "rgba(220,220,220,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(220,220,220,1)",
              data: valuesSeptTrue
          },

      ]
    };

    var optionsForSecondChart = optionsForChart(percentage2)

    var ctx = document.getElementById("myChart2").getContext("2d");
    var myLineChart = new Chart(ctx).Bar(dataForSecondChart, optionsForSecondChart);

  });

});