// Ticket Pricing: Write a program that prompts the user to enter their age and then determines the price of a movie ticket based on the following criteria:

// Children (age <= 12): $10
// Teenagers (age 13-17): $15
// Adults (age >= 18): $20

const test = 18

const getPrice = (age) => {
  let cost = ''
  if (age <= 12) cost = 10
  if (age > 12 && age < 18) cost = 15
  if (age >= 18) cost = 20
  return `$${cost}`
}

console.log(getPrice(test))
