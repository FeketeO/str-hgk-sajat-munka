
const increaseDate = (date, dayNumber = 3) => {
  return date.getTime() + dayNumber * (24 * 60 * 60 * 1000)
}

const increaseAndFormatDate = (dateArr) => {
  return dateArr.map(
    item => new Intl.DateTimeFormat('hu-HU').format(item.getTime() + 3 * (24 * 60 * 60 * 1000))
  )
}

module.exports = {
  increaseAndFormatDate
}

// const dateNow = new Date()
// console.log(dateNow.toLocaleDateString('hu'))
// console.log(Date.now())
// console.log(dateNow.getTime())
