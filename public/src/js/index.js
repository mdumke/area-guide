const videoPlayer = document.querySelector('#video-player')
const qrCodeFallback = document.querySelector('#qr-code-fallback')

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

const handleQRCode = decoded => {
  window.location.href = `/pages/${decoded}.html`
}

Html5Qrcode
  .getCameras()
  .then(devices => {
    if (devices && devices.length) {
      const cameraId = devices[0].id
      const html5Qrcode = new Html5Qrcode('reader')

      html5Qrcode.start(
        cameraId,
        {
          fps: 10
        },
        handleQRCode,
        err => {}
      )
    }
  })
