
     <!-- PRICE SECTION START -->
    <section class="price ptb150" id="Mechanism">
        <div class="container">
            <div class="row">
                <div class="title-bl text-center wow fadeIn" data-wow-duration="2s">
                    <div class="title color-white">
                        <br>BINGS CHAIN STAKING <br> <br></div>
                        
                        <div class="item standart text-center"><br>
                        <img src="../assets/images/bingswhite.png" width=70 alt="" class=" img-responsive inline-block img_logo">
                        <br>
                        <div class="ptb30 fsize-24 fweight-700 font-agency uppercase color-white">  
                        BINGS Balance :  <span id="tokenBalance"></span> BINGS<br>
                        
                        <a class="ptb30 fsize-24 fweight-700 font-agency uppercase color-white" style="color: lightblue;" 
                                                href="https://pancakeswap.finance/swap?outputCurrency=0x07800715245D547Ad6b483f34Ce8c392523AC8eC" target="_blank"> 
                              Get BINGS Here <br> 
                                   </a>
                    </div></div> </div>
                 
                <div >
                
                
                
                
                 
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 wow fadeInLeft" data-wow-duration="2s">
                        <div class="item standart text-center">
                            
                            
                            
                            <div class="ptb30 fsize-24 fweight-700 font-agency uppercase color-white">
                                <img src="../assets/images/bingswhite.png" width=50 alt="" class=" img-responsive inline-block img_logo">
                               <br>
                                BINGS STAKE PACK 1
                            </div>
                            <div class="current-bl color-white pt25 pb20">
                                <div class="font-agency fweight-700 lheight-30">
                                  
                                    <span class="fsize-24">Lock Staking 10 Days <br></span>
                                     <span class="fsize-24">Stake 10 - 20 M BINGS<br></span>
                                     <span class="fsize-24">APR 5 %</span>
                                </div>
                            </div>
                            
                            
                            <div class="price-content equal-height">
                              <div class="item-list">
                              
</div>
                                
                                        <div class="stalepanel">
                                        
                                        
                                            <input type="number" id="amount0" class="form-control" placeholder="0 BINGS">
                                            <button type="button" onclick="invest(0)" class="btn gradient" style="margin-top:10px; width:100%;">Stake</button><br><br>
    
                                        </div>
    
                                     
    
                                        <div class="st-form">
                                                                        <table style="width: 250px;">
                                 
                                    <tr>
                                        <td class="text-left">Staked</td>
                                        
                                        <td class="text-left" id="invested0"> 0.0000 BINGS </td>
                                    </tr>
                                    <tr>
                                        <td class="text-left">Unstaked</td>
                                        
                                        <td class="text-left" id="unstaked0"> 0.0000 BINGS<td>
                                    </tr>
                                         <tr>
                                     <td style="padding-left: 5px; padding-right: 18px;">
                                                 <br><button class="btn gradient  btn-sm btn-block" style="text-align: center;" onclick="reinvest(0)">Restake</button>
                                            </td>
                                            
                                             <td style="padding-left: 5px; padding-right: 18px;">
                                                 <br><button class="btn gradient  btn-sm btn-block" style="text-align: center;" onclick="closeDep(0)">Withdraw</button>
                                            </td>
                                          </tr>  
                               
                                </table> 
                                
                                 <br><br>
                                                <label font-agency uppercase color-white" style="color: lightblue;" style="color:#ffffff;">BINGS Rewards </label><br><a id="rewards0">0.0000 BINGS</a><br>
                                    <button class="btn gradient color-black plr60 ptb19" onclick="withdrawn(0)">HARVEST</button>
                                     <br><br>
                                         
                                        </div>
    
                                    </div>
                                    
                                    
                                    
                                   
                                   <br> <div class="current-bl color-white pt25 pb20">
                                <div class="font-agency fweight-700 lheight-30">
                                  
                                    <span class="fsize-24">Lock Staking 40 Days <br></span>
                                     <span class="fsize-24">Stake 10 - 20 M BINGS<br></span>
                                     <span class="fsize-24">APR 10%</span>
                                </div>
                            </div>
                            
                            
                             
                                                                 <div class="price-content equal-height">

                                
                                        <div class="stalepanel">
                                            <input type="number" id="amount1" class="form-control" placeholder="0 BINGS">
                                            <button type="button" onclick="invest(1)" class="btn gradient" style="margin-top:10px; width:100%;">Stake</button> <br><br>
    
                                        </div>
    
                                        <div class="st-form">
<table style="width: 250px;">
                                 
                                    <tr>
                                        <td class="text-left">Staked</td>
                                        
                                        <td class="text-left" id="invested1"> 0.0000 BINGS </td>
                                    </tr>
                                    <tr>
                                        <td class="text-left">Unstaked</td>
                                        
                                        <td class="text-left" id="unstaked1"> 0.0000 BINGS<td>
                                    </tr>
                                         <tr>
                                     <td style="padding-left: 5px; padding-right: 18px;">
                                                 <br><button class="btn gradient  btn-sm btn-block" style="text-align: center;" onclick="reinvest(1)">Restake</button>
                                            </td>
                                            
                                             <td style="padding-left: 5px; padding-right: 18px;">
                                                 <br><button class="btn gradient  btn-sm btn-block" style="text-align: center;" onclick="closeDep(1)">Withdraw</button>
                                            </td>
                                          </tr>  
                               
                                </table> 
                                        </div>
    
                                    </div>
                                    
                                                <label font-agency uppercase color-white" style="color: lightblue;" style="color:#ffffff;">BINGS Rewards </label><br><a id="rewards1">0.0000 BINGS</a><br>
                                    <button class="btn gradient color-black plr60 ptb19" onclick="withdrawn(1)">HARVEST</button>
                                     <br><br>
                                    
                                    
    
                        </div>
                    </div>
                    
                    
                    
                    
                    
                    
                    
                    
                                    
        
         
         
                   
         
         
   <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 wow fadeInLeft" data-wow-duration="2s">
                        <div class="item standart text-center">
                            
                            
                            
                            <div class="ptb30 fsize-24 fweight-700 font-agency uppercase color-white">
                                <img src="../assets/images/bingswhite.png" width=50 alt="" class=" img-responsive inline-block img_logo">
                               <br>
                                BINGS STAKE PACK 2
                            </div>
                            <div class="current-bl color-white pt25 pb20">
                                <div class="font-agency fweight-700 lheight-30">
                                  
                                    <span class="fsize-24">Lock Staking 10 Days <br></span>
                                    <span class="fsize-24">Stake 40 - 50 M BINGS<br></span>
                                     <span class="fsize-24">APR 5 %</span>
                                </div>
                            </div>
                            
                            
                            <div class="price-content equal-height">
                              <div class="item-list">
                              
</div>
                                
                                        <div class="stalepanel">
                                        
                                        
                                            <input type="number" id="amount2" class="form-control" placeholder="0 BINGS">
                                            <button type="button" onclick="invest(2)" class="btn gradient" style="margin-top:10px; width:100%;">Stake</button><br><br>
    
                                        </div>
    
                                     
    
                                        <div class="st-form">
                                                                        <table style="width: 250px;">
                                 
                                    <tr>
                                        <td class="text-left">Staked</td>
                                        
                                        <td class="text-left" id="invested2"> 0.0000 BINGS </td>
                                    </tr>
                                    <tr>
                                        <td class="text-left">Unstaked</td>
                                        
                                        <td class="text-left" id="unstaked2"> 0.0000 BINGS<td>
                                    </tr>
                                         <tr>
                                     <td style="padding-left: 5px; padding-right: 18px;">
                                                 <br><button class="btn gradient  btn-sm btn-block" style="text-align: center;" onclick="reinvest(2)">Restake</button>
                                            </td>
                                            
                                             <td style="padding-left: 5px; padding-right: 18px;">
                                                 <br><button class="btn gradient  btn-sm btn-block" style="text-align: center;" onclick="closeDep(2)">Withdraw</button>
                                            </td>
                                          </tr>  
                               
                                </table> 
                                
                                                                 <br><br>
                                                <label font-agency uppercase color-white" style="color: lightblue;" style="color:#ffffff;">BINGS Rewards </label><br><a id="rewards2">0.0000 BINGS</a><br>
                                    <button class="btn gradient color-black plr60 ptb19" onclick="withdrawn(2)">HARVEST</button>
                                     <br><br>
                                           
                                        </div>
    
                                    </div>
                                    
                                   
                                   <br> <div class="current-bl color-white pt25 pb20">
                                <div class="font-agency fweight-700 lheight-30">
                                  
                                    <span class="fsize-24">Lock Staking 40 Days <br></span>
                                   <span class="fsize-24">Stake 40 - 50 BINGS<br></span>
                                     
                                    <span class="fsize-24">APR 12%</span>
                                </div>
                            </div>
                            
                            
                             
                                                                 <div class="price-content equal-height">

                                
                                        <div class="stalepanel">
                                            <input type="number" id="amount3" class="form-control" placeholder="0 BINGS">
                                            <button type="button" onclick="invest(3)" class="btn gradient" style="margin-top:10px; width:100%;">Stake</button> <br><br>
    
                                        </div>
    
                                        <div class="st-form">
<table style="width: 250px;">
                                 
                                    <tr>
                                        <td class="text-left">Staked</td>
                                        
                                        <td class="text-left" id="invested3"> 0.0000 BINGS </td>
                                    </tr>
                                    <tr>
                                        <td class="text-left">Unstaked</td>
                                        
                                        <td class="text-left" id="unstaked3"> 0.0000 BINGS<td>
                                    </tr>
                                         <tr>
                                     <td style="padding-left: 5px; padding-right: 18px;">
                                                 <br><button class="btn gradient  btn-sm btn-block" style="text-align: center;" onclick="reinvest(3)">Restake</button>
                                            </td>
                                            
                                             <td style="padding-left: 5px; padding-right: 18px;">
                                                 <br><button class="btn gradient  btn-sm btn-block" style="text-align: center;" onclick="closeDep(3)">Withdraw</button>
                                            </td>
                                          </tr>  
                               
                                </table> 
                                        </div>
    
                                    </div>
                                    
                                                <label font-agency uppercase color-white" style="color: lightblue;" style="color:#ffffff;">BINGS Rewards </label><br><a id="rewards3">0.0000 BINGS</a><br>
                                    <button class="btn gradient color-black plr60 ptb19" onclick="withdrawn(3)">HARVEST</button>
                                     <br><br>
                                    
                                    
    
                        </div>
                    </div>
                    
                    
                    
                    
                       <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 wow fadeInLeft" data-wow-duration="2s">
                        <div class="item standart text-center">
                            
                            
                            
                            <div class="ptb30 fsize-24 fweight-700 font-agency uppercase color-white">
                                <img src="../assets/images/bingswhite.png" width=50 alt="" class=" img-responsive inline-block img_logo">
                               <br>
                                BINGS STAKE PACK 3
                            </div>
                            <div class="current-bl color-white pt25 pb20">
                                <div class="font-agency fweight-700 lheight-30">
                                  
                                    <span class="fsize-24">Lock Staking 10 Days <br></span>
                                  <span class="fsize-24">Stake 60 - 70 M BINGS<br></span>
                                   
                                    <span class="fsize-24">APR 5 %</span>
                                </div>
                            </div>
                            
                            
                            <div class="price-content equal-height">
                              <div class="item-list">
                              
</div>
                                
                                        <div class="stalepanel">
                                        
                                        
                                            <input type="number" id="amount4" class="form-control" placeholder="0 BINGS">
                                            <button type="button" onclick="invest(4)" class="btn gradient" style="margin-top:10px; width:100%;">Stake</button><br><br>
    
                                        </div>
    
                                     
    
                                        <div class="st-form">
                                                                        <table style="width: 250px;">
                                 
                                    <tr>
                                        <td class="text-left">Staked</td>
                                        
                                        <td class="text-left" id="invested4"> 0.0000 BINGS </td>
                                    </tr>
                                    <tr>
                                        <td class="text-left">Unstaked</td>
                                        
                                        <td class="text-left" id="unstaked4"> 0.0000 BINGS<td>
                                    </tr>
                                         <tr>
                                     <td style="padding-left: 5px; padding-right: 18px;">
                                                 <br><button class="btn gradient  btn-sm btn-block" style="text-align: center;" onclick="reinvest(4)">Restake</button>
                                            </td>
                                            
                                             <td style="padding-left: 5px; padding-right: 18px;">
                                                 <br><button class="btn gradient  btn-sm btn-block" style="text-align: center;" onclick="closeDep(4)">Withdraw</button>
                                            </td>
                                          </tr>  
                               
                                </table> 
                                
                                                                 <br><br>
                                                <label font-agency uppercase color-white" style="color: lightblue;" style="color:#ffffff;">BINGS Rewards </label><br><a id="rewards4">0.0000 BINGS</a><br>
                                    <button class="btn gradient color-black plr60 ptb19" onclick="withdrawn(4)">HARVEST</button>
                                     <br><br>
                                           
                                        </div>
    
                                    </div>
                                    
                                   
                                   <br> <div class="current-bl color-white pt25 pb20">
                                <div class="font-agency fweight-700 lheight-30">
                                  
                                    <span class="fsize-24">Lock Staking 40 Days <br></span>
                               <span class="fsize-24">Stake 60 - 70 M BINGS<br></span>
                                    <span class="fsize-24">APR 14%</span>
                                </div>
                            </div>
                            
                            
                             
                                                                 <div class="price-content equal-height">

                                
                                        <div class="stalepanel">
                                            <input type="number" id="amount5" class="form-control" placeholder="0 BINGS">
                                            <button type="button" onclick="invest(5)" class="btn gradient" style="margin-top:10px; width:100%;">Stake</button> <br><br>
    
                                        </div>
    
                                        <div class="st-form">
<table style="width: 250px;">
                                 
                                    <tr>
                                        <td class="text-left">Staked</td>
                                        
                                        <td class="text-left" id="invested5"> 0.0000 BINGS </td>
                                    </tr>
                                    <tr>
                                        <td class="text-left">Unstaked</td>
                                        
                                        <td class="text-left" id="unstaked5"> 0.0000 BINGS<td>
                                    </tr>
                                         <tr>
                                     <td style="padding-left: 5px; padding-right: 18px;">
                                                 <br><button class="btn gradient  btn-sm btn-block" style="text-align: center;" onclick="reinvest(5)">Restake</button>
                                            </td>
                                            
                                             <td style="padding-left: 5px; padding-right: 18px;">
                                                 <br><button class="btn gradient  btn-sm btn-block" style="text-align: center;" onclick="closeDep(5)">Withdraw</button>
                                            </td>
                                          </tr>  
                               
                                </table> 
                                        </div>
    
                                    </div>
                                    
                                                <label font-agency uppercase color-white" style="color: lightblue;" style="color:#ffffff;">BINGS Rewards </label><br><a id="rewards5">0.0000 BINGS</a><br>
                                    <button class="btn gradient color-black plr60 ptb19" onclick="withdrawn(5)">HARVEST</button>
                                     <br><br>
                                    
                                    
    
                        </div>
                    </div>
                    
                    
                    
                    
                    
            
            
            
            
            
            
                                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 wow fadeInLeft" data-wow-duration="2s">
                        <div class="item standart text-center">
                            
                            
                            
                            <div class="ptb30 fsize-24 fweight-700 font-agency uppercase color-white">
                                <img src="../assets/images/bingswhite.png" width=50 alt="" class=" img-responsive inline-block img_logo">
                               <br>
                                BINGS STAKE PACK 4
                            </div>
                            <div class="current-bl color-white pt25 pb20">
                                <div class="font-agency fweight-700 lheight-30">
                                  
                                    <span class="fsize-24">Lock Staking 10 Days <br></span>
                                  <span class="fsize-24">Stake 100 M BINGS<br></span>
                                   
                                    <span class="fsize-24">APR 5 %</span>
                                </div>
                            </div>
                            
                            
                            <div class="price-content equal-height">
                              <div class="item-list">
                              
</div>
                                
                                        <div class="stalepanel">
                                        
                                        
                                            <input type="number" id="amount6" class="form-control" placeholder="0 BINGS">
                                            <button type="button" onclick="invest(6)" class="btn gradient" style="margin-top:10px; width:100%;">Stake</button><br><br>
    
                                        </div>
    
                                     
    
                                        <div class="st-form">
                                                                        <table style="width: 250px;">
                                 
                                    <tr>
                                        <td class="text-left">Staked</td>
                                        
                                        <td class="text-left" id="invested6"> 0.0000 BINGS </td>
                                    </tr>
                                    <tr>
                                        <td class="text-left">Unstaked</td>
                                        
                                        <td class="text-left" id="unstaked6"> 0.0000 BINGS<td>
                                    </tr>
                                         <tr>
                                     <td style="padding-left: 5px; padding-right: 18px;">
                                                 <br><button class="btn gradient  btn-sm btn-block" style="text-align: center;" onclick="reinvest(6)">Restake</button>
                                            </td>
                                            
                                             <td style="padding-left: 5px; padding-right: 18px;">
                                                 <br><button class="btn gradient  btn-sm btn-block" style="text-align: center;" onclick="closeDep(6)">Withdraw</button>
                                            </td>
                                          </tr>  
                               
                                </table> 
                                
                                                                 <br><br>
                                                <label font-agency uppercase color-white" style="color: lightblue;" style="color:#ffffff;">BINGS Rewards </label><br><a id="rewards6">0.0000 BINGS</a><br>
                                    <button class="btn gradient color-black plr60 ptb19" onclick="withdrawn(6)">HARVEST</button>
                                     <br><br>
                                           
                                        </div>
    
                                    </div>
                                    
                                   
                                   <br> <div class="current-bl color-white pt25 pb20">
                                <div class="font-agency fweight-700 lheight-30">
                                  
                                    <span class="fsize-24">Lock Staking 40 Days <br></span>
                                <span class="fsize-24">Stake 100,000,000 BINGS<br></span>
                                    <span class="fsize-24">APR 16%</span>
                                </div>
                            </div>
                            
                            
                             
                                                                 <div class="price-content equal-height">

                                
                                        <div class="stalepanel">
                                            <input type="number" id="amount7" class="form-control" placeholder="0 BINGS">
                                            <button type="button" onclick="invest(7)" class="btn gradient" style="margin-top:10px; width:100%;">Stake</button> <br><br>
    
                                        </div>
    
                                        <div class="st-form">
<table style="width: 250px;">
                                 
                                    <tr>
                                        <td class="text-left">Staked</td>
                                        
                                        <td class="text-left" id="invested7"> 0.0000 BINGS </td>
                                    </tr>
                                    <tr>
                                        <td class="text-left">Unstaked</td>
                                        
                                        <td class="text-left" id="unstaked7"> 0.0000 BINGS<td>
                                    </tr>
                                         <tr>
                                     <td style="padding-left: 5px; padding-right: 18px;">
                                                 <br><button class="btn gradient  btn-sm btn-block" style="text-align: center;" onclick="reinvest(7)">Restake</button>
                                            </td>
                                            
                                             <td style="padding-left: 5px; padding-right: 18px;">
                                                 <br><button class="btn gradient  btn-sm btn-block" style="text-align: center;" onclick="closeDep(7)">Withdraw</button>
                                            </td>
                                          </tr>  
                               
                                </table> 
                                        </div>
    
                                    </div>
                                    
                                                <label font-agency uppercase color-white" style="color: lightblue;" style="color:#ffffff;">BINGS Rewards </label><br><a id="rewards7">0.0000 BINGS</a><br>
                                    <button class="btn gradient color-black plr60 ptb19" onclick="withdrawn(7)">HARVEST</button>
                                     <br><br>
                                    
                                    
    
                        </div>
                    </div>
                           
                    
                    
                    
                    
                    
                    
                    
                    
                                                            


                </div>
            </div>
        </div>
    </section>
    
