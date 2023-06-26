const slider = [
    {
      sliderCity: 'Rostov-on-Don\nLCD admiral',
      sliderArea: '81 m2',
      sliderTime: '3,5 months',
      img: './img/home-top.jpg',
      headColorRight: '#E3B873',
      headColorCenter: 'rgba(255, 255, 255, 0.3)',
      headColorLeft: 'rgba(255, 255, 255, 0.3)',
      headBorderRight: '0px 1px solid rgba(227, 184, 115, 1)',
      headBorderCenter: 'none',
      headBorderLeft: 'none',
      dotColorLeft: '1',
      dotColorCenter: '0.3',
      dotColorRight: '0.3'
    },
    {
      sliderCity: 'Sochi\nThieves',
      sliderArea: '105 m2',
      sliderTime: '4 months',
      img: './img/home-top2.jpg',
      headColorRight: 'rgba(255, 255, 255, 0.3)',
      headColorCenter: '#E3B873',
      headColorLeft: 'rgba(255, 255, 255, 0.3)',
      headBorderRight: 'none',
      headBorderCenter: '0px 1px solid rgba(227, 184, 115, 1)',
      headBorderLeft: 'none',
      dotColorLeft: '0.3',
      dotColorCenter: '1',
      dotColorRight: '0.3'
    },
    {
      sliderCity: 'Rostov-on-Don\nPatriotic',
      sliderArea: '93 m2',
      sliderTime: '3 months',
      img: './img/home-top3.jpg',
      headColorRight: 'rgba(255, 255, 255, 0.3)',
      headColorCenter: 'rgba(255, 255, 255, 0.3)',
      headColorLeft: '#E3B873',
      headBorderRight: 'none',
      headBorderCenter: 'none',
      headBorderLeft: '0px 1px solid rgba(227, 184, 115, 1)',
      dotColorLeft: '0.3',
      dotColorCenter: '0.3',
      dotColorRight: '1'
    }
  ]
  
  const sliderCity = document.querySelector('.sliderCity')
  const sliderArea = document.querySelector('.sliderArea')
  const sliderTime = document.querySelector('.sliderTime')
  const img = document.querySelector('.image')
  const headColorRight = document.querySelector('.SliderRostovAdmiral')
  const headColorCenter = document.querySelector('.SliderSochi')
  const headColorLeft = document.querySelector('.SliderRostovPatriotic')
  const headBorderRight = document.querySelector('.SliderRostovAdmiral')
  const headBorderCenter = document.querySelector('.SliderSochi')
  const headBorderLeft = document.querySelector('.SliderRostovPatriotic')
  const dotColorLeft = document.querySelector('.leftdot')
  const dotColorCenter = document.querySelector('.centerdot')
  const dotColorRight = document.querySelector('.rightdot')
  
  const setImage = (index) => {
    sliderCity.innerText = slider[index].sliderCity
    headColorRight.style.color = slider[index].headColorRight
    headColorCenter.style.color = slider[index].headColorCenter
    headColorLeft.style.color = slider[index].headColorLeft
    headBorderLeft.style.border = slider[index].headBorderLeft
    headBorderCenter.style.border = slider[index].headBorderCenter
    headBorderRight.style.border = slider[index].headBorderRight
    dotColorLeft.style.opacity = slider[index].dotColorLeft
    dotColorCenter.style.opacity = slider[index].dotColorCenter
    dotColorRight.style.opacity = slider[index].dotColorRight
    img.style.backgroundImage = `url(${slider[index].img})`
    {
      sliderArea.innerText = slider[index].sliderArea
      headColorRight.style.color = slider[index].headColorRight
      headColorCenter.style.color = slider[index].headColorCenter
      headColorLeft.style.color = slider[index].headColorLeft
      headBorderLeft.style.border = slider[index].headBorderLeft
      headBorderCenter.style.border = slider[index].headBorderCenter
      headBorderRight.style.border = slider[index].headBorderRight
      dotColorLeft.style.opacity = slider[index].dotColorLeft
      dotColorCenter.style.opacity = slider[index].dotColorCenter
      dotColorRight.style.opacity = slider[index].dotColorRight
    img.style.backgroundImage = `url(${slider[index].img})`
    {
      sliderTime.innerText = slider[index].sliderTime
      headColorRight.style.color = slider[index].headColorRight
      headColorCenter.style.color = slider[index].headColorCenter
      headColorLeft.style.color = slider[index].headColorLeft
      headBorderLeft.style.border = slider[index].headBorderLeft
      headBorderCenter.style.border = slider[index].headBorderCenter
      headBorderRight.style.border = slider[index].headBorderRight
      dotColorLeft.style.opacity = slider[index].dotColorLeft
      dotColorCenter.style.opacity = slider[index].dotColorCenter
      dotColorRight.style.opacity = slider[index].dotColorRight
    img.style.backgroundImage = `url(${slider[index].img})`
    }}
  }
  let currentIndex = 0

//Эвент для стрелок
  const prev = document.querySelector('.prev')
  const next = document.querySelector('.next')

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

  // Эвент для точек  
  const leftdot = document.querySelector('.leftdot')
  const centerdot = document.querySelector('.centerdot')
  const rightdot = document.querySelector('.rightdot')

  leftdot.addEventListener('click', () => {
    setImage(currentIndex = 0);
    currentIndex += 0;
  })
  centerdot.addEventListener('click', () => {
    setImage(currentIndex = 1);
    currentIndex += 1;
  })
  rightdot.addEventListener('click', () => {
    setImage(currentIndex = 2);
    currentIndex += 2;
  })

  //Эвент для Head
  const sliderRostovAdmiral = document.querySelector('.SliderRostovAdmiral')
  const sliderSochi = document.querySelector('.SliderSochi')
  const sliderRostovPatriotic = document.querySelector('.SliderRostovPatriotic')

  sliderRostovAdmiral.addEventListener('click', () => {
    setImage(currentIndex = 0);
    currentIndex += 0;
  })
  sliderSochi.addEventListener('click', () => {
    setImage(currentIndex = 1);
    currentIndex += 1;
  })
  sliderRostovPatriotic.addEventListener('click', () => {
    setImage(currentIndex = 2);
    currentIndex += 2;
  })
