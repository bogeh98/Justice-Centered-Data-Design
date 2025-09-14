/**
 * Video Playback Speed
**/

const adjustPlaybackSpeed = (btnElem, speed) => {
  const videElem = btnElem.parentNode.previousSibling
  // Get nearest video element and apply playback speed
  videElem.playbackRate = speed
}

// Create suite of buttons
const createPlaybackButtons = (btnOptions) => {
  const buttonList = []
  for (const btnOption of btnOptions) {
    // 1. Create Buttons
    const btn = document.createElement("button")
    // 2. Button Attributes
    const onClickAttr = document.createAttribute("onclick")
    onClickAttr.value = `adjustPlaybackSpeed(this, ${btnOption.speed})`
    btn.setAttributeNode(onClickAttr)
    // 3. Set text
    const btnText = document.createTextNode(btnOption.text)
    btn.appendChild(btnText)
    // 4. Push completed button to list
    buttonList.push(btn)
  }
  return buttonList
}

// Append Playback Buttons
let videosOnPage = document.getElementsByTagName("video")
for (const video of videosOnPage) {

  // Append div container for buttons
  const videosDivContainer = document.createElement("div")
  const btnContainerAttr = document.createAttribute("class")
  btnContainerAttr.value = "video--playback_container"
  videosDivContainer.setAttributeNode(btnContainerAttr)
  video.insertAdjacentElement("afterend", videosDivContainer)

  // "afterend"
  const btnOptions = [
    {speed:0.5,text:"x0.5 Speed"},
    {speed:1,text:"x1 Speed"},
    {speed:1.5,text:"x1.5 Speed"},
    {speed:2,text:"x2 Speed"},
  ]
  const pbButtons = createPlaybackButtons(btnOptions)

  // Append buttons
  for (b of pbButtons) {
    videosDivContainer.append(b)
  }

}