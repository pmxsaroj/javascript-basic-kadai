const clickBtn = document.getElementById('btn');

clickBtn.addEventListener('click', () => {
setTimeout(() => {
document.getElementById('text').textContent = 'ボタンクリックしました。';
}, 2000);
})