document.getElementById('generate').addEventListener('click', generatePassword);
document.getElementById('length').addEventListener('input', updateStrength);

function generatePassword() {
  const length = document.getElementById('length').value;
  const uppercase = document.getElementById('uppercase').checked;
  const lowercase = document.getElementById('lowercase').checked;
  const numbers = document.getElementById('numbers').checked;
  const symbols = document.getElementById('symbols').checked;

  const password = generateRandomPassword(length, uppercase, lowercase, numbers, symbols);
  document.getElementById('password').value = password;

  updateStrength();
}

function generateRandomPassword(length, uppercase, lowercase, numbers, symbols) {
  let charset = '';
  if (uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (lowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
  if (numbers) charset += '0123456789';
  if (symbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  return password;
}

function updateStrength() {
  const length = document.getElementById('length').value;
  let strength = 'WEAK';
  if (length >= 8) strength = 'MEDIUM';
  if (length >= 12) strength = 'STRONG';
  if (length >= 16) strength = 'VERY STRONG';
  document.getElementById('strength').innerText = 'STRENGTH:'+ strength;
}

function copyPassword() {
  const passwordInput = document.getElementById('password');
  passwordInput.select();
  passwordInput.setSelectionRange(0, 99999);
  alert('Password copied!');
}