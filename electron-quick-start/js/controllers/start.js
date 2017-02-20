window.controller = window.controller || {}
controller.start = () => {
  show(HAML.start(), 'app')
  document.getElementById('metronome').addEventListener('click', () => {
    controller.metronome()
  })
  // help.setHandler('start', 'click', (event) => {
  //   event.target.setAttribute('disabled', true)
  //   select = document.getElementById('start')
  //   select.setAttribute('disabled', true)
  // })
}
