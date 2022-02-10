var zoom = document.getElementById('zoom')
      var image = document.getElementById('image')
          mousedown = false
          pointX=0
          pointY=0
          scale = 1
          maxScale = 4
          minScale = 1
      var zoomInBtn = document.getElementById('zoom-in')
      var zoomOutBtn = document.getElementById('zoom-out')
      var leftArrow = document.getElementById('leftarrow')
      var rightArrow = document.getElementById('rightarrow')
      var currentIndex = document.getElementById('current-index')
      var totalImgs = document.getElementById('total-imgs')
      var images = [
        'images/bird.jpg',
        'images/animal.jpg',
        'images/draw.jpg',
        'images/pc.jpg',
      ]
      var imgIndex  = 0
      var indexMax = images.length - 1
      currentIndex.innerText = 1
      totalImgs.innerText = images.length
      var indexMin = 0
      // set transform and transformorigin properties
      function setTransform(){
        if(scale >= maxScale){
          scale = maxScale
        }
        if(scale <= minScale ){
          scale = minScale
        }
        image.style.transform=`scale(${scale})`
        image.style.transformOrigin = `${pointX}% ${pointY}%`
      }

      // onmousedown
      zoom.addEventListener('mousedown',(e)=>{
        console.log('down')
        mousedown = true
      })

      // onmouse move
      image.addEventListener('mousemove',(e)=>{
          pointX = (e.offsetX / image.offsetWidth * 100)
          pointY = (e.offsetY / image.offsetHeight * 100)          
      })

      // on mouse wheel
      image.addEventListener('wheel',(e)=>{
        var delta = e.deltaY
        if(delta < 0 ){
          scale +=  0.8
        }else{
          scale -= 0.8
        }
        setTransform()
      })
      
      // zoom-in btn click event handler
      zoomInBtn.addEventListener('click',(e)=>{
        console.log('click')
        scale += 0.8
        pointX = 50
        pointY = 50
        setTransform()
      })
      // zoom-out btn click event handler
      zoomOutBtn.addEventListener('click',(e)=>{
        scale -= 0.8
        pointX = 50
        pointY = 50
        setTransform()
      })
      // previous image
      leftArrow.addEventListener('click',(e)=>{
        if(imgIndex > indexMin){
          imgIndex -= 1
          let imgsrc = images.filter((img,index)=>( index == imgIndex  ))
          currentIndex.innerText = imgIndex + 1 // we add one because array starts from 0
          image.src = imgsrc[0]
        }
       
      })

      // next image
      rightArrow.addEventListener('click',(e)=>{
        if(imgIndex < indexMax ){
          imgIndex += 1
          let imgsrc = images.filter((img,index)=>( index == imgIndex  ))
          currentIndex.innerText = imgIndex + 1
          image.src = imgsrc[0]
        }
       
      })
