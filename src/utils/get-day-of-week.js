function getDayOfWeek(date) {
  const dayOfWeek = new Date(date).getUTCDay()
  return isNaN(dayOfWeek) ? null : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
}

export default getDayOfWeek
