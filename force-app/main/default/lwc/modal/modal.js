import { api, LightningElement } from 'lwc';

export default class Modal extends LightningElement {
    @api content = "Hello World"; // Existing @api property for content
    @api detail; // Add this @api property to store the detail object
    @api showModal = false; // Existing @api property to track modal visibility

    // Modified openModal method to accept an object with content and detail
    @api openModal(event) {
        console.log('Opening modal with content:', event.content);
        this.content = event.content; // Assign the content to the content property
        this.detail = event.detail; // Assign the detail object to the detail property
        this.showModal = true; // Show the modal
    }

    // Handle the "Okay" action
    handleOkay() {
        // Logic to handle the okay action, e.g., creating a service appointment
        this.dispatchEvent(new CustomEvent('create', {
            // Pass any necessary details for the creation process
        }));
        this.closeModal(); // Close the modal after action
    }

    // Handle the "Cancel" action or closing the modal
    handleCancel() {
        this.closeModal();
    }

    // Method to close the modal
    @api closeModal() {
        this.showModal = false;
    }
}