window.controller = window.controller || {}
controller.metronome = () => {
  let min = 40
  let max = 200
  let aids = []
  for (let i=0; i< 1000; i++){
    aids.push(`a$(i)`)
  }
  show(HAML.metronome({min, max, aids}))
  let num = 0
  let as = document.getElementsByTagName('audio')
  let start = () => {
    let temp = parseInt(document.getElementById('temp').value)
    return setInterval(()=>{
      as[num].play()
      num = (num + 1) % as.length
    }, parseInt(60000/temp) )
  }
  let iid = start(temp)
  document.getElementById('temp').addEventListener('change', (event) => {
    clearInterval(iid)
    iid = start(event.target.value)
  })
}
