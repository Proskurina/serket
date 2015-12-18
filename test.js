$( document ).ready(function() {

  var connectedLink = "http://serket.uk/badges/badgelist"

  $.getJSON(connectedLink, function showData(data){

// First chart
    
    var dataTrue = stateTrue(data)

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
    
    var septTrue = stateTrue(sept)

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

    //Third chart

    var oct = extractMonth(data, "10")
    
    var octTrue = stateTrue(oct)

    countsForOct = numberOfSalesByPeriod(oct, "day")
    countsForOctTrue = numberOfSalesByPeriod(octTrue, "day")

    console.log(countsForOct)

    keysOct = Object.keys(countsForOct).sort()

    valuesOct = vals(keysOct, countsForOct);
    valuesOctTrue = vals(keysOct, countsForOctTrue);
    percentage3 = listOfPercentage(valuesOct, valuesOctTrue)

    var dataForThirdChart = {
      labels: keysOct,
      datasets: [
          {
              label: "My First dataset",
              fillColor: "rgba(220,220,220,0.2)",
              strokeColor: "rgba(220,220,220,1)",
              pointColor: "rgba(220,220,220,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(220,220,220,1)",
              data: valuesOct
          },
                   {
              label: "My Second dataset",
              fillColor: "rgba(100,220,220,0.2)",
              strokeColor: "rgba(220,220,220,1)",
              pointColor: "rgba(220,220,220,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(220,220,220,1)",
              data: valuesOctTrue
          },

      ]
    };

    var optionsForThirdChart = optionsForChart(percentage3)

    var ctx = document.getElementById("myChart3").getContext("2d");
    var myLineChart = new Chart(ctx).Bar(dataForThirdChart, optionsForThirdChart);

      //Fourth chart

    var nov = extractMonth(data, "11")
    
    var novTrue = stateTrue(nov)

    countsForNov = numberOfSalesByPeriod(nov, "day")
    countsForNovTrue = numberOfSalesByPeriod(novTrue, "day")

    console.log(countsForNov)

    keysNov = Object.keys(countsForNov).sort()

    valuesNov = vals(keysNov, countsForNov);
    valuesNovTrue = vals(keysNov, countsForNovTrue);
    percentage4 = listOfPercentage(valuesNov, valuesNovTrue)

    var dataForFourthChart = {
      labels: keysNov,
      datasets: [
          {
              label: "My First dataset",
              fillColor: "rgba(220,220,220,0.2)",
              strokeColor: "rgba(220,220,220,1)",
              pointColor: "rgba(220,220,220,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(220,220,220,1)",
              data: valuesNov
          },
                   {
              label: "My Second dataset",
              fillColor: "rgba(100,220,220,0.2)",
              strokeColor: "rgba(220,220,220,1)",
              pointColor: "rgba(220,220,220,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(220,220,220,1)",
              data: valuesNovTrue
          },

      ]
    };

    var optionsForFourthChart = optionsForChart(percentage4)

    var ctx = document.getElementById("myChart4").getContext("2d");
    var myLineChart = new Chart(ctx).Bar(dataForFourthChart, optionsForFourthChart);

  });

});