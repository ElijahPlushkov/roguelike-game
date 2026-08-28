import { staticEventsData } from "./data/staticEventsData.js";

const staticEventBox = document.querySelector(".static-event-box");
const staticEventDescription = document.querySelector(".static-events-description");

export function displayStaticEvent(staticEventId) {
    let staticEvent = staticEventsData.staticEvents.find(event => event.id === staticEventId);
    staticEventBox.classList.remove("hidden");
    staticEventDescription.innerHTML = staticEvent.description.replace(/\n/g, '<br>');
}

export function removeStaticEvent() {
    staticEventBox.classList.add("hidden");
    staticEventDescription.textContent = "";
    staticEventDescription.innerHTML = "";
}