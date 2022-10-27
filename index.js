// Write your code here!
const m= document.getElementById('main');
m.remove()
const newHeader=document.createElement('h1')
newHeader.setAttribute('id','victory')
newHeader.textContent="Batoul is the champion"
document.body.append(newHeader)