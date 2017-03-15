// Bypasses lavoz login wall by faking a login event
javascript:(function(){angular.element(document.querySelector('.msjWallNota')).scope().$broadcast('logged', 'LTA');})()
