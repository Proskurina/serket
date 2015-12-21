describe ('numberOfSalesByPeriod', function() {

  it ('should recognise the mockData as an object', function() {
    expect(typeof mockData).toBe("object");
  });

  it ('should correctly pick month within a year', function() {
    var resultMonth = {'11':2, '12':7, '01':1}
    expect(numberOfSalesByPeriod(mockData, 'byMonth')).toEqual(resultMonth)
  });

  it ('should correctly pick dates within a month', function() {
    resultDay = {'27' : 2}
    nov = extractMonth(mockData, 'nov')
    expect(numberOfSalesByPeriod(nov, 'byDay')).toEqual(resultDay)
  });
  
});