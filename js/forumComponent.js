class ForumPreview extends HTMLElement {
    connectedCallback() {
        const title = this.getAttribute("title");
        const description = this.getAttribute("description");
        const author = this.getAttribute("author");
        const replies = this.getAttribute("replies");
        const date = this.getAttribute("date");

        this.innerHTML = `
            <div class="forumLayout">
                <div>
                    <h2 class="inForumTitle">${title}</h2>
                    <p class="inForumDescription">${description}</p>
                    <div class="bylineReplies">
                        <p>By ${author}</p>
                        <p>${replies} Replies</p>
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
