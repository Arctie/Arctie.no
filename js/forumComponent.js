class ForumPreview extends HTMLElement {
    static get observedAttributes() {
        return ['title', 'description', 'author', 'replies', 'date'];
    }

    connectedCallback() {
        this.update();
    }

    attributeChangedCallback() {
        this.update();
    }

    update() {
        const title = this.getAttribute("title") || "";
        const description = this.getAttribute("description") || "";
        // const replies = this.getAttribute("replies"); // kept for future use
        const author = this.getAttribute("author") || "";
        const date = this.getAttribute("date") || "";

        this.innerHTML = `
            <div class="forumLayout">
                <div>
                    <h2 class="inForumTitle">${title}</h2>
                    <p class="inForumDescription">${description}</p>
                    <div class="bylineReplies">
                        <p>By ${author}</p>
                    </div>
                </div>
                <div>
                    <p class="inForumDate">${date}</p>
                </div>
            </div>
        `;
    }
}

customElements.define("forum-preview", ForumPreview);
