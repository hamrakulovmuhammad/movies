import {
   movies
} from "./db.js";

let ul = document.querySelector('.promo__interactive-list')
let bac = document.querySelector('.promo__bg')
let gen = document.querySelector('.promo__genre')
let title = document.querySelector('.promo__title')
let text = document.querySelector('.promo__descr')
let IMBd = document.querySelector('.IMBd')
let kinopoisk = document.querySelector('.kinopoisk')
let searchInput = document.querySelector('#searchInput')
let genersUL = document.querySelector('.promo__menu-list ul')
let remove = document.querySelector('.remove')
let info = document.querySelector('.info')
let modal = document.querySelector('.modal_bg')
let information = document.querySelector('.information')

let close = document.querySelector('.close')
let img = document.querySelector('.img_bg')
let big = document.querySelector('.big')
let hoh = document.querySelector('.hoh')
let oho = document.querySelector('.oho')
let one = document.querySelector('#one')
let two = document.querySelector('#two')
let onee = document.querySelector('#onee')
let year = document.querySelector('#year')
let rated = document.querySelector('#rated')
let released = document.querySelector('#released')
let runtime = document.querySelector('#runtime')
let genre = document.querySelector('#genre')
let director = document.querySelector('#director')
let writer = document.querySelector('#writer')
let actors = document.querySelector('#actors')
let plot = document.querySelector('#plot')
let language = document.querySelector('#language')
let country = document.querySelector('#country')
let award = document.querySelector('#award')

let genres = ['All', ...new Set(movies.map(item => item.Genre))]


searchInput.oninput = () => {
   let query = searchInput.value.toLowerCase().trim()

   let filtered = movies.filter(item => {
      let title = item.Title.toLowerCase()
      if (title.includes(query)) {
         return item
      }
   })
   reload(filtered)
}

let filterfordel = [...movies]
reload(filterfordel.sort((atitel, btitel) => atitel.Title > btitel.Title ? 1 : -1))

function reload(data) {
   ul.innerHTML = ""

   setMovieData(data[0])

   for (let item of data) {
      let li = document.createElement('li')
      let deletee = document.createElement('div')

      li.classList.add('promo__interactive-item')
      deletee.classList.add('delete')

      li.innerHTML = item.Title

      li.append(deletee)
      ul.append(li)

      information.append(big)
      big.append(oho, hoh)
      oho.append(img, one, two,)
      hoh.append(title, year, rated, released, runtime, genre, director, writer, actors, plot, language, country, award, close)




      close.onclick = () => {
         information.style.display = 'none'
      }
      deletee.onclick = () => {

         modal.style.display = 'block'
      }

      li.onclick = () => {
         setMovieData(item)
      }
      remove.onclick = () => {
         modal.style.display = 'none'
         filterfordel = filterfordel.filter(el => el.ID !== item.ID)
         reload(filterfordel)
      }
      info.onclick = () => {
         information.style.display = 'block'
         modal.style.display = 'none'
         img.style.backgroundImage = `url(${item.Poster})`
         one.innerHTML = `Source: ${item.Ratings[0].Source}`
         two.innerHTML = `Value: ${item.Ratings[0].Value}`
         title.innerHTML = `Title: ${item.Title}`
         year.innerHTML = `Year: ${item.Year}`
         rated.innerHTML = `Rated: ${item.Rated}`
         released.innerHTML = `Released: ${item.Released}`
         runtime.innerHTML = `Runtime: ${item.Runtime}`
         genre.innerHTML = `Genre: ${item.Genre}`
         director.innerHTML = `Director: ${item.Director}`
         writer.innerHTML = `Writer: ${item.Writer}`
         actors.innerHTML = `Actors: ${item.Actors}`
         plot.innerHTML = `Plot: ${item.Plot}`
         language.innerHTML = `Language: ${item.Language}`
         country.innerHTML = `Country: ${item.Country}`
         award.innerHTML = `Award: ${item.Awards}`
         img
      }


   }
}


function setMovieData(item) {
   bac.style.backgroundImage = `url("${item.Poster}")`
   gen.innerHTML = item.Genre
   title.innerHTML = item.Title
   text.innerHTML = item.Plot
   IMBd.innerHTML = `IMDb: ${item.imdbRating}`
   kinopoisk.innerHTML = `Кинопоиск: ${item.Metascore}`
}
let genIDX = 0

function reload_genres(arr) {
   for (let item of arr) {
      let li = document.createElement('li')
      let a = document.createElement('a')
      a.classList.add('promo__menu-item')

      if (arr.indexOf(item) === genIDX) {
         a.classList.add('promo__menu-item_active')
      }

      a.gref = "#"
      a.innerHTML = item


      genersUL.append(li)
      li.append(a)

      a.onclick = () => {

      }
   }

}

reload_genres(genres, genersUL)