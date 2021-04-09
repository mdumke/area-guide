if ('serviceWorker' in navigator) {
  navigator
    .serviceWorker
    .register('/sw.js')
    .then(() => {
      console.log('sw ready')
    })
}


let deferredPrompt

window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault()
  deferredPrompt = e
  console.log(`'beforeinstallprompt' event was fired.`)
})

let buttonInstall = document.querySelector('#button-install')

buttonInstall.addEventListener('click', async () => {
  console.log('prompting...')
  deferredPrompt.prompt()
  const { outcome } = await deferredPrompt.userChoice
  console.log(`User response to the install prompt: ${outcome}`)
  deferredPrompt = null
  console.log(getPWADisplayMode())
})

window.addEventListener('appinstalled', () => {
  deferredPrompt = null
  console.log('PWA was installed')
})

function getPWADisplayMode() {
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
  if (document.referrer.startsWith('android-app://')) {
    return 'twa';
  } else if (navigator.standalone || isStandalone) {
    return 'standalone';
  }
  return 'browser';
}

