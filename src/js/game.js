import Mpu from './modules/mpu';
import Alert from './modules/alert';

function initAutoexclusion() {
    const autoexclusionForm = document.getElementById('autoexclusion');
    if (!autoexclusionForm) return;

    autoexclusionForm.addEventListener('submit', (e) => {
        e.preventDefault();
        Mpu().mpu({
            title: 'Estás a punto de autoexcluirte',
            body: "La autoexclusión no se puede cancelar una vez confirmada. ¿Estás seguro que quieres autoexcluirte por el tiempo que has seleccionado?",
            confirmText: 'Autoexcluirme',
            cancelText: 'Cancelar',
            onConfirm: () => {
                autoexclusionForm.submit();
            }
        })
    });
}

function initLimits({ questionarieUrl }) {
    const limitsForm = document.getElementById('limitsForm');
    if (!limitsForm) return;

    const alertMgr = Alert();

    limitsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!limitsChanged()) {
            console.log("Limits didn't change");
            return;
        }
        if (!validValues()) {
            alertMgr.add('El límite diario debe ser menor que el semanal y el semanal menor que el mensual.', 'error');
            console.log("Invalid values");
            return;
        }
        
        if(limitsIncreased()) {
            Mpu().mpu(questionarieUrl);
            return;
        }
        
        showConfirmation(limitsForm);
    });
}

function showConfirmation(form) {
    Mpu().mpu({
        title: 'Estás a punto de modificar tus límites',
        body: "",
        confirmText: 'Modificar',
        cancelText: 'Cancelar',
        onConfirm: () => {
            form.submit();
        },
        onCancel: () => {
            window.location.href = "/members/depositlimits.html?error=true"
        }
    })
}

function limitsChanged() {
    const initialDaily = document.getElementById('initialDailyLimit').value;
    const initialWeekly = document.getElementById('initialWeeklyLimit').value;
    const initialMonthly = document.getElementById('initialMonthlyLimit').value;
    const daily = document.getElementById('dailyLimit').value;
    const weekly = document.getElementById('weeklyLimit').value;
    const monthly = document.getElementById('monthlyLimit').value;

    if (initialDaily === daily && initialWeekly === weekly && initialMonthly === monthly) {
        return false;
    }

    return true;
}

function validValues() {
    const daily = parseInt(document.getElementById('dailyLimit').value);
    const weekly = parseInt(document.getElementById('weeklyLimit').value);
    const monthly = parseInt(document.getElementById('monthlyLimit').value);

    if (daily > weekly || weekly > monthly) {
        return false;
    }

    return true;
}

function limitsIncreased() {
    const initialDaily = document.getElementById('initialDailyLimit').value;
    const initialWeekly = document.getElementById('initialWeeklyLimit').value;
    const initialMonthly = document.getElementById('initialMonthlyLimit').value;
    const daily = document.getElementById('dailyLimit').value;
    const weekly = document.getElementById('weeklyLimit').value;
    const monthly = document.getElementById('monthlyLimit').value;

    if (initialDaily < daily || initialWeekly < weekly || initialMonthly < monthly) return true;

    return false;
}

window.showConfirmation = showConfirmation;
window.initLimits = initLimits;
window.initAutoexclusion = initAutoexclusion;