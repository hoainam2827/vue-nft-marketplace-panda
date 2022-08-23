// import BigNumber from 'bignumber.js'
// import moment from 'moment'
// import { DECIMAL_PART, TYPE_TOKEN } from './constants'
// import LocalStorage from './storage'
// import Request from './request'

// const zeroPad = (value = 0, size = 8) => {
//   let s = `000000000${value}`
//   return s.substr(s.length - size)
// }

const formatAmount = (value = 0) => {
  if (!(+value)) return 0

  const number = `${value}`
  const x = number.split('.')
  let x1 = x[0]
  const x2 = x.length > 1 ? `.${x[1]}` : ''
  const rgx = /(\d+)(\d{3})/
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2')
  }
  return (x1 + x2)
}

// const formatMoney = (value = 0) => {
//   if (!(+value)) return 0

//   const number = `${value}`
//   const x = number.split('.')
//   let x1 = x[0]

//   if (x1?.length > 9) return `${formatAmount(x1.substring(0, x1?.length - 9))}.${x1.substr(x1?.length - 9, 1)}B`

//   if (x1?.length > 6) return `${formatAmount(x1.substring(0, x1?.length - 6))}.${x1.substr(x1?.length - 6, 1)}M`

//   const x2 = x.length > 1 ? `.${x[1]}` : ''
//   const rgx = /(\d+)(\d{3})/
//   while (rgx.test(x1)) {
//     x1 = x1.replace(rgx, '$1' + ',' + '$2')
//   }

//   return (x1 + x2)
// }

// const convertArrayToString = (array, symbol = ' ') => array.filter((item) => !!item).join(symbol)

// const getBase64File = (file) => new Promise((resolve, reject) => {
//   const reader = new FileReader()
//   reader.readAsDataURL(file)
//   reader.onload = () => resolve(reader.result)
//   reader.onerror = (error) => reject(error)
// })

// const getGender = (value) => {
//   if (value) return 'Male'
//   return 'Female'
// }

// const formatHash = (value) => (value ? `${value.slice(0, 5)}...${value.slice(value.length - 5, value.length)}` : '')

// const parsePrice = (value, decimal) => {
//   const pow = new BigNumber(10).pow(18)
//   return new BigNumber(value || 0).dividedBy(pow).dp(decimal || DECIMAL_PART).toString()
// }

// const rounding = (value = 0, decimal = 3) => new BigNumber(value).dp(decimal).toString()

// const handleLogout = () => {
//   LocalStorage.clear()
//   Request.removeAccessToken()
//   window.location.pathname = '/login'
// }

const formatValueSearch = (data) => {
  Object.keys(data).forEach((x) => {
    if (data[x]?.length === 0) data[x] = ''

    if (data[x]?.length && typeof data[x] !== 'string') data[x] = data[x].join(',')
  })
  return data
}

// const getCurrentStep = (value) => Object.keys(TYPE_TOKEN).find((e) => TYPE_TOKEN[e] === value)

// const getName = (name, total) => (+total > 1 ? `${name}s` : name)

// const getPriceUsd = (total = 0, price = 1) => new BigNumber(total).times(price).dp(DECIMAL_PART).toString()

// const getBetweenTwoDate = (value) => {
//   const currentDay = new Date()
//   const prevTime = new Date(value)
//   let diff = (currentDay.getTime() - prevTime.getTime()) / (1000 * 60 * 60 * 24)
//   let betweenTwoDate
//   let string = ''

//   // eslint-disable-next-line radix
//   switch (Math.floor(diff)) {
//     case 0:
//       if (diff * 24 >= 1) {
//         string = 'hours ago'
//         // eslint-disable-next-line radix
//         betweenTwoDate = `${parseInt((diff * 24).toString())}`
//         return {
//           string,
//           betweenTwoDate
//         }
//       }

//       string = 'minutes ago'
//       // eslint-disable-next-line radix
//       betweenTwoDate = `${parseInt((diff * 24 * 60).toString())}`
//       break

//     case 1:
//       string = 'day ago'
//       betweenTwoDate = '1'
//       break

//     case 2:
//       string = 'day ago'
//       betweenTwoDate = '2'
//       break

//     default:
//       string = ''
//       betweenTwoDate = moment(value).format('YYYY/MM/DD')
//       break
//   }

//   return {
//     string,
//     betweenTwoDate
//   }
// }

// const getTime = (time) => {
//   const result = getBetweenTwoDate(time)
//   return result?.string ? `${result?.betweenTwoDate} ${result.string}` : result?.betweenTwoDate
// }

const getRarity = (value = '') => `${value?.substr(0, 1)}${value?.replaceAll('_', ' ')?.substr(1)?.toLocaleLowerCase()}`

export {
  // zeroPad,
  formatAmount,
  // formatMoney,
  // convertArrayToString,
  // getBase64File,
  // getGender,
  // formatHash,
  // parsePrice,
  // rounding,
  // handleLogout,
  formatValueSearch,
  // getCurrentStep,
  // getName,
  // getPriceUsd,
  // getTime,
  getRarity,
}
