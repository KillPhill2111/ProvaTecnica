const fraseTeste01="O rato roe a ropa do rei de roma"
const fraseTeste02="Batatinha quando nasce..."
const fraseTeste03="Javascript é melhor que python?"


function verificaA(frase){
    let contadorA=0;
    

    const caracteresSeparador=frase.split('')

    for(let i=0; i<=caracteresSeparador.length; i++){
        if(caracteresSeparador[i]=='a'|| caracteresSeparador[i]=="A"){
            contadorA++;
        }
    }
    if(contadorA<0){
        console.log(`A frase "${frase}" não possui uma unica letra 'A'!`)
    }
    console.log(`A frase "${frase}" possui exatemente ${contadorA} letras 'A'! `)
}
verificaA(fraseTeste01)
verificaA(fraseTeste02)
verificaA(fraseTeste03)