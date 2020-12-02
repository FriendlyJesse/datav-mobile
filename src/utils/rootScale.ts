const baseSize = 16 // 基准值
const scaleSize = 750 // 缩放相对值
function setRem () {
  const scale = document.documentElement.clientWidth / scaleSize
  document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
}
setRem()
onresize = setRem
