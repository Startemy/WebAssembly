
const videoCard = (el) => {
  const card = document.createElement('div')
  card.classList.add('card')
  const container = document.createElement('div')
  const video = document.createElement('video')
  video.controls = true
  video.src = el.file
  container.append(video)
  card.append(container)
  const desc = document.createElement('p')
  desc.append(el.title)
  card.append(desc)

  const divPic = document.querySelector('.picture')
  divPic.appendChild(card)
}

const audioCard = (el) => {
  const card = document.createElement('div')
  card.classList.add('card')
  const container = document.createElement('div')
  const audi = document.createElement('audio')
  audi.controls = true
  audi.src = el.file
  container.append(audi)
  card.append(container)
  const desc = document.createElement('p')
  desc.append(el.title)
  card.append(desc)

  const divPic = document.querySelector('.picture')
  divPic.appendChild(card)
}

const pictureCard = (el) => {
  const card = document.createElement('div')
  card.classList.add('card')
  const container = document.createElement('div')
  const img = document.createElement('img')
  img.src = el.file
  container.append(img)
  card.append(container)
  const desc = document.createElement('p')
  desc.append(el.title)
  card.append(desc)

  const divPic = document.querySelector('.picture')
  divPic.appendChild(card)
}

export const card = (content) => {
  content.type.forEach((el) => {
    if (el.picture) {
      el.picture.forEach((picture) => {
        pictureCard(picture)
      })

    } else if (el.music) {
      el.music.forEach((music) => {
        audioCard(music)
      })
    } else if (el.video) {
      el.video.forEach((video) => {
        videoCard(video)
      })
    } else {
      console.log('Ошибка')
    }
  });

}