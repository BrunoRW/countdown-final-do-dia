const gttM = document.getElementById("count-m");
    const gttS = document.getElementById("count-s");
    const gttH = document.getElementById("count-h");
    
    const escT = document.getElementById("esc");
    
    
    const getS = () => {
        let dt = new Date();
        let esc = "horas ðŸš€ðŸš€";
        
        let minutes = 59 - (dt.getMinutes());
        let seconds = 59 - (dt.getSeconds());
        let hours = 23 - (dt.getHours());
        
        if(minutes < 10){ minutes = `0${minutes}`}
        if(seconds < 10){ seconds = `0${seconds}`}
        
        if(hours == 0){ esc = "minutos âš ï¸âš ï¸" }
        if(hours == 0 && minutes == 0){ esc = "segundos ðŸ”¥ðŸ”¥" }
        
        
        gttM.innerText = minutes;
        gttS.innerText = seconds;
        gttH.innerText = hours;
        escT.innerText = esc;
    }
    
    getS();
    
    setInterval(()=>{
        getS();
    }, 1000)
