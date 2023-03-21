let oyuncular = ["img/cr7.jpg","img/neymar.jpg","img/q7.jpg","img/kerimcan.jpg"]

const sorular = {
    cr7: {
        soru: "kaç yaşındadır",
        secenekler: ["20","32","40","38"],
        cevap: "38"
    },

    neymar: {
        soru: "hangi takımda oynuyor",
        secenekler: ["PSG","FB","BJK","GS"],
        cevap: "PSG"
    },

    q7: {
        soru: "hangi takımlarda oynamamıştır?",
        secenekler: ["Beşiktaş","manchester united","barcelona","inter milan"],
        cevap: "manchester united"
    }
}
let bilgiler,soru,dogruCevap,secenekler,kullaniciCevap,alanlar,secilensoru;

alanlar=document.getElementsByTagName("img");
[...alanlar].forEach((alan,index) => {
  alan.addEventListener("click",()=>{
    secilensoru=alan.getAttribute("title");
    sorugoster(secilensoru);
  });
});

function sorugoster(secilensoru){
    bilgiler=sorular[secilensoru];
    soru=bilgiler['soru'];
    secenekler=bilgiler['secenekler'];
    dogruCevap=bilgiler.cevap;
    console.log(dogruCevap);
    
    const foto = document.getElementById(secilensoru);
    foto.style.border = "";

    document.getElementById("seceneklerListesi").innerHTML = "";
    document.getElementById("soruBaslik").textContent = soru;

    secenekler.forEach((secenek)=>{
        
        const yeniSecenek=document.createElement("li");
        const yeniRadio=document.createElement("input");

        yeniSecenek.innerHTML=secenek;
        yeniRadio.type="radio";
        yeniRadio.name="yeniSecenek";
        yeniRadio.value=secenek;

        yeniSecenek.appendChild(yeniRadio);
        document.getElementById("seceneklerListesi").appendChild(yeniSecenek);
        
      });
}


function cevabiKontrolEt(){
    kullaniciCevap=document.querySelector('input[name="yeniSecenek"]:checked').value;
    
    console.log(kullaniciCevap);
    
      if(kullaniciCevap===dogruCevap){
        document.getElementById("cvp").innerHTML = "Tebrikler,Doğru Cevap!!!"; 
        const foto = document.getElementById(secilensoru);
        foto.style.border = "2px solid green"; 
        
      } else {
        document.getElementById("cvp").innerHTML = "Yanlış Cevap!!!";
        const foto = document.getElementById(secilensoru);
        foto.style.border = "2px solid red"; 
        document.getElementById("resim").innerHTML = "<img src='img/kerimcan.jpg'> "; 
        document.getElementById("acklama").innerHTML = "Futbol Bilgin!";
      } 

      }
      
    

  
    
  
