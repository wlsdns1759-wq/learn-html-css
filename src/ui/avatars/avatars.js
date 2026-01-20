// ===== DOM 선택 =====
const avatarButtons = document.querySelectorAll('.avatar');

// ===== 함수 구현 =====
function toggleAvatarState(button) {
  const isOnline = button.classList.contains('online');
  // 클래스 토글
  button.classList.toggle('online', !isOnline);
  button.classList.toggle('offline', isOnline);
  // 텍스트 토글 (span.sr-only)
  const srOnly = button.querySelector('.sr-only');
  if (srOnly) {
    srOnly.textContent = isOnline ? '오프라인' : '온라인';
  }
  // aria-pressed 토글 (online: true, offline: false)
  button.setAttribute('aria-pressed', String(!isOnline));
}

// ===== 이벤트 바인딩 =====
avatarButtons.forEach((button) => {
  button.addEventListener('click', () => {
    toggleAvatarState(button);
  });
});
// 초기 aria-pressed 설정
button.setAttribute('aria-pressed', String(button.classList.contains('online')));
