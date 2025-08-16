const delinquencyRate = () => {
  return Math.floor(Math.random() * 5) + 1
}

function generateHash15() {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let hash = ''

  for (let i = 0; i < 8; i++) {
    hash += characters.charAt(Math.floor(Math.random() * characters.length))
  }

  return hash
}

export { delinquencyRate, generateHash15 }
