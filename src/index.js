
function getComponent() {
    return
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    btn.innerHTML = 'Clicke me man';
    btn.onclick = printme;
    element.appendChild(btn);
    
    return element;
}

document.body.appendChild(component());


if(module.hot){
    module.hot.accept('./print.js', function(){
        console.log('Accepting the updated printMe module');
        printme();
    })
}