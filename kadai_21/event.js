const clickBtn = document.getElementById('btn');
const clickText = document.getElementById('text');

clickBtn.addEventListener('click', () => {
setTimeout(() => {
clickText.textContent = 'ボタンクリックしました。';
}, 2000);
})
