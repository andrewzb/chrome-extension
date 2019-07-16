const ListItem = item => `
    <div class="list-item">
    <div class='list-item_logo'>
        <img src="${item.resourceAddress}favicon.ico" alt="logo">
    </div>
    <div class="list-container">
        
        <div class="list-usernameAndPassword">
            <div class="list-value secondary_title">
                        ${item.login}
            </div>
            
            <div class="img-btn">
                <svg class="user-nav__icon">
                 <use xlink:href="edit.svg#Page-1"></use>
                 </svg>


            </div>
        </div>
        
        <div class="list-usernameAndPassword secondary_title">
             <div class="list-value">
                        ${item.password}
             </div>
             <div class="img-btn">
                 <svg class="user-nav__icon">
                     <use xlink:href="edit.svg#Page-1"></use>
                     </svg>
             </div>
         </div>
 </div>
</div>

<div><span class='desher desher-md'></span></div>  
    `;

export default {
  ListItem,
};
