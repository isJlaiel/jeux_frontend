
const mainCols = ["Film", "Day", "Time"];
const cols = [
  "Minutes88", "Donnie Brasco","Scarecrow", "Scarface", "The Recruit",
  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
  "7:35 pm", "7:40 pm", "8:20 pm", "8:30 pm", "8:45 pm"
]
const rows = [
  "Jessica", "Laurie", "Mark", "Marry", "Sally",
  "7:35 pm", "7:40 pm", "8:20 pm", "8:30 pm", "8:45 pm",
  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",

]

const clues =[
  "1. Of the 20-hundreds releases, neither of which was Jessica's choice, one opened the week and one closed the week.",
  "2. The latest of the 19-hundreds releases was shown at 30 minutes past the hour.",
  "3. The releases shown before 8:00 pm were on consecutive days, as were the releases shown after 8:00 pm.",
  "4. One of the men and one of the women had a showing before 8:00 pm, but neither was mid-week.",
  "5. Mark, whose choice was Scarecrow, had a showing at a time of one hour and five minutes after that of Scarface.",
  "6. Neither Miss Farmer nor Miss Peters had a showing on an even-numbered day", 
  "7. 88 Minutes showed at a time both 40 minutes to the hour and 40 minutes after the Thursday showing."
]
const mainRows = ["Name","Time","Day"]
const puzzleName = "Movie Buffs Associated - Al Pacino  ";
const puzzleType = " Logic Puzzle";
const intro = "A five-member panel, determined by a ballot of members of the local Movie Buffs Associated at the Annual General Meeting, select a series of movies, starring a particular actor/actress, to be shown in the Municipal Offices function room each evening from Monday to Friday. The panel of Sally Boyden, Mark Thomson, Jessica Farmer, Laurie Davison and Mary Peters were re-elected for 2015. \n Last week their choice actor/actress was Al Pacino, and the films chosen - one per member - were Scarface (1983), Scarecrow (1973), Donnie Brasco (1997), 88 Minutes (2007), and The Recruit (2003). The films chosen were not respective, and neither were they shown in that order, nor in the order in which they were released. Showing time differed each evening. From this information and the following clues, for each member, can you determine who chose which film, the day on which it was shown, and at what time?"



export { mainCols, cols , rows , clues , mainRows,  puzzleName , puzzleType , intro};
