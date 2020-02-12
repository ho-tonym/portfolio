import donut from "../images/donut.jpg"
import pokedex from "../images/pokedex.jpg"
import sort from "../images/sort.jpg"

import pic1Donut from "../images/donut/d1.png"
import pic2Donut from "../images/donut/d2.png"

import pic1Sort from "../images/sort/s1.png"
import pic2Sort from "../images/sort/s2.png"
import pic3Sort from "../images/sort/s3.png"
import pic4Sort from "../images/sort/s4.png"

import pic1Poke from "../images/pokedex/p1.png"
import pic2Poke from "../images/pokedex/p2.png"
import pic3Poke from "../images/pokedex/p3.png"
import pic4Poke from "../images/pokedex/p4.png"
import pic5Poke from "../images/pokedex/p5.png"
import pic6Poke from "../images/pokedex/p6.png"

export default
[
  {
    nameArray: ["sort", "visualizer."],
    name: "visualizer.",
    backgroundColor : "#A7C6C1",
    alt: "visualizer pic",
    src: sort,
    link: "projects/visualizer",
    firstImages:[
      {
        alt: "sorting image 1",
        pic: pic3Sort
      },
      {
        alt: "sorting image 2",
        pic: pic4Sort
      }
    ],
    secondImages:[
      {
        alt: "sorting image 3",
        pic: pic1Sort
      },
      {
        alt: "sorting image 4",
        pic: pic2Sort
      }
    ],
    colorsArray: [["#fff", "#2f2f2f", "#017aff", "#636363", "#ff9f38", "#ff6e8d"]],
    description: "This app was a way for me to learn more about sorting algorithms and help others understand the differences between some of the more popular ones. Feel free to play around with it!",
    githubLink:"https://github.com/ho-tonym/sorting-visualizer",
    hostLink:"https://ho-tonym.github.io/sorting-visualizer/"
  },
  {
    nameArray: ["pokedex."],
    name: "pokedex.",
    backgroundColor : "#D0BE9D",
    alt: "pokemon pic",
    src: pokedex,
    link: "projects/pokedex",
    firstImages:[
      {
        alt: "pokedex image 1",
        pic: pic1Poke
      },
      {
        alt: "pokedex image 2",
        pic: pic2Poke
      },
      {
        alt: "pokedex image 3",
        pic: pic3Poke
      }
    ],
    secondImages:[
      {
        alt: "pokedex image 4",
        pic: pic4Poke
      },
      {
        alt: "pokedex image 5",
        pic: pic5Poke
      },
      {
        alt: "pokedex image 6",
        pic: pic6Poke
      }
    ],
    colorsArray: [
      ["#fff", "#fafafa", "#f4f4f4", "#dddddd"],
      ["#707070", "#9e9e9e", "#696969", "#444444"],
      ["#9acff7", "#8accff", "#55acee", "#6FC6FF", "#3C93D5"],
      ["#11bd0e","#e04b4b"]
    ],
    description: "The purpose of this app is for convenient comparisons of your pokemon against certain matchups to determine your best lineup. Specifically for Pokemon Go.",
    githubLink:"https://github.com/ho-tonym/pokedex",
    hostLink:"https://sheltered-taiga-80254.herokuapp.com/"
  },
  {
    nameArray: ["donuts."],
    name: "donuts.",
    backgroundColor : "#E0AFAF",
    alt: "donut pic",
    src: donut,
    link: "projects/donuts",
    firstImages:[
      {
        alt: "donut image 1",
        pic: pic1Donut
      },
      {
        alt: "donut image 2",
        pic: pic2Donut
      }
    ],
    secondImages:[
      {
        alt: "donut image 3",
        pic: pic1Donut
      },
      {
        alt: "donut image 4",
        pic: pic2Donut
      }
    ],
    colorsArray: [
      ["#fff", "#eee", "#ddd"],
      ["#B0B0B0", "#666", "#282936", "#333"],
      ["#ED6B74", "#37dacb", "#a78be8"],
      ["#00d2ff", "#3a7bd5"]
    ],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    githubLink:"https://github.com/ho-tonym/donutproductpage",
    hostLink:"https://ho-tonym.github.io/donutproductpage/"
  }
]
