const generateUserList = (users = [{}]) => {
  return users.map(
    {
      isAdult: users.age > 18 ? 'true' : 'false',
      fullName: `${users.firstName} ${users.lastName}`
    }
  )
}

const getUserNames = (users = [{}]) => {
  return users.map(item => (`${users.firstName} ${users.lastName}`).join(', '))
}

module.exports = Object.freeze(
  {
    generateUserList,
    getUserNames
  }
)
