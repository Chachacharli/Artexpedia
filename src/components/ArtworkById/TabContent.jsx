export const TabContent = ({publication, exhibition, provenance}) =>{
    return(
        <div className="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-publication" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">{publication ? publication : 'Nothing to show'}</div>
            <div class="tab-pane fade" id="pills-exhibition" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">{exhibition ? exhibition : 'Nothing to show'}</div>
            <div class="tab-pane fade" id="pills-provenance" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">{provenance ? provenance : 'Nothing to show'}</div>
        </div>
    )
}