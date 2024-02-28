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
slider4()
slider3()
slider1()
slider2()

