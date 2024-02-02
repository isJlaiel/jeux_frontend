const clues = ["The woman wearing the White shirt is next to the woman who likes Lombardian wines.",
  "Ms Miller is somewhere between Ms Davis and Ms Brown, in that order.",
  "The youngest woman is at the third position.",
  "The 45-year-old woman is somewhere to the right of the woman wearing the Red shirt.",
  "The woman who likes Chilean wines also likes Farfalle.",
  "At the first position is the woman that likes Argentine wines.",
  "Andrea is exactly to the right of the 35-year-old woman.",
  "The woman wearing the Blue shirt is somewhere between Ms Davis and Holly, in that order.",
  "Victoria is next to Leslie.",
  "The woman wearing the Red shirt is somewhere to the left of the woman who likes Australian wines.",
  "Ms Wilson is next to the 30-year-old woman.",
  "Leslie is exactly to the left of the 30-year-old woman",
  "Holly is somewhere to the right of the woman wearing the Red shirt",
  "Ms Brown is exactly to the left of Julie.",
  "The youngest woman likes Penne.",
  "Ms Wilson is wearing the White shirt.",
  "The woman who likes Lasagne is somewhere between the woman who likes Italian wines and the woman who likes Spaghetti, in that order.",
  "At the second position is the woman wearing the Blue shirt.",
  "The 40-year-old woman likes Lasagne.",
  "Ms Lopes is at the fifth position.",
  "The woman that likes Australian wines is somewhere between Victoria and the woman who likes wines from Bordeaux, in that order.",
  "The woman wearing the Yellow shirt is exactly to the left of the 35-year-old woman.",
]
const cols = ["Shirt", "Name", "Surname", "Pasta", "Wine", "Age"];
const valuesShirt = ["blue", "green", "red", "white", "yellow"];
const valuesName = ["Andrea", "Holly", "Julie", "Leslie", "Victoria"];
const valuesSurname = ["Brown", "Davis", "Lopes", "Miller", "Wilson"];
const valuesPasta = ["farfalle", "lasagne", "penne", "spaghetti", "ravioli"];
const valuesWine = ["Cabernet", "Merlot", "Pinot Noir", "Sangiovese", "Syrah"];
const valuesAge = ["30 years", "35 years", "40 years", "45 years", "50 years"];
const womenCount = 5;
const intro = "Pasta and Wine Zebra Puzzle Five friends are side by side planning a dinner together. Each one enjoys different kinds of pasta and wines from different countries. Figure out which pasta Holly likes the most"

export { clues, intro, womenCount, valuesAge, valuesName, valuesSurname, valuesPasta, valuesWine, cols, valuesShirt };