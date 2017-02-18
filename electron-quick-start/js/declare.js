// Этот файл необходим файл index.html и воли
// Выполняется в процессе визуализации для этого окна.
// Все API-интерфейсы Node.js доступны в этом процессе.
window.show = function y(teml){
	document.getElementById('app').innerHTML = teml
}
// window.help = {
//   setHandler: (id, ev, fn) => document.getElementById(id).addEventListener(ev, fn)
// }
window.controller = {}

const shell = require('electron').remote.shell;

// $(document).on('click', 'a[href^="http"]',(event) =>{
//     event.preventDefault();
//     shell.openExternal(event.target.href);
// });

