function slider1(){
const slider1 = document.querySelector('.slider1')
const videos = slider1.getElementsByTagName('video')
let length=0
const transformslider= () => {
    if(length==3)
    { 
    length = -1
    }
    document.querySelector('.active').classList.remove('active')
    length++
    const width=videos[0].offsetWidth
    slider1.style.transform = `translateX(${width * -length}px)`
    document.querySelector('.is1'+ length).classList.add('active')
}
let changeslider=setInterval(transformslider,5000)

document.querySelector('.item.is10').addEventListener('click', ()=>{
    clearInterval(changeslider)
    length=-1
    transformslider()
    changeslider=setInterval(transformslider,4000)
})
document.querySelector('.item.is11').addEventListener('click', ()=>{
    clearInterval(changeslider)
    length=0
    transformslider()
    changeslider=setInterval(transformslider,4000) 
})
document.querySelector('.item.is12').addEventListener('click', ()=>{
    clearInterval(changeslider)
    length=1
    transformslider()
    changeslider=setInterval(transformslider,4000)
})
document.querySelector('.item.is13').addEventListener('click', ()=>{
    clearInterval(changeslider)
    length=2
    transformslider()
    changeslider=setInterval(transformslider,4000)
})
}
function slider2(){
    const listimg = document.querySelector('.slider2')
    const img1= document.querySelector('.img31')
    function changeslider(a){
    if(a==1){
    document.querySelector('.circlebl').classList.remove('circlebl')
    listimg.style.transform = `translateX(0px)`
    document.querySelector('.bs21').classList.add('circlebl')
    document.querySelector('.img31').style.opacity = `1`
    document.querySelector('.img32').style.opacity = `0`
    }
    else if(a==2)
    {
        document.querySelector('.circlebl').classList.remove('circlebl')
        const width= img1.offsetWidth
        listimg.style.transform = `translateX(${width*-1}px)`
        document.querySelector('.bs22').classList.add('circlebl')
        document.querySelector('.img31').style.opacity = `0`
        document.querySelector('.img32').style.opacity = `1`
    }
    }
    document.querySelector('.bs21').addEventListener('click',()=>{
        changeslider(1)
    })
    document.querySelector('.bs22').addEventListener('click',()=>{
        changeslider(2)
    })

}
function slider3(){
    const listbox = document.querySelector('.texts4')
    const listimg = document.querySelector('.slider3')
    let index=1
    function changeslider(){
        document.querySelector('.activets3').classList.remove('activets3')
        if(index>=3 && index<9)
        {
            listbox.style.transform = `translateX(${200 * - (index-2)}px)`
        }
        listimg.style.transform = `translateX(${902 * - (index-1)}px)`
        document.querySelector('.es3'+ index).classList.add('activets3')
    }
    document.querySelector('.es31').addEventListener('click',() => {
        index=1
        changeslider()
        listbox.style.transform = `translateX(0px)`
    })
    document.querySelector('.es32').addEventListener('click',() => {
        index=2
        changeslider()
        listbox.style.transform = `translateX(0px)`
    })
    document.querySelector('.es33').addEventListener('click',() => {
        index=3
        changeslider()
        
    })
    document.querySelector('.es34').addEventListener('click',() => {
        index=4
        changeslider()
    })
    document.querySelector('.es35').addEventListener('click',() => {
        index=5
        changeslider()
    })
    document.querySelector('.es36').addEventListener('click',() => {
        index=6
        changeslider()
    })
    document.querySelector('.es37').addEventListener('click',() => {
        index=7
        changeslider()
    })
    document.querySelector('.es38').addEventListener('click',() => {
        index=8
        changeslider()
    })
    document.querySelector('.es39').addEventListener('click',() => {
        index=9
        changeslider()
    })

}
function slider4(){
    const listbox = document.querySelector('.slider4')
    index=0
    function changeslider(){
        listbox.style.transform = `translateX(${-index*200}px)`
    }
    document.querySelector('.buttonleft i').addEventListener('click',()=>{
        if(index>0)
        {
        index--
        changeslider()
        console.log('dadada')
        }
        
    })
    document.querySelector('.buttonright i').addEventListener('click',()=>{
        if(index<7)
        {
        index++
        changeslider()
        console.log('dadada')
        }
    })
   
}
function textslider (animatedElement) {

function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
function animateIfVisible(){

    if (isInViewport(animatedElement)) {
      if (!animatedElement.classList.contains('animate')) {
        // Chỉ thêm lớp animate nếu nó chưa có
        animatedElement.classList.add('animate');
      }
    } 
}
window.addEventListener('scroll', animateIfVisible);
document.addEventListener('DOMContentLoaded', animateIfVisible);
}
function imgtele(animatedElement,tele) {

    function isInViewport(element) {
      var rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
    function animateIfVisible(){
    
        if (isInViewport(animatedElement)) {
          if (!animatedElement.classList.contains(tele)) {
            animatedElement.classList.add(tele);
          }
        } 
    }
window.addEventListener('scroll', animateIfVisible);
document.addEventListener('DOMContentLoaded', animateIfVisible);
}
var tsl1= document.querySelector('.textb4212')
var tsl2=document.querySelector('.b4331')
var tsl3=document.querySelector('.b4332')
var tsl4=document.querySelector('.b442')
var tsl5=document.querySelector('.b452')
var tsl6=document.querySelector('.b454')
var tsl7=document.querySelector('.b462')
var tsl8=document.querySelector('.b53')
var tsl9=document.querySelector('.b55')
var tsl10=document.querySelector('.b712')
var tsl11=document.querySelector('.b73')
var tsl12=document.querySelector('.b743')
var teleimg1=document.querySelector('.b721')
var teleimg2=document.querySelector('.b722')
let a = 'teler'
let a1 ='telel'
slider4()
slider2()
slider3()
slider1()
textslider(tsl1)
textslider(tsl2)
textslider(tsl3)
textslider(tsl4)
textslider(tsl5)
textslider(tsl6)
textslider(tsl7)
textslider(tsl8)
textslider(tsl9)
textslider(tsl10)
textslider(tsl11)
textslider(tsl12)
imgtele(teleimg1,a)
imgtele(teleimg2,a1)

