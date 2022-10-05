function calcular() {
    var txtv = window.document.querySelector('input#txtvel')
    var res = window.document.querySelector('div#res')
    var vel = Number(txtv.value)
    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel} Km/h</strong></p>`
    res.style.margin = '5% 0'
    if (vel > 80) {
        res.innerHTML += `<p><strong>Você foi multado por excesso de velocidade</strong></p>`
        res.style.margin = '5% 0'
    }
    res.innerHTML += `<p><strong>DIRIJA SEMPRE COM O CINTO DE SEGURANÇA.</strong></p>`
    res.style.color = 'black'
}