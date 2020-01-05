//day2.js

let challenge = '30 Days Of JavaScript '
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(3,7))
console.log(challenge.substr(3,4))
console.log(challenge.substr(3))

let sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.substr(31,23))
console.log(sentence.includes('conjunction'))
console.log(sentence.split(' '))

console.log(challenge.split(' '))

let techCompanies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(techCompanies.split(','))

console.log(challenge.replace('JavaScript', 'Python'))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt(challenge.indexOf('J')))
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))

console.log(sentence.indexOf('because'))
console.log(sentence.lastIndexOf('because'))
console.log(sentence.search('because'))

console.log(challenge.trim())
console.log(challenge.startsWith(30))
console.log(challenge.endsWith('JavaScript '))

console.log(sentence.match(/because/gi).length)

console.log('30 Days Of'.concat(' Javascript'))
console.log(challenge.repeat(2))

let loveString = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(loveString.match(/love/gi).length)

let calcString = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let moneyArray = calcString.match(/(\d+)/gi)
console.log(moneyArray)
console.log(Number(moneyArray[0])*12 + Number(moneyArray[1]) + Number(moneyArray[2])*12)

let anotherSentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is also $the $result of &love& of tea&ching'
console.log(anotherSentence.replace(/%|@|&|$|\$|;|#/gi, ''))
console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help to one another.')
console.log('\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."')
