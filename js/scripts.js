(function() {
	// shortened text with show more button
	const showChar = 280;
	const ellipsesText = "...";
	const btnMoreText = "more";
	const btnLessText = "less";
	const shortedText = document.querySelectorAll('.shorted-text');

	const createSpanEl = function (content, ...className) {
		const domEl = document.createElement('span');
		domEl.classList.add(...className);
		domEl.textContent = content;
		return domEl;
	};

	for (let i = 0; i < shortedText.length; i++) {
		const content = shortedText[i].textContent;
		const fragment = document.createDocumentFragment();

		if (content.length > showChar) {
			const showContent = content.substr(0, showChar);
			const hideContent = content.substr(showChar, content.length - showChar);

			fragment.appendChild(createSpanEl(ellipsesText, 'more-elipses'));
			fragment.appendChild(createSpanEl(hideContent, 'hide-content'));
			fragment.appendChild(createSpanEl(btnMoreText, 'btn-show-more'));

			shortedText[i].textContent = showContent;
			shortedText[i].appendChild(fragment);
		}

		shortedText[i].querySelector('.btn-show-more').addEventListener('click', function () {
		if (this.classList.contains("less")) {
			this.classList.remove("less");
			this.textContent = btnMoreText;
    } else {
			this.classList.add("less");
			this.textContent = btnLessText;
		}
		shortedText[i].querySelector('.more-elipses').classList.toggle('show');
		})
	};
})();
