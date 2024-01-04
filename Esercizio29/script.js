const tooltip = document.getElementById('tooltip');
const testoTooltip = document.getElementById('testo_tooltip');

function ComparsaTooltip(){
    testoTooltip.style.visibility = 'visible';
    testoTooltip.style.opacity = 1;
};

function ScomparsaTooltip(){
    testoTooltip.style.visibility = 'hidden';
    testoTooltip.style.opacity = 0;
};

document.getElementById('tooltip').addEventListener('mouseover', ComparsaTooltip);
document.getElementById('tooltip').addEventListener('mouseout', ScomparsaTooltip);