class ForumPreview extends HTMLElement {
  static get observedAttributes() {
    return ["title", "author", "replies", "date"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" }); //forum css should exist here!
    this.shadowRoot.innerHTML = `
            <style>
                             
                #forum {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .divider {
                    margin: 0.5rem 0px 0px;
                    height: 1.5px;
                    background: linear-gradient(
                        to right, transparent, #667988 , transparent
                    );
                    opacity: 0.2;
                }

                .forumLayout{
                    display: flex;
                    
                    gap: 2rem;
                    background: #3A414D;
                    padding: 2rem;
                    border-radius: 2rem;
                    margin: 2rem auto;
                    width: auto;
                    max-width: 100ch;

                }

                .inForumDate {
                    margin-left: auto;
                    
                    color: #667988;
                    font-size: 1rem;
                    font-weight: 300;
                    text-align: right;
                }

                .inForumTitle {
                    color: #9AA6B9; 
                    font-size: 2.2rem;
                    font-weight: 400;
                    margin: 0.5rem 0 0.5rem 0;
                }


                .inForumDescription {

                    font-size: 1rem;
                    font-weight: 300;
                    color: #828C9D;
                    margin: 1rem 0 1rem 0;
                        
                }

                .bylineReplies{
                    display: flex;
                    gap: 2em;
                    color: #667988;  
                    font-size: 1rem;
                    font-weight: 300;
                    margin-bottom: 0.1rem;
                
                }
                @media (max-width:768px){
                    .align {
                        display: flex;
                        flex-direction: column;
                        gap: 0.2rem;
                        align-items: flex-end;
                    }
                    


                    .box {
                        
                        border: 0px;
                        border-bottom: 0.5px solid #666877;
                        background: var(--bg) ;
                        padding: 0.5em 0.5em;
                        width: fit-content;

                    }

                    .box:hover{
                        background: var(--panel);
                    }

                    .align .box p {
                        margin: 0.2rem;

                    }

                    .portfolioItem img{
                        height:8rem
                    }
                    .inForumTitle{
                        font-size: 1rem;
                    }
                    .inForumDescription{
                        font-size: 0.8rem;
                    }
                    .imgScale {
                        height: 8rem;
                    }
                    .bylineReplies {
                        font-size: 0.8rem;
                    }
                    .inForumDate{
                        font-size: 0.8rem;
                    }
                }

            </style>
            <div class="forumLayout">
                <div>
                    <h2 class="inForumTitle"></h2>
                    <div class="inForumDescription">
                        <slot name="description"></slot>
                    </div>
                    <div class="divider"></div>
                    <div class="bylineReplies">
                        <p class="byline"></p>
                        <p class="inForumDate"></p>
                    </div>
                </div>

            </div>
        `;
  }

  connectedCallback() {
    this.update();
  }

  attributeChangedCallback() {
    this.update();
  }

  update() {
    this.shadowRoot.querySelector(".inForumTitle").textContent =
      this.getAttribute("title") || "";

    this.shadowRoot.querySelector(".byline").textContent =
      `By ${this.getAttribute("author") || ""}`;

    this.shadowRoot.querySelector(".inForumDate").textContent =
      this.getAttribute("date") || "";
  }
}

customElements.define("forum-preview", ForumPreview);
