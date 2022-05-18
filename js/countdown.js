const countdown = () => {
  const countDate = new Date('June 1, 2022 00:00:00')
  const now = new Date()
  const gap = countDate - now

  const second = 1000
  const minute = second * 60
  const hour = minute * 60
  const day = hour * 24

  const dayValue = Math.max(0, Math.floor(gap / day))
  const hourValue = Math.max(0, Math.floor((gap % day) / hour))
  const minuteValue = Math.max(0, Math.floor((gap % hour) / minute))
  const secondValue = Math.max(0, Math.floor((gap % minute) / second))

  document.querySelector('.day').innerText = dayValue
  document.querySelector('.hour').innerText = hourValue
  document.querySelector('.minute').innerText = minuteValue
  document.querySelector('.second').innerText = secondValue
}

setInterval(countdown, 1000)