import Items from '../utils/Items';

const RenderDataList = data => {
  let items = '';
  for (let i = 0; i < data.length; i++) {
    items += ` <div class="list-item">
        <div class='list-item_logo'>
            <img src="${data[i].resourceAddress}favicon.ico" alt="logo">
        </div>
        <div class="list-container">
            
            <div class="list-usernameAndPassword">
                <div class="list-value secondary_title align-center">
                            ${data[i].login}
                </div>
                
                <div class="img-btn"'>
                    <svg class="user-nav__icon">
                     <use xlink:href="edit.svg#Page-1"></use>
                     </svg>
    
    
                </div>
            </div>
            
            <div class="list-usernameAndPassword secondary_title">
                 <div class="list-value align-center">
                            ${data[i].password}
                 </div>
                 
                 <div class="img-btn" >
                     <svg class="user-nav__icon">
                         <use xlink:href="edit.svg#Page-1"></use>
                         </svg>
                 </div>
             </div>
     </div>
    </div>
    
    <div><span class='desher desher-md'></span></div>`;
  }
  const ListMarkup = `
    <div class='primary_title align-center'>Your's Data</div>
    <div><span class='desher'></span></div> 
        <div clas='list-grid'>
        ${items}
        <div class='buttons_container'>
            <a href='#' id='go_to_wellcome_from_list' class='button'>Back</a>
            <a href='#' id='go_to_spinner_from_list' class='button'>Refresh</a>
        </div>`;

  document.querySelector(Items.containerMain).innerHTML = ListMarkup;
};

export default {
  RenderDataList,
};
