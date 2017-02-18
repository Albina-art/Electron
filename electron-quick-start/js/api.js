window.remote = "https://stark-cliffs-87419.herokuapp.com"
// ajax - позволяет обращаться к серверу к другим страницам без перезагрузки текущей стр 
window.api = {
  start: (callback) => {
    return $.ajax({
      url: window.remote + '/regions/index.json',
      success: callback,
      // если все ок вернуть callback
      error: (error) => {
        console.error("Проблемы с интернетом? Ещё одна попытка через 30 секунд")
        setTimeout(
          () => api.start(callback), 30000)
        // задержка на 30000 милисекунд
      }
    })
  },
  // halls: function(region, callback) {
  //   return $.ajax({
  //     url: window.remote + '/halls/index.json?region=' + region,
  //     success: callback
  //   })
  // },
  // concerts: function(q, callback) {
  //   var url = window.remote + '/concerts/index.json?'
  //   url += Object.keys(q).filter(function(key) {
  //     return (["date_from", "date_to", "hall_ids"].indexOf(key) != -1)
  //   }).map(function(key) {
  //     return key + '=' + q[key]
  //   }).join('&')
  //   // Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.
  //   return $.ajax({
  //     url: url,
  //     success: callback
  //   })
  // },
}
