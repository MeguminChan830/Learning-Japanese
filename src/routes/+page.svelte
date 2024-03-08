<script>
    import {data} from '$lib/data' 
    import {onMount} from 'svelte'
    import '@fortawesome/fontawesome-free/css/all.min.css'
    import './index.css'
    let show=-1
    let showKanji=false
    let is_correct=false
    let toggle= 0

    const onClick=(check)=>{
        is_correct=check
        showKanji=!showKanji
        toggle=check?3:4
        setTimeout(()=>{
            toggle=0
            
        }, 200)
    }
    const onPassed=(check)=>{
        if (check){
            show++
        }else{
            show--
        }
        toggle=check?1:2
        
        setTimeout(()=>{
            toggle=0
            
        }, 200)
        showKanji=!showKanji
        is_correct=false
    }

</script>
{#each data as {kanji, romanji, meaning}, i}
<div class="prac" style="display:{show==i?"block":'none'}">
    <div class="index">
        <i class="border left">
            <i></i>
        </i>
        <h1>
            {i}
        </h1>
        <i class="border right">
            <i></i>
        </i>
    </div>
    <div class="word">
        <div class="romanji"><span>{romanji}</span></div>
        <div class="meaning"><span>{meaning}</span></div>
    </div>
    <div class="check">
        <button on:click={()=>onClick(false)} class:active={toggle==4}>
            <i class="fa-solid fa-x"></i>
        </button>
        <button on:click={()=>onClick(true)} class:active={toggle==3}>
            <i class="fa-solid fa-check"></i>
        </button>
    </div>
    <div style="display:{showKanji?'block':'none'}">
        <h1 class='kanji {is_correct?"correct": "wrong"}'>{kanji}</h1>
        <div class="choose">
        <button  on:click={()=>onPassed(false)} class:active={toggle==1}>
            <i class="fa-solid fa-hand-point-left"></i>
        </button>
        <button  on:click={()=>onPassed(true)} class:active={toggle==2}>
            <i class="fa-solid fa-right-long"></i>
        </button>
    </div>
    </div>
</div>
{/each}
{#if show<0}
<div>
<h1 style="letter-spacing: 1px; text-align: center; color: #00ff20;margin-top:100px; text-shadow: #ffaa99 3px 3px 10px">You Are prepared for Learning Japanese?</h1>
<button style="color:#555;" on:click={()=>show=0} id='start'><i class="fa-regular fa-hand-point-right" ></i> Click here to start!<i></i><i></i></button>
</div>
{/if}
