const getImages = (filename, additions = {}) =>
  Object.assign(additions, {
    default: `img/${filename}.jpg`,
    default2x: `img/${filename}@2x.jpg`,
    webp: `img/${filename}.webp`,
    webp2x: `img/${filename}@2x.webp`,
    webpMobile: `img/${filename}-mobile.webp`,
    webpMobile2x: `img/${filename}-mobile@2x.webp`,
    webpTablet: `img/${filename}-tablet.webp`,
    webpTablet2x: `img/${filename}-tablet@2x.webp`,
  });

export default {
  promo: {
    content: `<h1>Круизы в Антарктику</h1>
      <p>Волшебный мир айсбергов и пингвинов</p>`,
    image: getImages('background-header'),
  },
  about: {
    content: `<h2>Путешествие на край Земли</h2>
      <p>Это волшебное путешествие поможет вам познакомиться поближе с удивительным миром Антарктики.
      Наш круизный лайнер отвезет вас на край Земли, где вы сможете увидеть: ледяные айсберги,
      несколько видов пингвинов, китов, морских котиков и многое другое.</p>`,
    image: getImages('about', {
      alt: 'Пингвины на снегу.',
    }),
  },
  advantages: {
    heading: 'Преимущества',
    list: [
      {
        title: 'ship',
        content: `<h3>Небольшой круизный&nbsp;лайнер</h3>
          <p>
            Круизный лайнер, рассчитанный всего лишь на 300 гостей, поможет избежать шума и очередей и даст возможность
            насладиться видами и природой.
          </p>`,
      },
      {
        title: 'included',
        content: `<h3>Система все&nbsp;включено</h3>
          <p>
            Все наши круизы работают по системе “Все Включено”. Великолепные блюда и безлимитный бар доступны для вас 24
            часа.
          </p>`,
      },
      {
        title: 'zodiac',
        content: `<h3>Экскурсионные туры&nbsp;на Zodiac</h3>
          <p>
            Экскурсионные туры к берегам Антарктиды совершаются на оборудованных лодках типа Zodiack c опытными
            экскурсоводами.
          </p>`,
      },
    ],
    image: getImages('advantages'),
  },
};
