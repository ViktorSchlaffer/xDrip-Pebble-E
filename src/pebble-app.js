var dictionary = {
  '4': '5',
  '5': '11',
  '6': 'Patient1',
  '7': '1',
  '8': '1',
  '9': '0'
};
// 4: BG delta
// 5: 11 -> Uploader Battery 11
// 6: 'Patient1' -> name of patient
// 7: Length of trend data
// 8: Trend data
// 9: trend end key, always 0
Pebble.addEventListener('showConfiguration',
  function(d) {
    console.log("Pebble JS showconfig pressed!!!");
    // Send to Pebble
    Pebble.sendAppMessage(dictionary,
    function(e) {console.log('Successfully delivered bug data with transactionId=' + e.data.transactionId + 'Transaction=' + e.data); },
    function(e) {console.log('Unable to deliver bug data. Dump follows...');});
                          
  }
);


