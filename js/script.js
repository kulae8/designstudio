const slider = [
    {
      sliderCity: 'Rostov-on-Don\nLCD admiral',
      sliderArea: '81 m2',
      sliderTime: '3,5 months',
      img: './img/home-top.jpg',
    },
    {
      sliderCity: 'Sochi\nThieves',
      sliderArea: '105 m2',
      sliderTime: '4 months',
      img: './img/home-top2.jpg'
    },
    {
      sliderCity: 'Rostov-on-Don\nPatriotic',
      sliderArea: '93 m2',
      sliderTime: '3 months',
      img: './img/home-top3.jpg'
    }
  ]
  
  const sliderCity = document.querySelector('.sliderCity')
  const sliderArea = document.querySelector('.sliderArea')
  const sliderTime = document.querySelector('.sliderTime')



  const img = document.querySelector('.image')
  
  const setImage = (index) => {
    sliderCity.innerText = slider[index].sliderCity
    img.style.backgroundImage = `url(${slider[index].img})`
    {
      sliderArea.innerText = slider[index].sliderArea
    img.style.backgroundImage = `url(${slider[index].img})`
    {
      sliderTime.innerText = slider[index].sliderTime
    img.style.backgroundImage = `url(${slider[index].img})`
    }}
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