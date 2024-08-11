const emptyPageLogo = `
                    .                    
    ##############..... ##############   
    ##############......##############   
      ##########..........##########     
      ##########........##########       
      ##########.......##########        
      ##########.....##########..        
      ##########....##########.....      
    ..##########..##########.........    
  ....##########.#########.............  
    ..################JJJ............    
      ################.............      
      ##############.JJJ.JJJJJJJJJJ      
      ############...JJ...JJ..JJ  JJ     
      ##########....JJ...JJ..JJ  JJ      
      ########......JJJ..JJJ JJJ JJJ     
      ######    .........                
                  .....                  
                    .`;


const highlightedLogo = emptyPageLogo
  .replace(/#/g, '<span style="color: limegreen;">#</span>')
  .replace(/J/g, '<span style="color: limegreen;">#</span>')
  ;
document.querySelector('.editor-group-watermark').innerHTML = `<pre>${highlightedLogo}</pre>`;
document.querySelector('.watermark-box').innerHTML = `<pre>${highlightedLogo}</pre>`;
