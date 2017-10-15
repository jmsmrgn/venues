function getDayOfWeek(date) {
  const dayOfWeek = new Date(date).getUTCDay()
  return isNaN(dayOfWeek) ? null : ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'][dayOfWeek];
}

export default getDayOfWeek
