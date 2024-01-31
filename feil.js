feil('r1c1','r1c2','r1c3','r1c4')
function feil(a,b,c,d) {
    let sjekk=[a,b,c,d];
    let t=sjekk.length
    for (let i=1;i<t+1;i++) {
        if (document.getElementById(sjekk[t-i]).innerHTML != '') {
            sjekk.splice(t-i,1)
        }
    }            
    
    document.getElementById('answer').innerHTML=Math.floor(Math.random()*10)
}
