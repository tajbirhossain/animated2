const dot = document.querySelector(".dot")
const middleSection = document.querySelector(".middleSection")
const line = document.querySelector(".svg2")
const lineRect = document.querySelector("#clip rect")
const sides = document.querySelectorAll(".side")
const sideRects = document.querySelectorAll(".sideImages clipPath rect")

const mainContent = document.querySelector(".mainContent")
// const mainContentMob = document.querySelector(".mainContentMob")
const fadeUp = document.querySelectorAll(".fadeUp")
// const fadeUpMob = document.querySelectorAll(".fadeUpMob") 
const fadeLeftImg = document.querySelectorAll(".fadeLeftImg")
const fadeRightImg = document.querySelectorAll(".fadeRightImg")
// const mobImg = document.querySelectorAll(".mobImg")
const row = document.querySelectorAll(".row")
const rRow = document.querySelectorAll(".rRow")
const lRow = document.querySelectorAll(".lRow")




const rowTopVal = [0, -35, -67, -88, -130, -160, -190, -220, -250, -265, -295, -325, -355, -385, 405]
middleSection.style.height = `${window.innerWidth <= 800 ? 4500 : window.innerWidth <= 1260 ? 2560 : line.clientHeight}px`
dot.style.left = `${line.getBoundingClientRect().left + line.clientWidth}px`
row.forEach((item, ind) => {
    item.style.top = `${rowTopVal[ind]}px`
})



var endReachedPc = false
var endReachedMobile = false

// if (row[row.length - 1].offsetTop + row[row.length - 1].clientHeight + 235 > window.scrollY && row[row.length - 1].getAttribute("class" === "row lRow")) {
//     console.log("550");
// } else if (row[row.length - 1].offsetTop + row[row.length - 1].clientHeight + 235 > window.scrollY && row[row.length - 1].getAttribute("class" === "row rRow")) {
//     console.log("60");
// } else {
//     console.log("rest");
// }


let globaldotleft
let globalmiddlesectionstartpos
let globaldotMovingTopPos
const effectLogicsPc = () => {
    const middleSectionStartPos = middleSection.getBoundingClientRect().top - (window.innerHeight / 2)
    const dotInitialLeftPos = line.getBoundingClientRect().left + line.clientWidth
    const dotFinalLeftPos = line.getBoundingClientRect().left + 10
    const dotMovingLeftPos = row[row.length - 1].offsetTop + row[row.length - 1].clientHeight + 235 < window.scrollY && row[row.length - 1].getAttribute("class" === "row lRow") ? 631.667 : row[row.length - 1].offsetTop + row[row.length - 1].clientHeight + 235 < window.scrollY && row[row.length - 1].getAttribute("class" === "row rRow") ? 480.667 : middleSectionStartPos < 0 && middleSectionStartPos > -70 ? dotInitialLeftPos : middleSectionStartPos <= -2480 ? dotInitialLeftPos + 3 : middleSectionStartPos <= -2400 ? dotFinalLeftPos + ((157 * (middleSectionStartPos + 2400)) / (-85)) : middleSectionStartPos <= -2210 ? dotFinalLeftPos : middleSectionStartPos <= -2130 ? dotFinalLeftPos - ((157 * (middleSectionStartPos + 2210)) / (-85)) : middleSectionStartPos <= -1955 ? dotInitialLeftPos : middleSectionStartPos <= -1875 ? dotFinalLeftPos + ((157 * (middleSectionStartPos + 1875)) / (-85)) : middleSectionStartPos <= -1700 ? dotFinalLeftPos : middleSectionStartPos <= -1615 ? dotFinalLeftPos - ((157 * (middleSectionStartPos + 1695)) / (-85)) : middleSectionStartPos <= -1440 ? dotInitialLeftPos : middleSectionStartPos <= -1360 ? dotFinalLeftPos + ((157 * (middleSectionStartPos + 1360)) / (-85)) : middleSectionStartPos <= -1180 ? dotFinalLeftPos : middleSectionStartPos <= -1100 ? dotFinalLeftPos - ((157 * (middleSectionStartPos + 1180)) / (-85)) : middleSectionStartPos <= -925 ? dotInitialLeftPos : middleSectionStartPos <= -845 ? dotFinalLeftPos + ((157 * (middleSectionStartPos + 845)) / (-85)) : middleSectionStartPos <= -660 ? dotFinalLeftPos : middleSectionStartPos <= -590 ? dotFinalLeftPos - ((157 * (middleSectionStartPos + 665)) / (-85)) : middleSectionStartPos <= -410 ? dotInitialLeftPos : middleSectionStartPos <= -330 ? dotFinalLeftPos + ((157 * (middleSectionStartPos + 330)) / (-85)) : middleSectionStartPos <= -145 ? dotFinalLeftPos : middleSectionStartPos <= -70 ? dotInitialLeftPos - ((157 * (middleSectionStartPos + 70)) / (-85)) : dotInitialLeftPos
    const dotMovingTopPos = middleSectionStartPos > 0 ? 0 : window.innerHeight / 2

    globalmiddlesectionstartpos = middleSectionStartPos
    globaldotleft = dotMovingLeftPos
    globaldotMovingTopPos = dotMovingTopPos

    dot.style.position = `${row[row.length - 1].offsetTop + row[row.length - 1].clientHeight + 235 < window.scrollY ? "absolute" : middleSectionStartPos <= -middleSection.clientHeight + 15 ? "absolute" : "fixed"}`
    dot.style.left = `${dotMovingLeftPos}px`
    dot.style.top = `${row[row.length - 1].offsetTop + row[row.length - 1].clientHeight + 235 > window.scrollY ? middleSectionStartPos <= -middleSection.clientHeight + 15 ? "unset" : dotMovingTopPos + "px" : row[row.length - 1].offsetTop + row[row.length - 1].clientHeight + 235 - middleSection.offsetTop + 225 + "px"}`
    dot.style.bottom = `${middleSectionStartPos > -middleSection.clientHeight + 15 ? "unset" : "0px"}`
    dot.className = `${middleSectionStartPos < 0 && middleSectionStartPos > -70 ? "dot purple" : middleSectionStartPos <= -2480 ? "dot deepblue" : middleSectionStartPos <= -2400 ? "dot deepblue" : middleSectionStartPos <= -2210 ? "dot deepblue" : middleSectionStartPos <= -2130 ? "dot deepblue" : middleSectionStartPos <= -1955 ? "dot skyblue" : middleSectionStartPos <= -1875 ? "dot skyblue" : middleSectionStartPos <= -1700 ? "dot mediumblue" : middleSectionStartPos <= -1615 ? "dot mediumblue" : middleSectionStartPos <= -1440 ? "dot red" : middleSectionStartPos <= -1360 ? "dot red" : middleSectionStartPos <= -1180 ? "dot deepblue" : middleSectionStartPos <= -1100 ? "dot deepblue" : middleSectionStartPos <= -925 ? "dot orange" : middleSectionStartPos <= -845 ? "dot orange" : middleSectionStartPos <= -660 ? "dot mediumblue" : middleSectionStartPos <= -590 ? "dot mediumblue" : middleSectionStartPos <= -410 ? "dot blue" : middleSectionStartPos <= -330 ? "dot blue" : middleSectionStartPos <= -145 ? "dot purple" : middleSectionStartPos <= -70 ? "dot purple" : dotInitialLeftPos}`

    lineRect.setAttribute("height", middleSectionStartPos < 0 ? -middleSectionStartPos + 10 : 0)
    row.forEach(item => {
        if (item.getBoundingClientRect().top - (window.innerHeight / 2) < -150) {
            item.querySelector(".middleImg").style.opacity = "1"
            item.querySelector(".textWrap").style.opacity = "1"
            item.querySelector(".comp").style.opacity = "1"
            item.querySelector(".textWrap").style.top = `${0}px`
        } else if (item.getBoundingClientRect().top - (window.innerHeight / 2) < 0) {
            item.querySelector(".middleImg").style.opacity = `${.1 - (item.getBoundingClientRect().top - (window.innerHeight / 2)) / 150}`
            item.querySelector(".textWrap").style.opacity = `${.1 - (item.getBoundingClientRect().top - (window.innerHeight / 2)) / 150}`
            item.querySelector(".comp").style.opacity = `${.1 - (item.getBoundingClientRect().top - (window.innerHeight / 2)) / 150}`
            item.querySelector(".textWrap").style.top = `${150 + (150 * (item.getBoundingClientRect().top - (window.innerHeight / 2))) / 150}px`
        } else {
            item.querySelector(".middleImg").style.opacity = ".1"
            item.querySelector(".textWrap").style.opacity = ".1"
            item.querySelector(".comp").style.opacity = ".1"
            item.querySelector(".textWrap").style.top = `${150}px`
        }
    })
    rRow.forEach(item => {
        if (item.getBoundingClientRect().top - (window.innerHeight / 2) < -150) {
            item.querySelector(".comp").style.right = `${70}px`
        } else if (item.getBoundingClientRect().top - (window.innerHeight / 2) < 0) {
            item.querySelector(".comp").style.right = `${200 + (150 * (item.getBoundingClientRect().top - (window.innerHeight / 2))) / 150}px`
        } else {
            item.querySelector(".comp").style.right = `${200}px`
        }
    })
    lRow.forEach(item => {
        if (item.getBoundingClientRect().top - (window.innerHeight / 2) < -150) {
            item.querySelector(".comp").style.left = `${70}px`
        } else if (item.getBoundingClientRect().top - (window.innerHeight / 2) < 0) {
            item.querySelector(".comp").style.left = `${200 + (150 * (item.getBoundingClientRect().top - (window.innerHeight / 2))) / 150}px`
        } else {
            item.querySelector(".comp").style.left = `${200}px`
        }
    })






    // sideRects.forEach(item => {
    //     item.setAttribute("height", (item.getBoundingClientRect().top - (window.innerHeight / 2)) < 100 ? (100 - (item.getBoundingClientRect().top - (window.innerHeight / 2))) : "0")
    //     // console.log((item.getBoundingClientRect().top - (window.innerHeight / 2)));
    // })




}
const animateOnScrollPc = () => {

    if (!endReachedPc) {
        if (row[row.length - 1].offsetTop + row[row.length - 1].clientHeight + 235 < window.scrollY) {
            endReachedPc = true
            dot.style.position = `${row[row.length - 1].offsetTop + row[row.length - 1].clientHeight + 235 < window.scrollY ? "absolute" : globalmiddlesectionstartpos <= -middleSection.clientHeight + 15 ? "absolute" : "fixed"}`
            dot.style.left = `${row[row.length - 1].offsetTop + row[row.length - 1].clientHeight + 235 < window.scrollY && row[row.length - 1].getAttribute("class" === "row lRow") ? 631.667 : 480.667}px`
            dot.style.top = `${row[row.length - 1].offsetTop + row[row.length - 1].clientHeight + 235 > window.scrollY ? globalmiddlesectionstartpos <= -middleSection.clientHeight + 15 ? "unset" : globaldotMovingTopPos + "px" : row[row.length - 1].offsetTop + row[row.length - 1].clientHeight + 235 - middleSection.offsetTop + 225 + "px"}`
            dot.style.bottom = `${globalmiddlesectionstartpos > -middleSection.clientHeight + 15 ? "unset" : "0px"}`

            dot.style.left = `${row[row.length - 1].offsetTop + row[row.length - 1].clientHeight + 235 < window.scrollY && row[row.length - 1].getAttribute("class" === "row lRow") ? 631.667 : 480.667}px`
            lineRect.setAttribute("height", row[row.length - 1].offsetTop + row[row.length - 1].clientHeight + 235 - middleSection.offsetTop + 225)
        } else {
            effectLogicsPc()
        }
    } else {
        // dot.style.position = `${row[row.length - 1].offsetTop + row[row.length - 1].clientHeight + 235 < window.scrollY ? "absolute" : globalmiddlesectionstartpos <= -middleSection.clientHeight + 15 ? "absolute" : "fixed"}`
        // dot.style.top = `${row[row.length - 1].offsetTop + row[row.length - 1].clientHeight + 235 > window.scrollY ? globalmiddlesectionstartpos <= -middleSection.clientHeight + 15 ? "unset" : globaldotMovingTopPos + "px" : row[row.length - 1].offsetTop + row[row.length - 1].clientHeight + 235 - middleSection.offsetTop + 225 + "px"}`
        dot.style.bottom = `${globalmiddlesectionstartpos > -middleSection.clientHeight + 15 ? "unset" : "0px"}`

        dot.style.left = `${row[row.length - 1].offsetTop + row[row.length - 1].clientHeight + 235 < window.scrollY && row[row.length - 1].getAttribute("class" === "row lRow") ? 631.667 : 480.667}px`
        lineRect.setAttribute("height", row[row.length - 1].offsetTop + row[row.length - 1].clientHeight + 235 - middleSection.offsetTop + 225)
        return
    }


}




const effectLogicsMobile = () => {
    row.forEach(item => {
        if (item.getBoundingClientRect().top - (window.innerHeight / 2) < -150) {
            item.style.opacity = "1"
        } else if (item.getBoundingClientRect().top - (window.innerHeight / 2) < 0) {
            item.style.opacity = `${.1 - (item.getBoundingClientRect().top - (window.innerHeight / 2)) / 150}`
        } else {
            item.style.opacity = ".1"
        }
    })
}

const animateOnScrollMobile = () => {

    if (!endReachedMobile) {
        if (middleSection.offsetTop + middleSection.clientHeight < window.scrollY + (window.innerHeight / 2)) {
            endReachedMobile = true
        } else {
            effectLogicsMobile()
        }
    } else {
        return
    }


}








window.innerWidth > 800 && window.addEventListener("scroll", animateOnScrollPc)
window.innerWidth > 800 && window.addEventListener("load", () => {
    dot.style.position = `${row[row.length - 1].offsetTop + row[row.length - 1].clientHeight + 235 < window.scrollY ? "absolute" : globalmiddlesectionstartpos <= -middleSection.clientHeight + 15 ? "absolute" : "fixed"}`
    dot.style.top = `${row[row.length - 1].offsetTop + row[row.length - 1].clientHeight + 235 > window.scrollY ? globalmiddlesectionstartpos <= -middleSection.clientHeight + 15 ? "unset" : globaldotMovingTopPos + "px" : row[row.length - 1].offsetTop + row[row.length - 1].clientHeight + 235 - middleSection.offsetTop + 225 + "px"}`
    dot.style.bottom = `${globalmiddlesectionstartpos > -middleSection.clientHeight + 15 ? "unset" : "0px"}`

    dot.style.left = `${row[row.length - 1].offsetTop + row[row.length - 1].clientHeight + 235 < window.scrollY && row[row.length - 1].getAttribute("class" === "row lRow") ? 631.667 : 480.667}px`
    lineRect.setAttribute("height", row[row.length - 1].offsetTop + row[row.length - 1].clientHeight + 235 - middleSection.offsetTop + 225)
    effectLogicsPc
})



// window.innerWidth <= 1260 && window.innerWidth > 800 && window.addEventListener("scroll", animateOnScrollTab)
// window.innerWidth <= 1260 && window.innerWidth > 800 && window.addEventListener("load", effectLogicsTab)



window.innerWidth <= 800 && window.addEventListener("scroll", animateOnScrollMobile)
window.innerWidth <= 800 && window.addEventListener("load", effectLogicsMobile)