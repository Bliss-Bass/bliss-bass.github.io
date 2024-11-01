const inputs = document.querySelectorAll('input[class*="js-terms-chk"]');
const buttons = document.querySelectorAll('[class^="js-book-btn"]');

inputs.forEach((input) => {
  const checkboxClasses = Array.from(input.classList).filter((className) => className.startsWith('js-terms-chk'));

  input.addEventListener('change', () => {
    checkboxClasses.forEach((checkboxClass) => {
      const checkboxIndex = checkboxClass.replace('js-terms-chk', '');
      buttons.forEach((button) => {
        const buttonClass = Array.from(button.classList).find((className) => className.startsWith('js-book-btn'));
        const buttonIndex = buttonClass.replace('js-book-btn', '');
        if (buttonIndex === checkboxIndex) {
          const enableButton = input.checked;
          button.disabled = !enableButton;
        }
      });
    });
  });
});