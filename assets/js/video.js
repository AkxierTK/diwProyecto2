function accionPlay()
{
	if(!medio.paused && !medio.ended) 
	{
		medio.pause();
		play.value='\u25BA'; //\u25BA
    document.body.style.backgroundColor = '#fff';
	}
	else
	{
		medio.play();
		play.value='||';
    document.body.style.backgroundColor = 'grey';
	}
}
function accionReiniciar()
{
  //Usar propiedad .currentTime
  //Reproducir el vídeo
  //Cambiar el valor del botón a ||
  medio.currentTime=0;
if(play.value=='||'){
    medio.play();
    play.value='||';
}else{
    medio.pause();
    play.value='\u25BA';
}


}
function accionRetrasar()
{
	//Usar propiedad .curentTime
  //Contemplar que no existen valores negativos
  if(medio.currentTime<=10){
    medio.currentTime=0;
  }else{
      medio.currentTime-=10;
  }
}
function accionAdelantar()
{
  //Contemplar que no existen valores mayores a medio.duration	
  if(medio.currentTime>=medio.duration-10){
      medio.currentTime=medio.duration;
  }else{
      medio.currentTime+=10;
  }
}
function accionSilenciar()
{
	//Utilizar medio.muted = true; o medio.muted = false;
    if(medio.muted){
        medio.muted=false;
        silenciar.value="Silenciar";
    }else{
        medio.muted=true;
        silenciar.value="Demutear";
    }
}
function accionMasVolumen()
{
	//Contemplar que el valor máximo de volumen es 1
    if(medio.volume<1){
        medio.volume+=0.1;
    }
}
function accionMenosVolumen()
{
	//Contemplar que el valor mínimo de volumen es 0
    if(medio.volume>0.1){
        medio.volume-=0.1;
    }
}

function iniciar() 
{
	
	medio=document.getElementById('medio');
	play=document.getElementById('play');
	reiniciar=document.getElementById('reiniciar');
	retrasar=document.getElementById('retrasar');
	adelantar=document.getElementById('adelantar');
	silenciar=document.getElementById('silenciar');

	play.addEventListener('click', accionPlay);
	reiniciar.addEventListener('click', accionReiniciar);
	retrasar.addEventListener('click', accionRetrasar);
	adelantar.addEventListener('click', accionAdelantar);
	silenciar.addEventListener('click', accionSilenciar);
	menosVolumen.addEventListener('click', accionMenosVolumen);
	masVolumen.addEventListener('click', accionMasVolumen);
}

window.addEventListener('load', iniciar, false);

PokemonB=document.getElementById("Pokemon");
PokemonA=document.getElementById("PokemonAudio");

PokemonB.addEventListener("click",function(event){
    if(!PokemonA.paused && !PokemonA.ended) 
	{
		PokemonA.pause();
	}else{
        PokemonA.play();
    }
});

Digimon=document.getElementById("Digimon");
DigimonA=document.getElementById("DigimonAudio");

Digimon.addEventListener("click",function(event){
    if(!DigimonA.paused && !DigimonA.ended) 
	{
		DigimonA.pause();
	}else{
        DigimonA.play();
    }
});

Shingeky=document.getElementById("Shingeky");
ShingekyA=document.getElementById("ShingekyAudio");

Shingeky.addEventListener("click",function(event){
    if(!ShingekyA.paused && !ShingekyA.ended) 
	{
		ShingekyA.pause();
	}else{
        ShingekyA.play();
    }
});

Lol=document.getElementById("Lol");
LolA=document.getElementById("LolAudio");

Lol.addEventListener("click",function(event){
    if(!LolA.paused && !LolA.ended) 
	{
		LolA.pause();
	}else{
        LolA.play();
    }
});