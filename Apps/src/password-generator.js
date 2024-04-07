const generateBtn = document.getElementById("generate-btn");
function generatePassword(
  length,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=\\";

  let allowedChars = "";
  let password = "";

  allowedChars += includeLowercase ? lowercaseChars : "";
  allowedChars += includeUppercase ? uppercaseChars : "";
  allowedChars += includeNumbers ? numberChars : "";
  allowedChars += includeSymbols ? symbolChars : "";

  if (length < 0) {
    return "Invalid password length";
  }
  if (allowedChars === 0) {
    return "No characters selected";
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  return password;
}

function generateAndDisplayPassword() {
  const passwordLength = document.getElementById("passwordLength").value;
  const includeLowercase = document.getElementById("includeLowercase").checked;
  const includeUppercase = document.getElementById("includeUppercase").checked;
  const includeNumbers = document.getElementById("includeNumbers").checked;
  const includeSymbols = document.getElementById("includeSymbols").checked;

  const errorMessage = validateInputs(
    passwordLength,
    includeLowercase,
    includeUppercase,
    includeNumbers,
    includeSymbols
  );

  if (errorMessage) {
    document.getElementById("password-display").textContent = errorMessage;
    return;
  }

  const password = generatePassword(
    passwordLength,
    includeLowercase,
    includeUppercase,
    includeNumbers,
    includeSymbols
  );
  document.getElementById("password-display").textContent =
    `Generated Password: ${password}`;
}

function validateInputs(
  passwordLength,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
  if (passwordLength < 8)
    return "Password length cannot be less than 8 characters";
  if (passwordLength > 20) return "Password length cannot exceed 20 characters";
  if (
    !includeLowercase &&
    !includeUppercase &&
    !includeNumbers &&
    !includeSymbols
  )
    return "Please select at least one character type";
  return null;
}

generateBtn.addEventListener("click", generateAndDisplayPassword);
