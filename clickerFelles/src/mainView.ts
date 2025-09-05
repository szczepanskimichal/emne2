import { model } from "./model";
import { clickCookie, buyUpgrade, buyAutoClicker } from "./controller";


 export function updateView() {
            // document.getElementById("app")!.innerHTML = `HTML
            //     <h1>Klikker Spillet</h1>

            //     <div id="score">${model.score}</div>
            //     <p>Poeng</p>

            //     <button id="clickButton" >Klikk meg!</button>

            //     <div class="upgrade">
            //         <h3>Klikk styrke: ${model.clickPower}</h3>
            //         <p>Kostnad: ${model.upgradeCost} poeng</p>
            //         <button id="buyUpgrade">Kjøp oppgradering (+1 klikk styrke)</button>
            //     </div>

            //     <div class="upgrade">
            //         <h3>Auto-klikkere: ${model.autoClickers}</h3>
            //         <p>Kostnad: ${model.autoClickerCost} poeng</p>
            //         <button id="buyAutoClicker">Kjøp auto-klikker (+1 poeng/sekund)</button>
            //     </div>

            //     <div class="stats">
            //         <p>Du klikker ${model.clickPower} poeng per klikk</p>
            //         <p>Auto-klikkere gir ${model.autoClickers} poeng per sekund</p>
            //     </div>
            // `;
            const app=document.getElementById("app");
            app?.replaceChildren();
            const title=document.createElement("h1");
            title.textContent="Klikker Spillet";
            app?.appendChild(title);
            
            const scoreDiv=document.createElement("div");
            scoreDiv.id="score";
            scoreDiv.textContent=String(model.score);
            app?.appendChild(scoreDiv);

            const clickBut=document.createElement("button");
            clickBut.id="clickButton";
            clickBut.textContent="Klikk meg!";
            app?.appendChild(clickBut);
            
            const upgradeDiv=document.createElement("div");
            upgradeDiv.className="upgrade";
            const upgradeH3=document.createElement("h3");
            upgradeH3.textContent=`Klikk styrke: ${model.clickPower}`;
            upgradeDiv.appendChild(upgradeH3);
            const upgradeP=document.createElement("p");
            upgradeP.textContent=`Kostnad: ${model.upgradeCost} poeng`;
            upgradeDiv.appendChild(upgradeP);
            const upgradeBut=document.createElement("button");
            upgradeBut.id="buyUpgrade";
            upgradeBut.textContent="Kjøp oppgradering (+1 klikk styrke)";
            upgradeDiv.appendChild(upgradeBut);
            app?.appendChild(upgradeDiv);

            

            clickBut.addEventListener("click",clickCookie);
            upgradeBut.addEventListener("click",buyUpgrade);
        }
           
        
        