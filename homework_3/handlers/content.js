import picture1 from '../assets/images/1.jpg'
import picture2 from '../assets/images/2.jpg'
import picture3 from '../assets/images/3.jpg'
import picture4 from '../assets/images/4.gif'
import file1 from '../assets/audio/1.mp3'
import file2 from '../assets/audio/2.mp3'
import file3 from '../assets/audio/3.mp3'
import video1 from '../assets/video/1.mp4'
import video2 from '../assets/video/2.mp4'


export const content = [
  {
    type: [
      {
        picture: [
          {
            title: "Водяная мельница",
            file: picture1
          },
          {
            title: "Холмы",
            file: picture2
          },
          {
            title: "Крысный дом",
            file: picture3
          },
          {
            title: "Котюня",
            file: picture4
          },
        ]
      },
      {
        music: [
          {
            title: "Трек 1",
            file: file1
          },
          {
            title: "Трек 2",
            file: file2
          },
          {
            title: "Трек 3",
            file: file3
          },
        ]
      },
      {
        video: [
          {
            title: "Never gonna give you",
            file: video1
          },
          {
            title: "Океан",
            file: video2
          },
        ]
      }
    ]
  }
]
