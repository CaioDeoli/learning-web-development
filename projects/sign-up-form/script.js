const steps = {
  "step1": document.querySelector("#form-step-1"),
  "step2": document.querySelector("#form-step-2"),
  "step3": document.querySelector("#form-step-3"),
  "step4": document.querySelector("#form-step-4"),
  "step5": document.querySelector("#form-step-5"),
  "step6": document.querySelector("#form-step-6"),
};
const newPasswordVisibilityToggle = document.querySelector("#new-password-visibility-toggle");
const confirmPasswordVisibilityToggle = document.querySelector("#confirm-password-visibility-toggle");
const nextBtn = document.querySelector("#next-btn");
const submitBtn = document.querySelector("#submit-btn");

function togglePasswordVisibility() {
  const btn = this;
  const input = btn.parentElement.querySelector("input");
  const isVisible = input.type === "text";

  btn.setAttribute("aria-label", isVisible ? "Show password" : "Hide password");
  btn.setAttribute("aria-pressed", String(!isVisible));
  
  btn.querySelector(".view-icon").classList.toggle("hidden");
  btn.querySelector(".view--off-icon").classList.toggle("hidden");

  input.type = isVisible ? "password" : "text";
}

const getCurrentStep = () => {
  return document.querySelector(".form-step.active");
}

const nextStep = () => {
  switch (getCurrentStep()) {
    case steps.step1:
      steps.step1.classList.remove("active");
      steps.step2.classList.add("active");
      break;
    case steps.step2:
      steps.step2.classList.remove("active");
      steps.step3.classList.add("active");
      break;
    case steps.step3:
      steps.step3.classList.remove("active");
      steps.step4.classList.add("active");
      break;
    case steps.step4:
      steps.step4.classList.remove("active");
      steps.step5.classList.add("active");
      submitBtn.classList.remove("hidden");
      nextBtn.classList.add("hidden");
      break;
  }
}

newPasswordVisibilityToggle.addEventListener("click", togglePasswordVisibility);
confirmPasswordVisibilityToggle.addEventListener("click", togglePasswordVisibility);
nextBtn.addEventListener("click", nextStep);