import './main.css'

const videoPlayer = document.querySelector('#video-player')
const qrCodeFallback = document.querySelector('#qr-code-fallback')

if ('serviceWorker' in navigator) {
  navigator
    .serviceWorker
    .register(`${BASE}sw.bundle.js`)
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

if (buttonInstall) {
  buttonInstall.addEventListener('click', async () => {
    console.log('prompting...')
    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    console.log(`User response to the install prompt: ${outcome}`)
    deferredPrompt = null
    console.log(getPWADisplayMode())
  })
}

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

document.querySelector('#scan').addEventListener('click', e => {
  e.preventDefault()
  document.querySelector('#modal').style.display = 'flex'
  startScan()
})

document.querySelector('#close-modal').addEventListener('click', e => {
  e.preventDefault()
  scanner.stop()
  document.querySelector('#modal').style.display = 'none'
})

let scanner

(() => {
  scanner = new Html5Qrcode('reader')
})()

const handleQRCode = decoded => {
  window.location.href = `/${decoded}.html`
}

const handleQRErr = () => {}

const startScan = () => {
  scanner.start(
    { facingMode: 'environment' },
    { fps: 10 },
    handleQRCode,
    handleQRErr
  )
}
