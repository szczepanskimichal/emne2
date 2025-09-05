import { model } from "./model";
import { updateView } from "./mainView";


function clickCookie() {
            model.score += model.clickPower;
            updateView();
        }

        function buyUpgrade() {
            if (model.score >= model.upgradeCost) {
                model.score -= model.upgradeCost;
                model.clickPower += 1;
                model.upgradeCost = Math.floor(model.upgradeCost * 1.5);
                updateView();
            } else {
                alert("Du har ikke nok poeng!");
            }
        }

        function buyAutoClicker() {
            if (model.score >= model.autoClickerCost) {
                model.score -= model.autoClickerCost;
                model.autoClickers += 1;
                model.autoClickerCost = Math.floor(model.autoClickerCost * 1.5);
                updateView();
            } else {
                alert("Du har ikke nok poeng!");
            }
        }

        // Auto-klikker funksjon
        setInterval(() => {
            if (model.autoClickers > 0) {
                model.score += model.autoClickers;
                updateView();
            }
        }, 1000);

        export {
            clickCookie,
            buyUpgrade,
            buyAutoClicker,
        };