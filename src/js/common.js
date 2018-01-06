export const getTranslate = (el) => {
  const transArr = []
  if(!window.getComputedStyle) return
  const style = getComputedStyle(el),
        transform = style.transform || style.webkitTransform || style.mozTransform
  let mat = transform.match(/^matrix3d\((.+)\)$/)    
  if(mat) return parseFloat(mat[1].split(', ')[13])
  mat = transform.match(/^matrix\((.+)\)$/)
  mat ? transArr.push(parseFloat(mat[1].split(', ')[4])) : 0
  mat ? transArr.push(parseFloat(mat[1].split(', ')[5])) : 0
  return {
    x: transArr[0],
    y: transArr[1]
  }
}