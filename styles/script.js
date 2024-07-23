// Menu functionality code
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

// Toggle menu visibility
menuIcon.addEventListener('click', function() {
  menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
});

// Copy to clipboard functionality
const copyButtons = document.querySelectorAll('.copy-btn');

copyButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    const codeArea = this.previousElementSibling;
    navigator.clipboard.writeText(codeArea.textContent.trim());
    showCopyConfirmation(this);
  });
});

function showCopyConfirmation(button) {
  const confirmationElement = document.createElement('div');
  confirmationElement.classList.add('copy-confirmation');
  confirmationElement.textContent = 'Copied to clipboard!';

  button.parentNode.appendChild(confirmationElement);

  setTimeout(function() {
    confirmationElement.classList.add('fade-out');
    setTimeout(function() {
      confirmationElement.remove();
    }, 300);
  }, 2000);
}

document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.container');
  const snippetCountElement = document.querySelector('.snippet-count');

  // Populate snippet elements
  snippetData.forEach(function(snippet) {
    const snippetElement = document.createElement('div');
    snippetElement.classList.add('snippet');

    const titleElement = document.createElement('h2');
    titleElement.classList.add('snippet-title');
    titleElement.textContent = snippet.title;

    const descriptionElement = document.createElement('p');
    descriptionElement.classList.add('snippet-description');
    descriptionElement.textContent = snippet.description;

    const getCodeElement = document.createElement('a');
    getCodeElement.classList.add('get-code');
    getCodeElement.href = snippet.link;
    getCodeElement.textContent = 'Get Code';

    snippetElement.appendChild(titleElement);
    snippetElement.appendChild(descriptionElement);
    snippetElement.appendChild(getCodeElement);
    container.appendChild(snippetElement);
  });

  // Update the snippet count
  snippetCountElement.textContent = `(${snippetData.length})`;

  // Handle snippet click events
  const snippets = document.querySelectorAll('.snippet');
  snippets.forEach(function(snippet) {
    snippet.addEventListener('click', function() {
      // Remove 'active' class from all snippets
      snippets.forEach(function(s) {
        s.classList.remove('active');
      });

      // Add 'active' class to the clicked snippet
      this.classList.add('active');
    });
  });
});
