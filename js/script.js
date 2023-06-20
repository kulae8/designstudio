const slider = [
    {
      sliderCity: 'Rostov-on-Don\nLCD admiral',
      img: './img/home-top.jpg'
    },
    {
      sliderCity: 'Sochi\nThieves',
      img: './img/home-top2.jpg'
    },
    {
      sliderCity: 'Rostov-on-Don\nPatriotic',
      img: './img/home-top3.jpg'
    }
  ]
  
  const sliderCity = document.querySelector('.sliderCity')
  const img = document.querySelector('.image')
  
  const setImage = (index) => {
    sliderCity.innerText = slider[index].sliderCity
    img.style.backgroundImage = `url(${slider[index].img})`
  }
  
  const prev = document.querySelector('.prev')
  const next = document.querySelector('.next')
  let currentIndex = 0
  
  prev.addEventListener('click', () => {
    if (currentIndex >= 1) 
    {setImage(currentIndex - 1);
    currentIndex -= 1;}
    else {
        setImage(currentIndex + 2);
        currentIndex += 2;}
    })
  next.addEventListener('click', () => {
    if (currentIndex < 2) 
    {setImage(currentIndex + 1);
    currentIndex += 1;}
    else {
        setImage(currentIndex - 2);
        currentIndex -= 2;}
    })