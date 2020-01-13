export async function findDoctors(userInput) {

  let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${userInput}&location=37.773%2C-122.413%2C100&skip=0&limit=10&user_key=${process.env.API_KEY}`;
  let response = await fetch(url);
  let jsonifiedResponse = await response.json();
  return jsonifiedResponse;
  }
  