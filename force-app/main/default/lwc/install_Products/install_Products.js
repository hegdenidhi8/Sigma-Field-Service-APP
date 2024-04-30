import { LightningElement, track, wire } from 'lwc';
import getProducts from '@salesforce/apex/ProductController.getProducts';

export default class Install_Products extends LightningElement {
    @track columns = [
        { label: 'Product Name', fieldName: 'Name', type: 'text' },
        { label: 'Product Code', fieldName: 'ProductCode', type: 'currency' },
        { label: 'Product Family', fieldName: 'Family', type: 'text' },
        {
            type: 'action',
            typeAttributes: { rowActions: [
                { label: 'Install', name: 'install_product' },
                // Include other actions here if necessary
            ], },
        },
    ];
    @track allProducts;
    @track filteredProducts;
    @track currentPage = 1;
    @track pageSize = 5; // items per page
    @track maxPage = 1;

    @wire(getProducts)
    wiredProducts({ error, data }) {
        if (data) {
            this.allProducts = data;
            this.maxPage = Math.ceil(data.length / this.pageSize);
            this.updateFilteredProducts();
            console.log('Retrieved products:', this.allProducts);
        } else {
            this.allProducts = null;
            console.error('Failed to retrieve products:', error);
        }
    }

    updateFilteredProducts() {
        const startIndex = (this.currentPage - 1) * this.pageSize;
        const endIndex = startIndex + this.pageSize;
        this.filteredProducts = this.allProducts.slice(startIndex, endIndex);
    }

    handleNext() {
        if (this.currentPage < this.maxPage) {
            this.currentPage++;
            this.updateFilteredProducts();
        }
    }

    handlePrevious() {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.updateFilteredProducts();
        }
    }

    handleProductSearch(event) {
        console.log('Product search term:', event.detail.value);
        const searchTerm = event.detail.value.toLowerCase();
        if(searchTerm.length === 0){
            console.log('Product search term 0');
            this.maxPage = Math.ceil(this.allProducts.length / this.pageSize);
            this.updateFilteredProducts();
        }else{
            this.filteredProducts = this.allProducts.filter(prod =>
                prod.Name.toLowerCase().includes(searchTerm) ||
                prod.ProductCode.toLowerCase().includes(searchTerm) ||
                prod.Family.toLowerCase().includes(searchTerm)
            );
            this.maxPage = Math.ceil(this.filteredProducts.length / this.pageSize);
            const startIndex = (this.currentPage - 1) * this.pageSize;
            const endIndex = startIndex + this.pageSize;
            this.filteredProducts = this.filteredProducts.slice(startIndex, endIndex);
        }
    }

    handleRowAction(event) {
        const actionName = event.detail.action.name;
        const row = event.detail.row;
        switch (actionName) {
            case 'install_product':
                this.createServiceAppointment(row);
                break;
            // Handle other actions here
            default:
                break;
        }
    }

    createServiceAppointment(row) {
        console.log('Creating service appointment for:', row);
        this.template.querySelector('c-modal').openModal({
            content: `Create Service Appointment for ${row.Name}`, // Example content, adjust as needed
            // Pass any additional data required for creating the service appointment
            detail: row
        });
    }

}

