$( document ).ready(function() {

  var connectedLink = "http://serket.uk/badges/badgelist"

  $.getJSON(connectedLink, function showData(data){

// First chart
    
    var dataTrue = trueSales(data)

    countsForAll = numberOfSalesByPeriod(data, "month")
    countsForAllTrue = numberOfSalesByPeriod(dataTrue, "month")

    keysAll = Object.keys(countsForAll).sort()

    valuesAll = vals(keysAll, countsForAll);
    valuesAllTrue = vals(keysAll, countsForAllTrue);
    percentage1 = listOfPercentage(valuesAll, valuesAllTrue)

    var dataForFirstChart = {
      labels: keysAll,
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

    keysSept = Object.keys(countsForSept).sort()

    valuesSept = vals(keysSept, countsForSept);
    valuesSeptTrue = vals(keysSept, countsForSeptTrue);
    percentage2 = listOfPercentage(valuesSept, valuesSeptTrue)

    var dataForSecondChart = {
      labels: keysSept,
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