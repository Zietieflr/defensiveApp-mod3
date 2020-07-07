const bearApp = [
  {pathName: 'bearapolooza', bear: true, favorited: true, lengthOfTrail: 5},
  {pathName: 'no bears in sight', bear: false, favorited: true, lengthOfTrail: 3},
  {pathName: '100 acre wood', bear: true, favorited: false, lengthOfTrail: 8},
  {pathName: 'Just faster than you', bear: true, favorited: false, lengthOfTrail: 15},
]

handleData(bearApp)

function handleData(data){
  [true, false].forEach(boolean => {
    renderListData(
      organizeData(
        sortByBoolean(data, 'bear', boolean), 
        boolean
      ),
      document.querySelector('main')
    )
  })
}

function sortByBoolean(data, attribute, boolean){
  return data.filter(el => el[attribute] == boolean)
}

function organizeData(data, content){
  const objectData = {content, children: []}
  data.forEach(element => objectData.children.push(element.pathName))
  return objectData
}

function renderListData(data, $parent){
  const { content, children } = data 
  $list = generateElement($parent, content, 'ul')
  children.forEach(child => generateElement($list, child, 'li'))
}

function generateElement($parent, content, type){
  const $element = document.createElement(type)
  $element.textContent = content
  $parent.append($element)
  return $element
}