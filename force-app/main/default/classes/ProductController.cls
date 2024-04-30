public class ProductController {
    @AuraEnabled(cacheable=true)
    public static List<Product2> getProducts() {
        return [SELECT Id, Name,ProductCode,Family,IsActive FROM Product2];
    }
}