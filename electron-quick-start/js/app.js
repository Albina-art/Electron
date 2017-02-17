// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
window.show = function y(teml){
	document.getElementById('app').innerHTML = teml
}
window.remote = "https://stark-cliffs-87419.herokuapp.com"

window.api = {
  regions: function (callback) {
    return $.ajax({
      url: window.remote + '/regions/index.json',
      success: callback,
      error: function(error){
        window.show(window.templates.error(error))
      }
    })
  },
  halls: function(region, callback) {
    return $.ajax({
      url: window.remote + '/halls/index.json?region=' + region,
      success: callback
    })
  },
  concerts: function(q, callback) {
    var url = window.remote + '/concerts/index.json?'
    url += Object.keys(q).filter(function(key) {
      return (["date_from", "date_to", "hall_ids"].indexOf(key) != -1)
    }).map(function(key) {
      return key + '=' + q[key]
    }).join('&')
    return $.ajax({
      url: url,
      success: callback
    })
  },
  login: {
    get: function (callback) {
      $.ajax({
        url: window.remote + '/users/sign_in',
        type: 'GET',
        success: callback
      })
    },
    post: function(data, callback) {
      document.querySelector(selector).querySelector
      $.ajax({
        url: window.remote + '/users/sign_in',
        type: 'POST',
        data: {
          user:{
            email: data.email,
            password: data.password,
            remember_me: 1
          },
          authenticity_token: data.token
        },
        success: function(data) {
          console.log("auth done")
        }
      })
    }
  },
  price: function(concert, cb_suc, cb_err){
    if (!concert.url.match(/mosconsv.ru/)) {
      return cb_err("bad_site")
    }
    $.ajax({
      url: concert.url,
      success: function(html){
        var doc = new DOMParser().parseFromString(html, 'text/html')
        var a = doc.querySelector('a[title="На этот концерт можно купить билет Online"]')
        if (!a) return cb_err("no_tickets")
      },
      error: cb_err
    })
  }
}

window.controller = {
	regions: function(){
		api.regions(function(regions){
			show(HAML.regions({regions: regions}))
			document.getElementById('start').addEventListener('click', function(event){
				event.target.setAttribute('disabled', true)
				select = document.getElementById('region')
				select.setAttribute('disabled', true)
				controller.halls({region_id: select.value})
			})
		})
	},
	halls: function(data){
		api.halls(data.region_id, function(halls){
			show(HAML.halls({halls: halls}))

		})
	}
}

document.addEventListener('DOMContentLoaded', function(){
  controller.regions()
})
const shell = require('electron').remote.shell;

$(document).on('click', 'a[href^="http"]', function(event) {
    event.preventDefault();
    shell.openExternal(this.href);
});
