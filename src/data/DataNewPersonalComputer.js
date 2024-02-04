
const mainCols = ["Processor", "HardDisk", "Price"];
const cols = [
  "2.0 MHz", "2.3 MHz", "2.5 MHz", "2.7 MHz", "3.1 MHz",
  "250 Gb", "320 Gb", "500 Gb", "750 Gb", "1024 Gb",
  "$ 699", "$ 999", "$ 1149", "$ 1349", "$ 1649"
]
const rows = [
  "13.0", "15.0", "15.6", "21.5", "27.0",
  "$ 699", "$ 999", "$ 1149", "$ 1349", "$ 1649",
  "250 Gb", "320 Gb", "500 Gb", "750 Gb", "1024 Gb",
]
const clues = [
  "1. Andrew bought the computer which was three hundred Euros less than the PC which has a processor that is 0.4 MHz more powerful than the one which has a 21.5' screen.",
  "2. The five computers are: the one chosen by Andrew (which doesn't have the 27' screen), the one which has the 2.0-MHz processor, the computer that has a 250 GB HD, the one which has a price of 1,149 Euros and the computer (which doesn't have the 15' screen) that has the HD bigger than the one chosen by Andrew but smaller than that the one which has the 2.7 MHz processor.",
  "3. The computer with the 320 Gb HD has either the 2.0 or the 2.3 MHz processor.The processor of the computer which has the 15' screen is more powerful than the one in the computer that costs 999 euros but less powerful than the processor that is included in the 1,349 Euros computer.",
  "4. The computer that has the 27' screen doesn't have the 320 Gb hard drive. The 500 GB HD is included in the computer that has a more powerful processor and a larger size screen than the one which costs 699 euros (which doesn't include the 320 Gb HD)."
]

const mainRows = ["Monitor", "Price ", "HardDisk"]

const puzzleName = "A New Personal Computer"
const puzzleType = "  Logic Puzzle"
const intro = "Andrew has just bought one of these five different models of computers. Each computer has a different screen size, processor power, hard drive capacity and price. With the help of the clues, could you figure out which computer has been chosen by Andrew?";

export {mainCols ,mainRows ,cols, rows , clues , puzzleType , puzzleName ,intro}