import Image from "next/image"
import { useEffect, useState } from "react"
import {CardEvent} from "./CardEvent"


const API_EVENTS_URL ='https://api.artic.edu/api/v1/events?limit=4'

const EMTY_OBJ = 
{ data:[ 
{"id": 5656,
"api_model": "events",
"api_link": "https://api.artic.edu/api/v1/events/5656",
"title": "Performance: Himali Singh Soin—Body of Light",
"title_display": "Performance: Himali Singh Soin—<i>Body of Light</i>",
"image_url": "https://artic-web.imgix.net/43fb8bbb-f549-4936-a452-38bbdc8745ec/anaffirmationstill.jpg?rect=0%2C237%2C1179%2C663&auto=format%2Ccompress&q=80&fit=crop&crop=faces%2Cedges%2Centropy&w=1200&h=675",
"hero_caption": "<p>Himali Singh Soin. Still from <em>An Affirmation</em>, 2022. Courtesy of the artist.</p>",
"short_description": "<p>Join artist Himali Singh Soin for a reading of letters between an atom and a mountain accompanied by a sound bath of Himalayan nagadas and gongs from drummer and percussionist David Soin Tappeser. </p>",
"header_description": null,
"list_description": "<p>Join artist Himali Singh Soin for a reading of letters between an atom and a mountain accompanied by a sound bath of Himalayan nagadas and gongs from drummer and percussionist David Soin Tappeser. </p>",
"description": "<p>This performance emanates from artist Himali Singh Soin’s exhibition <a href=\"/exhibitions/9894/himali-singh-soin-static-range\" rel=\"noopener noreferrer\" target=\"_blank\">Static Range</a>, drawing upon its central narrative of Cold War espionage in the Indian Himalayas. An epistolary reading by the artist will be accompanied by a sound bath of Himalayan drums and gongs performed by composer David Soin Tappeser, together forming a landscape of speculations and reflections on nuclear culture, porosity, toxicity, love, catastrophe, spiritual-scientific entanglements, and geopolitical fault lines.&nbsp;&nbsp;</p><p><em>Made possible by the Mickie Silverstein Endowed Fund.</em></p><h2>About the Artists</h2><p><strong>Himali Singh Soin</strong> is a writer and artist based between London and New Delhi. She uses metaphors from outer space and the natural environment to construct imaginary cosmologies of interferences, entanglements, deep voids, debris, delays, alienation, distance, and intimacy. In doing this, she thinks through ecological loss, the loss of home and seeking shelter somewhere in the radicality of love. Her speculations are performed in audio-visual, immersive environments.</p><p><strong>David Soin Tappeser</strong> is a drummer, composer and performance artist based between London and New Delhi. His practice explores socio-eco-spiritual-tempo-somatic dimensions of sound. His performances and compositions use rhythm to unearth, manipulate and deconstruct linear perceptions of time, interdependence and alterity. They hint at intercultural entanglements, parallel histories and extra-human frames of reference while thinking about environmental destruction and sociopolitical fissures.</p><p><strong>Please note that this is an in-person event that takes place at the museum.</strong></p><p>In accordance with state and City of Chicago guidelines, visitors to the museum are no longer required to wear masks or provide proof of vaccination. Anyone who would like to continue to wear a mask is welcome to do so.&nbsp;<a href=\"/visit#expect\" rel=\"noopener noreferrer\" target=\"_blank\">Learn more</a>&nbsp;about our visiting policies and what to expect.</p><p>If you have any questions about programming, please reach out to&nbsp;<a href=\"mailto:museum-programs@artic.edu\" rel=\"noopener noreferrer\">museum-programs@artic.edu</a>.</p><p>Closed captioning will be available for this program. For questions related to accessibility accommodations, please email&nbsp;<a href=\"mailto:access@artic.edu\" rel=\"noopener noreferrer\">access@artic.edu</a>.</p>",
"location": "Fullerton Hall",
"event_type_id": null,
"alt_event_type_ids": [],
"audience_id": null,
"alt_audience_ids": [],
"program_ids": [
11,
71
],
"program_titles": [
"Lectures",
"Magazine"
],
"is_ticketed": true,
"ticketed_event_id": 26289,
"rsvp_link": "https://sales.artic.edu/Events/Event/26289?date=5/6/2023",
"buy_button_text": "Register",
"buy_button_caption": "<p>Free, registration required<br></p>",
"is_registration_required": true,
"is_member_exclusive": false,
"is_sold_out": false,
"is_free": true,
"is_private": false,
"is_admission_required": true,
"is_after_hours": false,
"is_virtual_event": false,
"virtual_event_url": null,
"virtual_event_passcode": null,
"start_date": "2023-05-06T00:00:00-05:00",
"end_date": "2023-05-06T00:00:00-05:00",
"start_time": "15:00",
"end_time": "16:00",
"date_display": null,
"door_time": null,
"layout_type": 0,
"slug": "performance-himali-singh-soin-body-of-light",
"entrance": "Michigan Avenue",
"join_url": null,
"survey_url": null,
"event_host_id": null,
"event_host_title": null,
"search_tags": null,
"source_updated_at": "2023-03-30T15:09:42-05:00",
"updated_at": "2023-03-30T15:10:05-05:00",
"timestamp": "2023-03-30T16:39:54-05:00"}
 ]}

const SectionEvents = () =>{
    
    const [events, setEvents] = useState(EMTY_OBJ)

    useEffect(()=>{
        fetch(API_EVENTS_URL)
        .then(res => res.json())
        .then(respose => setEvents(respose))

    },[])

    return(
        <section className="section-event-container min-vh-100">
            <div className="container my-5">
                <h2 className="header-section-event w-100 m-y5">Events</h2>
                <div className="row">
                {events && events.data.map((obj) => {
                    return(
                            <CardEvent key={obj.id} img_url={obj.image_url} title={obj.title} place={obj.location} url={obj.rsvp_link}/>
                    )
                })}
                </div>

            </div>

        </section>
    )
}

export default SectionEvents;