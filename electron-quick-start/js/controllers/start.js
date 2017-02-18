window.controller = window.controller || {}
controller.start = () => {
    api.start(function(start){
      show(HAML.start({start: start}))
      // help.setHandler('start', 'click', (event) => {
      //   event.target.setAttribute('disabled', true)
      //   select = document.getElementById('start')
      //   select.setAttribute('disabled', true)
      // })
    })
}
